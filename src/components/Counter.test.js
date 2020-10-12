import { render, fireEvent } from "@testing-library/vue";
import Counter from "./Counter.vue";

test("Original title is 「當前點擊次數：0」", () => {
  const { getByTestId } = render(Counter);
  const title = getByTestId("counterInformation");

  expect(title.innerHTML).toBe("當前點擊次數：0");
});

test("When I click button the title will change to 「當前點擊次數：1」", () => {
  const { getByTestId, getByText } = render(Counter);
  const title = getByTestId("counterInformation");

  fireEvent.click(getByText("點我加 1"));

  expect(title.innerHTML).toBe("當前點擊次數：1");
});
