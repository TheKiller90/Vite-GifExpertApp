import { render } from "@testing-library/react";
import { GifItem } from '../../src/components/GifItem';

describe('Evaluando el componente gifItem', () => {
    const title = 'Mono';
    const url = 'https://mono.io';

    test('Hacer match con el snapshot', () => {
        const { container } = render(<GifItem title={ title } url={ url } />);
        expect(container).toMatchSnapshot();
    });
});