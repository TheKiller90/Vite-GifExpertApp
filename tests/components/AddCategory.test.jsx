import { fireEvent, render, screen } from '@testing-library/react';
import { AddCategory } from '../../src/components/AddCategory';

describe('Pruebas en AddCategory.jsx', () => {
    test('Debe cambiar el valor de la caja de texto', () => {
        render(<AddCategory onNewCategory={ () => {} } />);

        const input = screen.getByRole('textbox');
        fireEvent.input(input, { target: { value: 'Morty' } });

        expect(input.value).toBe('Morty');
    });

    test('Debe llamar onNewCategory si el input tiene un valor', () => {
        const inputValue = 'Morty';
        const onNewCategory = jest.fn();

        render(<AddCategory onNewCategory={ onNewCategory } />);

        const input = screen.getByRole('textbox');
        const form = screen.getByRole('form');

        fireEvent.input(input, { target: { value: inputValue } });
        fireEvent.submit(form);

        expect(input.value).toBe('');
        expect(onNewCategory).toHaveBeenCalledTimes(1);
        expect(onNewCategory).toHaveBeenCalledWith(inputValue);
    });
    
    test('No debe llamar onNewCategory si el input está limpio', () => {
        const onNewCategory = jest.fn();
        render(<AddCategory onNewCategory={ onNewCategory } />);
    
        const form = screen.getByRole('form');
        fireEvent.submit(form);
    
        expect(onNewCategory).toHaveBeenCalledTimes(0);
    });
});