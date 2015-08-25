<?php Themewrangler::setup_page();get_header('splash'/***Template Name: Homepage */); ?>

<div id="register">
   <div class="fs-row">
      <div class="fs-cell fs-lg-8 fs-md-5 fs-sm-3 fs-centered">
         <hr class="invisible">
         <h1 class="title"><?php the_title(); ?></h1>
         <?php the_post(); the_content(); ?>
      </div>
   </div>
</div>

<?php get_footer(); ?>