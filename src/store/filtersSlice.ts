import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface PricingOptions {
  paid: boolean;
  free: boolean;
  viewOnly: boolean;
}

export interface PriceRange {
  min: number;
  max: number;
}

export interface FiltersState {
  pricingOptions: PricingOptions;
  searchTerm: string;
  page: number;
  priceRange: PriceRange;
}

export const initialState: FiltersState = {
  pricingOptions: {
    paid: false,
    free: false,
    viewOnly: false,
  },
  searchTerm: '',
  page: 1,
  priceRange: { min: 0, max: 999 },
};

const filtersSlice = createSlice({
  name: 'filters',
  initialState,
  reducers: {
    setPricingOption(
      state,
      action: PayloadAction<{ option: keyof PricingOptions; value: boolean }>
    ) {
      const { option, value } = action.payload;
      state.pricingOptions[option] = value;
    },
    setSearchTerm(state, action: PayloadAction<string>) {
      state.searchTerm = action.payload;
    },
    resetFilters(state) {
      state.pricingOptions = { ...initialState.pricingOptions };
      state.searchTerm = initialState.searchTerm;
      state.page = initialState.page;
    },
    incrementPage(state) {
      state.page += 1;
    },
    setPage(state, action: PayloadAction<number>) {
      state.page = action.payload;
    },
    setPriceRange(state, action: PayloadAction<PriceRange>) {
      state.priceRange = action.payload;
      state.page = 1;
    }
  },
});

export const {
  setPricingOption,
  setSearchTerm,
  resetFilters,
  incrementPage,
  setPage,
  setPriceRange,
} = filtersSlice.actions;

export default filtersSlice.reducer;
