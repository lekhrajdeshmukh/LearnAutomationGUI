package com.lat.test.framework.helpers;

import java.io.File;
import java.text.DateFormat;
import java.text.SimpleDateFormat;
import java.util.Date;

import org.apache.commons.io.FileUtils;
import org.joda.time.DateTime;
import org.joda.time.LocalDateTime;
import org.openqa.selenium.OutputType;
import org.openqa.selenium.TakesScreenshot;

import com.aventstack.extentreports.utils.FileUtil;

public class ScreenshotHalper {
	
	public static String takeFailureScreenShot()
	{
		try {
			String screenshotLocation = System.getProperty("user.dir")+Props.getProp("failure.screenshot.location");
			String destFile = screenshotLocation+getCurrentDateTime()+".png";
			TakesScreenshot srcShot = (TakesScreenshot)WebDriverHelper.getWebDriver();
			File srcFile = srcShot.getScreenshotAs(OutputType.FILE);
			FileUtils.copyFile(srcFile, new File(destFile));
			return destFile;
		} catch (Exception e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
			return "";
		}
		
	}
	
	public static String getCurrentDateTime()
	{
		LocalDateTime localDateTime = new LocalDateTime();
		return localDateTime.toString().replaceAll(":", "_").replaceAll("-", "_");
	}

}
