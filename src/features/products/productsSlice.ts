import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { Product } from "./productsTypes";
import { fetchProducts } from "./productsThunks";

interface ProductState {
  items: Product[];
  total: number;
  loading: boolean;
  error: string | null;
  page: number;
  limit: number;
  search: string;
  category: string;
}

const initialState: ProductState = {
  items: [],
  total: 0,
  loading: false,
  error: null,
  page: 1,
  limit: 10,
  search: "",
  category: "",
};

const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    setPage(state, action: PayloadAction<number>) {
      if (action.payload < 1) return;
      state.page = action.payload;
    },
    setSearch(state, action: PayloadAction<string>) {
      state.search = action.payload;
      state.page = 1;
    },
    setCategory: (state, action: PayloadAction<string>) => {
      state.category = action.payload;
      state.page = 1;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.loading = false;
        state.items = action.payload.products;
        state.total = action.payload.total;
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || "Something went wrong";
      });
  },
});

export const { setPage, setSearch, setCategory } = productSlice.actions;
export default productSlice.reducer;
