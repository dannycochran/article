$(document).ready(function () {

  var article = $('.article-container');

  var templates = {
    mast: _.template($('#banner-template').html()),
    section: _.template($('#section-template').html()),
    blurb: _.template($('#blurb-template').html()),
    hiddenSection: _.template($('#hidden-section-template').html()),
    iframe: _.template($('#iframe-template').html()),
    graphic: _.template($('#graphic-template').html()),
  };

  $.getJSON('/article.json', function(components) {
      _.each(components, function(component) {
      if (component.type !== 'blurb') article.append(templates[component.type](component));
      else {
        var selector = $('section.normal').last().children()[component.paragraphNum];
        $(selector).find('div.info').html(templates.blurb(component));
      }
    });
    // Keep this at the very end of this script
    $('.substory').on('click', function(e) {
      $(this).next().toggleClass('hidden');
      $(this).find('i').toggleClass('fa-rotate-180');
    });
  });
});