# End to End Testing in TestCafe


## OverView:
Build an end-to-end testing framework for a web app which validates the expected results/scenarios and imitates real user behavior

---
## Getting Started:
1. `npm install -g testcafe`
2. `git clone https://github.com/Fatema-J/auth-test.git`
3. `cd auth-test`
4. Run tests in chrome: `testcafe "chrome:headless" e2eTest.js`
5. Run tests in mobile: `testcafe "chrome:headless:emulation:device=iphone X" authenticationTest.js   `
6. Run in multiple browsers: `testcafe "chrome:headless, firefox" e2eTest.js`



---

## Test Cases:
In this project I included tests for different scenarios in authentication and an End to End test that imitates real user behavior

1. **Test Case: Authentication Scenarios** 

**Description**:
This test case covers the different scenarios a user can get through when signing such as (signing up, signing in, signing out, registering with used email, and sign in with wrong credentials).

### Preconditions:
- The application is accessible at the given URL.
- No pre-existing account with the email `sama330@gmail.com`.

### Test Steps:
1. Sign Up:
   - Navigate to the Sign Up page.
   - Fill in the required fields (first name, last name, email, password).
   - Submit the form.
   
2. Verify Sign Up:
   - Ensure the user is redirected to Contact page.

3. Sign In:
   - Log out of the current session.
   - Sign in with the newly created account.

4. Sign Up With Already Existed Account:
   - Navigate to the Sign Up page.
   - Fill in the required fields with used email.
   - Submit the form.
   - Verify an alert that the email already used appears.

5. Sign In with Wrong Credentials:
   - Sign in without filling the password field.
   - Verify that the user validation failed alert appeared.

### Expected Results:
- User is successfully signed up and can log in.
- Alerts are shown when needed.


---
2. **Test Case: End to End User Workflow**

**Description**:
This test case covers the complete user journey of signing up, signing in, adding a contact, editing that contact, and then deleting it.

### Preconditions:
- The application is accessible at the given URL.
- No pre-existing account with the email `tylos505@gmail.com`.

### Test Steps:
1. Sign Up:
   - Navigate to the Sign Up page.
   - Fill in the required fields (first name, last name, email, password).
   - Submit the form.
   
2. Verify Sign Up:
   - Ensure the user is redirected to Contact page.

3. Sign In:
   - Log out of the current session.
   - Sign in with the newly created account.

4. Add Contact:
   - Navigate to Add Contact.
   - Fill in the contact form with valid data.
   - Submit the form.
   - Verify contact added.

5. Edit Contact:
   - Locate the newly added contact.
   - Edit the city and save changes.
   - Verify contact edit.

7. Delete Contact:
   - Delete the newly added contact.
   - Confirm that the contact is removed from the list.

### Expected Results:
- User is successfully signed up and can log in.
- The contact is added, edited, and deleted as expected without errors.


---

### Credits:
- https://thinking-tester-contact-list.herokuapp.com/

- https://testcafe.io/documentation/402635/guides/overview/getting-started

- https://stackoverflow.com/questions/53402112/is-there-a-suggested-file-structure-for-testcafe-e2e-tests

- https://testcafe.io/documentation/402836/guides/best-practices/best-practices

- https://testcafe.io/documentation/402826/guides/best-practices/page-model

- https://testcafe.io/documentation/402719/reference/test-api/testcontroller/expect/notok
