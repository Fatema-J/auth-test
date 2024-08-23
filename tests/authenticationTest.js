import { Selector } from 'testcafe';

// source: https://testcafe.io/documentation/402831/guides/basic-guides/test-structure
// Fixtures are groups of tests that share the same starting URL.
// better to have one per file
fixture`Test structure`.page`https://thinking-tester-contact-list.herokuapp.com/login`

// first arg is the name of the test
test('SignUp The User, SignOut and SignIn Test', async (t) => {
  // Sign up process
  await t
    .click('#signup')
    .typeText('#firstName', 'Aisha')
    .typeText('#lastName', 'Khalid') 
    .typeText('#email', 'aisha@gmail.com')
    .typeText('#password', '12345678')
    .click('#submit')
  
  await t
  .click('#logout')
  

})
