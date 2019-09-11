# Database Queries

### Display the ProductName and CategoryName for all products in the database. Shows 76 records.
SELECT productName, categoryName from products
JOIN Categories
ON products.categoryId = Categories.categoryId

### Display the OrderID and ShipperName for all orders placed before January 9, 1997. Shows 161 records.
SELECT orderId, shipperName, orderDate from orders
join shippers
on orders.shipperId = shippers.shipperId
where orderDate < '1997-01-09' 
### Display all ProductNames and Quantities placed on order 10251. Sort by ProductName. Shows 3 records.
select productName, quantity, orderId from OrderDetails
join products
on OrderDetails.productId = products.productId
where orderId = '10251'
group by productName
### Display the OrderID, CustomerName and the employee's LastName for every order. All columns should be labeled clearly. Displays 196 records.
SELECT orderId, LastName as 'Employee Last Name', customerName as 'Customer Name' FROM orders
join employees, customers
on orders.employeeId = employees.employeeId and orders.customerId = customers.customerId
### (Stretch)  Displays CategoryName and a new column called Count that shows how many products are in each category. Shows 9 records.

### (Stretch) Display OrderID and a  column called ItemCount that shows the total number of products placed on the order. Shows 196 records. 