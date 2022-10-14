import { fireEvent, render, screen } from '@testing-library/react';
import GifExpertApp from '../src/GifExpertApp';

describe('Pruebas al componente GifExpertApp', () => {
    test('El número de categorías aumenta al buscar una nuevo', () => {
        render(<GifExpertApp />);

        const input = screen.getByRole('textbox');
        const form = screen.getByRole('form');
        
        fireEvent.input(input, { target: { value: 'Mini Rick' } });
        fireEvent.submit(form);

        expect(screen.getAllByRole('heading', { level: 3 }).length).toBe(2);
    });
    
    test('No aumentan las categorías si la busqueda ya existe', () => {
        render(<GifExpertApp />);
    
        const input = screen.getByRole('textbox');
        const form = screen.getByRole('form');
        
        fireEvent.input(input, { target: { value: 'OW 2' } });
        fireEvent.submit(form);
    
        expect(screen.getAllByRole('heading', { level: 3 }).length).toBe(1);
    });
});