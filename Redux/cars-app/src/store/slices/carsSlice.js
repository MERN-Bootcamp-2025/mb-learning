import { createSlice, nanoid } from "@reduxjs/toolkit";

const carsSlice = createSlice({
    name: 'cars',
    initialState:{
        searchTerm: '',
        cars: []
    },
    reducers:{
        changeSearchTerm(state, action){
            state.searchTerm = action.payload;
        },
        addCar(state, action){
            // here we will assume that action.payload={name:'jndfckj',cost:87498}
            state.cars.push({
                name: action.payload.name,
                cost: action.payload.cost,
                id: nanoid
            });
        },
        removeCar(state,action){
            const updatedCar = state.cars.filter((car)=>{
                return car.id !== action.payload;
            });
            state.cars = updatedCar;
        }
    }
});

export const {changeSearchTerm, addCar, removeCar} = carsSlice.actions;
export const carsReducer = carsSlice.reducer;