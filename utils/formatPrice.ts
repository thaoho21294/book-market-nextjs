/**
 * Formats a currency according to the user's locale
 * @param {number} value The amount to format
 * @param {string} currency The ISO currency code
 * @returns price with currency
 */
export const formatPrice = (value: number, currency = 'VND') =>
  Intl.NumberFormat('de-DE', {
    currency,
    style: 'currency',
  }).format(value)
