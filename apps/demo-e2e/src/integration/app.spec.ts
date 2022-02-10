describe('demo', () => {
  it('visual regression test', () => {
    // eslint-disable-next-line cypress/no-unnecessary-waiting
    cy.visit('/').wait(3000).screenshot('index')

    // // Custom command example, see `../support/commands.ts` file
    // cy.login('my-email@something.com', 'myPassword');
    // // Function helper example, see `../support/app.po.ts` file
    // getGreeting().contains('Welcome demo');
  })
})
