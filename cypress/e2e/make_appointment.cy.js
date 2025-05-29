describe('Scenario 1 - Make an Appointment', () => {
  it('should complete the appointment form successfully', () => {
    cy.visit('https://katalon-demo-cura.herokuapp.com/');

    // Make Appointment
    cy.contains('Make Appointment').click();

    // Login
    cy.get('#txt-username').type('John Doe');
    cy.get('#txt-password').type('ThisIsNotAPassword');
    cy.get('#btn-login').click();

    // Fill form
    cy.get('#combo_facility').select('Seoul CURA Healthcare Center');
    cy.get('#chk_hospotal_readmission').check();
    cy.get('#radio_program_medicaid').check();
    cy.get('#txt_visit_date').click();
    cy.get('.day').contains('30').click();
    cy.get('#txt_comment').type('CURA Healthcare Service');
    cy.get('#btn-book-appointment').click();

    // Validation
    cy.get('#facility').should('have.text', 'Seoul CURA Healthcare Center');
    cy.get('#hospital_readmission').should('have.text', 'Yes');
    cy.get('#program').should('have.text', 'Medicaid');
    cy.get('#visit_date').should('contain.text', '30');
    cy.get('#comment').should('have.text', 'CURA Healthcare Service');
  });
});
