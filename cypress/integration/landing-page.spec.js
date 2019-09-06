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
      .should('have.attr', 'href', 'https://app.upstand.fm')
      .should('have.attr', 'target', '_blank')
      .should('have.attr', 'rel', 'noopener noreferrer');
  });

  it('shows tagline', () => {
    cy.get('[data-cy="tagline"]').hasText('Async standups for remote teams.');
  });

  it('shows call to action buttons', () => {
    cy.get('[data-cy="cta-1"]')
      .hasText('Get Access')
      .should('have.attr', 'href', 'mailto:hi@upstand.fm?subject=Early access');
    cy.get('[data-cy="cta-2"]')
      .hasText('Get Access')
      .should('have.attr', 'href', 'mailto:hi@upstand.fm?subject=Early access');
  });

  it('border SVGs have class "comment", to hide in safari reader view', () => {
    cy.get('[data-cy="border-subtle"]').should('have.attr', 'class', 'comment');
    cy.get('[data-cy="border-curve-right"]').should(
      'have.attr',
      'class',
      'comment'
    );
  });

  it('shows footer with logo, links and copyright', () => {
    cy.get('[data-cy="logo"]').should('exist');

    cy.get('[data-cy="say-hi"]')
      .hasText('Say hi!')
      .should('have.attr', 'href', 'mailto:hi@upstand.fm?subject=Hi there!');
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
      .should('have.attr', 'href', 'https://storybook.upstand.fm')
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
