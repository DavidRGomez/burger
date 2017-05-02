var orm = require("../config/orm.js");

var Burger = {

  
  all: function(cb) {
    orm.selectAll("burger", cb);
  },

 
  add: function(burgerName, restaurant, cb) {
    
    cols = ["burger_name", "restaurants"];
   
    burgerInfo = [burgerName, restaurant];
    orm.insertOne("burger", cols, burgerInfo, cb);
  },

  update: function(id, cb) {
    orm.updateOne("burger", "devoured", true, "id", id, cb);
  }

}

module.exports = Burger;