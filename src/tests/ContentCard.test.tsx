import React from "react";
import { render, screen } from "@testing-library/react";
import ContentCard, { Item } from "../components/ContentCard";
import { describe, it, expect } from "vitest";

const mockItem: Item = {
  id: "1",
  userName: "Alice",
  title: "Test Item",
  pricing: "paid",
  price: 42,
  imageUrl: "https://example.com/img.jpg",
  views: 123,
  likes: 45,
};

describe("<ContentCard />", () => {
  it("renders image, title, creator, price, views & likes", () => {
    render(<ContentCard item={mockItem} />);

    expect(screen.getByRole("img")).toHaveAttribute("src", mockItem.imageUrl);
    expect(screen.getByText(mockItem.title)).toBeInTheDocument();
    expect(screen.getByText(mockItem.userName)).toBeInTheDocument(); // now just "Alice"
    expect(screen.getByText("$42.00")).toBeInTheDocument();
    expect(screen.getByText("123")).toBeInTheDocument();
    expect(screen.getByText("45")).toBeInTheDocument();
  });
});
