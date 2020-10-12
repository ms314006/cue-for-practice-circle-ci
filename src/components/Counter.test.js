import { render } from "@testing-library/vue";
import Counter from "./Counter.vue";

test("Original title is 「當前點擊次數：0」", () => {
  const { getByTestId } = render(Counter);
  const title = getByTestId("counterInformation");

  expect(title.innerHTML).toBe("當前點擊次數：0");
});

test("When I click button the title will change to 「當前點擊次數：1」", () => {
  const { getByTestId } = render(Counter);
  const title = getByTestId("counterInformation");

  expect(title.innerHTML).toBe("當前點擊次數：1");
});
