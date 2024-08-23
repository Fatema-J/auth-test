import { Selector, t } from 'testcafe';

class Page {
  constructor() {
    this.addContact = Selector('#add-contact')
  }

  async SignIn(name, password) {
    await t
    .typeText('#email', name)
    .typeText('#password', password)
    .click('#submit')
  }
}

export default new Page();