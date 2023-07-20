<?php
/*
Wordpress Pages Content Type
*/

$context = Timber::get_context();
$post = Timber::get_post();

$templates = array( 'page.twig' );

$context['post'] = $post;

Timber::render($templates, $context);
