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

var showTemplateDialog = function() {
  var dialog = document.getElementById('my-dialog');

  if (dialog) {
    dialog.show();
  } else {
    ons.createElement('dialog.html', { append: true })
      .then(function(dialog) {
        dialog.show();
      });
  }
};

var hideDialog = function(id) {
  document
    .getElementById(id)
    .hide();
};

const processPage= function(e){
 
 
 
   // alert(e.target.id);

    if(e.target.id === "orderPage"){
    const $list = document.getElementById("cafe-orders");
    for (let i = 0; i < _orders.length; i++) {
      const item = document.createElement("ons-list-item");
      item.innerHTML = ${_orders[i].name};
      item.setAttribute("tappable",true);
       item.setAttribute("onclick","alert('Bingo')");
      
       /*ons.createElement(
          `<ons-list-item>
              ${_orders[i].name}
          </ons-list-item>`*/     
      
      $list.appendChild(item);
      
    }

}

};



ons.ready(function() {

window.addEventListener("init", processPage);



  //activate application inside here, including all events...
 
});
