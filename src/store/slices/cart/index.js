import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  cart: {
    orderItems: [],
  },
};

const myCartSlice = createSlice({
  name: 'cart',
  initialState,

  reducers: {
    addToCart: {
      reducer: (state, action) => {
        const { quantity, product } = action.payload;
        const alreadyInCart = !!state.cart.orderItems.find(
          (el) => el._id === product._id
        );
        console.log('CHECK', alreadyInCart);
        console.log('quantity', quantity);
        console.log('product', product);
        console.log('state', state.cart);

        // if (alreadyInCart)
        //   state.cart = {...state,
        //     products: state.products.map((el) =>
        //       el._id === product._id
        //         ? {
        //             ...el,
        //             quantity: el.quantity + quantity,
        //             subTotal: el.price * (el.quantity + quantity),
        //           }
        //         : el
        //     ),
        //   };
        // else
        //   setCart((st) => ({
        //     ...st,
        //     products: [
        //       ...st.products,
        //       {
        //         ...state,
        //         quantity,
        //         subTotal: item.price * quantity,
        //       },
        //     ],
        //   }));
        // set localStorage
        // localStorage.setItem('spaCart', JSON.stringify(cart));
      },
    },
    removeFromCart: {
      reducer: (state, action) => {
        // localStorage.setItem('spaCart', JSON.stringify(cart));
      },
    },
  },
});

export const { addToCart, removeFromCart } = myCartSlice.actions;
export default myCartSlice;
