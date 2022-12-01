import { db, getMaterialsByPointId } from '../../../../firebase/db'

const pointMaterialsHandler = async (req, res) => {
  const { query, method } = req

  if (method === 'GET') {
    try {
      const { pointId } = query
      const materials = await getMaterialsByPointId(db, pointId)
      res.status(200).json(materials)
    } catch (error) {
      res.status(500).json([])
    }
  } else {
    res.setHeader('Allow', ['GET'])
    res.status(405).end(`Method ${method} Not Allowed`)
  }
}

export default pointMaterialsHandler
