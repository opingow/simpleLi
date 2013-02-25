(function($) {
  $.fn.simpleLi = function(options, callback) {
    
    var settings = $.extend( {
      each: false,
      start_at: 0
    }, options);

    var methods = {
      odd: function() {
        return this.find("li:odd");
      },

      even: function() {
        return this.find("li:even");
      },

      all: function() {
        return this.find('li').slice(settings.start_at);
      },

      every: function(quantity) {
        return this.find('li:nth-child(' + quantity + 'n + ' + settings.start_at + ')'); 
      },

      first: function(quantity) {
        return this.find('li').slice(settings.start_at, settings.start_at + quantity);
      },

      last: function(quantity) {
        return this.find('li').slice(-quantity);
      },

      only: function(index) {
        return this.find('li').eq(index);
      }

    };

    return this.each(function() {
      var $this = $(this);

      if(settings.hasOwnProperty("option")) {
        var contents = settings.option.split('-'),
            option = contents[0],
            quantity = parseInt(contents[1], 10), //NaN nos metodos 'even', 'odd' e 'all'

            lis = methods[option].call($this, quantity); 

        if(settings.each) {
          $.each(lis, function(index, li) {
            callback.call(li, index);
          });
        } else {
          callback.call(lis);
        }
      }      
    });
  };
})(jQuery);
