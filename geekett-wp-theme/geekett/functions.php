<?php
/**
 * Geekett theme setup.
 */

if (!defined('ABSPATH')) {
    exit;
}

define('GEEKETT_VERSION', '1.0.0');
define('GEEKETT_EMAIL', 'bella@geekett.com');

function geekett_setup()
{
    add_theme_support('title-tag');
    add_theme_support('post-thumbnails');
    add_theme_support('html5', ['search-form', 'gallery', 'caption', 'style', 'script']);
    add_theme_support('custom-logo', [
        'height' => 64,
        'width' => 64,
        'flex-height' => true,
        'flex-width' => true,
    ]);
    register_nav_menus([
        'primary' => __('Primary', 'geekett'),
    ]);
}
add_action('after_setup_theme', 'geekett_setup');

function geekett_assets()
{
    wp_enqueue_style(
        'geekett-fonts',
        'https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,400;0,9..40,500;0,9..40,600;0,9..40,700;1,9..40,400&family=Sora:wght@600;700;800&display=swap',
        [],
        null
    );
    wp_enqueue_style('geekett', get_stylesheet_uri(), ['geekett-fonts'], GEEKETT_VERSION);
    wp_enqueue_script('geekett', get_template_directory_uri() . '/assets/js/theme.js', [], GEEKETT_VERSION, true);
}
add_action('wp_enqueue_scripts', 'geekett_assets');

function geekett_asset($path)
{
    return get_template_directory_uri() . '/assets/' . ltrim($path, '/');
}

function geekett_page_url($slug)
{
    $page = get_page_by_path($slug);
    return $page ? get_permalink($page) : home_url('/' . $slug . '/');
}

function geekett_is_current($slug)
{
    if ($slug === 'home') {
        return is_front_page();
    }
    return is_page($slug);
}

function geekett_nav_items()
{
    return [
        ['slug' => 'home', 'label' => 'Home', 'url' => home_url('/')],
        ['slug' => 'geekettapp', 'label' => 'App Studio', 'url' => geekett_page_url('geekettapp')],
        ['slug' => 'lab', 'label' => 'App Lab', 'url' => geekett_page_url('lab')],
        ['slug' => 'shop', 'label' => 'Shop', 'url' => geekett_page_url('shop')],
        ['slug' => 'about', 'label' => 'About', 'url' => geekett_page_url('about')],
    ];
}

function geekett_icon_check()
{
    return '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M20 6 9 17l-5-5"/></svg>';
}

/**
 * Create studio pages and set the static front page on first activation.
 */
function geekett_seed_pages()
{
    if (get_option('geekett_seeded')) {
        return;
    }

    $pages = [
        ['title' => 'Home', 'slug' => 'home', 'template' => ''],
        ['title' => 'App Studio', 'slug' => 'geekettapp', 'template' => 'page-app-studio.php'],
        ['title' => 'App Lab', 'slug' => 'lab', 'template' => 'page-lab.php'],
        ['title' => 'Shop', 'slug' => 'shop', 'template' => 'page-shop.php'],
        ['title' => 'About', 'slug' => 'about', 'template' => 'page-about.php'],
        ['title' => 'Project Brief', 'slug' => 'project-brief', 'template' => 'page-project-brief.php'],
    ];

    $home_id = 0;
    foreach ($pages as $item) {
        $existing = get_page_by_path($item['slug']);
        if ($existing) {
            $id = $existing->ID;
        } else {
            $id = wp_insert_post([
                'post_title' => $item['title'],
                'post_name' => $item['slug'],
                'post_status' => 'publish',
                'post_type' => 'page',
                'post_content' => '',
            ]);
        }
        if ($item['template'] && $id && !is_wp_error($id)) {
            update_post_meta($id, '_page_template', $item['template']);
        }
        if ($item['slug'] === 'home') {
            $home_id = $id;
        }
    }

    if ($home_id) {
        update_option('show_on_front', 'page');
        update_option('page_on_front', $home_id);
    }

    update_option('geekett_seeded', 1);
}
add_action('after_switch_theme', 'geekett_seed_pages');

/**
 * Project brief → email Bella.
 */
function geekett_handle_brief()
{
    if (!isset($_POST['geekett_brief_nonce']) || !wp_verify_nonce(sanitize_text_field(wp_unslash($_POST['geekett_brief_nonce'])), 'geekett_brief')) {
        wp_die('Invalid form submission.');
    }

    $fields = [
        'name' => 'Name',
        'email' => 'Email',
        'business' => 'Business',
        'website' => 'Website',
        'need' => 'Need',
        'goal' => 'Goal',
        'who' => 'Who it is for',
        'mustHaves' => 'Must-haves',
        'niceToHaves' => 'Nice-to-haves',
        'content' => 'Content ready',
        'budget' => 'Budget',
        'timeline' => 'Timeline',
        'found' => 'How they found Geekett',
        'extra' => 'Anything else',
    ];

    $lines = ["New Project Brief from geekett.com\n"];
    foreach ($fields as $key => $label) {
        $value = isset($_POST[$key]) ? sanitize_textarea_field(wp_unslash($_POST[$key])) : '';
        $lines[] = $label . ': ' . $value;
    }

    $from = isset($_POST['email']) ? sanitize_email(wp_unslash($_POST['email'])) : '';
    $name = isset($_POST['name']) ? sanitize_text_field(wp_unslash($_POST['name'])) : 'New brief';

    $sent = wp_mail(
        GEEKETT_EMAIL,
        'Project Brief — ' . $name,
        implode("\n", $lines),
        [
            'Content-Type: text/plain; charset=UTF-8',
            $from ? 'Reply-To: ' . $from : 'Reply-To: ' . GEEKETT_EMAIL,
        ]
    );

    $dest = add_query_arg('brief', $sent ? 'sent' : 'error', geekett_page_url('project-brief'));
    wp_safe_redirect($dest);
    exit;
}
add_action('admin_post_nopriv_geekett_brief', 'geekett_handle_brief');
add_action('admin_post_geekett_brief', 'geekett_handle_brief');

function geekett_handle_shop()
{
    if (!isset($_POST['geekett_shop_nonce']) || !wp_verify_nonce(sanitize_text_field(wp_unslash($_POST['geekett_shop_nonce'])), 'geekett_shop')) {
        wp_die('Invalid form submission.');
    }
    $name = isset($_POST['name']) ? sanitize_text_field(wp_unslash($_POST['name'])) : '';
    $email = isset($_POST['email']) ? sanitize_email(wp_unslash($_POST['email'])) : '';
    $item = isset($_POST['item']) ? sanitize_text_field(wp_unslash($_POST['item'])) : '';
    $body = "Shop request from {$name} <{$email}>\nProduct: {$item}\n";
    wp_mail(GEEKETT_EMAIL, 'Shop request — ' . $item, $body, ['Reply-To: ' . $email]);
    wp_safe_redirect(add_query_arg('order', 'sent', geekett_page_url('shop')));
    exit;
}
add_action('admin_post_nopriv_geekett_shop', 'geekett_handle_shop');
add_action('admin_post_geekett_shop', 'geekett_handle_shop');

function geekett_body_class($classes)
{
    $classes[] = 'geekett-body';
    return $classes;
}
add_filter('body_class', 'geekett_body_class');
