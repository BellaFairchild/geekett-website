<?php
get_header();
?>
<main class="gk-section">
  <div class="gk-wrap">
    <?php if (have_posts()) : while (have_posts()) : the_post(); ?>
      <h1 class="gk-h1"><?php the_title(); ?></h1>
      <div class="gk-lead"><?php the_content(); ?></div>
    <?php endwhile; else : ?>
      <h1 class="gk-h1">Geekett</h1>
      <p class="gk-lead">Smart apps. Bright ideas. Built with heart.</p>
    <?php endif; ?>
  </div>
</main>
<?php get_footer(); ?>
