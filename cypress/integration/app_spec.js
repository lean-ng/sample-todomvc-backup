describe('Angular TodoMVC', () => {

  describe('when page is initially opened', () => {

    it('should focus on the todo input field', () => {
      cy.visit('http://localhost:4200/');
      cy.focused().should('have.class','new-todo');
    });

  });

  describe('with no todos', () => {

    it('should hide the main and footer sections', () => {
      cy.visit('http://localhost:4200/');
      cy.get('.main').should('have.class', 'hidden');
      cy.get('.footer').should('have.class', 'hidden');
    });

    it('should have an empty todo list', () => {
      cy.visit('http://localhost:4200/');
      cy.get('.todo-list li').should('have.length', 0);
    });
  });

  describe('when entering new todos', () => {

    beforeEach(() => {
      cy.visit('http://localhost:4200/');
    });

    it('should me allow to enter a new todo', () => {
      cy.get('.new-todo').type('E2E Testing{enter}');
      cy.get('.todo-list li').should('have.length', 1);
    });
  });
});
