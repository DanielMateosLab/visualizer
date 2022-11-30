import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import RoomDashboard from "../../components/RoomDashboard";

describe("RoomDashboard", () => {
  const setUp = (customProps) => {
    render(
      <RoomDashboard
        imgSrc="/test.png"
        points={{}}
        allPointIds={[]}
        setMaterialsMenuPoint={() => {}}
        {...customProps}
      />
    );

    return {
      user: userEvent.setup(),
    };
  };

  it("should render the given img", () => {
    const imgSrc = "/image.png";
    setUp({ imgSrc });

    expect(screen.getByRole("img").getAttribute("src")).toMatch("image.png");
  });

  it("should render the given points", () => {
    const points = {
      mockPoint1: {
        coordX: 0,
        coordY: 0,
        name: "mockName1",
        onClick: () => {},
      },
      mockPoint2: {
        coordX: 0,
        coordY: 0,
        name: "mockName2",
        onClick: () => {},
      },
    };
    const allPointIds = Object.keys(points);

    setUp({ points, allPointIds });

    allPointIds.forEach((pointId) => {
      expect(screen.getByText(points[pointId].name)).toBeInTheDocument();
    });
  });

  it("should call the given setMaterialsMenuPoint function when a point is clicked", async () => {
    const setMaterialsMenuPoint = jest.fn();
    const points = {
      mockPoint1: {
        coordX: 0,
        coordY: 0,
        name: "mockName1",
        onClick: () => {},
      },
    };
    const allPointIds = Object.keys(points);
    const { user } = setUp({ points, allPointIds, setMaterialsMenuPoint });

    await user.click(screen.getByText(points.mockPoint1.name));

    expect(setMaterialsMenuPoint).toHaveBeenCalledWith("mockPoint1");
  });
});
