package com.lat.test.steps.pages;

import static org.testng.Assert.assertEquals;
import static org.testng.Assert.assertTrue;

import java.util.List;

import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.ui.Select;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import com.lat.test.framework.PageObject;
import com.lat.test.framework.helpers.Props;
import com.lat.test.framework.helpers.WebDriverHelper;

import cucumber.api.Scenario;

public class FreeShippingPages extends PageObject{
	private static Logger LOG 			= LoggerFactory.getLogger(FreeShippingPages.class);
	private By searchEditBox  			= By.id("searchfor");
	private By searchButton    			= By.cssSelector("button.wsp-search__btn.tst_headerSearchButton>svg");
	private By currentLanguage 			= By.cssSelector("label.o-drop-down__label");
	private By selectQuantity 			= By.cssSelector("div.form-select.form-select--two-digits>select#tst_quantity_dropdown");
	private By addToCartButton 			= By.cssSelector("a[class*='js_floating_basket_btn js_btn_buy']");
	private By continueOrderBtn 		= By.cssSelector("div.c-btn-tertiary.sb-button.sb-chevron-next.h-btn--full-medium>a");
	private By continueOrderHeaderBtn	= By.cssSelector("div.add-on-page-header__button.c-btn-primary--large.sb-button.sb-chevron-next>a[href*='/order/basket.html']");
	private By shippingCostValue		= By.cssSelector("td#tst_shipping_costs");
	private By removeCartProduct 		= By.cssSelector("div>a#tst_remove_from_basket");
	private By totalProductPrice 		= By.cssSelector("table:nth-child(1).totals__table>tbody>tr:nth-child(1)>td:nth-child(2)");
	private By closeModelWindowBtn 		= By.cssSelector("div.js_close_modal_window.modal__window--close-hitarea");
	private By languageOptionsDynamic;
	private By languageOptions			= By.cssSelector("label.o-drop-down__label");
	
	
	public void browseToURL() throws Exception
	{
		try 
		{
			String targetURL = Props.getProp("site.url");
			webDriver.get(targetURL);
		} catch (Exception e) {
			throw new Exception(e.getMessage());
		}
	}
	
	public void verifyLanguage(String expectedLanguage)
	{
		closeModelWindow();
		if(!waitForExpectedElement(currentLanguage).getText().equalsIgnoreCase(expectedLanguage))
		{
			if(isElementPresent(languageOptions))
			{
				waitForExpectedElement(languageOptions).click();
			}
			
			languageOptionsDynamic = By.cssSelector("a.o-drop-down__link.js-country-link[href*='"+expectedLanguage+"']");
			if(isElementPresent(languageOptionsDynamic))
			{
				webDriver.findElement(languageOptionsDynamic).click();
				webDriver.navigate().refresh();
			}
			else
			{
				assertTrue(false,"Failed to locate element: [ "+languageOptionsDynamic+" ]");
			}
		}
	}
	
	public void closeModelWindow()
	{
		if(isElementPresent(closeModelWindowBtn, 2))
		{
			waitForExpectedElement(closeModelWindowBtn).click();
		}
	}
	
	public void searchForProduct(String productName)
	{
		if(isElementPresent(searchEditBox))
		{
			waitForExpectedElement(searchEditBox).sendKeys(productName);
			LOG.info(" [ ProductName is: "+ productName+" ]");
		}
		else
		{
			assertTrue(false,"Failed to locate element: [ "+ searchEditBox+" ]");
		}
	}
	
	public void clickOnSearchButton()
	{
		if(isElementPresent(searchButton))
		{
			waitForExpectedElement(searchButton).click();
		}
		else
		{
			assertTrue(false,"Failed to locate element: [ "+ searchButton+" ]");
		}
	}
	
	public void selectProductQuantity(String productQuantity)
	{
		if(isElementPresent(selectQuantity))
		{
			Select select = new Select(waitForExpectedElement(selectQuantity));
			select.selectByValue(productQuantity);
		}
		else
		{
			assertTrue(false,"Failed to locate element: [ "+selectQuantity+" ]");
		}
		
	}
	
	public void clickOnAddToCartButton()
	{
		if(isElementPresent(addToCartButton))
		{
			waitForExpectedElement(addToCartButton).click();
		}
		else
		{
			assertTrue(false,"Failed to locate element: [ "+addToCartButton+" ]");
		}
	}
	
	public void clickOnContinueOrderBtn()
	{
		if(isElementPresent(continueOrderHeaderBtn,2))
		{
			waitForExpectedElement(continueOrderHeaderBtn).click();
		}
		else
		{
			if(isElementPresent(continueOrderBtn,2))
			{
				waitForExpectedElement(continueOrderBtn).click();
			}
		}
	}
	
	public void verifyShippingCost(String shippingCost)
	{
		if(isElementPresent(shippingCostValue))
		{
			String actualShippingCost = waitForExpectedElement(shippingCostValue).getText();
			LOG.info("[ ActualShippingCost is: "+ actualShippingCost+" ]");
			if(!actualShippingCost.equalsIgnoreCase("Gratis"))
			{
				actualShippingCost = "NoGratis";
			}
			assertEquals(actualShippingCost, shippingCost);
		}
	}
	
	public void removeProductFromCart()
	{
		if(isElementPresent(removeCartProduct))
		{
			List<WebElement> cartLists = webDriver.findElements(removeCartProduct);
			for(WebElement cartProduct : cartLists)
			{
				waitForExpectedElement(removeCartProduct).click();
			}
		}
	}
	
	public void verifyTotalPtoductPrice(String expectedPrice)
	{
		if(isElementPresent(totalProductPrice))
		{
			String actualPrice = waitForExpectedElement(totalProductPrice).getText();
			assertEquals(actualPrice.replace("€", "").trim(), expectedPrice);
		}
		else
		{
			assertTrue(false,"Failed to locate element: "+ totalProductPrice);
		}
	}
	
}
