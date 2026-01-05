import { describe, it, expect } from 'vitest';
import { formatRating } from './movieUtils';

describe('movieUtils', () => {
    it('should format rating correctly', () => {
        const rating = 7.5;
        expect(formatRating(rating)).toBe('⭐ 7.5');
    });

    it('should manage 0 scores', () => {
        expect(formatRating(0)).toBe('⭐ 0');
    })
});