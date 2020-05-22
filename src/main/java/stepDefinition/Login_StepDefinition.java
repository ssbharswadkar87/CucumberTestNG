package stepDefinition;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.testng.Assert;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class Login_StepDefinition {
	
WebDriver driver;
	
	@Given("^use is on login page before entering credentials$")
	public void user_is_already_on_login_page() {
		System.setProperty("webdriver.chrome.driver", "C:\\Drivers\\chromedriver_win32\\chromedriver.exe");
		 driver = new ChromeDriver();
		driver.get("https://ui.freecrm.com/");
			}
	
	@When("^page title is like Free CRM$")
	public void title_of_the_page_is_ICICI_bank() {
		String beforeLoginTitle = driver.getTitle();
		System.out.println("Before login Title of the page is : " +beforeLoginTitle);

	}
	
	@Then("^user enters \"(.*)\" and \"(.*)\"$")
	public void user_provide_username_and_password(String username, String password) {
		
		driver.findElement(By.xpath("//input[@name='email']")).sendKeys(username);
		driver.findElement(By.xpath("//input[@name='password']")).sendKeys(password);		
	}
	
	@Then("^user click on enter button to  login in page$")
	public void user_click_on_login_button() {
		driver.findElement(By.xpath("//div[@class='ui fluid large blue submit button']")).click();
	}
	
	@Then("^user come on after login page$")
	public void user_is_on_home_page() {
		String afterLoginTitle = driver.getTitle();
		System.out.println("Title of the page after login :" +afterLoginTitle);
		Assert.assertEquals("Cogmento CRM", afterLoginTitle);
	    
	}


}
