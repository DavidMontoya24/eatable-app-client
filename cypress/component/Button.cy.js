import Button from "../../src/components/Button";

describe("Button", () => {
  it("renders", () => {
    cy.mount(<Button children="Click here" />);
    cy.get('[data-cy="button"]').should("exist");
  });
});
