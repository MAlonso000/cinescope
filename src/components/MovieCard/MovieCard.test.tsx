import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import MovieCard from './MovieCard';
import { BrowserRouter } from 'react-router-dom';
import { WatchlistProvider } from '../context/WatchlistContext';

// Mock de una película de ejemplo
const mockMovie = {
    id: 123,
    title: 'Matrix Reborn',
    vote_average: 8.5,
    poster_path: '/matrix.jpg',
    overview: 'Una simulación dentro de otra.'
};

describe('MovieCard Component', () => {
    it('debe renderizar el título de la película correctamente', () => {
        // 1. Arrange: Renderizamos el componente 
        // (Necesita los Providers porque usa Link y Context)
        render(
            <WatchlistProvider>
                <BrowserRouter>
                    <MovieCard movie={mockMovie as any} />
                </BrowserRouter>
            </WatchlistProvider>
        );

        // 2. Act: Buscamos el elemento en la pantalla virtual
        const titleElement = screen.getByText(/Matrix Reborn/i);

        // 3. Assert: Comprobamos que existe en el documento
        expect(titleElement).toBeDefined();
    });

    it('debe mostrar la puntuación formateada', () => {
        render(
            <WatchlistProvider>
                <BrowserRouter>
                    <MovieCard movie={mockMovie as any} />
                </BrowserRouter>
            </WatchlistProvider>
        );

        // Buscamos algo que contenga "8.5"
        expect(screen.getByText(/8.5/i)).toBeDefined();
    });
});