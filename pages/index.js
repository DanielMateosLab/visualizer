import { db, getPoints } from "../firebase/db";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      ESTUDIO CACTUS VISUALIZER TEST
    </div>
  );
}

export async function getStaticProps() {
  const pointsData = await getPoints(db);

  return { props: pointsData };
}
