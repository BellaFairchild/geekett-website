<?php
/**
 * Template Name: Shop
 */
get_header();
$sent = isset($_GET['order']) && $_GET['order'] === 'sent';
$items = [
    ['launch-guide', 'App launch', 'App Launch Guide', '$47 CAD', 'A first-time builder’s path from idea notes to launch checklist. Practical, friendly, no jargon.', ['Idea-to-MVP worksheet', 'Launch-week checklist', 'Store listing prompts', 'What to skip on v1']],
    ['clarity', 'WordPress', 'Offer & site clarity templates', '$37 CAD', 'Homepage promise worksheets and page maps so your WordPress site sells before you polish pixels.', ['Homepage promise sheet', '5–7 page map', 'Nav labels that convert', 'Content gather list']],
    ['workflows', 'AI workflows', 'AI workflow starter pack', '$57 CAD', 'Prompt packs and process cards Bobby would approve — save hours without losing your voice.', ['Weekly content rhythm', 'Voice-safe prompt pack', 'Tool stack one-pager', 'Review checklist']],
];
$check = geekett_icon_check();
?>
<main>
  <section class="gk-section">
    <div class="gk-wrap">
      <p class="gk-eyebrow">Shop</p>
      <h1 class="gk-h1" style="font-size:clamp(1.9rem,3vw,2.6rem)">Digital products you can use today</h1>
      <p class="gk-lead">Three SKUs, not a catalogue. Request a product and Bella will send payment + download details — or plug in WooCommerce later for instant checkout.</p>
      <?php if ($sent) : ?>
        <div class="gk-notice" style="margin-top:1.5rem" role="status">Request received. Bella will email you next steps.</div>
      <?php endif; ?>
      <div class="gk-grid-3" style="margin-top:2.5rem">
        <?php foreach ($items as $item) : ?>
          <article class="gk-card hover-lift" style="display:flex;flex-direction:column">
            <span class="gk-badge gk-badge-paper"><?php echo esc_html($item[1]); ?></span>
            <h2 style="margin-top:0.75rem;font-size:1.25rem"><?php echo esc_html($item[2]); ?></h2>
            <p style="margin-top:0.5rem;font-size:0.9rem;color:var(--ink-soft);flex:1"><?php echo esc_html($item[4]); ?></p>
            <ul class="gk-list">
              <?php foreach ($item[5] as $line) : ?>
                <li class="gk-check"><?php echo $check; ?><span><?php echo esc_html($line); ?></span></li>
              <?php endforeach; ?>
            </ul>
            <p class="gk-price"><?php echo esc_html($item[3]); ?></p>
            <form method="post" action="<?php echo esc_url(admin_url('admin-post.php')); ?>" style="margin-top:1rem;display:grid;gap:0.5rem">
              <?php wp_nonce_field('geekett_shop', 'geekett_shop_nonce'); ?>
              <input type="hidden" name="action" value="geekett_shop">
              <input type="hidden" name="item" value="<?php echo esc_attr($item[2] . ' ' . $item[3]); ?>">
              <input class="gk-input" name="name" required placeholder="Your name">
              <input class="gk-input" type="email" name="email" required placeholder="Email">
              <button class="gk-btn gk-btn-full" type="submit">Request this</button>
            </form>
          </article>
        <?php endforeach; ?>
      </div>
    </div>
  </section>
</main>
<?php get_footer(); ?>
