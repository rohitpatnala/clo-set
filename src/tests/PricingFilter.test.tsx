import { render, screen, fireEvent } from "@testing-library/react";
import { Provider } from "react-redux";
import PricingFilter from "../components/FilterBar/PricingFilter";
import { setupStore } from "../store/store";
import { describe, it, expect } from "vitest";

describe("<PricingFilter />", () => {
  it("toggles Paid checkbox", () => {
    const store = setupStore();
    render(
      <Provider store={store}>
        <PricingFilter />
      </Provider>
    );
    const paid = screen.getByLabelText("Paid");
    expect(paid).not.toBeChecked();
    fireEvent.click(paid);
    expect(store.getState().filters.pricingOptions.paid).toBe(true);
  });
});
