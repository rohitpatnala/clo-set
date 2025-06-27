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
  const priceLabel =
    item.pricing === "free"
      ? "FREE"
      : item.pricing === "viewOnly"
      ? "View Only"
      : `$${item.price?.toFixed(2) || "0.00"}`;

  return (
    <div className="content-card">
      {/* image area */}
      <div className="content-card__img-wrap">
        {item.imageUrl ? (
          <img
            src={item.imageUrl}
            alt={item.title}
            className="content-card__img"
          />
        ) : (
          <div className="content-card__img-placeholder" />
        )}

        {/* cart button overlay */}
        <button
          type="button"
          className="content-card__cart-btn"
          aria-label="Add to cart"
        >
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="currentColor"
            aria-hidden="true"
          >
            <path
              d="M7 4V2H5v2H2v2h2l3.6 7.59-1.35 2.45C6.1 16.37 6 16.68 6 
                     17c0 1.1.9 2 2 2h12v-2H8.42c-.14 0-.25-.11-.25-.25l.03-.12
                     L9.1 13h7.45c.75 0 1.41-.41 1.75-1.03l3.58-6.49
                     A.996.996 0 0020 4H7zm0 0"
            />
          </svg>
        </button>
      </div>

      {/* text info */}
      <div className="content-card__body">
        <p className="content-card__creator">{item.userName}</p>
        <p className="content-card__title">{item.title}</p>
        <p className="content-card__price">{priceLabel}</p>
      </div>
    </div>
  );
};

export default ContentCard;
