package com.lat.test.framework.helpers;

import static java.lang.System.out;

import java.io.IOException;
import java.io.InputStream;
import java.util.Properties;
import java.util.ResourceBundle;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

public class Props {
	private static final Logger LOG = LoggerFactory.getLogger(Props.class);
	private static Properties environmentProps;
	private static Properties properties;
	
	public static String getProp(String key) throws Exception
	{
		if(key == null || key.isEmpty())
		{
			return "";
		}
		else
		{
			try
			{
				if(properties.getProperty(key) == null)
				{
					throw new Exception("Failed to get value for key: [ "+ key+" ] from proeprty file");
				}
				else
				{
					return properties.getProperty(key);
				}
			}
			catch(NumberFormatException ne)
			{
				LOG.error(ne.getMessage()+" for key: "+key);
				return "";
			}
		}
	}
	
	public static void loadConfigProperties(String configPropertyFileLocation)
	{
		environmentProps = new Properties();
		try (InputStream inputStream = Props.class.getResourceAsStream(configPropertyFileLocation))
		{
			environmentProps.load(inputStream);
			environmentProps.list(out);
		}
		catch(IOException e)
		{
			LOG.error(e.getMessage());
		}
		properties = new Properties();
		try (InputStream inputStream = Props.class.getResourceAsStream(environmentProps.getProperty("profile.path")))
		{
			properties.load(inputStream);
			properties.list(out);
		}
		catch(Exception e)
		{
			LOG.error(e.getMessage());
		}
	}
	
}
