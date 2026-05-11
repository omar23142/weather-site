import { createSlice } from "@reduxjs/toolkit";
import { useEffect } from "react";  
import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";


export const fetchAxiosData = createAsyncThunk(
  'axiosGET', // this is the prefix that displayed on action that will be sent later
  async (cityInput) => {
    console.log('==================' , 'calling fetchAxiosData');
    const controller = new AbortController();
    try {
      const response = await axios.get("https://api.weatherapi.com/v1/forecast.json", {
        params: {
          key: '0618db3d343a4a6698373524260205',
          q:`${cityInput.city}`,
          days: '10'
        },
        signal: controller.signal,
        
      });
      
      console.log(response.data);
      const daysDetails = response.data.forecast.forecastday;
      const icon = response.data.current.condition.icon;
      const state = response.data.current.condition.text;
      const temp = response.data.current.temp_c;
      const location = response.data.location.name;
      const humidity = response.data.current.humidity;
      const precip_mm = response.data.current.precip_mm;
      const feelslike_c = response.data.current.feelslike_c;
      const vis_miles = response.data.current.vis_miles;
      const wind_mph = response.data.current.wind_mph;
      const wind_kph = response.data.current.wind_kph;
      const wind_dir = response.data.current.wind_dir;
      const current = response.data.current;
      
      // Return the actual data as payload
      return {
        icon,
        state,
        temp,
        location,
        humidity,
        precip_mm,
        feelslike_c,
        vis_miles,
        wind_mph,
        wind_kph,
        wind_dir,
        current,
        daysDetails
      };
    } catch (error) {
      console.error(error);
      throw error; // Important to throw error for rejected action
    } 
    return ()=> {
console.log('cansling apireq')
controller.abort();
}
  }
)


const initialState = {
    APIData:{ icon:'', state:'', temp:12, location:'', humidity:'', precip_mm:'', feelslike_c:'', vis_miles:'', wind_mph:'', wind_kph:'', wind_dir:'', current:'',UvIndex:''},
    cityInput:{city:'Damascus', searchClick: false},
    TodayDetaileState:[],
    language:'en',
    isLoadding:false
}
export const axiousSlice = createSlice({
    name:'axious',
    initialState:initialState,
    reducers: {
    languageAction:(currentState, action)=> {
      console.log('hello from the languageActionnnnnnnnnnn', currentState, action);
      currentState.language = action.payload
      },
    cityInputAction:(currentState, action)=> {
      currentState.cityInput = action.payload
    }  
    },
    extraReducers(builder) {
      // here we difine the state that we recived from the thunkfunction (pending, success, ......)
      builder.addCase(fetchAxiosData.pending, (currentState, action)=> {
        // console.log('**************=========', currentState, action)
        currentState.isLoadding = true; 
      }).addCase(fetchAxiosData.fulfilled, (currentState, action) =>{
         console.log('**************=========', currentState, action)
        currentState.isLoadding = false;
        currentState.APIData = action.payload;
        currentState.TodayDetaileState = action.payload.daysDetails
      }).addCase(fetchAxiosData.rejected, (currentState, action)=>{
        currentState.isLoadding = false;
      })
    }
  })


export const {languageAction, cityInputAction} = axiousSlice.actions;

export default axiousSlice.reducer;