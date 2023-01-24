import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

axios.defaults.baseURL = "https://63cfbd79e52f587829a40707.mockapi.io";

export const fetchContacts = createAsyncThunk(
    "contacts",
    async (_, thunkAPI) => {
        try {
          const response = await axios.get("/contacts");
          return response.data;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message);
        }
    }
);
    
export const addContact = createAsyncThunk(
    "contacts/addContact",
        async ({name, number}, thunkAPI) => {
          try {
              console.log({name, number});
                const response = await axios.post("/contacts", {name, number});
      return response.data;
      
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const deleteContact = createAsyncThunk(
  "contacts/deleteContact",
  async (contactId, thunkAPI) => {
    try {
      const response = await axios.delete(`/contacts/${contactId}`);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);