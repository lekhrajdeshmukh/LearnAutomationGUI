package com.lat.test.framework;



import java.util.List;

import lombok.Getter;

import org.openqa.selenium.By;
import org.openqa.selenium.NoSuchElementException;
import org.openqa.selenium.TimeoutException;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import com.lat.test.framework.helpers.WebDriverHelper;

public class PageObject {
	private static final long DRIVER_WAIT_TIME = 10;
	private static final Logger LOG = LoggerFactory.getLogger(PageObject.class);
	
//	@Getter
	protected WebDriverWait wait;
	
//	@Getter
	protected WebDriver webDriver;
	
	protected PageObject()
	{
		this.webDriver = WebDriverHelper.getWebDriver();
		this.wait = new WebDriverWait(webDriver,DRIVER_WAIT_TIME);
	}
	
	protected WebElement waitForExpectedElement(final By by)
	{
		return wait.until(ExpectedConditions.visibilityOfElementLocated(by));
	}
	
	protected WebElement waitForExpectedElement(final By by, long timeInMiliSeconds)
	{
		try
		{
			WebDriverWait wait = new WebDriverWait(webDriver, timeInMiliSeconds);
			return wait.until(ExpectedConditions.visibilityOfElementLocated(by));
		}
		catch(NoSuchElementException e)
		{
			LOG.info(e.getMessage());
			return null;
		}
		catch(TimeoutException e)
		{
			LOG.error(e.getMessage());
			return null;
		}
	}
	
	protected boolean textToBePresentInElement(WebElement element,String text)
	{
		return wait.until(ExpectedConditions.textToBePresentInElement(element, text));
	}
	
	 public boolean isElementPresent(final By by) 
	 {
	        try 
	        {
	            new WebDriverWait(webDriver, DRIVER_WAIT_TIME).until(ExpectedConditions.presenceOfElementLocated(by));

	        } catch (TimeoutException exception) 
	        {
	            return false;
	        }
	        return true;
	 }
	 public boolean isElementPresent(final By by,long waitTime) 
	 {
	        try 
	        {
	            new WebDriverWait(webDriver, waitTime).until(ExpectedConditions.presenceOfElementLocated(by));

	        } catch (TimeoutException exception) 
	        {
	            return false;
	        }
	        return true;
	 }
	 
	 public List<WebElement> presenceOfAllElementsLocatedBy(final By by) 
	 {
	        return (new WebDriverWait(webDriver, DRIVER_WAIT_TIME)).until(ExpectedConditions.presenceOfAllElementsLocatedBy(by));
	 }
}
