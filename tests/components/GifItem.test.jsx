import { render, screen } from "@testing-library/react";
import { GifItem } from '../../src/components/GifItem';

describe('Evaluando el componente gifItem', () => {
    const title = 'Mono';
    const url = 'https://mono.io/mono.jpg';

    test('Hacer match con el snapshot', () => {
        const { container } = render(<GifItem title={ title } url={ url } />);
        expect(container).toMatchSnapshot();
    });
    
    test('Debe mostrar la imagen con el URL y el ALT indicado', () => {
        render(<GifItem title={ title } url={ url } />);
        // screen.debug();
        // expect(screen.getByRole('img').src).toBe(url);
        // expect(screen.getByRole('img').alt).toBe(title);
        const { src, alt } = screen.getByRole('img');
        expect(src).toBe(url);
        expect(alt).toBe(title);
    });
    
    test('Se debe mostrar el título en el componente', () => {
        render(<GifItem title={ title } url={ url } />);

        expect(screen.getByText(title)).toBeTruthy();
    });
});