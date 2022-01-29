describe('demo', () => {
  it('visual regression test', () => {
    cy.visit('/').wait(2000).screenshot('index')

    // // Custom command example, see `../support/commands.ts` file
    // cy.login('my-email@something.com', 'myPassword');
    // // Function helper example, see `../support/app.po.ts` file
    // getGreeting().contains('Welcome demo');
  })
})
