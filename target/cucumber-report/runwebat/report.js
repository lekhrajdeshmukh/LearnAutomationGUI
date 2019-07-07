$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("freeShipping.feature");
formatter.feature({
  "line": 1,
  "name": "As a Customer I order product with price more than of 20 euro Then I expect free shipping for the product",
  "description": "",
  "id": "as-a-customer-i-order-product-with-price-more-than-of-20-euro-then-i-expect-free-shipping-for-the-product",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 3,
  "name": "Verify shipping charges is free or not for the orderable product",
  "description": "",
  "id": "as-a-customer-i-order-product-with-price-more-than-of-20-euro-then-i-expect-free-shipping-for-the-product;verify-shipping-charges-is-free-or-not-for-the-orderable-product",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "customer is on bol.com page",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "customer verify language as \"locale-language\"",
  "keyword": "And "
});
formatter.step({
  "line": 6,
  "name": "customer search for a product \"\u003cproduct-name\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "customer click on a search button",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "customer click on add to cart button",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "customer click on continueOrder button",
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "customer update the product quantity to \"\u003cquantity\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "customer verify shipping cost as \"\u003cfreeShipping\u003e\" on cart page",
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "User verify total \"\u003cprice\u003e\" on cart page",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "User remove the product from the cart",
  "keyword": "And "
});
formatter.examples({
  "line": 14,
  "name": "",
  "description": "",
  "id": "as-a-customer-i-order-product-with-price-more-than-of-20-euro-then-i-expect-free-shipping-for-the-product;verify-shipping-charges-is-free-or-not-for-the-orderable-product;",
  "rows": [
    {
      "cells": [
        "product-name",
        "quantity",
        "price",
        "freeShipping"
      ],
      "line": 15,
      "id": "as-a-customer-i-order-product-with-price-more-than-of-20-euro-then-i-expect-free-shipping-for-the-product;verify-shipping-charges-is-free-or-not-for-the-orderable-product;;1"
    },
    {
      "cells": [
        "shipping.charge.order.product-name-1",
        "shipping.charge.order.product-quantity-1",
        "shipping.charge.order.product-price-1",
        "shipping.charge.order.product-freeShipping-1"
      ],
      "line": 16,
      "id": "as-a-customer-i-order-product-with-price-more-than-of-20-euro-then-i-expect-free-shipping-for-the-product;verify-shipping-charges-is-free-or-not-for-the-orderable-product;;2"
    },
    {
      "cells": [
        "shipping.charge.order.product-name-5",
        "shipping.charge.order.product-quantity-5",
        "shipping.charge.order.product-price-5",
        "shipping.charge.order.product-freeShipping-5"
      ],
      "line": 17,
      "id": "as-a-customer-i-order-product-with-price-more-than-of-20-euro-then-i-expect-free-shipping-for-the-product;verify-shipping-charges-is-free-or-not-for-the-orderable-product;;3"
    },
    {
      "cells": [
        "shipping.charge.order.product-name-2",
        "shipping.charge.order.product-quantity-2",
        "shipping.charge.order.product-price-2",
        "shipping.charge.order.product-freeShipping-2"
      ],
      "line": 18,
      "id": "as-a-customer-i-order-product-with-price-more-than-of-20-euro-then-i-expect-free-shipping-for-the-product;verify-shipping-charges-is-free-or-not-for-the-orderable-product;;4"
    },
    {
      "cells": [
        "shipping.charge.order.product-name-3",
        "shipping.charge.order.product-quantity-3",
        "shipping.charge.order.product-price-3",
        "shipping.charge.order.product-freeShipping-3"
      ],
      "line": 19,
      "id": "as-a-customer-i-order-product-with-price-more-than-of-20-euro-then-i-expect-free-shipping-for-the-product;verify-shipping-charges-is-free-or-not-for-the-orderable-product;;5"
    },
    {
      "cells": [
        "shipping.charge.order.product-name-4",
        "shipping.charge.order.product-quantity-4",
        "shipping.charge.order.product-price-4",
        "shipping.charge.order.product-freeShipping-4"
      ],
      "line": 20,
      "id": "as-a-customer-i-order-product-with-price-more-than-of-20-euro-then-i-expect-free-shipping-for-the-product;verify-shipping-charges-is-free-or-not-for-the-orderable-product;;6"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 16,
  "name": "Verify shipping charges is free or not for the orderable product",
  "description": "",
  "id": "as-a-customer-i-order-product-with-price-more-than-of-20-euro-then-i-expect-free-shipping-for-the-product;verify-shipping-charges-is-free-or-not-for-the-orderable-product;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "customer is on bol.com page",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "customer verify language as \"locale-language\"",
  "keyword": "And "
});
formatter.step({
  "line": 6,
  "name": "customer search for a product \"shipping.charge.order.product-name-1\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "customer click on a search button",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "customer click on add to cart button",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "customer click on continueOrder button",
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "customer update the product quantity to \"shipping.charge.order.product-quantity-1\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "customer verify shipping cost as \"shipping.charge.order.product-freeShipping-1\" on cart page",
  "matchedColumns": [
    3
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "User verify total \"shipping.charge.order.product-price-1\" on cart page",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "User remove the product from the cart",
  "keyword": "And "
});
formatter.match({
  "location": "FreeShippingSteps.customer_is_on_bol_com_page()"
});
formatter.result({
  "duration": 6930529600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "locale-language",
      "offset": 29
    }
  ],
  "location": "FreeShippingSteps.customer_verify_language_as(String)"
});
formatter.result({
  "duration": 2367588400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "shipping.charge.order.product-name-1",
      "offset": 31
    }
  ],
  "location": "FreeShippingSteps.customer_search_for_a_product(String)"
});
formatter.result({
  "duration": 883162000,
  "status": "passed"
});
formatter.match({
  "location": "FreeShippingSteps.customer_click_on_a_search_button()"
});
formatter.result({
  "duration": 1807300600,
  "status": "passed"
});
formatter.match({
  "location": "FreeShippingSteps.customer_click_on_add_to_cart_button()"
});
formatter.result({
  "duration": 395544600,
  "status": "passed"
});
formatter.match({
  "location": "FreeShippingSteps.customer_click_on_continueOrder_button()"
});
formatter.result({
  "duration": 3046535000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "shipping.charge.order.product-quantity-1",
      "offset": 41
    }
  ],
  "location": "FreeShippingSteps.customer_update_the_product_quantity_to(String)"
});
formatter.result({
  "duration": 439225500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "shipping.charge.order.product-freeShipping-1",
      "offset": 34
    }
  ],
  "location": "FreeShippingSteps.customer_verify_shipping_cost_as_on_cart_page(String)"
});
formatter.result({
  "duration": 104766100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "shipping.charge.order.product-price-1",
      "offset": 19
    }
  ],
  "location": "FreeShippingSteps.user_verify_total_on_cart_page(String)"
});
formatter.result({
  "duration": 84815800,
  "error_message": "java.lang.AssertionError: expected [20,95] but found [40,95]\r\n\tat org.testng.Assert.fail(Assert.java:94)\r\n\tat org.testng.Assert.failNotEquals(Assert.java:513)\r\n\tat org.testng.Assert.assertEqualsImpl(Assert.java:135)\r\n\tat org.testng.Assert.assertEquals(Assert.java:116)\r\n\tat org.testng.Assert.assertEquals(Assert.java:190)\r\n\tat org.testng.Assert.assertEquals(Assert.java:200)\r\n\tat com.lat.test.steps.pages.FreeShippingPages.verifyTotalPtoductPrice(FreeShippingPages.java:176)\r\n\tat com.lat.test.steps.gui.FreeShippingSteps.user_verify_total_on_cart_page(FreeShippingSteps.java:73)\r\n\tat ✽.And User verify total \"shipping.charge.order.product-price-1\" on cart page(freeShipping.feature:12)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "FreeShippingSteps.user_remove_the_product_from_the_cart()"
});
formatter.result({
  "status": "skipped"
});
formatter.write("https://www.bol.com/nl/order/basket.html");
formatter.embedding("image/png", "embedded0.png");
formatter.after({
  "duration": 1950211000,
  "status": "passed"
});
formatter.scenario({
  "line": 17,
  "name": "Verify shipping charges is free or not for the orderable product",
  "description": "",
  "id": "as-a-customer-i-order-product-with-price-more-than-of-20-euro-then-i-expect-free-shipping-for-the-product;verify-shipping-charges-is-free-or-not-for-the-orderable-product;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "customer is on bol.com page",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "customer verify language as \"locale-language\"",
  "keyword": "And "
});
formatter.step({
  "line": 6,
  "name": "customer search for a product \"shipping.charge.order.product-name-5\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "customer click on a search button",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "customer click on add to cart button",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "customer click on continueOrder button",
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "customer update the product quantity to \"shipping.charge.order.product-quantity-5\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "customer verify shipping cost as \"shipping.charge.order.product-freeShipping-5\" on cart page",
  "matchedColumns": [
    3
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "User verify total \"shipping.charge.order.product-price-5\" on cart page",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "User remove the product from the cart",
  "keyword": "And "
});
formatter.match({
  "location": "FreeShippingSteps.customer_is_on_bol_com_page()"
});
formatter.result({
  "duration": 745464700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "locale-language",
      "offset": 29
    }
  ],
  "location": "FreeShippingSteps.customer_verify_language_as(String)"
});
formatter.result({
  "duration": 2374322300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "shipping.charge.order.product-name-5",
      "offset": 31
    }
  ],
  "location": "FreeShippingSteps.customer_search_for_a_product(String)"
});
formatter.result({
  "duration": 738658300,
  "status": "passed"
});
formatter.match({
  "location": "FreeShippingSteps.customer_click_on_a_search_button()"
});
formatter.result({
  "duration": 1329844200,
  "status": "passed"
});
formatter.match({
  "location": "FreeShippingSteps.customer_click_on_add_to_cart_button()"
});
formatter.result({
  "duration": 776466500,
  "status": "passed"
});
formatter.match({
  "location": "FreeShippingSteps.customer_click_on_continueOrder_button()"
});
formatter.result({
  "duration": 794242900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "shipping.charge.order.product-quantity-5",
      "offset": 41
    }
  ],
  "location": "FreeShippingSteps.customer_update_the_product_quantity_to(String)"
});
formatter.result({
  "duration": 501507600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "shipping.charge.order.product-freeShipping-5",
      "offset": 34
    }
  ],
  "location": "FreeShippingSteps.customer_verify_shipping_cost_as_on_cart_page(String)"
});
formatter.result({
  "duration": 107338000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "shipping.charge.order.product-price-5",
      "offset": 19
    }
  ],
  "location": "FreeShippingSteps.user_verify_total_on_cart_page(String)"
});
formatter.result({
  "duration": 103864500,
  "status": "passed"
});
formatter.match({
  "location": "FreeShippingSteps.user_remove_the_product_from_the_cart()"
});
formatter.result({
  "duration": 775973000,
  "status": "passed"
});
formatter.after({
  "duration": 178700,
  "status": "passed"
});
formatter.scenario({
  "line": 18,
  "name": "Verify shipping charges is free or not for the orderable product",
  "description": "",
  "id": "as-a-customer-i-order-product-with-price-more-than-of-20-euro-then-i-expect-free-shipping-for-the-product;verify-shipping-charges-is-free-or-not-for-the-orderable-product;;4",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "customer is on bol.com page",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "customer verify language as \"locale-language\"",
  "keyword": "And "
});
formatter.step({
  "line": 6,
  "name": "customer search for a product \"shipping.charge.order.product-name-2\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "customer click on a search button",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "customer click on add to cart button",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "customer click on continueOrder button",
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "customer update the product quantity to \"shipping.charge.order.product-quantity-2\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "customer verify shipping cost as \"shipping.charge.order.product-freeShipping-2\" on cart page",
  "matchedColumns": [
    3
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "User verify total \"shipping.charge.order.product-price-2\" on cart page",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "User remove the product from the cart",
  "keyword": "And "
});
formatter.match({
  "location": "FreeShippingSteps.customer_is_on_bol_com_page()"
});
formatter.result({
  "duration": 348291200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "locale-language",
      "offset": 29
    }
  ],
  "location": "FreeShippingSteps.customer_verify_language_as(String)"
});
formatter.result({
  "duration": 2283678300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "shipping.charge.order.product-name-2",
      "offset": 31
    }
  ],
  "location": "FreeShippingSteps.customer_search_for_a_product(String)"
});
formatter.result({
  "duration": 345034500,
  "status": "passed"
});
formatter.match({
  "location": "FreeShippingSteps.customer_click_on_a_search_button()"
});
formatter.result({
  "duration": 923451200,
  "status": "passed"
});
formatter.match({
  "location": "FreeShippingSteps.customer_click_on_add_to_cart_button()"
});
formatter.result({
  "duration": 711955700,
  "status": "passed"
});
formatter.match({
  "location": "FreeShippingSteps.customer_click_on_continueOrder_button()"
});
formatter.result({
  "duration": 1540533500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "shipping.charge.order.product-quantity-2",
      "offset": 41
    }
  ],
  "location": "FreeShippingSteps.customer_update_the_product_quantity_to(String)"
});
formatter.result({
  "duration": 489809400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "shipping.charge.order.product-freeShipping-2",
      "offset": 34
    }
  ],
  "location": "FreeShippingSteps.customer_verify_shipping_cost_as_on_cart_page(String)"
});
formatter.result({
  "duration": 88869700,
  "error_message": "java.lang.AssertionError: expected [NoGratis] but found [Gratis]\r\n\tat org.testng.Assert.fail(Assert.java:94)\r\n\tat org.testng.Assert.failNotEquals(Assert.java:513)\r\n\tat org.testng.Assert.assertEqualsImpl(Assert.java:135)\r\n\tat org.testng.Assert.assertEquals(Assert.java:116)\r\n\tat org.testng.Assert.assertEquals(Assert.java:190)\r\n\tat org.testng.Assert.assertEquals(Assert.java:200)\r\n\tat com.lat.test.steps.pages.FreeShippingPages.verifyShippingCost(FreeShippingPages.java:155)\r\n\tat com.lat.test.steps.gui.FreeShippingSteps.customer_verify_shipping_cost_as_on_cart_page(FreeShippingSteps.java:67)\r\n\tat ✽.Then customer verify shipping cost as \"shipping.charge.order.product-freeShipping-2\" on cart page(freeShipping.feature:11)\r\n",
  "status": "failed"
});
formatter.match({
  "arguments": [
    {
      "val": "shipping.charge.order.product-price-2",
      "offset": 19
    }
  ],
  "location": "FreeShippingSteps.user_verify_total_on_cart_page(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "FreeShippingSteps.user_remove_the_product_from_the_cart()"
});
formatter.result({
  "status": "skipped"
});
formatter.write("https://www.bol.com/nl/order/basket.html");
formatter.embedding("image/png", "embedded1.png");
formatter.after({
  "duration": 1511424800,
  "status": "passed"
});
formatter.scenario({
  "line": 19,
  "name": "Verify shipping charges is free or not for the orderable product",
  "description": "",
  "id": "as-a-customer-i-order-product-with-price-more-than-of-20-euro-then-i-expect-free-shipping-for-the-product;verify-shipping-charges-is-free-or-not-for-the-orderable-product;;5",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "customer is on bol.com page",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "customer verify language as \"locale-language\"",
  "keyword": "And "
});
formatter.step({
  "line": 6,
  "name": "customer search for a product \"shipping.charge.order.product-name-3\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "customer click on a search button",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "customer click on add to cart button",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "customer click on continueOrder button",
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "customer update the product quantity to \"shipping.charge.order.product-quantity-3\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "customer verify shipping cost as \"shipping.charge.order.product-freeShipping-3\" on cart page",
  "matchedColumns": [
    3
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "User verify total \"shipping.charge.order.product-price-3\" on cart page",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "User remove the product from the cart",
  "keyword": "And "
});
formatter.match({
  "location": "FreeShippingSteps.customer_is_on_bol_com_page()"
});
formatter.result({
  "duration": 698536300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "locale-language",
      "offset": 29
    }
  ],
  "location": "FreeShippingSteps.customer_verify_language_as(String)"
});
formatter.result({
  "duration": 2231099000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "shipping.charge.order.product-name-3",
      "offset": 31
    }
  ],
  "location": "FreeShippingSteps.customer_search_for_a_product(String)"
});
formatter.result({
  "duration": 1043980900,
  "status": "passed"
});
formatter.match({
  "location": "FreeShippingSteps.customer_click_on_a_search_button()"
});
formatter.result({
  "duration": 1197093900,
  "status": "passed"
});
formatter.match({
  "location": "FreeShippingSteps.customer_click_on_add_to_cart_button()"
});
formatter.result({
  "duration": 605502200,
  "status": "passed"
});
formatter.match({
  "location": "FreeShippingSteps.customer_click_on_continueOrder_button()"
});
formatter.result({
  "duration": 3046281500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "shipping.charge.order.product-quantity-3",
      "offset": 41
    }
  ],
  "location": "FreeShippingSteps.customer_update_the_product_quantity_to(String)"
});
formatter.result({
  "duration": 388535100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "shipping.charge.order.product-freeShipping-3",
      "offset": 34
    }
  ],
  "location": "FreeShippingSteps.customer_verify_shipping_cost_as_on_cart_page(String)"
});
formatter.result({
  "duration": 165549600,
  "error_message": "java.lang.AssertionError: expected [NoGratis] but found [Gratis]\r\n\tat org.testng.Assert.fail(Assert.java:94)\r\n\tat org.testng.Assert.failNotEquals(Assert.java:513)\r\n\tat org.testng.Assert.assertEqualsImpl(Assert.java:135)\r\n\tat org.testng.Assert.assertEquals(Assert.java:116)\r\n\tat org.testng.Assert.assertEquals(Assert.java:190)\r\n\tat org.testng.Assert.assertEquals(Assert.java:200)\r\n\tat com.lat.test.steps.pages.FreeShippingPages.verifyShippingCost(FreeShippingPages.java:155)\r\n\tat com.lat.test.steps.gui.FreeShippingSteps.customer_verify_shipping_cost_as_on_cart_page(FreeShippingSteps.java:67)\r\n\tat ✽.Then customer verify shipping cost as \"shipping.charge.order.product-freeShipping-3\" on cart page(freeShipping.feature:11)\r\n",
  "status": "failed"
});
formatter.match({
  "arguments": [
    {
      "val": "shipping.charge.order.product-price-3",
      "offset": 19
    }
  ],
  "location": "FreeShippingSteps.user_verify_total_on_cart_page(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "FreeShippingSteps.user_remove_the_product_from_the_cart()"
});
formatter.result({
  "status": "skipped"
});
formatter.write("https://www.bol.com/nl/order/basket.html");
formatter.embedding("image/png", "embedded2.png");
formatter.after({
  "duration": 1362381400,
  "status": "passed"
});
formatter.scenario({
  "line": 20,
  "name": "Verify shipping charges is free or not for the orderable product",
  "description": "",
  "id": "as-a-customer-i-order-product-with-price-more-than-of-20-euro-then-i-expect-free-shipping-for-the-product;verify-shipping-charges-is-free-or-not-for-the-orderable-product;;6",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "customer is on bol.com page",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "customer verify language as \"locale-language\"",
  "keyword": "And "
});
formatter.step({
  "line": 6,
  "name": "customer search for a product \"shipping.charge.order.product-name-4\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "customer click on a search button",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "customer click on add to cart button",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "customer click on continueOrder button",
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "customer update the product quantity to \"shipping.charge.order.product-quantity-4\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "customer verify shipping cost as \"shipping.charge.order.product-freeShipping-4\" on cart page",
  "matchedColumns": [
    3
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "User verify total \"shipping.charge.order.product-price-4\" on cart page",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "User remove the product from the cart",
  "keyword": "And "
});
formatter.match({
  "location": "FreeShippingSteps.customer_is_on_bol_com_page()"
});
formatter.result({
  "duration": 710398000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "locale-language",
      "offset": 29
    }
  ],
  "location": "FreeShippingSteps.customer_verify_language_as(String)"
});
formatter.result({
  "duration": 2274054400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "shipping.charge.order.product-name-4",
      "offset": 31
    }
  ],
  "location": "FreeShippingSteps.customer_search_for_a_product(String)"
});
formatter.result({
  "duration": 721082900,
  "status": "passed"
});
formatter.match({
  "location": "FreeShippingSteps.customer_click_on_a_search_button()"
});
formatter.result({
  "duration": 945016300,
  "status": "passed"
});
formatter.match({
  "location": "FreeShippingSteps.customer_click_on_add_to_cart_button()"
});
formatter.result({
  "duration": 724505200,
  "status": "passed"
});
formatter.match({
  "location": "FreeShippingSteps.customer_click_on_continueOrder_button()"
});
formatter.result({
  "duration": 1452958300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "shipping.charge.order.product-quantity-4",
      "offset": 41
    }
  ],
  "location": "FreeShippingSteps.customer_update_the_product_quantity_to(String)"
});
formatter.result({
  "duration": 499446300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "shipping.charge.order.product-freeShipping-4",
      "offset": 34
    }
  ],
  "location": "FreeShippingSteps.customer_verify_shipping_cost_as_on_cart_page(String)"
});
formatter.result({
  "duration": 66771700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "shipping.charge.order.product-price-4",
      "offset": 19
    }
  ],
  "location": "FreeShippingSteps.user_verify_total_on_cart_page(String)"
});
formatter.result({
  "duration": 66092600,
  "status": "passed"
});
formatter.match({
  "location": "FreeShippingSteps.user_remove_the_product_from_the_cart()"
});
formatter.result({
  "duration": 878524800,
  "status": "passed"
});
formatter.after({
  "duration": 181500,
  "status": "passed"
});
});