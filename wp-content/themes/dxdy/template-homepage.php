<?php
/**
 * Template Name: HomePage 
 */

$context = Timber::get_context();
$timber_post     = new Timber\Post();
$context['post'] = $timber_post;
$context['homepage_flex']= get_field('homepage_flex'); 
$templates = ['views/homepage.twig'];
// $context['post'] = $post;
Timber::render($templates, $context);
