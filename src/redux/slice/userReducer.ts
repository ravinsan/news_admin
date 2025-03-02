import { createSlice } from "@reduxjs/toolkit";

export const userReducer = createSlice({
  name:"user_auth",
  initialState:{
    token: null,
    profile: null,
    user: null, //name store for testing
    value : false,
  },
  reducers:{
    setProfile:(state,action)=>{
      state.profile=action.payload;
    },
    setToken:(state,action)=>{
      state.token=action.payload;
    },
    logout:(state)=>{
      localStorage.removeItem("token");
      state.token=null;
    },
    setUser:(state,action)=>{
      state.user=action.payload;
    }

  },
});



export const { setProfile, setToken, logout, setUser } = userReducer.actions;
export default userReducer.reducer;

