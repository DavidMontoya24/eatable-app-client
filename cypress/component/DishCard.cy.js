import DishCard from '../../src/components/DishCard';
import PizzaImage from '../../src/assets/pizza.png';

describe('Dish card in products page', () => {
  it('contains the dish name and price', () => {
    const defaultProps = {
      picture_url: PizzaImage,
      name: 'Pasta Dish',
      price: '155',
      description:
        'Veggies es bonus vobis, proinde vos postulo essum magis kohlrabi welsh onion daikon amaranth tatsoi tomatillo melon azuki bean garlic.',
    };

    cy.mount(<DishCard {...defaultProps} />);
    cy.get('[data-cy="name"]').should('exist');
    cy.get('[data-cy="price"]').should('exist');
  });
});
