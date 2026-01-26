import { createAsyncThunk } from "@reduxjs/toolkit";
import api from "../../services/api";
import type { ProductsResponse } from "./productsTypes";

interface FetchProductsParams {
  page: number;
  limit: number;
  search?: string;
  category?: string;
}

export const fetchProducts = createAsyncThunk<
  ProductsResponse,
  FetchProductsParams,
  { rejectValue: string }
>(
  "products/fetchProducts",
  async ({ page, limit, search, category }, { rejectWithValue }) => {
    try {
      const skip = (page - 1) * limit;

      const baseUrl = search
        ? `/products/search?q=${search}`
        : category
          ? `/products/category/${category}`
          : `/products`;

      const response = await api.get(`${baseUrl}?limit=${limit}&skip=${skip}`);

      return response.data;
    } catch (error: any) {
      return rejectWithValue(
        error?.response?.data?.message || "Failed to fetch products",
      );
    }
  },
);
