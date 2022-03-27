import { createSlice, current } from '@reduxjs/toolkit';

const initialState = {
  products: [],
  total: 0,
};

const myCartSlice = createSlice({
  name: 'cart',
  initialState,

  reducers: {
    addToCart: {
      reducer: (state, action) => {
        let spaCart = localStorage.getItem('mycart')
          ? JSON.parse(localStorage.getItem('mycart'))
          : { products: [] };

        console.log('SPACART', spaCart);

        let Cart;
        const { quantity, product } = action.payload;
        const alreadyInCart = !!state.products.find(
          (el) => el.product._id === product._id
        );

        if (alreadyInCart) {
          console.log('HERE 1');
          state.products = state.products.map((el) =>
            el.product._id === product._id
              ? {
                  product,
                  quantity: el.quantity + quantity,
                  subTotal:
                    el.product.price * (el.quantity + quantity),
                }
              : el
          );
          Cart = state;
        } else {
          console.log('HERE 2');
          console.log('state products', state.products);
          state.products = [
            ...state.products,
            {
              product,
              quantity,
              subTotal: product.price * quantity,
            },
          ];
          Cart = state;
        }
        // set to localStorage
        localStorage.setItem('spaCart', JSON.stringify(Cart));
      },
    },
  },
  removeFromCart: {
    reducer: (state, action) => {
      const { id } = action.payload;
      state.cart = {
        ...state,
        products: state.products.filter((item) => item._id !== id),
      };
      // localStorage.setItem('spaCart', JSON.stringify(cart));
    },
  },
});

export const { addToCart, removeFromCart } = myCartSlice.actions;
export default myCartSlice;
