(function() {
  'use strict';

/* ==========================================================================
   VIEWS
   ========================================================================== */
    var ItemView = Backbone.View.extend({
      className: 'menu_item', 

      render: function() {
        $('body').append(this.el);
      }
    });

/* ==========================================================================
   MODELS
   ========================================================================== */
    var DishModel = Backbone.Model.extend({
      
    });

/* ==========================================================================
   COLLECTIONS
   ========================================================================== */


/* ==========================================================================
   GLUE
   ========================================================================== */


  $(document).ready(function() {
    var itemView = new ItemView();
    itemView.render();

    var dishModel = new DishModel();

    $('.menu_item').on('click', function() {
      $(this).toggleClass('visible');
    });

  });

})();

