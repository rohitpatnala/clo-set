import filtersReducer, {
  initialState,
  setPricingOption,
  setSearchTerm,
  setPage,
  incrementPage,
  setPriceRange,
  resetFilters,
} from '../store/filtersSlice';
import { describe, it, expect } from 'vitest';

describe('filtersSlice', () => {
  it('has initial state', () => {
    expect(filtersReducer(undefined, { type: '' })).toEqual(initialState);
  });

  it('toggles pricing options', () => {
    const next = filtersReducer(
      initialState,
      setPricingOption({ option: 'paid', value: true })
    );
    expect(next.pricingOptions.paid).toBe(true);
  });

  it('sets the search term', () => {
    const next = filtersReducer(initialState, setSearchTerm('foo'));
    expect(next.searchTerm).toBe('foo');
  });

  it('sets and increments page', () => {
    let next = filtersReducer(initialState, setPage(5));
    expect(next.page).toBe(5);
    next = filtersReducer(next, incrementPage());
    expect(next.page).toBe(6);
  });

  it('sets priceRange and resets page', () => {
    const next = filtersReducer(
      initialState,
      setPriceRange({ min: 10, max: 50 })
    );
    expect(next.priceRange).toEqual({ min: 10, max: 50 });
    expect(next.page).toBe(1);
  });

  it('resets filters', () => {
    const modified = {
      pricingOptions: { paid: true, free: true, viewOnly: true },
      searchTerm: 'hello',
      page: 3,
      priceRange: { min: 0, max: 999 },
    } as any;
    expect(filtersReducer(modified, resetFilters())).toEqual(initialState);
  });
});
