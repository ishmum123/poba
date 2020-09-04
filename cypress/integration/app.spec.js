describe('App', () => {
    it('can perform login/logout', () => {
        cy.visit('/');

        // TODO: Follow 'AAA'
        cy.contains('Login').click();
        cy.get('.App button').should('contain.text', 'Log Out');

        cy.contains('Log Out').click();
        cy.get('.App button').should('contain.text', 'Login');
    });
})