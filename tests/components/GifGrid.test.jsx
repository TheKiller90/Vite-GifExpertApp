import { render, screen } from "@testing-library/react";
import { GifGrid } from "../../src/components/GifGrid";
import useFetchGifs from "../../src/hooks/useFetchGifs";

jest.mock('../../src/hooks/useFetchGifs');

describe('Pruebas a <GifGrid />', () => {
    const category = 'Rick Sanchez';

    test('Debe mostrar el loading inicialmente', () => {
        useFetchGifs.mockReturnValue({
            images: [],
            isLoading: true
        });

        render(<GifGrid category={ category } />);
        
        expect(screen.getByText('Cargando...'));
        expect(screen.getByText(category));
    });

    test('Debe mostrar ítems cuando se cargan las imágenes useFetchGifs', () => {
        const gifs = [
            {
                id:'ABC',
                title: 'Mini Rick',
                url: 'https://localhost:8080/mini-Rick.gif'
            },
            {
                id:'123',
                title: 'Black',
                url: 'https://localhost:8080/Black.gif'
            },
        ];

        useFetchGifs.mockReturnValue({
            images: gifs,
            isLoading: false
        });

        render(<GifGrid category={ category } />);

        expect(screen.getAllByRole('img').length).toBe(2);
    });
});