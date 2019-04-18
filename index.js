//List functions and global variables here

const _orders = [
  {
    id: 1,
    name: "Xaviwer",
    items: ["Chicken", "Soda", "Bun-Cheese"],
    price: 567.56
  },
  {
    id: 2,
    name: "Mordecai",
    items: ["Beef", "Soda", "Bun-Cheese"],
    price: 788.56
  },
  {
    id: 3,
    name: "Jamone",
    items: ["Chicken", "Soda"],
    price: 467.56
  },
  {
    id: 4,
    name: "Nicholas",
    items: ["Soda", "Bun-Cheese"],
    price: 300
  },
  {
    id: 5,
    name: "James",
    items: ["Chicken", "Beer"],
    price: 600.56
  }
];

const processPage= function(e){
 
 
 
   // alert(e.target.id);

    if(e.target.id === "orderPage"){
    const $list = document.getElementById("cafe-orders");
    for (let i = 0; i < _orders.length; i++) {
      //document.createElement();
      $list.appendChild(
        ons.createElement(
          `<ons-list-item>
              ${_orders[i].name}
          </ons-list-item>`
        )
      );
    }

}

};



ons.ready(function() {

window.addEventListener("init", processPage);



  //activate application inside here, including all events...
 
});
