import { useState } from "react";
import Background from "../components/Background";
import RoomDashboard from "../components/RoomDashboard";
import { db, getPoints } from "../firebase/db";
import baseKitchen from "../public/baseKitchen.jpeg";

export default function Home(props) {
  const [settings, setSettings] = useState({});
  const [materialsMenuPoint, setMaterialsMenuPoint] = useState(null);

  return (
    <div className="h-screen w-screen relative flex overflow-hidden">
      <Background />

      <div className="w-1/6" />
      <RoomDashboard
        {...props}
        setMaterialsMenuPoint={setMaterialsMenuPoint}
        imgSrc={baseKitchen}
      />
      <div className="w-1/6" />
    </div>
  );
}

export async function getStaticProps() {
  const pointsData = await getPoints(db);

  return { props: pointsData };
}
