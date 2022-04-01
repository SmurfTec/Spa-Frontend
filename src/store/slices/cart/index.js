import { createSlice } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';

let Cart = localStorage.getItem('spaCart')
  ? JSON.parse(localStorage.getItem('spaCart'))
  : { products: [] };

let initialState;
if (Cart?.products?.length > 0) {
  initialState = Cart;
} else {
  initialState = {
    products: [],
  };
}

const myCartSlice = createSlice({
  name: 'cart',
  initialState,

  reducers: {
    addToCart: {
      reducer: (state, action) => {
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
                  subTotal: el.product.discountPrice * (el.quantity + quantity),
                }
              : el
          );
          Cart = state;
        } else {
          state.products = [
            ...state.products,
            {
              product,
              quantity,
              subTotal: product.discountPrice * quantity,
            },
          ];
          Cart = state;
        }
        // set to localStorage
        localStorage.setItem('spaCart', JSON.stringify(Cart));
      },
    },
    removeFromCart: {
      reducer: (state, action) => {
        const id = action.payload;
        let Cart;
        state.products = state.products.filter((el) => el.product._id !== id);
        Cart = state;
        localStorage.setItem('spaCart', JSON.stringify(Cart));
        toast.success(' Item removed from Cart successfully');
      },
    },
  },
});

export const { addToCart, removeFromCart } = myCartSlice.actions;
export default myCartSlice;
