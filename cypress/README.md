# Requirements 

* Have node.js installed
    * https://nodejs.org/en/download/

---

# Run tests
## Run in headless mode
```
npx cypress run
```

### Reports
Reports will be in 
```
/cypress/reports/index.html
```
Video recording will be in
```
/cypress/videos
```
---
## Run with UI
```
npx cypress open
```

---

# Gherkin scenarios

```
Given a locked out user  
When the user logs in
Then the screen will promt an error message
```

```
Given a valid user  
When the user logs in
And select the first product 
Then the product is added to the cart
```

```
Given a valid user  
When the user logs in
And filter products by price
Then the products list will rearrange
```

```
Given a valid user  
When the user logs in
And select the first product 
And the product is added to the cart
And complete the checkout process
Then a checkout overview screen is shown
```