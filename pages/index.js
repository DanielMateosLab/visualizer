import { Fragment } from "react";
import Background from "../components/Background";
import KitchenDashboard from "../components/KitchenDashboard";
import PointSettingsButton from "../components/PointSettingsButton";
import { db, getPoints } from "../firebase/db";

export default function Home(props) {
  const [settings, setSettings] = useState({});
  const [materialsMenuPoint, setMaterialsMenuPoint] = useState(null);

  return (
    <div className="h-screen w-screen relative flex overflow-hidden">
      <Background />

      <div className="w-1/6" />
      <KitchenDashboard>
        {props.allPointIds.map((pointId) => (
          <Fragment key={pointId}>
            <PointSettingsButton {...props.points[pointId]} />
          </Fragment>
        ))}
      </KitchenDashboard>
      <div className="w-1/6" />
    </div>
  );
}

export async function getStaticProps() {
  const pointsData = await getPoints(db);

  return { props: pointsData };
}
