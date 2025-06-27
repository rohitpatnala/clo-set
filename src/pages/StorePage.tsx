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

  // Fetch data once on mount
  useEffect(() => {
    getAllItems()
      .then(setAllItems)
      .catch((err) => console.error("Failed to load items:", err));
  }, []);

  // Apply all filters and pagination
  const filteredItems = useMemo(() => {
    return allItems
      .filter((item) => {
        // Pricing filter
        const { paid, free, viewOnly } = pricingOptions;
        if (paid || free || viewOnly) {
          if (item.pricing === "paid" && !paid) return false;
          if (item.pricing === "free" && !free) return false;
          if (item.pricing === "viewOnly" && !viewOnly) return false;
        }
        // Keyword search
        const term = searchTerm.trim().toLowerCase();
        if (term) {
          const inTitle = item.title.toLowerCase().includes(term);
          const inUser = item.userName.toLowerCase().includes(term);
          if (!inTitle && !inUser) return false;
        }
        // Category filter (if you have category on Item)
        if (
          activeCat !== "All" &&
          // @ts-ignore: assuming item.category exists
          (item as any).category !== activeCat
        ) {
          return false;
        }
        // Price range filter
        if (item.price != null) {
          if (item.price < priceRange.min || item.price > priceRange.max) {
            return false;
          }
        }
        return true;
      })
      .slice(0, page * PAGE_SIZE);
  }, [allItems, pricingOptions, searchTerm, activeCat, priceRange, page]);

  const hasMore = filteredItems.length < allItems.length;
  const loadMore = () => {
    if (hasMore) dispatch(incrementPage());
  };

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
      </section>

      <section className="grid-section container">
        <InfiniteScroller hasMore={hasMore} loadMore={loadMore}>
          <ContentGrid items={filteredItems} />
        </InfiniteScroller>
      </section>
    </>
  );
};

export default StorePage;
