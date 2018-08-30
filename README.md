# amazon

This is an Amazon-like storefront App made primarily using MySQL and JavaScript.

In the bamazon.js file the app is able to take in orders from customers and depletes stock from the store's inventory. The app starts off displaying the current store products so the customer can choose their product.

![alt text](https://github.com/zeinabfarag/amazon/blob/master/Screenshots/display.png)

It then prompts the user to choose the id of the product they would like and how much they would like to purchase. If their purchase quantity is lower than the product's stock quantity, the price is displayed to the customer and the database is updated.

![alt text](https://github.com/zeinabfarag/amazon/blob/master/Screenshots/purchase.png)

In the bamazonManager.js file the app prompts the user with 4 options:
![alt text](https://github.com/zeinabfarag/amazon/blob/master/Screenshots/manager.png)

When view low inventory option is selected, the user is displayed the products in the database with a stock quantity lower than 5.
![alt text](https://github.com/zeinabfarag/amazon/blob/master/Screenshots/low%20inventory.png)


When add to inventory option is selected, the user is able to increase the stock quantity of any product and the quantity will be updated.
![alt text](https://github.com/zeinabfarag/amazon/blob/master/Screenshots/add%20inventory.png)

When add new product option is selected, the user is able to insert a completely new product into the database. 
![alt text](https://github.com/zeinabfarag/amazon/blob/master/Screenshots/add%20product.png)


This App requires an npm install.
