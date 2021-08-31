import { render, getByTestId } from "@testing-library/react";
import React from "react";
import Status from "./components/Status/Status";

//Här kör vi en test på Status.Testen körs på en bild. Vi använder getByTestId för att specificera det element vi vill testa och "kopplar" genom att sätta "data-testid" på utvalda element på komponenten vi testar.

describe("center img drone", () => {
  it("img drone", () => {
    const { container } = render(<Status />);
    const displayImage = getByTestId(container, "img-drone");
    expect(displayImage.src).toContain("drone.svg");
  });
});

test("h1 text din order", () => {
  const rendered = render(<Status />);
  expect(rendered.getByText("Din beställning är på väg!"));
});
