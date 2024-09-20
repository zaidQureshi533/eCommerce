import {createSlice} from '@reduxjs/toolkit';

const CartSlice = createSlice({
	name: 'cart',
	initialState: {
		products: [],
		quantity: 0,
		shippingCharges: 0,
		total: 0,
	},
	reducers: {
		addProduct: (state, action) => {
			const {quantity, price} = action.payload;
			state.quantity += 1;
			state.products.push(action.payload);
			state.shippingCharges += 0.8 * quantity;
			state.total += price * quantity + 0.8 * quantity;
		},
		deleteProduct: (state, action) => {
			const {index, product} = action.payload;
			state.quantity -= 1;
			state.products.splice(index, 1);
			state.shippingCharges -= 0.8 * product.quantity;
			state.total -= product.price * product.quantity + 0.8 * product.quantity;
		},
		increaseProductQty: (state, action) => {
			const {index, price} = action.payload;
			state.products[index].quantity += 1;
			state.shippingCharges += 0.8 * 1;
			state.total += 1 * price + 0.8 * 1;
		},
		decreaseProductQty: (state, action) => {
			const {index, price} = action.payload;
			state.products[index].quantity -= 1;
			state.shippingCharges -= 0.8 * 1;
			state.total -= 1 * price + 0.8 * 1;
		},
		clearCart: (state) => {
			state.products = [];
			state.quantity = 0;
			state.shippingCharges = 0;
			state.total = 0;
		},
	},
});

export const {
	addProduct,
	deleteProduct,
	increaseProductQty,
	decreaseProductQty,
	clearCart,
} = CartSlice.actions;
export default CartSlice.reducer;
