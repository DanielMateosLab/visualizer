import Image from 'next/image'
import { Fragment } from 'react'
import { useCropCorrection } from '../hooks/useCropCorrection'
import PointLayer from './PointLayer'
import PointSettingsButton from './PointSettingsButton'

const RoomDashboard = ({
  imgSrc,
  allPointIds,
  points,
  setSelectedPoint,
  settings,
  layerLoading,
  handleLayerLoad,
  selectingMaterial
}) => {
  const {
    containerCallback,
    handleImageLoadComplete,
    getCorrectedPercentageForAxis
  } = useCropCorrection()

  return (
    <main
      ref={containerCallback}
      className='relative w-4/6 h-full bg-white mx-auto bg-right'
    >
      <Image
        priority
        className='rounded-xl'
        src={imgSrc}
        layout='fill'
        objectFit='cover'
        alt=''
        onLoadingComplete={handleImageLoadComplete}
      />
      {allPointIds.map((pointId) => (
        <Fragment key={pointId}>
          <PointSettingsButton
            name={points[pointId].name}
            coordX={getCorrectedPercentageForAxis(points[pointId].coordX, 'x')}
            coordY={getCorrectedPercentageForAxis(points[pointId].coordY, 'y')}
            onClick={() => setSelectedPoint(pointId)}
            selectingMaterial={selectingMaterial}
          />

          {settings[pointId] && (
            <PointLayer
              name={settings[pointId].name}
              materialLayer={settings[pointId].materialLayer}
              onLoad={handleLayerLoad}
            />
          )}

          {layerLoading && (
            <div className='absolute w-full h-full bg-black opacity-5 z-30' />
          )}
        </Fragment>
      ))}
    </main>
  )
}

export default RoomDashboard
