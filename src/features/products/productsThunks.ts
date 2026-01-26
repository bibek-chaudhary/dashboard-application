import { createAsyncThunk } from "@reduxjs/toolkit";
import api from "../../services/api";
import type { ProductsResponse } from "./productsTypes";

interface FetchProductsParams {
  page: number;
  limit: number;
  search?: string;
}

export const fetchProducts = createAsyncThunk<
  ProductsResponse,
  FetchProductsParams,
  { rejectValue: string }
>(
  "products/fetchProducts",
  async ({ page, limit, search }, { rejectWithValue }) => {
    try {
      const skip = (page - 1) * limit;

      const url = search
        ? `/products/search?q=${search}&limit=${limit}&skip=${skip}`
        : `/products?limit=${limit}&skip=${skip}`;

      const response = await api.get<ProductsResponse>(url);
      return response.data;
    } catch (error: any) {
      return rejectWithValue(
        error?.response?.data?.message || "Failed to fetch products",
      );
    }
  },
);
