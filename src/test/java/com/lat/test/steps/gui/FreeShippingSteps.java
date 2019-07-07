package com.lat.test.steps.gui;

import com.cucumber.listener.Reporter;
import com.lat.test.framework.helpers.Props;
import com.lat.test.steps.pages.FreeShippingPages;

import cucumber.api.Scenario;
import cucumber.api.java.Before;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class FreeShippingSteps {
	
	FreeShippingPages shippingPages;
	
	public FreeShippingSteps(FreeShippingPages shippingPages)
	{
		this.shippingPages = shippingPages;
	}
	
	
	@Given("^customer is on bol\\.com page$")
	public void customer_is_on_bol_com_page() throws Throwable {
	    shippingPages.browseToURL();
	}

	@And("^customer verify language as \"(.*?)\"$")
	public void customer_verify_language_as(String language) throws Throwable {
	    shippingPages.verifyLanguage(Props.getProp(language));
	    Reporter.addStepLog(language +" is : "+Props.getProp(language));
	    
	}

	@And("^customer search for a product \"(.*?)\"$")
	public void customer_search_for_a_product(String productName) throws Throwable {
		shippingPages.searchForProduct(Props.getProp(productName));
		Reporter.addStepLog(productName +" is : "+Props.getProp(productName));
	}

	@And("^customer click on a search button$")
	public void customer_click_on_a_search_button() throws Throwable {
	    shippingPages.clickOnSearchButton();
	    
	}

	@And("^customer click on add to cart button$")
	public void customer_click_on_add_to_cart_button() throws Throwable {
	    shippingPages.clickOnAddToCartButton();
	}

	@When("^customer click on continueOrder button$")
	public void customer_click_on_continueOrder_button() throws Throwable {
	    shippingPages.clickOnContinueOrderBtn();
	    
	}

	@And("^customer update the product quantity to \"(.*?)\"$")
	public void customer_update_the_product_quantity_to(String productQuantity) throws Throwable {
	    shippingPages.selectProductQuantity(Props.getProp(productQuantity));
	    Reporter.addStepLog(productQuantity +" is : "+Props.getProp(productQuantity));
	}

	@Then("^customer verify shipping cost as \"(.*?)\" on cart page$")
	public void customer_verify_shipping_cost_as_on_cart_page(String shippingCharge) throws Throwable {
		shippingPages.verifyShippingCost(Props.getProp(shippingCharge));
		Reporter.addStepLog(shippingCharge +" is : "+Props.getProp(shippingCharge));
	}

	@And("^User verify total \"(.*?)\" on cart page$")
	public void user_verify_total_on_cart_page(String expectedPrice) throws Throwable {
	    shippingPages.verifyTotalPtoductPrice(Props.getProp(expectedPrice));
	    Reporter.addStepLog(expectedPrice +" is : "+Props.getProp(expectedPrice));
	}
	
	@Then("^User remove the product from the cart$")
	public void user_remove_the_product_from_the_cart() throws Throwable {
	    shippingPages.removeProductFromCart();
	}

}
