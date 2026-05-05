export const priceWithIVA = (price) => price * 1.21

export const priceWithDiscount = (price, discount) =>
    price - (price * discount / 100)