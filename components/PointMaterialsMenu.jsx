import { useEffect } from 'react'
import { useMaterialsForPoint } from '../hooks/useMaterialsForPoint'
import ArrowButton from './ArrowButton'
import MaterialButton from './MaterialButton'

const PointMaterialsMenu = ({
  selectedMaterialId,
  selectedPoint,
  setPointMaterial,
  handleMenuClose
}) => {
  const materials = useMaterialsForPoint(selectedPoint)

  const materialButtonClickHandlerCreator = (material) => (e) => {
    e.stopPropagation()
    setPointMaterial(material)
  }
  const handleArrowClick = (e) => {
    e.stopPropagation()
  }

  useEffect(() => {
    document.addEventListener('click', handleMenuClose)
    return () => document.removeEventListener('click', handleMenuClose)
  }, [handleMenuClose])

  return (
    <div className='h-full w-full py-12 px-4 flex flex-col gap-2 items-end'>
      <ArrowButton
        onClick={handleArrowClick}
        accessibilityText='ver anteriores'
        direction='up'
      />
      <div className='flex flex-col gap-2 items-end h-full'>
        {materials.map(({ materialPreview, ...material }) => (
          <div key={material.id}>
            <MaterialButton
              name={material.name}
              previewImgSrc={materialPreview}
              onClick={materialButtonClickHandlerCreator(material)}
              selected={selectedMaterialId === material.id}
            />
          </div>
        ))}
      </div>
      <ArrowButton
        onClick={handleArrowClick}
        accessibilityText='ver posteriores'
        direction='down'
      />
    </div>
  )
}

export default PointMaterialsMenu
