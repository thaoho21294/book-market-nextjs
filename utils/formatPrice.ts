/**
 * Formats a currency according to the user's locale
 * @param {string} currency The ISO currency code
 * @param {number} value The amount to format
 * @returns
 */
export const formatPrice = (value: number, currency = 'VND') =>
  Intl.NumberFormat('de-DE', {
    currency,
    style: 'currency',
  }).format(value)
