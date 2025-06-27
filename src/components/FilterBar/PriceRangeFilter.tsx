import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import type { RootState, AppDispatch } from "../../store/store";
import { setPriceRange } from "../../store/filtersSlice";
import "../../styles/PriceRangeFilter.css";

const MIN = 0;
const MAX = 2000;

export default function PriceRangeFilter() {
  const dispatch = useDispatch<AppDispatch>();
  const { priceRange } = useSelector((s: RootState) => s.filters);

  // Local state to allow both thumbs to move without stutter
  const [localMin, setLocalMin] = useState(priceRange.min);
  const [localMax, setLocalMax] = useState(priceRange.max);

  // When local values change, sync back to Redux (debounced if you like)
  useEffect(() => {
    dispatch(setPriceRange({ min: localMin, max: localMax }));
  }, [localMin, localMax, dispatch]);

  // Prevent crossing
  const handleMinChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = Math.min(+e.target.value, localMax - 1);
    setLocalMin(value);
  };

  const handleMaxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = Math.max(+e.target.value, localMin + 1);
    setLocalMax(value);
  };

  return (
    <div className="price-range-filter">
      <input
        type="range"
        className="slider slider--min"
        min={MIN}
        max={MAX}
        value={localMin}
        onChange={handleMinChange}
      />
      <input
        type="range"
        className="slider slider--max"
        min={MIN}
        max={MAX}
        value={localMax}
        onChange={handleMaxChange}
      />
      <div className="price-range-filter__values">
        <span>${localMin}</span> – <span>${localMax}</span>
      </div>
    </div>
  );
}
