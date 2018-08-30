var inquirer = require("inquirer");
var mysql = require("mysql");

var connection = mysql.createConnection({
  host: "localhost",

  port: 3306,

  user: "root",

  password: "password",
  database: "bamazon"
});

connection.connect(function(err) {
  if (err) throw err;
  displayItems();
  productSelection();
});

function displayItems() {
  var products =
    "SELECT item_id, product_name, department_name, price FROM products";
  connection.query(products, function(err, res) {
    if (err) throw err;
    console.log(res);
  });
}

function productSelection() {
  inquirer
    .prompt([
      {
        name: "id",
        message: "What is the id of the product you would like to purchase?"
      },
      {
        name: "quantity",
        message: "How many units of the product would you like to purchase? "
      }
    ])
    .then(function(answers) {
      var selection = answers.id;
      var quantity = answers.quantity;
      var products =
        "SELECT stock_quantity, price FROM products WHERE item_id= " +
        selection;
      connection.query(products, function(err, res) {
        if (err) throw err;
        var stock = res[0].stock_quantity;
        var price = res[0].price;

        if (quantity > stock) {
          console.log("Insufficient quantity!");
        } else {
          var new_quantity = stock - quantity;

          connection.query(
            "UPDATE products SET ? WHERE ?",
            [
              {
                stock_quantity: new_quantity
              },
              {
                item_id: selection
              }
            ],
            function(err) {
              if (err) throw err;
              var purchase_total = quantity * price;
              console.log("Your purchase total is equal to $" + purchase_total);
            }
          );
        }
        connection.end();
      });
    });
}
