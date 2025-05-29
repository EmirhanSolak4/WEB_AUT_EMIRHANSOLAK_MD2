describe('Scenario 2 - Appointment History is empty', () => {
  it('should show no appointment message', () => {
    cy.visit('https://katalon-demo-cura.herokuapp.com/');

    // Make Appointment
    cy.contains('Make Appointment').click();

    // Login
    cy.get('#txt-username').type('John Doe');
    cy.get('#txt-password').type('ThisIsNotAPassword');
    cy.get('#btn-login').click();

    // Açılır menüyü aç
    cy.get('#menu-toggle').click();

    // Sidebar görünür mü?
    cy.get('#sidebar-wrapper').should('be.visible');

    // History'ye tıkla
    cy.contains('History').click();

    // "No appointment" yazısını gör
    cy.contains('No appointment').should('be.visible');
  });
});
