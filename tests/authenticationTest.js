import { Selector } from 'testcafe';

// source: https://testcafe.io/documentation/402831/guides/basic-guides/test-structure
// Fixtures are groups of tests that share the same starting URL.
// better to have one per file
fixture`Test structure`.page`https://automationexercise.com/login`

// first arg is the name of the test
test('SignUp The User, SignOut and SignIn Test', async (t) => {
  // Sign up process
  await t
    .typeText('[data-qa="signup-name"]', 'Aisha')
    .typeText('[data-qa="signup-email"]', 'aisha@gmail.com')
    .click('[data-qa="signup-button"]')
    .typeText('#password', '12345678')
    .typeText('#first_name', 'Aisha')
    .typeText('#last_name', 'Khalid')
    .typeText(
      '#address1',
      'Company Name: Tech Innovators Inc. Street Address: 1234 P.O. Box: P.O. Box 5678'
  )
    .click('#country')
    .click(Selector('option').withText('United States'))
    .typeText('#state', 'Capital')
    .typeText('#city', 'Manama')
    .typeText('#zipcode', '00000')
    .typeText('#mobile_number', '38383838')
    .click('[data-qa="create-account"]')
  
})
