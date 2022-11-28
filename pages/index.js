import { db, getMaterials, getPoints } from "../firebase/app";

export default function Home(props) {
  console.log(props.pointList);
  console.log(props.materialsList);
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      ESTUDIO CACTUS VISUALIZER TEST
    </div>
  );
}

export async function getStaticProps() {
  const pointList = await getPoints(db);
  const materialsList = await getMaterials(db);

  return {
    props: {
      pointList,
      materialsList,
    },
  };
}
