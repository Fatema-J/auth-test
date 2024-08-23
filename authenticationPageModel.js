import { Selector } from 'testcafe';

class Page {
  constructor() {
    this.addContact = Selector('#add-contact')
  }
}

export default new Page();