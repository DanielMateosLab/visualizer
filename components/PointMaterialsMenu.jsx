import { Fragment } from "react";
import { useMaterialsForPoint } from "../hooks/useMaterialsForPoint";
import MaterialButton from "./MaterialButton";

const PointMaterialsMenu = ({
  selectedMaterialId,
  selectedPoint,
  setPointMaterial,
}) => {
  const materials = useMaterialsForPoint(selectedPoint);

  return (
    <div className="h-full w-full">
      {Object.keys(materials).map((materialId) => (
        <Fragment key={materialId}>
          <MaterialButton
            name={materials[materialId].name}
            previewImgSrc={materials[materialId].materialPreview}
            onClick={() =>
              setPointMaterial({ id: materialId, ...materials[materialId] })
            }
            selected={selectedMaterialId === materialId}
          />
        </Fragment>
      ))}
    </div>
  );
};

export default PointMaterialsMenu;
