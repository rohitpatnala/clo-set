import { useDispatch } from "react-redux";
import { resetFilters, setPage, setPriceRange } from "../../store/filtersSlice";
import type { AppDispatch } from "../../store/store";
import "../../styles/ResetButton.css";

export default function ResetButton() {
  const dispatch = useDispatch<AppDispatch>();

  const handleReset = () => {
    dispatch(resetFilters());
    dispatch(setPage(1));
    dispatch(setPriceRange({ min: 0, max: 100 }));
  };

  return (
    <button className="reset-button" onClick={handleReset}>
      Reset
    </button>
  );
}
