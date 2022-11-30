import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import PointMaterialsMenu from "../../components/PointMaterialsMenu";

const mockMaterials = [
  {
    id: "mockId0",
    name: "Oxo Line Blanco",
    materialPreview: "https://mockhost.com/materialPreview0.png",
    materialLayer: "https://mockhost.com/materialLayer0.png",
  },
  {
    id: "mockId1",
    name: "Oxo Deco Blanco",
    materialPreview: "https://mockhost.com/materialPreview1.png",
    materialLayer: "https://mockhost.com/materialLayer1.png",
  },
  {
    id: "mockId2",
    name: "Marmi China",
    materialPreview: "https://mockhost.com/materialPreview2.png",
    materialLayer: "https://mockhost.com/materialLayer2.png",
  },
];
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

    mockMaterials.forEach((material) => {
      const materialImg = screen.getByAltText(material.name, { exact: false });
      expect(materialImg).toBeInTheDocument();
    });
  });

  it.each(mockMaterials)(
    "should call setPointMaterial when a material button is clicked %#",
    async (material) => {
      const setPointMaterial = jest.fn();
      const { user } = setUp({ setPointMaterial });

      await user.click(
        screen.getByAltText(material.name, {
          exact: false,
        })
      );

      const { materialPreview, ...expectedData } = material;
      expect(setPointMaterial).toHaveBeenCalledWith(expectedData);
    }
  );

  it("should correctly set which material is selected", () => {
    const selectedMaterialId = mockMaterials[0].id;
    setUp({ selectedMaterialId });

    expect(
      screen.getByRole("button", {
        current: true,
      })
    ).toHaveTextContent(mockMaterials[0].name);
  });
});
