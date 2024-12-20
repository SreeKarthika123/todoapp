import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
// export const fetchEmployees = createAsyncThunk(
//     "employee/fetchEmployees",
//     async () => {
//       // Mock employee data
//       return [
//         { id: 1, name: "John Doe" },
//         { id: 2, name: "Jane Smith" }
//       ];
//     }
//   );

// export const fetchEmployees = createAsyncThunk(
//   "employee/fetchEmployees",
//   async () => {
//     const response = await axios.get("https://restful-api.dev/employee");
//     return response.data;
//    // return response.data.data;
//   }
// );
export const fetchEmployees = createAsyncThunk(
    "employee/fetchEmployees",
    async () => {
      const response = await axios.get("https://reqres.in/api/users");
      return response.data.data; // Note the 'data' property to access the user array
    }
  );
  

const employeeSlice = createSlice({
  name: "employee",
  initialState: {
    employees: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchEmployees.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchEmployees.fulfilled, (state, action) => {
        state.loading = false;
        state.employees = action.payload;
      })
      .addCase(fetchEmployees.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default employeeSlice.reducer;
