import Image from 'next/image'

const PointLayer = ({ name, materialLayer, onLoad }) => (
  <Image
    layout='fill'
    objectFit='cover'
    className='z-10'
    alt={`Previsualización del material "${name}"`}
    src={materialLayer}
    onLoadingComplete={onLoad}
  />
)

export default PointLayer
