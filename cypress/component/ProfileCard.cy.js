// import Form from "../../src/components/Login-signupForm";
import ShowProfile from "../../src/components/ProfileCard";
import { AuthProvider } from "../../src/context/auth-context";
import { BrowserRouter } from "react-router-dom"

describe("All profiles in ProfileCard page", () =>{
  it("ShowProfile can be show", () =>{  
    const data = {
      email: "testino@mail.com",
      name: "testino",
      phone: "987654321",
      address: "Lima-Peru",
    };
    // let data = {
    //   email: "testino@mail.com",
    //   password: "letmein",
    // }
    // cy.mount(<Form logInUp="Login" data={data} />);
    // cy.get("#email").should("exist");
    // cy.get("#password").should("exist");
    // cy.get("#email").type(`${data.email}`);
    // cy.get("#password").type(`${data.password}`);
    // cy.get("button").contains('Login').click();
    cy.mount(
    <BrowserRouter>
      <AuthProvider>
        <ShowProfile userData= {data}/>
      </AuthProvider>
    </BrowserRouter>
    );
    cy.get("[data-cy = 'data-Name']").should("exist").should('have.text', data.name);
    cy.get("[data-cy = 'data-Email']").should("exist").should('have.text', data.email);
    cy.get("[data-cy = 'data-Phone']").should("exist").should('have.text', data.phone);
    cy.get("[data-cy = 'data-Address']").should("exist").should('have.text', data.address);
  });
});