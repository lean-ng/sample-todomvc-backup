describe('Angular TodoMVC', () => {

  describe('when page is initially opened', () => {

    it('should focus on the todo input field', () => {
      cy.visit('/');
      cy.focused().should('have.class','new-todo');
    });

  });

  describe('with no todos', () => {

    it('should hide the main and footer sections', () => {
      cy.visit('/');
      cy.get('.main').should('have.class', 'hidden');
      cy.get('.footer').should('have.class', 'hidden');
    });

    it('should have an empty todo list', () => {
      cy.visit('/');
      cy.get('.todo-list li').should('have.length', 0);
    });
  });

  describe('when entering new todos', () => {

    beforeEach(() => {
      cy.visit('/');
    });

    it('should me allow to enter a new todo', () => {
      cy.get('.new-todo').type('E2E Testing{enter}');
      cy.get('.todo-list li').should('have.length', 1);
    });

    it('should not allow to enter an empty todo', () => {
      cy.get('.new-todo').type('{enter}');
      cy.get('.new-todo').type('   {enter}');
      cy.get('.todo-list li').should('have.length', 0);
    });

    it('should trim the entered todo', () => {
      cy.get('.new-todo').type(' Space around  {enter}');
      cy.contains('Space around').should('have.html', 'Space around');
    });

    it('should clear the input field after entering', () => {
      cy.get('.new-todo').type('Empty field after{enter}');
      cy.get('.new-todo').should('have.value', '');
    });

    it('should show the main and footer sections', () => {
      cy.get('.new-todo').type('E2E Testing{enter}');
      cy.get('.main').should('not.have.class', 'hidden');
      cy.get('.footer').should('not.have.class', 'hidden');
    });

    it('should append the new todo at the list end', () => {
      cy.get('.new-todo').type('E2E Testing{enter}');
      cy.get('.todo-list li').last().contains('E2E Testing');
      cy.get('.new-todo').type('Unit Testing{enter}');
      cy.get('.todo-list li').last().contains('Unit Testing');
      cy.get('.new-todo').type('CI and CD{enter}');
      cy.get('.todo-list li').first().contains('E2E Testing');
      cy.get('.todo-list li').last().contains('CI and CD');
    });

    it('should persist the todos', () => {
      cy.get('.new-todo').type('E2E Testing{enter}');
      cy.get('.new-todo').type('Unit Testing{enter}');
      cy.reload();
      cy.get('.todo-list li').should('have.length', 2);
    });
  });

  describe('modifying items / deleting items', () => {

    beforeEach(() => {
      cy.visit('/');
      cy.get('.new-todo').type('E2E Testing{enter}');
      cy.get('.new-todo').type('Unit Testing{enter}');
    });

    it('should allow me to mark items as complete', () => {
      cy.get('input.toggle').first().check();
      cy.get('.todo-list li').first().should('have.class','completed');
      cy.get('.todo-list li').last().should('not.have.class','completed');
      cy.get('input.toggle').last().check();
      cy.get('.todo-list li').last().should('have.class','completed');
    });

    it('should allow me to mark items as complete', () => {
      cy.get('input.toggle').first().check();
      cy.get('.todo-list li').first().should('have.class','completed');
      cy.get('.todo-list li').last().should('not.have.class','completed');
      cy.get('input.toggle').last().check();
      cy.get('.todo-list li').last().should('have.class','completed');
    });

    it('should allow me to delete items', () => {
      cy.get('button.destroy').first().click({force: true});
      cy.get('.todo-list li').should('have.length', 1);
      cy.get('button.destroy').first().click({force: true});
      cy.get('.todo-list li').should('have.length', 0);
    });

    it('should allow me to enter edit mode', () => {
      cy.get('.view label').first().dblclick();
      cy.get('.todo-list li').first().should('have.class', 'editing');
    });
  });

  describe('editing items', () => {

    beforeEach(() => {
      cy.visit('/');
      cy.get('.new-todo').type('E2E Testing{enter}');
      cy.get('.new-todo').type('Unit Testing{enter}');
      cy.get('.view label').last().dblclick();
    });

    it('should initially show me the current title', () => {
      cy.get('input.edit').last().should('have.value', 'Unit Testing');
    });
  });
});
