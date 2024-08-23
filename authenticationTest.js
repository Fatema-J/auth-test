import { Selector } from 'testcafe'
import page from './authenticationPageModel'

// source: https://testcafe.io/documentation/402831/guides/basic-guides/test-structure
// Fixtures are groups of tests that share the same starting URL.
// better to have one per file
fixture`Test structure`
  .page`https://thinking-tester-contact-list.herokuapp.com/`

// first arg is the name of the test
test('SignUp The User, SignOut and SignIn Test', async (t) => {
  // Sign up process
  await page.SignUp('Sara', 'Khalid', 'Sara12300@gmail.com', '12345678')
  await t.expect(page.addContact.exists).ok()

  // Sign out then Sign in
  await t.click('#logout')
  await page.SignIn('Sara12300@gmail.com', '12345678')
  await t.expect(page.addContact.exists).ok()
})

test.only('Signing Up with Already Registered User', async (t) => {
  await page.SignUp('Sara', 'Khalid', 'Sara12300@gmail.com', '12345678')
  await t
    .expect(Selector('#error').innerText)
    .contains('Email address is already in use')
})

test.only('Signing Up without Password', async (t) => {
  await t
    .click('#signup')
    .typeText('#firstName', 'Sara')
    .typeText('#lastName', 'Khalid')
    .typeText('#email', 'Sara12300@gmail.com')
    .click('#submit')
    .expect(Selector('#error').innerText)
    .contains('User validation failed: password: Path `password` is required.')
})

test.only('Signing In with Unregistered User', async (t) => {
  await page.SignIn('delmonia@gmail.com', '0987654321')
  await t
    .expect(Selector('#error').innerText)
    .contains('Incorrect username or password')
})
