import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { ItemsData } from "../types/Types";

export interface DataState {
  allCoworkings: ItemsData[];
  appliedFilters: string[];
  cityFilter: string;
  filteredCoworkings: ItemsData[];
  availableCities: string[];
  pickedCoworking: ItemsData;
}

const initialState: DataState = {
  allCoworkings: [],
  appliedFilters: [],
  cityFilter: "",
  filteredCoworkings: [],
  availableCities: [],
  pickedCoworking: {
    id: 0,
    name: "",
    country: "",
    city: "",
    location: "",
    isVerified: false,
    addedDate: "",
    desciption: "",
    facebookLink: "",
    instagramLink: "",
    telegramLink: "",
    perksList: [],
    filterList: [],
    price: 0,
    image: "",
    allImages: [],
    rating: 0,
    reviews: 0,
    top: false,
  },
};

export const dataSlice = createSlice({
  name: "data",
  initialState,
  reducers: {
    loadData: (state, action: PayloadAction<ItemsData[]>) => {
      state.allCoworkings = action.payload;
      state.filteredCoworkings = state.allCoworkings;
      const noRepeatArr: string[] = [];
      state.allCoworkings.map((item) => {
        if (noRepeatArr.includes(item.city)) {
          return null;
        } else {
          noRepeatArr.push(item.city);
        }
      });
      state.availableCities = noRepeatArr;
    },

    addCityFilter(state, action: PayloadAction<string>) {
      state.cityFilter = action.payload;
      state.filteredCoworkings = state.allCoworkings.filter(
        (item) => item.city === action.payload
      );
    },

    addFilter(state, action: PayloadAction<string>) {
      state.appliedFilters.push(action.payload);

      state.filteredCoworkings = state.allCoworkings.filter(
        (item) => item.city === state.cityFilter
      );
      state.filteredCoworkings = state.filteredCoworkings.filter(
        (coworking) => {
          let info;
          for (let i = 0; i < state.appliedFilters.length; i++) {
            if (coworking.filterList.includes(state.appliedFilters[i])) {
              info = true;
            } else {
              info = false;
              break;
            }
          }
          return info;
        }
      );
    },

    removeFilter(state, action: PayloadAction<string>) {
      state.appliedFilters = state.appliedFilters.filter(
        (item) => item !== action.payload
      );

      if (state.appliedFilters.length === 0) {
        state.filteredCoworkings = state.allCoworkings;
        state.filteredCoworkings = state.allCoworkings.filter(
          (item) => item.city === state.cityFilter
        );
      } else {
        state.filteredCoworkings = state.allCoworkings.filter(
          (item) => item.city === state.cityFilter
        );
        state.filteredCoworkings = state.filteredCoworkings.filter(
          (coworking) => {
            let info;
            for (let i = 0; i < state.appliedFilters.length; i++) {
              if (coworking.filterList.includes(state.appliedFilters[i])) {
                info = true;
              } else {
                info = false;
                break;
              }
            }
            return info;
          }
        );
      }
    },

    clearAllFilters(state) {
      state.appliedFilters = [];
      state.filteredCoworkings = state.allCoworkings;
      state.filteredCoworkings = state.allCoworkings.filter(
        (item) => item.city === state.cityFilter
      );
    },

    pickCoworking(state, action: PayloadAction<number>) {
      state.pickedCoworking = state.allCoworkings.filter(
        (item) => item.id === action.payload
      )[0];
    },
  },
});

export const {
  loadData,
  addFilter,
  addCityFilter,
  removeFilter,
  clearAllFilters,
  pickCoworking,
} = dataSlice.actions;

export default dataSlice.reducer;
