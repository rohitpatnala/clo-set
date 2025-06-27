import React from "react";
import "../styles/ContentCard.css";

export interface Item {
  id: string;
  userName: string;
  title: string;
  pricing: "paid" | "free" | "viewOnly";
  price?: number;
  imageUrl?: string;
  views: number;
  likes: number;
}

interface ContentCardProps {
  item: Item;
}

const ContentCard: React.FC<ContentCardProps> = ({ item }) => {
  const priceLabel =
    item.pricing === "free"
      ? "FREE"
      : item.pricing === "viewOnly"
      ? "View Only"
      : `$${item.price?.toFixed(2) || "0.00"}`;

  return (
    <div className="content-card">
      <div className="content-card__img-wrap">
        {item.imageUrl ? (
          <img
            src={item.imageUrl}
            alt={item.title}
            className="content-card__img"
            loading="lazy"
          />
        ) : (
          <div className="content-card__img-placeholder" />
        )}
        <button
          type="button"
          className="content-card__cart-btn"
          aria-label="Add to cart"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
            <path d="M7 4V2H5v2H2v2h2l3.6 7.6L5.25 16.05A.75.75 0 005 17v1h2v-1l.9-1.5h7.2l1.05-1.75H9.4L7 6H20V4H7z" />
          </svg>
        </button>
      </div>

      <div className="content-card__body">
        <p className="content-card__creator">{item.userName}</p>

        <div className="content-card__title-price">
          <p className="content-card__title">{item.title}</p>
          <p className="content-card__price">{priceLabel}</p>
        </div>

        <div className="content-card__meta">
          <span className="content-card__meta-item">
            <svg
              className="content-card__meta-icon"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M12 5c-7 0-11 7-11 7s4 7 11 7 11-7 11-7-4-7-11-7zm0 12a5 5 0 110-10 5 5 0 010 10z" />
              <circle cx="12" cy="12" r="2.5" />
            </svg>
            {item.views}
          </span>
          <span className="content-card__meta-item">
            <svg
              className="content-card__meta-icon"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M2 12h4v9H2z" />
              <path d="M22 11c0-1.1-.9-2-2-2h-6.31l.95-4.57.03-.32c0-.41-.17-.79-.44-1.06L13.17 2 7.59 7.59C7.22 7.95 7 8.45 7 9v10c0 1.1.9 2 2 2h7c.78 0 1.45-.45 1.75-1.11L22 13.12V11z" />
            </svg>
            {item.likes}
          </span>
        </div>
      </div>
    </div>
  );
};

export default ContentCard;
