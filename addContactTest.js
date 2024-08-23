import { Selector } from 'testcafe'
import page from './authenticationPageModel'

fixture`Test structure`
  .page`https://thinking-tester-contact-list.herokuapp.com/`

test('Adding a Contact Test', async (t) => {
  await page.SignIn('Sara12300@gmail.com', '12345678')
  await t
    .click(page.addContact)
    .typeText('#firstName', 'Shams')
    .typeText('#lastName', 'Ghaim')
    .typeText('#birthdate', '1985-08-22')
    .typeText('#email', 'shams@gmail.com')
    .typeText('#phone', '17000000')
    .typeText('#city', 'Manama')
    .typeText('#country', 'Bahrain')
    .click('#submit')
  // TODO: assertion 
})
