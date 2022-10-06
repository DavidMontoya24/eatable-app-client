import { BrowserRouter as Router } from "react-router-dom";
import Navbar from "../../src/components/Navbar";
import { colors } from "../../src/styles";

describe("Navbar", () => {
  it("change styles when active", () => {
    function hexToRgb(hex) {
      var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
      return result ? `rgb(${parseInt(result[1], 16)}, ${parseInt(result[2], 16)}, ${parseInt(result[3], 16)})` : null
    };
    cy.mount(
      <Router>
        <Navbar />
      </Router>
    );
    colors
    // initial state
    cy.get("[data-cy='home_btn']").should("have.css", "color", hexToRgb(colors.gray));
    cy.get("[data-cy='profile_btn']").should("have.css", "color", hexToRgb(colors.gray));
    cy.get("[data-cy='history_btn']").should("have.css", "color", hexToRgb(colors.gray));
    // After onClick colors
    cy.get("[data-cy='home_btn']").click().should("have.css", "color", hexToRgb(colors.orange));
    cy.get("[data-cy='profile_btn']").should("have.css", "color", hexToRgb(colors.gray));
    cy.get("[data-cy='history_btn']").should("have.css", "color", hexToRgb(colors.gray));
    // // After onClick colors on other icon
    cy.get("[data-cy='profile_btn']").click().should("have.css", "color", hexToRgb(colors.orange));
    cy.get("[data-cy='home_btn']").should("have.css", "color", hexToRgb(colors.gray));

  })
});