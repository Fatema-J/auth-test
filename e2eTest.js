import { Selector } from 'testcafe'
import page from './authenticationPageModel'

fixture`Test structure`
  .page`https://thinking-tester-contact-list.herokuapp.com/`

const email = 'tylos404@gmail.com'
const password = '12345678'
const contactFirstName = 'Shams'
const contactLastName = 'Ghaim'
const contactFullName = contactFirstName + ' ' + contactLastName

test('End to End Test', async (t) => {
  // Sign up
  await page.SignUp('mary', 'Khalid', email, password)
  await t.expect(page.addContact.exists).ok()

  // Sign in
  await t.click('#logout')
  await page.SignIn(email, password)
  await t.expect(page.addContact.exists).ok()

  // Add contact
  await t
    .click(page.addContact)
    .typeText('#firstName', contactFirstName)
    .typeText('#lastName', contactLastName)
    .typeText('#birthdate', '1985-08-22')
    .typeText('#email', 'shams@gmail.com')
    .typeText('#phone', '17000000')
    .typeText('#city', 'Manama')
    .typeText('#country', 'Bahrain')
    await page.Submit()

  const tableCell = await Selector('td').withText(contactFirstName)
  await t.expect(tableCell.exists).ok()

  // Edit contact
  await t
    .click(Selector('td').withText(contactFullName))
    .click('#edit-contact')
    .typeText('#city', 'Muharraq', { replace: true })
  await page.Submit()
  await t.click('#return')

  // get the edited city
  const cityCell = await tableCell.parent('tr').child('td:nth-child(7)')
    .innerText

  await t.expect(cityCell).eql('Muharraq')

  // Delete contact
  await t
    // accept every alert
    .setNativeDialogHandler(() => true)
    .click(Selector('td').withText(contactFullName))
    .click('#delete')
    .expect(
      Selector('tr').withText(contactFullName).exists
    )
    .notOk()
})
