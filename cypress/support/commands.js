// ***********************************************//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************

// Child commands
Cypress.Commands.add('hasText', { prevSubject: 'element' }, (subject, want) => {
  const got = subject.text().trim();
  expect(got).to.equal(want);
  return subject;
});
