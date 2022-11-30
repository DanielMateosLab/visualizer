import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import PointMaterialsMenu from "../../components/PointMaterialsMenu";

const mockMaterials = {
  mockId0: {
    materialPreview: "mockMaterialPreview0.png",
    name: "Roble Tierra",
    points: ["point0"],
    layers: {
      point0: "mockLayerImage0.png",
    },
  },
  mockId1: {
    points: ["point0"],
    materialPreview: "mockMaterialPreview1.png",
    name: "Etimoe Ice",
    layers: {
      point0: "mockLayerImage1.png",
    },
  },
};
jest.mock("../../hooks/useMaterialsForPoint", () => ({
  useMaterialsForPoint: () => mockMaterials,
}));

describe("PointMaterialsMenu", () => {
  const setUp = (customProps) => {
    render(
      <PointMaterialsMenu
        selectedMaterialId=""
        selectedPoint=""
        setPointMaterial={() => {}}
        {...customProps}
      />
    );

    return {
      user: userEvent.setup(),
    };
  };

  it("should render buttons for the given materials", () => {
    setUp();

    Object.values(mockMaterials).forEach((material) => {
      const materialImg = screen.getByAltText(material.name, { exact: false });
      expect(materialImg).toBeInTheDocument();
    });
  });

  it.each(Object.entries(mockMaterials))(
    "should call setPointMaterial when a material button is clicked %#",
    async (materialId, materialData) => {
      const setPointMaterial = jest.fn();
      const { user } = setUp({ setPointMaterial });

      await user.click(
        screen.getByAltText(materialData.name, {
          exact: false,
        })
      );

      expect(setPointMaterial).toHaveBeenCalledWith({
        id: materialId,
        ...materialData,
      });
    }
  );

  it("should correctly set which material is selected", () => {
    const selectedMaterialId = Object.keys(mockMaterials)[0];
    setUp({ selectedMaterialId });

    expect(
      screen.getByRole("button", {
        current: true,
      })
    ).toHaveTextContent(mockMaterials[selectedMaterialId].name);
  });
});
