import Image from "next/image";
import { Fragment } from "react";
import PointSettingsButton from "./PointSettingsButton";

const RoomDashboard = ({
  imgSrc,
  allPointIds,
  points,
  setMaterialsMenuPoint,
}) => {
  return (
    <main className="relative w-full h-full bg-white">
      <Image
        priority
        className="rounded-xl"
        src={imgSrc}
        layout="fill"
        objectFit="cover"
        alt=""
      />
      {allPointIds.map((pointId) => (
        <Fragment key={pointId}>
          <PointSettingsButton
            {...points[pointId]}
            onClick={() => setMaterialsMenuPoint(pointId)}
          />
        </Fragment>
      ))}
    </main>
  );
};

export default RoomDashboard;
