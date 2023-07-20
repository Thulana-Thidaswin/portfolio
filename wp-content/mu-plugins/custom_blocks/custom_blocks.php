<?php

/*
 * Custom Block restrictions depending on the post type.
*/
add_filter('allowed_block_types', function($block_types, $post) {
	$allowed = [
        'acf/custom-body-text'
	];
	if ($post->post_type == 'challenges') {
		return $allowed;
	}
    return $allowed;
    // return $block_types;
}, 10, 2);

// add publications block to Gutenburg
function register_dxdy_custom_blocks() {
    // Body Text
    acf_register_block(
        array(
            'name' => 'custom_body_text',
            'title' => __('Body'),
            'description' => __('This block contains wysiwyg editor.'),
            'render_callback' => 'custom_body_text_callback_function',
            'category' => 'widgets',
            'icon' => 'list-view',
            'keywords' => ['body Text']
        )
    );
}
add_action('acf/init', 'register_dxdy_custom_blocks');

function custom_body_text_callback_function($block)
{
    $context = Timber::get_context();
    $templates = ['templates/body-text.twig'];
    $context['description'] = get_field('description');    
    Timber::render($templates, $context);
}