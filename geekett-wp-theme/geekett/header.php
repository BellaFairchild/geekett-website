<?php
if (!defined('ABSPATH')) {
    exit;
}
?><!DOCTYPE html>
<html <?php language_attributes(); ?>>
<head>
  <meta charset="<?php bloginfo('charset'); ?>">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link rel="icon" href="<?php echo esc_url(geekett_asset('favicon.svg')); ?>" type="image/svg+xml">
  <?php wp_head(); ?>
</head>
<body <?php body_class(); ?>>
<?php wp_body_open(); ?>
<header class="gk-header">
  <div class="gk-wrap gk-header-inner">
    <a class="gk-brand" href="<?php echo esc_url(home_url('/')); ?>">
      <span class="gk-mark" aria-hidden="true">G</span>
      <span>
        <span class="gk-brand-name">Geekett</span>
        <span class="gk-brand-sub">Studio</span>
      </span>
    </a>
    <nav class="gk-nav" aria-label="Primary">
      <?php foreach (geekett_nav_items() as $item) : ?>
        <a href="<?php echo esc_url($item['url']); ?>" class="<?php echo geekett_is_current($item['slug']) ? 'is-current' : ''; ?>"<?php echo geekett_is_current($item['slug']) ? ' aria-current="page"' : ''; ?>>
          <?php echo esc_html($item['label']); ?>
        </a>
      <?php endforeach; ?>
    </nav>
    <div class="gk-header-actions">
      <a class="gk-btn" href="<?php echo esc_url(geekett_page_url('project-brief')); ?>">Start a brief</a>
    </div>
    <button class="gk-menu-btn" type="button" data-gk-menu aria-expanded="false" aria-controls="gk-mobile-nav">
      <span class="sr-only" style="position:absolute;width:1px;height:1px;overflow:hidden;clip:rect(0,0,0,0)">Menu</span>
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="M4 6h16M4 12h16M4 18h16"/></svg>
    </button>
  </div>
  <nav id="gk-mobile-nav" class="gk-mobile" aria-label="Mobile">
    <?php foreach (geekett_nav_items() as $item) : ?>
      <a href="<?php echo esc_url($item['url']); ?>"><?php echo esc_html($item['label']); ?></a>
    <?php endforeach; ?>
    <div class="gk-mobile-actions">
      <a class="gk-btn gk-btn-ghost" href="<?php echo esc_url(geekett_page_url('shop')); ?>">Shop</a>
      <a class="gk-btn" href="<?php echo esc_url(geekett_page_url('project-brief')); ?>">Start a brief</a>
    </div>
  </nav>
</header>
