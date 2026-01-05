export const formatRating = (rating: number) => {
    if (Number.isInteger(rating)) {
        return `⭐ ${rating.toFixed(0)}`;
    }
    return `⭐ ${rating.toFixed(1)}`;
}
