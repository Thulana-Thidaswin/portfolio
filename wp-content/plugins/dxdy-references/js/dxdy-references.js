/**
 *  dxdy_references.js
 *
 *  Animate links between reference notes and their instances on the article.
 */
(function() {
  if (!window.jQuery)
    return;

  $('document').ready(function() {

    // intern scroll function to be worked with all the internal links withhin the site 
    $('a[href*="#"]').click(function() {
      console.log('Scroll Enabled for all the links')
      const headerHeight = 90;

      $('html, body').animate({
        scrollTop: $($.attr(this, 'href')).offset().top - headerHeight
      }, 500);

      return false;
    });

  })

})();
