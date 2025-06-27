import React from "react";
import "../styles/ContentCard.css";

export interface Item {
  id: string;
  userName: string;
  title: string;
  pricing: "paid" | "free" | "viewOnly";
  price?: number;
  imageUrl?: string;
}

interface ContentCardProps {
  item: Item;
}

const ContentCard: React.FC<ContentCardProps> = ({ item }) => {
  const badgeText =
    item.pricing === "paid"
      ? `Paid${item.price != null ? ` – $${item.price}` : ""}`
      : item.pricing === "free"
      ? "Free"
      : "View Only";

  return (
    <div className="content-card">
      {item.imageUrl ? (
        <img
          src={item.imageUrl}
          alt={item.title}
          className="content-card__image"
        />
      ) : (
        <div className="content-card__placeholder" />
      )}
      <h2 className="content-card__title">{item.title}</h2>
      <p className="content-card__user">By {item.userName}</p>
      <span
        className={`content-card__badge content-card__badge--${item.pricing}`}
      >
        {badgeText}
      </span>
    </div>
  );
};

export default ContentCard;
