// use local storage to store the cart
export const addToDb = (foodId) => {
    const existingCart = localStorage.getItem('cart');
    let cart = {};
    console.log(cart);
    if (!existingCart) {
        cart[foodId] = 1;
    } else {
        cart = JSON.parse(existingCart);
        if (cart[foodId]) {
            cart[foodId] += 1;
        } else {
            cart[foodId] = 1;
        }
    }
    localStorage.setItem('cart', JSON.stringify(cart));
}