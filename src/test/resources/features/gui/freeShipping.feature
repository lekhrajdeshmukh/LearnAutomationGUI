Feature: As a Customer I order product with price more than of 20 euro Then I expect free shipping for the product

Scenario Outline: Verify shipping charges is free or not for the orderable product
Given customer is on bol.com page
And customer verify language as "locale-language"
And customer search for a product "<product-name>"
And customer click on a search button
And customer click on add to cart button
When customer click on continueOrder button
And customer update the product quantity to "<quantity>"
Then customer verify shipping cost as "<freeShipping>" on cart page
And User verify total "<price>" on cart page
And User remove the product from the cart 
Examples:
|	product-name								|	quantity									|	price	|	freeShipping									|
|	shipping.charge.order.product-name-1		|	shipping.charge.order.product-quantity-1	|	shipping.charge.order.product-price-1	|	shipping.charge.order.product-freeShipping-1	|
|	shipping.charge.order.product-name-5		|	shipping.charge.order.product-quantity-5	|	shipping.charge.order.product-price-5	|	shipping.charge.order.product-freeShipping-5	|
|	shipping.charge.order.product-name-2		|	shipping.charge.order.product-quantity-2	|	shipping.charge.order.product-price-2		|	shipping.charge.order.product-freeShipping-2	|
|	shipping.charge.order.product-name-3		|	shipping.charge.order.product-quantity-3	|	shipping.charge.order.product-price-3	|	shipping.charge.order.product-freeShipping-3	|
|	shipping.charge.order.product-name-4		|	shipping.charge.order.product-quantity-4	|	shipping.charge.order.product-price-4		|	shipping.charge.order.product-freeShipping-4	|