import { renderHook, waitFor } from "@testing-library/react";
import useFetchGifs from "../../src/hooks/useFetchGifs";

describe('Pruebas al hook useFetchGifs', () => {
    test('Debe regresar el estado inicial', () => {
        const { result } = renderHook(() => useFetchGifs('Mini Rick'));
        const { images, isLoading } = result.current;

        expect(images.length).toBe(0);
        expect(isLoading).toBeTruthy();
    });
    
    test('Debe retornar un arreglo de imágenes e isLoading en false', async () => {
        const { result } = renderHook(() => useFetchGifs('Mini Rick'));

        await waitFor(
            () => expect(result.current.images.length).toBeGreaterThan(0)
        );

        const { images, isLoading } = result.current;
    
        expect(images.length).toBeGreaterThan(0);
        expect(isLoading).toBeFalsy();
    });
});