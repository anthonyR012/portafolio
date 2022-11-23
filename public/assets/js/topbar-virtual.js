$(function () {
  var $grid = $('.gridder').isotope({
    itemSelector: '.grid-item',
    percentPosition: true
  });

  $('#theme-red').click(function () {
    $("#git_hub").attr("src", "assets//img/logo/github_red.png");
    $("#linkedin").attr("src", "assets//img/logo/linkedin_red.png");
    $("#facebook").attr("src", "assets//img/logo/facebook_red.png");
    $("#tap_1").attr("src", "assets//img/logo/tap_red.png");
    $("#tap_2").attr("src", "assets//img/logo/tap_red.png");
    $("#tap_3").attr("src", "assets//img/logo/tap_red.png");


  });
  $('#theme-blue').click(function () {
    $("#git_hub").attr("src", "assets//img/logo/github_blue.png");
    $("#linkedin").attr("src", "assets//img/logo/linkedin_blue.png");
    $("#facebook").attr("src", "assets//img/logo/facebook_blue.png");
    $("#tap_1").attr("src", "assets//img/logo/tap_blue.png");
    $("#tap_2").attr("src", "assets//img/logo/tap_blue.png");
    $("#tap_3").attr("src", "assets//img/logo/tap_blue.png");


  });
  $('#theme-green').click(function () {
    $("#git_hub").attr("src", "assets//img/logo/github_green.png");
    $("#linkedin").attr("src", "assets//img/logo/linkedin_green.png");
    $("#facebook").attr("src", "assets//img/logo/facebook_green.png");
    $("#tap_1").attr("src", "assets//img/logo/tap_green.png");
    $("#tap_2").attr("src", "assets//img/logo/tap_green.png");
    $("#tap_3").attr("src", "assets//img/logo/tap_green.png");


  });
  $('#theme-orange').click(function () {
    $("#git_hub").attr("src", "assets//img/logo/github_orange.png");
    $("#linkedin").attr("src", "assets//img/logo/linkedin_orange.png");
    $("#facebook").attr("src", "assets//img/logo/facebook_orange.png");
    $("#tap_1").attr("src", "assets//img/logo/tap_orange.png");
    $("#tap_2").attr("src", "assets//img/logo/tap_orange.png");
    $("#tap_3").attr("src", "assets//img/logo/tap_orange.png");


  });
  $('#theme-purple').click(function () {
    $("#git_hub").attr("src", "assets//img/logo/github_purple.png");
    $("#linkedin").attr("src", "assets//img/logo/linkedin_purple.png");
    $("#facebook").attr("src", "assets//img/logo/facebook_purple.png");
    $("#tap_1").attr("src", "assets//img/logo/tap_purple.png");
    $("#tap_2").attr("src", "assets//img/logo/tap_purple.png");
    $("#tap_3").attr("src", "assets//img/logo/tap_purple.png");


  });


  // filter items on button click
  $('.filterable-button').on('click', 'button', function () {
    var filterValue = $(this).attr('data-filter');
    $grid.isotope({ filter: filterValue });
  });

  $('.testi-carousel').owlCarousel({
    margin: 0,
    loop: true,
    autoplay: true,
    autoplayTimeout: 4000,
    items: 1,
  });

  // Nice select
  $('.vg-select').niceSelect();

  // Tooltip
  $('[data-toggle="tooltip"]').tooltip();

  // Page animation initialize
  // new WOW().init();

  // Back to top
  var backTop = $(".btn-back_top");

  $(window).scroll(function () {
    if ($(document).scrollTop() > 400) {
      backTop.css('visibility', 'visible');
    }
    else if ($(document).scrollTop() < 400) {
      backTop.css('visibility', 'hidden');
    }
  });

  backTop.click(function () {
    $('html').animate({
      scrollTop: 0
    }, 500);
    return false;
  });

  $.fn.toggleSelected = function (options) {
    var defaults = $.extend({
      classes: 'selected',
      itemSelector: this.children(),
    });

    return this.each(function () {
      var o = defaults;
      var sel = o.itemSelector;

      sel.click(function () {
        var self = $(this);
        self.addClass(o.classes);
        self.siblings().removeClass(o.classes);
      });
    });
  };

  $('[data-toggle="selected"]').toggleSelected();
});

