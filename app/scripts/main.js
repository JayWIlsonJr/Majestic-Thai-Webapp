(function() {
  'use strict';

/* ==========================================================================
   VIEWS
   ========================================================================== */
    var MenuView = Backbone.View.extend({
      className: 'menu_container', 

      render: function(options) {
        $('.container').append(this.el);
        this.collection.each(_.bind(this.renderChild, this))
      },

      renderChild: function(dishModel) {
        new SingleDishView({model: dishModel})
      },

      initialize: function(options) {
        this.render(options);
      }
    });

    
    var SingleDishView = Backbone.View.extend({
      className: 'menu_item',

      template: _.template($('#template_single_dish').text()),

      initialize: function() {
        this.$el.html(this.template(this.model.attributes));
        console.log(this.$el);
        $('.menu_container').append(this.el);
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
    var DishCollection = Backbone.Collection.extend({
      model: DishModel

    });

/* ==========================================================================
   GLUE
   ========================================================================== */
  $(document).ready(function() {
    var dishCollection = new DishCollection();
    dishCollection.set(items);

    var menuView = new MenuView({collection: dishCollection});
    
    var singleDishView = new SingleDishView();
    singleDishView.render();

    // var dishModel = new DishModel();
    // dishModel.set({});

    


    $('.menu_item').on('click', function() {
      $(this).toggleClass('visible');
    });

  });

})();

