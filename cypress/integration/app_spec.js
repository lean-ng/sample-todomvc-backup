describe('Angular TodoMVC', () => {

  describe('when page is initially opened', () => {

    it('should focus on the todo input field', () => {
      cy.visit('http://localhost:4200/');
      cy.focused().should('have.class','new-todo');
    });

  });

});
