var Purchase = {
  create: function(item, cost) {
    var purchase = Object.create(Purchase);
    purchase.initialize(item, cost);
    return purchase;
  },
  initialize: function(item, cost) {
    this.item = item;
    this.cost = cost;
  }
}

var Category = {
  create: function(cat) {
    var category = Object.create(Category);
    category.initialize(cat);
    return category;
  },
  initialize: function(cat) {
    this.cat = cat;
  },
  purchases: [],
  current: false
}


var Tracker = {
  create: function() {

  },
  initialize: function() {

  },
  categories: []
}




// $("input[name='category']").val(category);
