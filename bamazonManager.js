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
});

inquirer
  .prompt({
    type: "list",
    name: "options",
    message: "Select From the Following Options:",
    choices: [
      "View Products for Sale",
      "View Low Inventory",
      "Add to Inventory",
      "Add New Product"
    ]
  })
  .then(function(answers) {
    if (answers.options === "View Products for Sale") {
      displayItems();
    }
    if (answers.options === "View Low Inventory") {
      lowInventory();
    }
    if (answers.options === "Add to Inventory") {
      addInventory();
    }
    if (answers.options === "Add New Product") {
      addProduct();
    }
  });

function displayItems() {
  var products =
    "SELECT item_id, product_name, department_name, price FROM products";
  connection.query(products, function(err, res) {
    if (err) throw err;
    console.log(res);
  });
  connection.end();
}

function lowInventory() {
  var inventory =
    "SELECT item_id, product_name, stock_quantity FROM products WHERE stock_quantity < 5 ";
  connection.query(inventory, function(err, res) {
    if (err) throw err;
    console.log(res);
  });
  connection.end();
}

function addInventory() {
  inquirer
    .prompt([
      {
        name: "add",
        message: "What is the id of the product you would like to restock?"
      },
      {
        name: "quantity",
        message: "How much would you like to add to the inventory? "
      }
    ])
    .then(function(answers) {
      var id = answers.add;
      var number = parseInt(answers.quantity);
      var current_stock =
        "SELECT stock_quantity, product_name FROM products WHERE item_id= " +
        id;

      connection.query(current_stock, function(err, res) {
        if (err) throw err;
        var stock = res[0].stock_quantity;
        var new_quantity = stock + number;
        var name = res[0].product_name;

        connection.query(
          "UPDATE products SET ? WHERE ?",
          [
            {
              stock_quantity: new_quantity
            },
            {
              item_id: id
            }
          ],
          function(err) {
            if (err) throw err;
            console.log(
              "You have added " +
                number +
                " more " +
                name +
                " to the inventory!"
            );
          }
        );
        connection.end();
      });
    });
}

function addProduct() {
  inquirer
    .prompt([
      {
        name: "name",
        message: "What is the name of the product you would like to add?"
      },
      {
        name: "department",
        message: "What is the department of the product you would like to add?"
      },
      {
        name: "price",
        message: "What is the price of the product you would like to add?"
      },
      {
        name: "stock",
        message:
          "What is the stock quantity of the product you would like to add?"
      }
    ])
    .then(function(answers) {
      var name = answers.name;
      var department = answers.department;
      var price = parseFloat(answers.price);
      var stock = parseInt(answers.stock);

      var add_product =
        "INSERT INTO products (product_name, department_name, price, stock_quantity) VALUES (" +
        "'" +
        name +
        "'" +
        "," +
        "'" +
        department +
        "'" +
        "," +
        price +
        "," +
        stock +
        ")";

      connection.query(add_product, function(err) {
        if (err) throw err;
        console.log("You have added " + name + " to your store!");
        connection.end();
      });
    });
}
