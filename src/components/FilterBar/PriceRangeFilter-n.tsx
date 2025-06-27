import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import type { RootState, AppDispatch } from "../../store/store";
import { setPriceRange } from "../../store/filtersSlice";
import "../../styles/PriceRangeFilter.css";

const MIN = 0;
const MAX = 100;

export default function PriceRangeFilter() {
  const dispatch = useDispatch<AppDispatch>();
  const { priceRange } = useSelector((s: RootState) => s.filters);

  // Local slider thumbs
  const [localMin, setLocalMin] = useState(priceRange.min);
  const [localMax, setLocalMax] = useState(priceRange.max);

  // 1️⃣ When Redux priceRange changes (e.g. on reset), update local state
  useEffect(() => {
    setLocalMin(priceRange.min);
    setLocalMax(priceRange.max);
  }, [priceRange.min, priceRange.max]);

  // 2️⃣ When local changes, write them out
  useEffect(() => {
    dispatch(setPriceRange({ min: localMin, max: localMax }));
  }, [localMin, localMax, dispatch]);

  const handleMinChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = Math.min(+e.target.value, localMax - 1);
    setLocalMin(val);
  };

  const handleMaxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = Math.max(+e.target.value, localMin + 1);
    setLocalMax(val);
  };

  return (
    <div
      className="price-range-filter"
      /* for optional colored track: */
      style={{ "--min": localMin, "--max": localMax } as React.CSSProperties}
    >
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
