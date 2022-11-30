import { Fragment } from "react";
import Background from "../components/Background";
import RoomDashboard from "../components/RoomDashboard";
import PointSettingsButton from "../components/PointSettingsButton";
import { db, getPoints } from "../firebase/db";
import baseKitchen from "../public/baseKitchen.jpeg";

export default function Home(props) {
  const [settings, setSettings] = useState({});
  const [materialsMenuPoint, setMaterialsMenuPoint] = useState(null);

  return (
    <div className="h-screen w-screen relative flex overflow-hidden">
      <Background />

      <div className="w-1/6" />
      <RoomDashboard imgSrc={baseKitchen}>
        {props.allPointIds.map((pointId) => (
          <Fragment key={pointId}>
            <PointSettingsButton {...props.points[pointId]} />
          </Fragment>
        ))}
      </RoomDashboard>
      <div className="w-1/6" />
    </div>
  );
}

export async function getStaticProps() {
  const pointsData = await getPoints(db);

  return { props: pointsData };
}
