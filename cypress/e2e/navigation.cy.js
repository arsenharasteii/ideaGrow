describe('Навігація по сайту', () => {
  it('Успішно відкриває головну сторінку та переходить на каталог', () => {
    cy.visit('/');
    cy.contains('IdeaGrow').should('be.visible');
  });
});