import React from "react";
import ContentCard, { Item } from "./ContentCard";
import "../styles/Contentgrid.css";

interface ContentGridProps {
  items: Item[];
}

const ContentGrid: React.FC<ContentGridProps> = ({ items }) => {
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
