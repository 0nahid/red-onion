// use local storage to store the cart

const getDb = () => localStorage.getItem('cart');
const setDb = (cart) => localStorage.setItem('cart', JSON.stringify(cart));
export const addToDb = (foodId) => {
    const existingCart = getDb();
    let cart = {};
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
    setDb(cart);
}



export const removeFromDb = (foodId) => {
    const existingCart = getDb();
    if (!existingCart) {

    }
    else {
        const cart = JSON.parse(existingCart);
        delete cart[foodId];
        setDb(cart);
    }
}