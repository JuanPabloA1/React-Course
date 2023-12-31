import { render } from '@testing-library/react';
import { FirstApp } from '../FirstApp';

describe('Prueba en <FirstApp />', () => {

    test('debe de hacer match con el snapshot', () => {

        const title = 'Hola, Soy Goku';
        const { container } = render( <FirstApp title={title} />);
        
        expect( container ).toMatchSnapshot();
    });

    test('debe mostrar un titulo en un h1', () => {
        
        const title = 'Hola, Soy Goku';
        const { container, getByText } = render( <FirstApp title={title} />);
        expect( getByText(title)).toBeTruthy();

        const h1 = container.querySelector('h1');
        expect(h1.innerHTML).toContain(title);
    })
    
});