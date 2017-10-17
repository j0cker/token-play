(function() {
  app.factory('functions', function($http) {
    return {
      loading: function() {
        $('body').removeClass('load');
        $('body').removeClass('loaded');
        $('body').addClass('load');
        setTimeout(function() {
          return $('body').addClass('loaded');
        }, 1000);
      }
    };
  });

}).call(this);