import OrderCard from "../../src/components/OrderCard";



describe("OrderCard", () => {
  
  it("show order", () => {
    
    let order = {
      items_count: "1",
      created_at: "2022-10-01T16:00:17.943Z",
      total: "31",
      order_details: [{id: 177, quantity:"1", product_name:"pasta cocida", subtotal:"31"}],
      delivery_address: "Lima-Peru"
    };
    
    cy.mount(<OrderCard {...order} />);
    cy.get('[data-cy="items_count"]').should('exist');
    cy.get('[data-cy="date"]').should('exist');
    cy.get('[data-cy="total"]').should('exist');
    cy.get('[data-cy="button"]').click();
    cy.get('[data-cy="quantity"]').should('exist');
    cy.get('[data-cya="product_name"]').should('exist');
    cy.get('[data-cy="subtotal"]').should('exist');
    cy.get('[data-cy="delivery_address"]').should('exist');
    cy.get('[data-cy="button"]').click();
  });
});

