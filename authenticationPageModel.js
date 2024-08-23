import { Selector, t } from 'testcafe'

class Page {
  constructor() {
    this.addContact = Selector('#add-contact')
  }

  async SignIn(email, password) {
    await t
      .typeText('#email', email)
      .typeText('#password', password)
      .click('#submit')
  }

  async SignUp(firstName, lastName, email, password) {
    await t
      .click('#signup')
      .typeText('#firstName', firstName)
      .typeText('#lastName', lastName)
      .typeText('#email', email)
      .typeText('#password', password)
      .click('#submit')
  }
}

export default new Page()
