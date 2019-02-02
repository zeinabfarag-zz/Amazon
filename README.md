# Amazon

## Overview

This is an Amazon-like storefront CLI App made primarily using MySQL and JavaScript.

## Description

The CLI application allows customers to order specific items using the item id and the number of quantities to purchase. Managers can use the application to view products for sale, view items with low inventory (stock quantity less than 5), increase quantity of items in the inventory and add new items to the inventory.

## Technologies used
* Node.js
* Node Packages
  * inquirer
  * mysql
* MySQL

## Walkthrough

In the bamazon.js file, the app is able to take in orders from customers and depletes stock from the store's inventory. The app starts off displaying the current store products so the customer can choose their product.

![alt text](https://github.com/zeinabfarag/amazon/blob/master/Screenshots/display.png)

It then prompts the user to choose the id of the product they would like and how much they would like to purchase. If their purchase quantity is lower than the product's stock quantity, the price is displayed to the customer and the database is updated.

![alt text](https://github.com/zeinabfarag/amazon/blob/master/Screenshots/purchase.png)

In the bamazonManager.js file, the app prompts the user with 4 options:
![alt text](https://github.com/zeinabfarag/amazon/blob/master/Screenshots/manager.png)

When view low inventory option is selected, the user is displayed the products in the database with a stock quantity lower than 5.
![alt text](https://github.com/zeinabfarag/amazon/blob/master/Screenshots/low%20inventory.png)


When add to inventory option is selected, the user is able to increase the stock quantity of any product and the database will be updated.
![alt text](https://github.com/zeinabfarag/amazon/blob/master/Screenshots/add%20inventory.png)

When add new product option is selected, the user is able to insert a completely new product into the database. 
![alt text](https://github.com/zeinabfarag/amazon/blob/master/Screenshots/add%20product.png)


