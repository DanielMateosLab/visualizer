import { useMaterialsForPoint } from "../hooks/useMaterialsForPoint";
import ArrowButton from "./ArrowButton";
import MaterialButton from "./MaterialButton";

const PointMaterialsMenu = ({
  selectedMaterialId,
  selectedPoint,
  setPointMaterial,
}) => {
  const materials = useMaterialsForPoint(selectedPoint);

  const handleArrowClick = (direction) => {
    // TODO
  };

  return (
    <div className="h-full w-full py-12 px-4 flex flex-col gap-2 items-end">
      <ArrowButton
        accessibilityText="ver anteriores"
        direction="up"
        onClick={() => handleArrowClick("up")}
      />
      <div className="flex flex-col gap-2 items-end h-full">
        {Object.keys(materials).map((materialId) => (
          <div key={materialId}>
            <MaterialButton
              name={materials[materialId].name}
              previewImgSrc={materials[materialId].materialPreview}
              onClick={() =>
                setPointMaterial({ id: materialId, ...materials[materialId] })
              }
              selected={selectedMaterialId === materialId}
            />
          </div>
        ))}
      </div>
      <ArrowButton
        accessibilityText="ver posteriores"
        direction="down"
        onClick={() => handleArrowClick("up")}
      />
    </div>
  );
};

export default PointMaterialsMenu;
