import { createSlice } from "@reduxjs/toolkit";

const productSlice = createSlice({
  name: "product",
  initialState: {
    data: [],
    status: "idel",
    error: null,
  },
});

export default productSlice;
