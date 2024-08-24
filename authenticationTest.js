import { Selector } from 'testcafe'
import page from './authenticationPageModel'

fixture`Test structure`
  .page`https://thinking-tester-contact-list.herokuapp.com/`

const email = 'sama330@gmail.com'
const password = '12345678'

// first arg is the name of the test
test('SignUp The User, SignOut and SignIn Test', async (t) => {
  // Sign up process
  await page.SignUp('Sama', 'Khalid', email, password)
  await t.expect(page.addContact.exists).ok()

  // Sign out then Sign in
  await t.click('#logout')
  await page.SignIn(email, password)
  await t.expect(page.addContact.exists).ok()
})

test.only('Signing Up with Already Registered User Test', async (t) => {
  await page.SignUp('Sara', 'Khalid', email, password)
  await t
    .expect(Selector('#error').innerText)
    .contains('Email address is already in use')
})

test.only('Signing Up without Password Test', async (t) => {
  await t
    .click('#signup')
    .typeText('#firstName', 'Sara')
    .typeText('#lastName', 'Khalid')
    .typeText('#email', email)
    .click('#submit')
    .expect(Selector('#error').innerText)
    .contains('User validation failed: password: Path `password` is required.')
})

test.only('Signing In with Unregistered User Test', async (t) => {
  await page.SignIn('delmonia@gmail.com', '0987654321')
  await t
    .expect(Selector('#error').innerText)
    .contains('Incorrect username or password')
})
