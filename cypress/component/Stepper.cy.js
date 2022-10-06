import Stepper from '../../src/components/Stepper';
import { ProductsProvider } from '../../src/context/products-context';
describe('Stepper', () => {
  it('contains minus and plus buttons as well as number', () => {
    const onChangeSpy = cy.spy().as('onChangeSpy');
    cy.mount(
      <ProductsProvider>
        <Stepper id={249} onClick={onChangeSpy} />
      </ProductsProvider>
    );
    cy.get('#minus').should('exist');
    cy.get('#plus').should('exist');
    cy.get('#qty').should('exist');

    cy.get('#qty').should('contain', '1');

    cy.get('#plus').click();

    cy.get('#qty').should('contain', '2');
  });
});
