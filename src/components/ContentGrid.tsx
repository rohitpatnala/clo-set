import React from "react";
import ContentCard, { Item } from "./ContentCard";
import "../styles/ContentGrid.css";

interface ContentGridProps {
  items: Item[];
  loading?: boolean;
}

const ContentGrid: React.FC<ContentGridProps> = ({
  items,
  loading = false,
}) => {
  if (loading) {
    return (
      <div className="content-grid__spinner-container">
        <div className="content-grid__spinner" />
      </div>
    );
  }

  if (!items.length) {
    return <p className="content-grid__empty">No items to display.</p>;
  }

  return (
    <div className="content-grid">
      {items.map((item) => (
        <ContentCard key={item.id} item={item} />
      ))}
    </div>
  );
};

export default ContentGrid;
