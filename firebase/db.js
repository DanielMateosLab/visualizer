import { initializeApp } from 'firebase/app'
import config from './config'
import {
  getFirestore,
  collection,
  getDocs,
  query,
  where
} from 'firebase/firestore/lite'

const app = initializeApp(config)
export const db = getFirestore(app)

export async function getPoints (db) {
  const pointsCol = collection(db, 'points')
  const pointSnapshot = await getDocs(pointsCol)
  const pointsMap = pointSnapshot.docs.reduce(
    (acc, curr) => ({
      points: {
        ...acc.points,
        [curr.id]: curr.data()
      },
      allPointIds: [...acc.allPointIds, curr.id]
    }),
    { points: {}, allPointIds: [] }
  )
  return pointsMap
}

export async function getMaterialsByPointId (db, pointId) {
  const materialsCol = collection(db, 'materials')
  const queryMaterialsForPoint = query(
    materialsCol,
    where('points', 'array-contains', pointId)
  )
  const materialsSnapshot = await getDocs(queryMaterialsForPoint)
  const materialsByPointId = materialsSnapshot.docs.map((doc) => {
    const { name, materialPreview, layers } = doc.data()
    return {
      id: doc.id,
      name,
      materialPreview,
      materialLayer: layers[pointId]
    }
  })
  return materialsByPointId
}
