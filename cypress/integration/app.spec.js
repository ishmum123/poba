describe('App', () => {
    beforeEach(() => cy.visit('/'));

    it('provides global summary', () => {
        cy.get('.App').should('contain.text', 'Confirmed');
    });

    it('routes to following', () => {
        cy.contains('Following').click();
        cy.get('.App').should('contain.html', '<div class="Following"></div>');
    });

    it('routes to country', () => {
        cy.contains('USA').click();
        cy.get('.App').should('contain.html', '<h1>USA</h1>');
    });
})