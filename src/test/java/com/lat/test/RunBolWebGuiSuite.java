package com.lat.test;

import java.io.File;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.testng.annotations.AfterClass;
import org.testng.annotations.BeforeClass;
import org.testng.annotations.BeforeTest;



import com.cucumber.listener.Reporter;
import com.lat.test.framework.helpers.Props;

import cucumber.api.CucumberOptions;
import cucumber.api.testng.AbstractTestNGCucumberTests;


@CucumberOptions(features = "src/test/resources/features/gui"
				,monochrome=true
				,plugin = {
							"pretty", "html:target/cucumber-report/runwebat",
							"json:target/cucumber-report/runwebat/cucumber.json",
							"rerun:target/cucumber-report/runwebat/rerun.txt",
							"com.cucumber.listener.ExtentCucumberFormatter:target/extent-report/extent.html"
						  }
				,glue={"com.lat.test.steps.gui"}
				,dryRun=false
				,strict=true
		)
public class RunBolWebGuiSuite extends AbstractTestNGCucumberTests {
	private static Logger LOG = LoggerFactory.getLogger(RunBolWebGuiSuite.class);
		
	@AfterClass
	public static void LOG()
	{
		try {
			Reporter.loadXMLConfig(new File(System.getProperty("user.dir")+Props.getProp("extent.report.config")));
		} catch (Exception e) {
			LOG.error("Failed to load config xml file");
		}
	}
	
	
	
}
