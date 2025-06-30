import React, { useEffect, useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import type { RootState, AppDispatch } from "../store/store";
import { incrementPage } from "../store/filtersSlice";
import { getAllItems } from "../api/dataService";
import type { Item } from "../components/ContentCard";

import NavBar from "../components/NavBar/NavBar";
import KeywordSearch from "../components/FilterBar/KeywordSearch";
import PricingFilter from "../components/FilterBar/PricingFilter";
import PriceRangeFilter from "../components/FilterBar/PriceRangeFilter";
import ResetButton from "../components/FilterBar/ResetButton";
import ContentGrid from "../components/ContentGrid";
import InfiniteScroller from "../components/InfiniteScroller";
import SortDropdown, { SortOption } from "../components/FilterBar/SortDropdown";

import "../styles/StorePage.css";

const CATEGORIES = ["All", "Garment", "Fabric", "Trim", "Avatar", "Scene"];
const PAGE_SIZE = 20;

const StorePage: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { pricingOptions, searchTerm, page, priceRange } = useSelector(
    (state: RootState) => state.filters
  );
  const [allItems, setAllItems] = useState<Item[]>([]);
  const [activeCat, setActiveCat] = useState<string>("All");
  const [sortBy, setSortBy] = useState<SortOption>("name");
  const [isLoading, setIsLoading] = useState(true);

  // 1️⃣ Fetch data once on mount
  useEffect(() => {
    getAllItems()
      .then((data) => setAllItems(data))
      .catch(console.error)
      .finally(() => setIsLoading(false));
  }, []);

  // 2️⃣ Apply filters
  const filtered = useMemo(() => {
    return allItems.filter((item) => {
      // pricing filter
      const { paid, free, viewOnly } = pricingOptions;
      if (paid || free || viewOnly) {
        if (item.pricing === "paid" && !paid) return false;
        if (item.pricing === "free" && !free) return false;
        if (item.pricing === "viewOnly" && !viewOnly) return false;
      }
      // search term
      const term = searchTerm.trim().toLowerCase();
      if (term) {
        if (
          !item.title.toLowerCase().includes(term) &&
          !item.userName.toLowerCase().includes(term)
        ) {
          return false;
        }
      }
      // category filter
      if (activeCat !== "All" && (item as any).category !== activeCat) {
        return false;
      }
      // price range filter
      if (item.price != null) {
        if (item.price < priceRange.min || item.price > priceRange.max) {
          return false;
        }
      }
      return true;
    });
  }, [allItems, pricingOptions, searchTerm, activeCat, priceRange]);

  // 3️⃣ Sort
  const sorted = useMemo(() => {
    const copy = [...filtered];
    switch (sortBy) {
      case "priceDesc":
        copy.sort((a, b) => (b.price ?? 0) - (a.price ?? 0));
        break;
      case "priceAsc":
        copy.sort((a, b) => (a.price ?? 0) - (b.price ?? 0));
        break;
      case "name":
      default:
        copy.sort((a, b) => a.title.localeCompare(b.title));
    }
    return copy;
  }, [filtered, sortBy]);

  // 4️⃣ Paginate
  const paginatedItems = useMemo(
    () => sorted.slice(0, page * PAGE_SIZE),
    [sorted, page]
  );

  const hasMore = paginatedItems.length < filtered.length;
  const loadMore = () => hasMore && dispatch(incrementPage());

  return (
    <>
      <NavBar />

      <div className="hero container">
        <h1 className="hero__title">
          Share your ideas.
          <br />
          Empower your design.
        </h1>
      </div>

      <div className="categories container">
        {CATEGORIES.map((cat) => (
          <button
            key={cat}
            className={`cat-tab${cat === activeCat ? " cat-tab--active" : ""}`}
            onClick={() => setActiveCat(cat)}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="search-section container">
        <KeywordSearch />
      </div>

      <section className="filter-section container">
        <div className="filter-bar">
          <PricingFilter />
          <PriceRangeFilter />
          <ResetButton />
        </div>
        <SortDropdown
          value={sortBy}
          onChange={(newSort) => setSortBy(newSort)}
        />
      </section>

      <section className="grid-section container">
        <InfiniteScroller hasMore={hasMore} loadMore={loadMore}>
          <ContentGrid items={paginatedItems} loading={isLoading} />
        </InfiniteScroller>
      </section>
    </>
  );
};

export default StorePage;
