(function($) {

  $.fn.simpleLi = function(options, callback) {
    
    var settings = $.extend( {
      each: false,
      start_at: 0,
      order: 'asc',
      separator: '.'
    }, options);

    var methods = {
      odd: function() {
        return this.children("li:odd");
      },

      even: function() {
        return this.children("li:even");
      },

      all: function() {
        return this.children('li').slice(settings.start_at);
      },

      every: function(quantity) {
        return this.children('li:nth-child(' + quantity + 'n + ' + settings.start_at + ')'); 
      },

      first: function(quantity) {
        return this.children('li').slice(settings.start_at, settings.start_at + quantity);
      },

      last: function(quantity) {
        return this.children('li').slice(-quantity);
      },

      only: function(index) {
        return this.children('li').eq(index);
      }
    };

    var actions = {
      remove: function(lis) {
        lis.remove();
      },

      reverse: function(lis) {
        this.append(lis.get().reverse());
      },

      hide: function(lis) {
        lis.hide();
      },

      show: function(lis) {
        lis.show();
      },

      sort: function(lis, type) {
        var sort_type = 'sort_' + type,
            order = settings.order;

        if(typeof actions[sort_type] == 'function') {
          if(order == "desc") {
            actions.reverse.call(this, actions[sort_type](lis));
          } else {
            this.append(actions[sort_type](lis));
          }       
        }
      },

      sort_letter: function(lis) {
        return lis.sort(function(a, b) { 
          var txtA = $(a).text().toUpperCase(); 
          var txtB = $(b).text().toUpperCase(); 

          return (txtA < txtB) ? -1 : (txtA > txtB) ? 1 : 0;
        });  
      },

      sort_number: function(lis) {
        return lis.sort(function(a, b) { 
          var numA = parseFloat($(a).text());
          var numB = parseFloat($(b).text()); 

          return (numA - numB);
        });  
      },

      sort_money: function(lis, type) {
        var re = new RegExp('[^\\d' + settings.separator + '-]+', 'gi');

        return lis.sort(function(a, b) { 
          var numA = parseFloat($(a).text().replace(re, '').replace(/,/g, '.'));
          var numB = parseFloat($(b).text().replace(re, '').replace(/,/g, '.')); 

          return (numA - numB);
        });  
      }
    }

    return this.each(function() {
      var ul = $(this);

      if(settings.hasOwnProperty("option")) {
        var contents = settings.option.split('-'),
            option = contents[0],
            quantity = parseInt(contents[1], 10), //NaN nos metodos 'even', 'odd' e 'all'

            lis = methods[option].call(ul, quantity); 

        if(settings.hasOwnProperty("action")) {
          if(/^sort_/.test(settings.action)) {
            var content = settings.action.split('_');
            actions[content[0]].call(ul, lis, content[1]);
          } else {
            actions[settings.action].call(ul, lis);
          }
        }

        if(typeof callback == "function") {
          if(settings.each) {
            $.each(lis, function(index, li) {
              callback.call(li, index);
            });
          } else {
            callback.call(lis);
          }
        }
      }      
    });
  };
})(jQuery);
