$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("C:/Users/Dell/eclipse-workspace/CucumberWithTestNG/src/main/java/featureFile/Login.feature");
formatter.feature({
  "line": 1,
  "name": "Free CRM login with Example keyword",
  "description": "",
  "id": "free-crm-login-with-example-keyword",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 3,
  "name": "CRm login page check",
  "description": "",
  "id": "free-crm-login-with-example-keyword;crm-login-page-check",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 5,
  "name": "use is on login page before entering credentials",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "page title is like Free CRM",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "user enters \"\u003cusername\u003e\" and \"\u003cpassword\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "user click on enter button to  login in page",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "user come on after login page",
  "keyword": "Then "
});
formatter.examples({
  "line": 11,
  "name": "",
  "description": "",
  "id": "free-crm-login-with-example-keyword;crm-login-page-check;",
  "rows": [
    {
      "cells": [
        "username",
        "password"
      ],
      "line": 12,
      "id": "free-crm-login-with-example-keyword;crm-login-page-check;;1"
    },
    {
      "cells": [
        "ssbharswadkar87@gmail.com",
        "Abc@12345"
      ],
      "line": 13,
      "id": "free-crm-login-with-example-keyword;crm-login-page-check;;2"
    },
    {
      "cells": [
        "ss_bharswadkar@yahoo.com",
        "Abc@12345"
      ],
      "line": 14,
      "id": "free-crm-login-with-example-keyword;crm-login-page-check;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 13,
  "name": "CRm login page check",
  "description": "",
  "id": "free-crm-login-with-example-keyword;crm-login-page-check;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 5,
  "name": "use is on login page before entering credentials",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "page title is like Free CRM",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "user enters \"ssbharswadkar87@gmail.com\" and \"Abc@12345\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "user click on enter button to  login in page",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "user come on after login page",
  "keyword": "Then "
});
formatter.match({
  "location": "Login_StepDefinition.user_is_already_on_login_page()"
});
formatter.result({
  "duration": 11345710500,
  "status": "passed"
});
formatter.match({
  "location": "Login_StepDefinition.title_of_the_page_is_ICICI_bank()"
});
formatter.result({
  "duration": 12518599,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "ssbharswadkar87@gmail.com",
      "offset": 13
    },
    {
      "val": "Abc@12345",
      "offset": 45
    }
  ],
  "location": "Login_StepDefinition.user_provide_username_and_password(String,String)"
});
formatter.result({
  "duration": 700119599,
  "status": "passed"
});
formatter.match({
  "location": "Login_StepDefinition.user_click_on_login_button()"
});
formatter.result({
  "duration": 160738400,
  "status": "passed"
});
formatter.match({
  "location": "Login_StepDefinition.user_is_on_home_page()"
});
formatter.result({
  "duration": 15554801,
  "status": "passed"
});
formatter.scenario({
  "line": 14,
  "name": "CRm login page check",
  "description": "",
  "id": "free-crm-login-with-example-keyword;crm-login-page-check;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 5,
  "name": "use is on login page before entering credentials",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "page title is like Free CRM",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "user enters \"ss_bharswadkar@yahoo.com\" and \"Abc@12345\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "user click on enter button to  login in page",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "user come on after login page",
  "keyword": "Then "
});
formatter.match({
  "location": "Login_StepDefinition.user_is_already_on_login_page()"
});
formatter.result({
  "duration": 10075042400,
  "status": "passed"
});
formatter.match({
  "location": "Login_StepDefinition.title_of_the_page_is_ICICI_bank()"
});
formatter.result({
  "duration": 16349901,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "ss_bharswadkar@yahoo.com",
      "offset": 13
    },
    {
      "val": "Abc@12345",
      "offset": 44
    }
  ],
  "location": "Login_StepDefinition.user_provide_username_and_password(String,String)"
});
formatter.result({
  "duration": 1135742100,
  "status": "passed"
});
formatter.match({
  "location": "Login_StepDefinition.user_click_on_login_button()"
});
formatter.result({
  "duration": 164479200,
  "status": "passed"
});
formatter.match({
  "location": "Login_StepDefinition.user_is_on_home_page()"
});
formatter.result({
  "duration": 14782900,
  "status": "passed"
});
});