$(document).ready(function () {

  /* Sticky nvigation */

  var sticky = {
    $sticky: $('.sticky'),
    offsets: [],
    targets: [],
    stickyTop: null,

    set: function () {
      var self = this;

      var windowTop = Math.floor($(window).scrollTop());

      self.offsets = [];
      self.targets = [];

      // Get current top position of sticky element
      self.stickyTop = self.$sticky.data('offset') ? self.$sticky.css('position', 'absolute').data('offset') : self.$sticky.css('position', 'absolute').offset().top;

      // Cache all targets and their top positions
      self.$sticky.find('a').map(function () {
        var $el = $(this),
          href = $el.data('target') || $el.attr('href'),
          $href = /^#./.test(href) && $(href);

        return $href && $href.length && $href.is(':visible') ? [[$href[0].getBoundingClientRect().top + windowTop, href]] : null;
      })
        .sort(function (a, b) { return a[0] - b[0] })
        .each(function () {
          self.offsets.push(this[0]);
          self.targets.push(this[1]);
        });
    },

    update: function () {
      var self = this;

      var windowTop = Math.floor($(window).scrollTop());
      var $stickyLinks = self.$sticky.find('.navbar-nav .nav-item').removeClass('active');
      var stickyPosition = 'fixed';
      var currentIndex = 0;

      // Toggle fixed position depending on visibility
      if ($(window).width() < 800 || $(window).height() < 500 || self.stickyTop > windowTop) {
        stickyPosition = 'absolute';
        self.$sticky.removeClass('floating');

      } else {

        for (var i = self.offsets.length; i--;) {
          if (windowTop >= self.offsets[i] - 2 && (self.offsets[i + 1] === undefined || windowTop <= self.offsets[i + 1] + 2)) {
            currentIndex = i;

            break;
          }
        }

      }

      self.$sticky.css({ 'position': stickyPosition });

      if (stickyPosition == 'absolute') {
        self.$sticky.removeClass('floating');
      }
      else {
        self.$sticky.addClass('floating');
      }

      $stickyLinks.eq(currentIndex).addClass('active');
    },

    init: function () {
      var self = this;

      $(window).on('resize', function () {
        self.set();

        self.update();
      });

      $(window).on('scroll', function () {
        self.update();
      });

      $(window).trigger('resize');
    }
  }

  if ($('.navbar').hasClass('sticky')) {
    sticky.init();
  }

});

$(document).ready(function () {
  $('#sideel').click(function () {
    $(this).parents('.config').toggleClass('active');
  });

  $('body').data('bodyClassList', '');

  $('.color-item').click(function () {
    var cls = $(this).data('class');

    $('body').attr('class', $('body').data('bodyClassList'));
    $('body').addClass(cls);
  });

  $('#change-page').on('change', function () {
    var url = $(this).val() + '.html';

    if ($(this).val()) {
      window.location.assign(url);
    }
  });


});


/*
 *  Counter
 *
 *  Require(" jquery.animateNumber.min.js ", " jquery.waypoints.min.js ")
 */
$(document).ready(function () {
  var counterInit = function () {
    if ($('.section-counter').length > 0) {
      $('.section-counter').waypoint(function (direction) {

        if (direction === 'down' && !$(this.element).hasClass('ftco-animated')) {

          var comma_separator_number_step = $.animateNumber.numberStepFactories.separator(',')
          $('.number').each(function () {
            var $this = $(this),
              num = $this.data('number');
            $this.animateNumber(
              {
                number: num,
                numberStep: comma_separator_number_step
              }, 5000
            );
          });

        }

      }, { offset: '95%' });
    }

  }
  counterInit();
});