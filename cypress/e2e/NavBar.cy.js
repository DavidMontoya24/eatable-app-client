describe("Navbar", () => {
  it("can navigate and redirect to routes", () => {
    const base_url = "http://localhost:3000/";
    let data = {
      email: "david@mail.com",
      password: "123456",
    };
    cy.visit(base_url);
    cy.get("#email").type(`${data.email}`);
    cy.get("#password").type(`${data.password}`);
    cy.get("button").contains("Login").click();
    cy.url().should("eq", base_url + "products");
    cy.get("[data-cy='profile_btn']").click();
    cy.url().should("eq", base_url + "profile");
    cy.get("[data-cy='history_btn']").click();
    cy.url().should("eq", base_url + "history");
  });
});
