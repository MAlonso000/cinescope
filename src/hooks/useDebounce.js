// src/hooks/useDebounce.js
import { useState, useEffect } from 'react';

export function useDebounce(value, delay) {
    const [debouncedValue, setDebouncedValue] = useState(value);

    useEffect(() => {
        // Seteamos un timer para actualizar el valor después del delay
        const handler = setTimeout(() => {
            setDebouncedValue(value);
        }, delay);

        // Si el usuario vuelve a escribir antes de que termine el tiempo, 
        // limpiamos el timer anterior y empezamos de nuevo.
        return () => {
            clearTimeout(handler);
        };
    }, [value, delay]);

    return debouncedValue;
}