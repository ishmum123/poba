describe('App', () => {
    beforeEach(() => cy.visit('/'));

    it('provides global summary', () => {
        cy.get('.App th').should('contain.text', 'Confirmed');
        cy.get('.App tr>td').eq(0)
            .should($div => expect(parseInt($div.text())).to.be.greaterThan(25481467))
    });

    it('routes to following', () => {
        localStorage.setItem('followings', JSON.stringify(['usa']));
        cy.contains('Following').click();
        cy.url().should('include', 'following');
        cy.get('.App span').should('contain.text', 'USA');
    });

    it('routes to country', () => {
        cy.contains('USA').click();
        cy.url().should('include', 'usa');
        cy.get('.App tr>td').eq(1)
            .should($div => expect(parseInt($div.text())).to.equal(30))
    });
})