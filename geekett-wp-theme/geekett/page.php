<?php
get_header();
?>
<main class="gk-section">
  <div class="gk-wrap" style="max-width:46rem">
    <?php while (have_posts()) : the_post(); ?>
      <h1 class="gk-h1"><?php the_title(); ?></h1>
      <div class="gk-lead" style="max-width:none"><?php the_content(); ?></div>
    <?php endwhile; ?>
  </div>
</main>
<?php get_footer(); ?>
