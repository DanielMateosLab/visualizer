import Image from "next/image";
import { Fragment } from "react";
import PointLayer from "./PointLayer";
import PointSettingsButton from "./PointSettingsButton";

const RoomDashboard = ({
  imgSrc,
  allPointIds,
  points,
  setSelectedPoint,
  settings,
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
            onClick={() => setSelectedPoint(pointId)}
          />
          {settings[pointId] && (
            <PointLayer
              name={settings[pointId].name}
              materialLayer={settings[pointId].materialLayer}
            />
          )}
        </Fragment>
      ))}
    </main>
  );
};

export default RoomDashboard;
