import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import RoomDashboard from "../../components/RoomDashboard";

describe("RoomDashboard", () => {
  const setUp = (customProps) => {
    render(<RoomDashboard imgSrc="" {...customProps} />);

    return {
      user: userEvent.setup(),
    };
  };

  it("should render the given img", () => {
    const imgSrc = "/image.png";
    setUp({ imgSrc });

    expect(screen.getByRole("img").getAttribute("src")).toMatch("image.png");
  });
});
