import { Selector } from 'testcafe'

// source: https://testcafe.io/documentation/402831/guides/basic-guides/test-structure
// Fixtures are groups of tests that share the same starting URL.
// better to have one per file
fixture`Test structure`
  .page`https://thinking-tester-contact-list.herokuapp.com/`

// first arg is the name of the test
test('SignUp The User, SignOut and SignIn Test', async (t) => {
  // Sign up process
  await t
    .click('#signup')
    .typeText('#firstName', 'Sara')
    .typeText('#lastName', 'Khalid')
    .typeText('#email', 'Sara12300@gmail.com')
    .typeText('#password', '12345678')
    .click('#submit')
    .expect(Selector('#add-contact').exists)
    .ok()

  // Sign out then Sign in
  await t
    .click('#logout')
    .typeText('#email', 'Sara12300@gmail.com')
    .typeText('#password', '12345678')
    .click('#submit')
    .expect(Selector('#add-contact').exists)
    .ok()
})
