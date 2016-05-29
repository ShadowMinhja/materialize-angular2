(function($){
  $(function(){
    var window_width = $(window).width();

    // convert rgb to hex value string
    function rgb2hex(rgb) {
      if (/^#[0-9A-F]{6}$/i.test(rgb)) { return rgb; }

      rgb = rgb.match(/^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/);

      if (rgb === null) { return "N/A"; }

      function hex(x) {
          return ("0" + parseInt(x).toString(16)).slice(-2);
      }

      return "#" + hex(rgb[1]) + hex(rgb[2]) + hex(rgb[3]);
    }

    $('.dynamic-color .col').each(function () {
      $(this).children().each(function () {
        var color = $(this).css('background-color'),
            classes = $(this).attr('class');
        $(this).html(rgb2hex(color) + " " + classes);
        if (classes.indexOf("darken") >= 0 || $(this).hasClass('black')) {
          $(this).css('color', 'rgba(255,255,255,.9');
        }
      });
    });

    //Floating-Fixed table of contents
    setTimeout(function() {
      var tocWrapperHeight = 260; // Max height of ads.
      var tocHeight = $('.toc-wrapper .table-of-contents').length ? $('.toc-wrapper .table-of-contents').height() : 0;
      var socialHeight = 95; // Height of unloaded social media in footer.
      var footerOffset = $('body footer').first().length ? $('body footer').first().offset().top : 0;
      var bottomOffset = footerOffset - socialHeight - tocHeight - tocWrapperHeight;

      if ($('nav').length) {
        $('.toc-wrapper').pushpin({
          top: $('nav').height(),
          bottom: bottomOffset
        });
      }
      else if ($('#index-banner').length) {
        $('.toc-wrapper').pushpin({
          top: $('#index-banner').height(),
          bottom: bottomOffset
        });
      }
      else {
        $('.toc-wrapper').pushpin({
          top: 0,
          bottom: bottomOffset
        });
      }
    }, 100);


    // BuySellAds Detection
    // var $bsa = $(".buysellads"),
    //     $timesToCheck = 3;
    // function checkForChanges() {
    //     if (!$bsa.find('#carbonads').length) {
    //       $timesToCheck -= 1;
    //       if ($timesToCheck >= 0) {
    //         setTimeout(checkForChanges, 500);
    //       }
    //       else {
    //         var donateAd = $('<div id="carbonads"><span><a class="carbon-text" href="#!" onclick="document.getElementById(\'paypal-donate\').submit();"><img src="images/donate.png" /> Help support us by turning off adblock. If you still prefer to keep adblock on for this page but still want to support us, feel free to donate. Any little bit helps.</a></form></span></div>');

    //         $bsa.append(donateAd);
    //       }
    //     }

    // }
    // checkForChanges();


    // Github Latest Commit
    // if ($('.github-commit').length) { // Checks if widget div exists (Index only)
    //   $.ajax({
    //     url: "https://api.github.com/repos/dogfalo/materialize/commits/master",
    //     dataType: "json",
    //     success: function (data) {
    //       var sha = data.sha,
    //           date = jQuery.timeago(data.commit.author.date);
    //       if (window_width < 1120) {
    //         sha = sha.substring(0,7);
    //       }
    //       $('.github-commit').find('.date').html(date);
    //       $('.github-commit').find('.sha').html(sha).attr('href', data.html_url);
    //     }
    //   });
    // }

    // Toggle Flow Text
    var toggleFlowTextButton = $('#flow-toggle');
    toggleFlowTextButton.click( function(){
      $('#flow-text-demo').children('p').each(function(){
          $(this).toggleClass('flow-text');
        });
    });

//    Toggle Containers on page
    var toggleContainersButton = $('#container-toggle-button');
    toggleContainersButton.click(function(){
      $('body .browser-window .container, .had-container').each(function(){
        $(this).toggleClass('had-container');
        $(this).toggleClass('container');
        if ($(this).hasClass('container')) {
          toggleContainersButton.text("Turn off Containers");
        }
        else {
          toggleContainersButton.text("Turn on Containers");
        }
      });
    });

    // Detect touch screen and enable scrollbar if necessary
    function is_touch_device() {
      try {
        document.createEvent("TouchEvent");
        return true;
      } catch (e) {
        return false;
      }
    }
    if (is_touch_device()) {
      $('#nav-mobile').css({ overflow: 'auto'});
    }

    // Set checkbox on forms.html to indeterminate
    var indeterminateCheckbox = document.getElementById('indeterminate-checkbox');
    if (indeterminateCheckbox !== null)
      indeterminateCheckbox.indeterminate = true;


    // Plugin initialization
    //Carousel
    var carouselSliders = $('.carousel.carousel-slider');
    if(carouselSliders.length > 0) {
      carouselSliders.carousel({full_width: true});
    }
    var carousel = $('.carousel');
    if(carousel.length > 0) {
      carousel.carousel();
    }
    //Sliders    
    var sliders = $('.slider');
    if(sliders.length > 0) {
      sliders.slider({full_width: true});
    }
    //Parallax  
    var parallaxes = $('.parallax');
    if(parallaxes.length > 0) {
      parallaxes.parallax();
    }
    //Modal      
    var modalTriggers = $('.modal-trigger');
    if(modalTriggers.length > 0) {
      $('.modal-trigger').leanModal();
    }
    //ScrollSpy
    var scrollSpys = $('.scrollspy');
    if(scrollSpys.length > 0) {
      scrollSpys.scrollSpy();
    }
    //Button      
    var buttonCollapses = $('.button-collapse');
    if(buttonCollapses.length > 0){
      $('.button-collapse').sideNav({'edge': 'left'});
    }
    //Datepicker     
    var datepickers = $('.datepicker');
    if(datepickers.length > 0) {
     datepickers.pickadate({selectYears: 20});
    }
    //Material Select 
    $('select').not('.disabled').material_select();
    var inputAutocompletes = $('input.autocomplete');
    if(inputAutocompletes.length > 0) {
      inputAutocompletes.autocomplete({
        data: {"Apple": null, "Microsoft": null, "Google": 'http://placehold.it/250x250'}
      });
    }
    //Chips 
    var chipsInitials = $('.chips-initial');
    if(chipsInitials.length > 0) {
      chipsInitials.material_chip({
        readOnly: true,
        data: [{
          tag: 'Apple',
        }, {
          tag: 'Microsoft',
        }, {
          tag: 'Google',
        }]
      });
    }
    var chipsPlaceholders = $('.chips-placeholder');
    if(chipsPlaceholders.length > 0) {
      chipsPlaceholders.material_chip({
        placeholder: 'Enter a tag',
        secondaryPlaceholder: '+Tag',
      });
    }
    var chips = $('.chips');
    if(chips.length > 0) {
      chips.material_chip();
    }
    //Collapsibles 
    var collapsibles = $('.collapsible'); 
    if(collapsibles.length > 0){
      collapsibles.collapsible(); 
    }
    
    //Dropdowns 
    var dropdowns = $('.dropdown-button');
    if(dropdowns.length > 0) {
      dropdowns.dropdown({
        // inDuration: 300,
        // outDuration: 225,
        // constrain_width: false, // Does not change width of dropdown to that of the activator
        // hover: true, // Activate on hover
        // gutter: 0, // Spacing from edge
        // belowOrigin: false, // Displays dropdown below the button
        // alignment: 'left' // Displays dropdown with edge aligned to the left of button
      });
    }
    //Scrollfire 
    var scrollFireOptions = [
      {selector: '#staggered-test', offset: 50, callback: function(el) {
        Materialize.toast("This is our ScrollFire Demo!", 1500 );
      } },
      {selector: '#staggered-test', offset: 205, callback: function(el) {
        Materialize.toast("Please continue scrolling!", 1500 );
      } },
      {selector: '#staggered-test', offset: 400, callback: function(el) {
        Materialize.showStaggeredList($(el));
      } },
      {selector: '#image-test', offset: 500, callback: function(el) {
        Materialize.fadeInImage($(el));
      } }
    ];
    Materialize.scrollFire(scrollFireOptions);
    //Material boxes
    var materialBoxes = $(".materialboxed");
    if(materialBoxes.length > 0){
      materialBoxes.materialbox();
    }
    //Tabs
    var tabs = $("ul.tabs");
    if(tabs.length > 0){
      tabs.tabs();
    }
    //Tooltips
    var tooltips = $(".tooltipped");
    if(tooltips.length > 0){
      tooltips.tooltip();
    }
    //Throttled Scroll

    //Character Counter
    var textAreas = $('input, textarea');
    if(textAreas.length > 0){
      textAreas.characterCounter();
    }    
    
  }); // end of document ready
})(jQuery); // end of jQuery name space
