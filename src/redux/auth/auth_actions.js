import { createAsyncThunk } from "@reduxjs/toolkit";
import axiosWrapper from "../../utils/api";

export const loginUser = createAsyncThunk(
  "auth/login",
  async ({ email, password }, { rejectWithValue }) => {
    try {
      const { data } = await axiosWrapper(
        "post",
        `/auth/login/`,
        { email, password }
      );
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const registerUser = createAsyncThunk(
  "auth/register",
  async ({ email, password, phone_number }, { rejectWithValue }) => {
    try {
      const { data } = await axiosWrapper("post", `/auth/signup/`, {
        email,
        password,
        phone_number,
      });
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
