import { useEffect } from "react";
import { useMaterialsForPoint } from "../hooks/useMaterialsForPoint";
import ArrowButton from "./ArrowButton";
import MaterialButton from "./MaterialButton";

const PointMaterialsMenu = ({
  selectedMaterialId,
  selectedPoint,
  setPointMaterial,
  handleMenuClose,
}) => {
  const materials = useMaterialsForPoint(selectedPoint);

  useEffect(() => {
    document.addEventListener("click", handleMenuClose);
    return () => document.removeEventListener("click", handleMenuClose);
  }, [handleMenuClose]);

  return (
    <div
      onClick={(e) => e.stopPropagation()}
      className="h-full w-full py-12 px-4 flex flex-col gap-2 items-end"
    >
      <ArrowButton accessibilityText="ver anteriores" direction="up" />
      <div className="flex flex-col gap-2 items-end h-full">
        {materials.map(({ materialPreview, ...material }) => (
          <div key={material.id}>
            <MaterialButton
              name={material.name}
              previewImgSrc={materialPreview}
              onClick={() => setPointMaterial(material)}
              selected={selectedMaterialId === material.id}
            />
          </div>
        ))}
      </div>
      <ArrowButton accessibilityText="ver posteriores" direction="down" />
    </div>
  );
};

export default PointMaterialsMenu;
