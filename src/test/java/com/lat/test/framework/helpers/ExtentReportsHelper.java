package com.lat.test.framework.helpers;
/*package com.bol.test.framework.helpers;

import java.io.File;

import org.testng.ITestResult;
import org.testng.annotations.AfterMethod;
import org.testng.annotations.AfterTest;
import org.testng.annotations.BeforeTest;
import org.testng.annotations.Test;

import com.relevantcodes.extentreports.ExtentReports;
import com.relevantcodes.extentreports.ExtentTest;
import com.relevantcodes.extentreports.LogStatus;

public class ExtentReportsHelper {
	static ExtentReports extentReports;
	static ExtentTest extentTest;
	
	
	public static void startReport()
	{
		String extentReportDir = System.getProperty("user.dir")+"//target//extent-report//extent.html";
		String extentConfigDir = System.getProperty("user.dir")+"//src//test//resources//config//extent-config.xml";
		extentReports = new ExtentReports(extentReportDir,true);
		extentReports.loadConfig(new File(extentConfigDir));
	}
	
	@Test
	public void passTest(String ...propertyKeyName) throws Exception
	{
		if(propertyKeyName.length == 1)
		{
			System.out.println("Key: [ "+propertyKeyName+" ] , value is: "+Props.getProp(propertyKeyName[0]));
		}
		extentTest = extentReports.startTest("passTest");
		extentTest.log(LogStatus.PASS, "Test case is passed");
	}
	
	@Test
	public void faileTest(String ...propertyKeyName) throws Exception
	{
		if(propertyKeyName.length == 1)
		{
			System.out.println("Key: [ "+propertyKeyName+" ] , value is: "+Props.getProp(propertyKeyName[0]));
		}
		extentTest = extentReports.startTest("failTest");
		extentTest.log(LogStatus.FAIL, "Test case is failed");
	}
	
	@Test
	public void skipTest()
	{
		extentTest = extentReports.startTest("skipTest");
		extentTest.log(LogStatus.SKIP, "Test case is Skipped");
	}
	
	@AfterMethod
	 public void getResult(ITestResult result){
	 if(result.getStatus() == ITestResult.FAILURE){
		 extentTest.log(LogStatus.FAIL, "Test Case Failed is "+result.getName());
		 extentTest.log(LogStatus.FAIL, "Test Case Failed is "+result.getThrowable());
	 }else if(result.getStatus() == ITestResult.SKIP){
		 extentTest.log(LogStatus.SKIP, "Test Case Skipped is "+result.getName());
	 }
	 // ending test
	 //endTest(logger) : It ends the current test and prepares to create HTML report
	 extentReports.endTest(extentTest);
	 }

	public static void endReport(){
	 // writing everything to document
	 //flush() - to write or update test information to your report. 
	                extentReports.flush();
	                //Call close() at the very end of your session to clear all resources. 
	                //If any of your test ended abruptly causing any side-affects (not all logs sent to ExtentReports, information missing), this method will ensure that the test is still appended to the report with a warning message.
	                //You should call close() only once, at the very end (in @AfterSuite for example) as it closes the underlying stream. 
	                //Once this method is called, calling any Extent method will throw an error.
	                //close() - To close all the operation
	                extentReports.close();
	    }
}
*/