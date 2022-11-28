import Background from "../components/Background";
import { db, getPoints } from "../firebase/db";

export default function Home() {
  return (
    <div className="h-screen w-screen relative flex overflow-hidden">
      <Background />
    </div>
  );
}

export async function getStaticProps() {
  const pointsData = await getPoints(db);

  return { props: pointsData };
}
