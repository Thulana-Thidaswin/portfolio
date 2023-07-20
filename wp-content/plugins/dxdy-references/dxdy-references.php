<?php
/**
* Plugin Name: DxDy References Plugin
* Description: Detect [ref] tags within an article and list out references at the end of that article.
* Version: 1.0.0
* Author: DxDy
*/

defined('ABSPATH') or die();

class DXDYReferencesPlugin {

  private $current_post_id = -1;
  private $references = [];

  public function __construct() {
    // references are only on article pages and not on edit
    if (!is_admin()) {
      add_shortcode('ref', [ $this, 'dxdyref_shortcode' ]);
      add_filter('the_content', [ $this, 'dxdyref_print_references' ], 15);

      add_action('wp_enqueue_scripts', [ $this, 'dxdyref_enqueue_scripts' ]);
    }
  }

  // load our scripts
  function dxdyref_enqueue_scripts() {
    wp_enqueue_script('tt-references', plugins_url( '/js/tt-references.js', __FILE__ ));
  }

  // process [ref] shortcodes on post
  function dxdyref_shortcode($attr, $content = '') {

    // detect existing reference with same name, and get its index
    $index = -1;
    $name = isset($attr['name']) ? $attr['name'] : null;
    if ($name) {
      foreach ($this->references as $key => $ref) {
        if ($ref['name'] === $name) {
          $index = $key;
        }
      }
    }

    if ($index === -1) {
      // new reference
      $index = count($this->references);
      $instances = 1;

      array_push($this->references, [
        'index' => $index,
        'content' => trim($content),
        'name' => isset($attr['name']) ? $attr['name'] : '',
        'instances' => $instances
      ]);
    } else {
      // increase usage count for this reference
      $instances = $this->references[$index]['instances'] + 1;
      $this->references[$index]['instances'] = $instances;
    }

    // replace [ref] tag with index as superscript
    $print_index = $index + 1;
    return '<sup class="dxdyref-sup" id="dxdyref-sup-' . $print_index . '-' . $instances . '">'
      . '<a href="#dxdyref-note-' . $print_index . '">' . $print_index . '</a>'
      . '</sup>';
  }

  // list out references at end of post content
  function dxdyref_print_references($content) {
    if (count($this->references) === 0)
      return $content;

    $content .= '<section class="reference-bar"><div class="container container--small"><div class="js-custom-scroll"><p>References</p>';

    $content .= '<ol>';

    foreach($this->references as $ref) {
      $print_index = $ref['index'] + 1;
      $content .= '<li id="dxdyref-note-' . $print_index . '">';

      if ($ref['instances'] === 1) {
        $content .= '<a class="up-arrow arrow-link" href="#dxdyref-sup-' . $print_index . '-1">↑</a>';
      } else {
        // arrow does not hyperlink if there are multiple instances of this reference
        $content .= '<span class="up-arrow">↑</span>';

        // list out uses of this reference as English characters
        for ($j = 1; $j <= $ref['instances']; $j++)
          $content .= '<sup><a class="letter-link" href="#dxdyref-sup-' . $print_index . '-' . $j . '">' . chr($j + 96) . '</a></sup>';
      }

      $content .=  '<span class="note-content">' . $ref['content'] . '</span></li>';
    }

    $content .= '</ol></div></div></section>';

    return $content;
  }

}

new DXDYReferencesPlugin();
