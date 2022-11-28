import Background from "../components/Background";
import KitchenDashboard from "../components/KitchenDashboard";
import { db, getPoints } from "../firebase/db";

export default function Home() {
  return (
    <div className="h-screen w-screen relative flex overflow-hidden">
      <Background />

      <div className="w-1/6" />
      <KitchenDashboard />
      <div className="w-1/6" />
    </div>
  );
}

export async function getStaticProps() {
  const pointsData = await getPoints(db);

  return { props: pointsData };
}
