import { useState } from "react";
import Background from "../components/Background";
import PointMaterialsMenu from "../components/PointMaterialsMenu";
import RoomDashboard from "../components/RoomDashboard";
import { db, getPoints } from "../firebase/db";
import baseKitchen from "../public/baseKitchen.jpeg";

export default function Home(props) {
  const [settings, setSettings] = useState({});
  const [selectedPointId, setSelectedPointId] = useState(null);
  const selectedMaterialId = settings[selectedPointId]?.id;

  const setPointMaterial = (material) =>
    setSettings({ ...settings, [selectedPointId]: material });

  return (
    <div className="h-screen w-screen relative flex overflow-hidden">
      <Background />

      <div className="w-1/6" />
      <RoomDashboard
        {...props}
        settings={settings}
        setSelectedPoint={setSelectedPointId}
        imgSrc={baseKitchen}
      />

      <div className="w-1/6 relative">
        {selectedPointId && (
          <PointMaterialsMenu
            selectedPoint={selectedPointId}
            selectedMaterialId={selectedMaterialId}
            setPointMaterial={setPointMaterial}
          />
        )}
      </div>
    </div>
  );
}

export async function getStaticProps() {
  const pointsData = await getPoints(db);

  return { props: pointsData };
}
