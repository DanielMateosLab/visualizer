import { useEffect, useState } from 'react'

export const useMaterialsForPoint = (pointId) => {
  const [materials, setMaterials] = useState([])

  useEffect(() => {
    const fetchMaterials = async () => {
      setMaterials([])

      try {
        const response = await fetch(`/api/points/${pointId}/materials`)
        const data = await response.json()

        setMaterials(data)
      } catch (error) {
        window.alert('Error cargando los materiales. Vuelve a intentarlo')
      }
    }

    fetchMaterials()
  }, [pointId])

  return materials
}
