package com.lat.test.steps.gui;



import org.openqa.selenium.OutputType;
import org.openqa.selenium.TakesScreenshot;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;






import com.cucumber.listener.Reporter;
import com.lat.test.framework.helpers.ScreenshotHalper;
import com.lat.test.framework.helpers.WebDriverHelper;
import com.lat.test.steps.pages.FreeShippingPages;

import cucumber.api.Scenario;
import cucumber.api.java.After;

public class BolTestHooks {
	private static Logger LOG = LoggerFactory.getLogger(BolTestHooks.class);
	
	
	@After
	public void afterScenario(Scenario scenario) throws Exception
	{
		if(scenario.isFailed())
		{
			LOG.error("[ Test execution failed for scenario: "+ scenario.getName()+" ]");
			try
			{
				scenario.write(WebDriverHelper.getWebDriver().getCurrentUrl());
	            byte[] screenShot = ((TakesScreenshot) WebDriverHelper.getWebDriver()).getScreenshotAs(OutputType.BYTES);
	            scenario.embed(screenShot, "image/png");
	            String extentScreenshot = new String(screenShot);
	            Reporter.addScreenCaptureFromPath(ScreenshotHalper.takeFailureScreenShot());;
				FreeShippingPages freeShippingPage = new FreeShippingPages();
				freeShippingPage.removeProductFromCart();
			}
			catch(NoClassDefFoundError e)
			{
				throw new Exception(e.getMessage());
			}
			
		}
	}

}
