import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import PointLayer from "../../components/PointLayer";

describe("PointLayer", () => {
  const setUp = (customProps) => {
    render(<PointLayer name="" materialLayer="" {...customProps} />);

    return {
      user: userEvent.setup(),
    };
  };

  it("should render the given image", () => {
    const materialLayer = "/materialLayer.png";
    const name = "Material name";
    setUp({ materialLayer, name });

    expect(screen.getByAltText(name, { exact: false })).toHaveAttribute("src");
  });
});
