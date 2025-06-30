import "../../styles/SortDropdown.css";

export type SortOption = "name" | "priceDesc" | "priceAsc";

interface SortDropdownProps {
  value: SortOption;
  onChange: (newSort: SortOption) => void;
}

export default function SortDropdown({ value, onChange }: SortDropdownProps) {
  return (
    <div className="sort-dropdown-container">
      <label htmlFor="sortSelect" className="sort-label">
        Sort by:
      </label>
      <select
        id="sortSelect"
        className="sort-dropdown"
        value={value}
        onChange={(e) => onChange(e.target.value as SortOption)}
      >
        <option value="name">Item Name</option>
        <option value="priceDesc">Higher Price</option>
        <option value="priceAsc">Lower Price</option>
      </select>
    </div>
  );
}
