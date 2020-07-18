/// <reference types="Cypress" />

describe('Landing page', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('shows header logo', () => {
    cy.get('[data-cy="logo-with-name"]').should('exist');
  });

  it('shows login', () => {
    cy.get('[data-cy="login"]')
      .hasText('Login')
      .should('have.attr', 'href', 'https://upstand-fm-app.netlify.app')
      .should('have.attr', 'target', '_blank')
      .should('have.attr', 'rel', 'noopener noreferrer');
  });

  it('shows tagline', () => {
    cy.get('[data-cy="tagline"]').should('exist');
  });

  it('shows call to action buttons', () => {
    cy.get('[data-cy="cta-1"]').hasText('Get Access');
    cy.get('[data-cy="cta-2"]').hasText('Get Access');
  });

  it('shows footer with logo, links and copyright', () => {
    cy.get('[data-cy="logo"]').should('exist');

    cy.get('[data-cy="about"]')
      .hasText('About')
      .should('have.attr', 'href', 'https://danillouz.dev')
      .should('have.attr', 'target', '_blank')
      .should('have.attr', 'rel', 'noopener noreferrer');
    cy.get('[data-cy="blog"]')
      .hasText('Blog')
      .should('have.attr', 'href', 'https://blog.danillouz.dev')
      .should('have.attr', 'target', '_blank')
      .should('have.attr', 'rel', 'noopener noreferrer');
    cy.get('[data-cy="github"]')
      .hasText('GitHub')
      .should('have.attr', 'href', 'https://github.com/upstandfm')
      .should('have.attr', 'target', '_blank')
      .should('have.attr', 'rel', 'noopener noreferrer');
    cy.get('[data-cy="storybook"]')
      .hasText('Storybook')
      .should('have.attr', 'href', 'https://upstand-fm-storybook.netlify.app')
      .should('have.attr', 'target', '_blank')
      .should('have.attr', 'rel', 'noopener noreferrer');
    cy.get('[data-cy="twitter"]')
      .hasText('Twitter')
      .should('have.attr', 'href', 'https://twitter.com/danillouz')
      .should('have.attr', 'target', '_blank')
      .should('have.attr', 'rel', 'noopener noreferrer');

    const year = new Date().getFullYear();
    cy.get('[data-cy="copyright"]').hasText(`© ${year} Upstand FM`);
  });
});
