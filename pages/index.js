import { useState } from 'react'
import Background from '../components/Background'
import PointMaterialsMenu from '../components/PointMaterialsMenu'
import RoomDashboard from '../components/RoomDashboard'
import { db, getPoints } from '../firebase/db'
import baseKitchen from '../public/baseKitchen.jpeg'

export default function Home (props) {
  const [settings, setSettings] = useState({})
  const [selectedPointId, setSelectedPointId] = useState(null)
  const [layerLoading, setLayerLoading] = useState(false)
  const selectedMaterialId = settings[selectedPointId]?.id
  const menuVisibilityClass = layerLoading ? 'invisible' : ''

  const setPointMaterial = (material) => {
    setSettings({ ...settings, [selectedPointId]: material })
    setLayerLoading(true)
  }
  const handleLayerLoad = () => setLayerLoading(false)

  return (
    <div className='h-screen w-screen relative flex overflow-hidden'>
      <Background />

      <main
        className='w-full h-5/6 lg:w-4/6 lg:h-full bg-white mx-auto bg-right'
      >
        <RoomDashboard
          {...props}
          settings={settings}
          selectingMaterial={!!selectedPointId}
          setSelectedPoint={setSelectedPointId}
          imgSrc={baseKitchen}
          layerLoading={layerLoading}
          handleLayerLoad={handleLayerLoad}
        />
      </main>
      <nav
        className={`absolute z-10 h-fit w-full max-lg:left-0 bottom-0 lg:top-0 lg:right-0 lg:h-full lg:w-fit ${menuVisibilityClass}`}
      >
        {selectedPointId && (
          <PointMaterialsMenu
            selectedPoint={selectedPointId}
            selectedMaterialId={selectedMaterialId}
            setPointMaterial={setPointMaterial}
            handleMenuClose={() => setSelectedPointId(null)}
          />
        )}
      </nav>
    </div>
  )
}

export async function getStaticProps () {
  const pointsData = await getPoints(db)

  return { props: pointsData }
}
