import { initializeApp } from "firebase/app";
import config from "./config";
import { getFirestore, collection, getDocs } from "firebase/firestore/lite";

const app = initializeApp(config);
export const db = getFirestore(app);

export async function getPoints(db) {
  const pointsCol = collection(db, "points");
  const pointSnapshot = await getDocs(pointsCol);
  const pointList = pointSnapshot.docs.map((doc) => doc.data());
  return pointList;
}

export async function getMaterials(db) {
  const materialsCol = collection(db, "materials");
  const materialSnapshot = await getDocs(materialsCol);
  const materialList = materialSnapshot.docs.map((doc) => doc.data());
  return materialList;
}
