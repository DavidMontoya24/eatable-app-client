import TestForm from "../../src/components/Login-Signup-Form";
import { AuthProvider } from "../../src/context/auth-context";
import { BrowserRouter as Router } from "react-router-dom";
describe("TestForm", () => {
  it("renders properly", () => {
    cy.mount(
      <Router>
        <AuthProvider>
          <TestForm logInUp={"Login"} />
        </AuthProvider>
      </Router>
    );
    cy.get('[data-cy="button"]').should("exist");
    cy.get("#email").should("exist");
    cy.get("#password").should("exist");
  });

  it("shows error message when user submits no data", () => {
    cy.mount(
      <Router>
        <AuthProvider>
          <TestForm logInUp={"Login"} />
        </AuthProvider>
      </Router>
    );
    cy.get('[data-cy="error-login"]').should('not.be.visible')
    cy.get('[data-cy="button"]').click();
    cy.get('[data-cy="error-login"]').should('be.visible')
  });
});
