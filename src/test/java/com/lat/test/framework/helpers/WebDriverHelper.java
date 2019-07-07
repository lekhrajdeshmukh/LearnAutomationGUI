package com.lat.test.framework.helpers;

import java.io.File;
import java.util.logging.Level;

import org.openqa.selenium.Dimension;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.chrome.ChromeDriverService;
import org.openqa.selenium.chrome.ChromeOptions;
import org.openqa.selenium.firefox.FirefoxDriver;
import org.openqa.selenium.firefox.FirefoxDriverLogLevel;
import org.openqa.selenium.firefox.FirefoxOptions;
import org.openqa.selenium.logging.LogType;
import org.openqa.selenium.logging.LoggingPreferences;
import org.openqa.selenium.remote.CapabilityType;
import org.openqa.selenium.remote.DesiredCapabilities;
import org.openqa.selenium.support.events.EventFiringWebDriver;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

public class WebDriverHelper extends EventFiringWebDriver  {
    private static final Logger LOG = LoggerFactory
            .getLogger(WebDriverHelper.class);
    private static String jsonInputFile = System.getProperty("user.dir")+"/target/cucumber-report/runwebat/cucumber.json";
    private static WebDriver REAL_DRIVER = null;
    private static final Thread CLOSE_THREAD = new Thread() {
        @Override
        public void run() {
        	File file = new File(jsonInputFile);
        	if(file.exists())
        	{
        		
        	}
            REAL_DRIVER.quit();
        }
    };
    private static String BROWSER;
    private static String PLATFORM;
    private static String DRIVER_PATH;
    private static String FILE_SEPARATOR;
    private static Dimension BROWSER_WINDOW_SIZE;
    private static Integer BROWSER_WINDOW_WIDTH;
    private static Integer BROWSER_WINDOW_HEIGHT;

    static {
        Props.loadConfigProperties("/environment.properties");
        FILE_SEPARATOR = System.getProperty("file.separator");
        try 
        {
			PLATFORM = Props.getProp("platform");
			BROWSER = Props.getProp("browser");
			BROWSER_WINDOW_WIDTH = Integer.parseInt(Props.getProp("browser.width"));
			BROWSER_WINDOW_HEIGHT = Integer.parseInt(Props.getProp("browser.height"));
		}
        catch(NumberFormatException ne)
        {
        	ne.printStackTrace();
        }
        catch (Exception e1) 
        {
			e1.printStackTrace();
		}
       
        BROWSER_WINDOW_SIZE = new Dimension(BROWSER_WINDOW_WIDTH, BROWSER_WINDOW_HEIGHT);

        System.setProperty("webdriver.gecko.driver", getDriverPath());
        System.setProperty("webdriver.chrome.driver", getDriverPath());

        try {
        	switch (BROWSER.toLowerCase()) {
            case ("chrome"):
                startChromeDriver();
                break;
            case ("firefox"):
                startFireFoxDriver();
                break;
            default:
                throw new IllegalArgumentException("Browser " + BROWSER + " or Platform "
                        + PLATFORM + " type not supported");
            }
        }
        catch (IllegalStateException e) {
            LOG.error(" Browser parameter: " + BROWSER + " , Platform parameter: " + PLATFORM
                    + " type not supported");
        }
        Runtime.getRuntime().addShutdownHook(CLOSE_THREAD);
    }

    private WebDriverHelper() 
    {
        super(REAL_DRIVER);
    }

    public static WebDriver getWebDriver() 
    {
        return REAL_DRIVER;
    }

    private static String getDriverPath() 
    {
        if (BROWSER.equals("firefox") && PLATFORM.contains("win")) 
        {
            DRIVER_PATH = "tools" + FILE_SEPARATOR + "geckodriver"
                    + FILE_SEPARATOR + PLATFORM + FILE_SEPARATOR
                    + "geckodriver.exe";
        }
        else if (BROWSER.equals("chrome") && PLATFORM.contains("win")) 
        {
            DRIVER_PATH = "tools" + FILE_SEPARATOR + "chromedriver"
                    + FILE_SEPARATOR + PLATFORM + FILE_SEPARATOR
                    + "chromedriver.exe";
        } 
        return DRIVER_PATH;
    }

	private static void startFireFoxDriver() 
    {
        DesiredCapabilities capabilities = getFireFoxDesiredCapabilities();
        FirefoxOptions options = new FirefoxOptions();
        options.setLogLevel(FirefoxDriverLogLevel.TRACE);
        REAL_DRIVER = new FirefoxDriver();
        REAL_DRIVER.manage().window().setSize(BROWSER_WINDOW_SIZE);
    }

    @SuppressWarnings("deprecation")
	private static void startChromeDriver() 
    {
        DesiredCapabilities capabilities = getChromeDesiredCapabilities();
        REAL_DRIVER = new ChromeDriver(ChromeDriverService.createDefaultService(), capabilities);
        REAL_DRIVER.manage().window().setSize(BROWSER_WINDOW_SIZE);
    }

    private static DesiredCapabilities getChromeDesiredCapabilities() 
    {
    	LoggingPreferences logs = new LoggingPreferences();
        logs.enable(LogType.DRIVER, Level.OFF);
        DesiredCapabilities capabilities = DesiredCapabilities.chrome();
        capabilities.setCapability(CapabilityType.LOGGING_PREFS, logs);
        ChromeOptions chromeOptions = new ChromeOptions();
        chromeOptions.addArguments("--disable-web-security");
        chromeOptions.addArguments("--test-type");
        capabilities.setCapability("chrome.verbose", false);
        capabilities.setCapability(ChromeOptions.CAPABILITY, chromeOptions);
        return capabilities;
    }

    private static DesiredCapabilities getFireFoxDesiredCapabilities() 
    {
    	LoggingPreferences logs = new LoggingPreferences();
        logs.enable(LogType.BROWSER, Level.OFF);
        DesiredCapabilities capabilities = new DesiredCapabilities();
        capabilities.setCapability("marionette", true);
        capabilities.setCapability(CapabilityType.ACCEPT_SSL_CERTS, true);
        capabilities.setBrowserName("firefox");
        capabilities.setCapability(CapabilityType.LOGGING_PREFS, logs);

        capabilities.setCapability("disable-restore-session-state", true);
        return capabilities;

    }

    @Override
    public void close() {
        if (Thread.currentThread() != CLOSE_THREAD)
        {
            throw new UnsupportedOperationException(
                    "You shouldn't close this WebDriver. It's shared and will close when the JVM exits.");
        }
        super.close();
    }
    
    
}
