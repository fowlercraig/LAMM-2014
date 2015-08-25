<?php Themewrangler::setup_page();get_header('form'/***Template Name: Register */); ?>


<?php 

   $thumb_id = get_post_thumbnail_id();
   $thumb_url_array = wp_get_attachment_image_src($thumb_id, 'original', true);
   $thumb_url = $thumb_url_array[0];

?>

<style>
   
   body {
      background: #111 url(<?php echo $thumb_url; ?>) center center!important;
      background-size: cover!important;
   }

</style>

<div id="register">
   <div class="fs-row">
      <div class="fs-cell fs-lg-8 fs-md-5 fs-sm-3 fs-centered">
         <hr class="invisible">
         <div id="register--form_wrap">
            <h1 class="title"><?php the_title(); ?></h1>
            <?php the_post(); the_content(); ?>
         </div>
      </div>
   </div>
</div>

<div id="register-bg"></div>

<?php get_footer(); ?>