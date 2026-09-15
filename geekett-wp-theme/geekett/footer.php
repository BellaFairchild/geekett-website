<?php if (!defined('ABSPATH')) { exit; } ?>
<footer class="gk-footer">
  <div class="gk-wrap gk-footer-grid">
    <div>
      <p style="font-family:var(--font-display);font-size:1.25rem;font-weight:700">Geekett</p>
      <p style="margin-top:1rem;max-width:20rem;font-size:0.9rem;line-height:1.6;color:rgb(255 255 255 / 0.7)">
        One-woman studio + Builder Bot Bobby. Smart apps. Bright ideas. Built with heart.
      </p>
      <p style="margin-top:1rem;font-size:0.9rem">
        <a href="mailto:<?php echo esc_attr(GEEKETT_EMAIL); ?>"><?php echo esc_html(GEEKETT_EMAIL); ?></a>
      </p>
    </div>
    <div>
      <p style="font-size:0.9rem;font-weight:600">Explore</p>
      <ul style="list-style:none;padding:0;margin:0.75rem 0 0;display:grid;gap:0.5rem;font-size:0.9rem">
        <?php foreach (geekett_nav_items() as $item) : ?>
          <li><a href="<?php echo esc_url($item['url']); ?>"><?php echo esc_html($item['label']); ?></a></li>
        <?php endforeach; ?>
        <li><a href="<?php echo esc_url(geekett_page_url('project-brief')); ?>">Project Brief</a></li>
      </ul>
    </div>
  </div>
  <div class="gk-footer-copy">
    <p class="gk-wrap">© <?php echo esc_html(gmdate('Y')); ?> Geekett · Bella Fairchild · Canadian studio</p>
  </div>
</footer>
<?php wp_footer(); ?>
</body>
</html>
