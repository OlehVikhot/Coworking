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
    id: Math.floor(Math.random() * 1000000),
    name: "Old Amsterdam",
    country: "Ukraine",
    city: "Lviv",
    location: "Naukova St, 2b",
    isVerified: true,
    addedDate: "Added in August 2019",
    desciption:
      "Old Amsterdam Coworking is a new modern Office center in the heart of Lviv. Only a 10-minute walk to the square. Market. A convenient transport junction - we are located at the intersection of the main highways that connect the center and the South and East sides of the city.",
    facebookLink: "https://www.facebook.com/",
    instagramLink: "https://instagram.com",
    telegramLink: "https://web.telegram.org/",
    perksList: [
      "High-speed Wi-Fi",
      "100% security",
      "Lockers for storing things",
      "Necessary equipment for work",
      "Qualified staff",
      "Shared kitchen",
      "Free drinks and snacks",
      "Cafe on the territory",
      "Children room",
      "Pet friendly",
      "Air conditioners",
      "Parking for cars",
      "Near the public transport stop",
      "Parking for bicycles",
      "Inclusivity",
    ],
    filterList: [
      "Lviv",
      "Private Office",
      "Virtual Office",
      "Daily",
      "Monthly",
      "Pet Friendly",
      "Child room",
      "Work schedule 24/7",
      "Car parking",
      "Bicycle packaging",
      "Free test hours",
      "Inclusivity",
      "Loyalty programs",
      "Kitchen",
      "Wardrobe",
      "Lockers",
      "Shower",
      "Air conditioners",
      "Computers",
      "Scanners",
      "Printers",
      "Skype room",
      "Projector",
      "Apple TV",
      "Microphone",
      "Professional lighting",
      "Terrace",
      "Game rooms",
      "Meditation rooms",
      "Capsules for sleep",
      "Design",
      "Art",
      "Sport",
      "Startup",
      "Business",
      "Photo",
      "Fashion",
      "Health",
      "Marketing",
      "Music",
    ],
    price: 250,
    image:
      "https://lh5.googleusercontent.com/p/AF1QipOeil5y8NFSRMvDE82j7Hoz4mS77XqrhO58ufjJ=w408-h272-k-no",
    allImages: [
      "https://www.wework.com/ideas/wp-content/uploads/sites/4/2021/07/20190731_WeWork_SonyCenter_Berlin_008_v1-1120x630.jpg",
      "https://www.coworker.com/mag/wp-content/uploads/2019/12/Potential-Feature-Image-2-1280x640.png",
      "https://assets-global.website-files.com/605baba32d94435376625d33/62979ba591dff175aacebdb5_istanbul_cowork-header.png",
      "https://y7n6q3x8.stackpathcdn.com/wp-content/uploads/2019/09/AdobeStock_142240147.jpg",
      "https://startupdepot.lviv.ua/wp-content/uploads/2017/11/general-header-photo.jpg",
      "https://thecancunsun.com/wp-content/uploads/2022/04/Top-Coworking-Spaces-in-Cancun.jpg",
      "https://www.wework.com/ideas/wp-content/uploads/sites/4/2021/07/20190731_WeWork_SonyCenter_Berlin_008_v1-1120x630.jpg",
      "https://www.coworker.com/mag/wp-content/uploads/2019/12/Potential-Feature-Image-2-1280x640.png",
      "https://assets-global.website-files.com/605baba32d94435376625d33/62979ba591dff175aacebdb5_istanbul_cowork-header.png",
      "https://y7n6q3x8.stackpathcdn.com/wp-content/uploads/2019/09/AdobeStock_142240147.jpg",
      "https://startupdepot.lviv.ua/wp-content/uploads/2017/11/general-header-photo.jpg",
      "https://thecancunsun.com/wp-content/uploads/2022/04/Top-Coworking-Spaces-in-Cancun.jpg",
    ],
    rating: 4,
    reviews: 20,
    top: true,
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
