Feature: Free CRM login with Example keyword

Scenario Outline: CRm login page check

Given use is on login page before entering credentials
When page title is like Free CRM
Then user enters "<username>" and "<password>"
Then user click on enter button to  login in page
Then user come on after login page

Examples:
	| username 					| password 	|
	|ssbharswadkar87@gmail.com	| Abc@12345 |
	|ss_bharswadkar@yahoo.com	| Abc@12345	|