import { Athlete } from "@/interfaces/athlete.interface";
import { createSlice } from "@reduxjs/toolkit";



export const user = createSlice({
    name: 'user',
    initialState: {
        userData: {
            fullName: null,
            email: null,
            gym_name: null,
            foundation_date: null,
            gold_medals: 0,
            silver_medals: 0,
            bronce_medals: 0,
        },
        activeAthlete: null as Athlete | null,
        savingUserData: false,
        athletes: [] as Athlete[],
        savingAthlete: false,
    },
    reducers: {
        savingUserData : (state) => {
            state.savingUserData = true;
        },

        setUserData: (state, action) => {
            state.userData = action.payload;
            state.savingUserData = false;
        },

        clearUserData: (state) => {
            state.userData = {
                fullName: null,
                email: null,
                gym_name: null,
                foundation_date: null,
                gold_medals: 0,
                silver_medals: 0,
                bronce_medals: 0,
            }
        },

        savingAthlete: (state) => {
            state.savingAthlete = true;

        },

        setAthletes: (state, action) => {
            state.athletes = action.payload;
            state.savingAthlete = false;
        },

        setActiveAthlete: (state, action) => {
            state.activeAthlete = action.payload;
            state.savingAthlete = false;
        }

        // addNewAthlete: (state, action) => {
        //     state.athletes.push(action.payload);
        //     state.savingAthlete = false;
        // }
    },
})

export const {
    savingUserData, 
    setUserData,
    setAthletes,
    clearUserData,
    savingAthlete,
    setActiveAthlete
    } = user.actions;