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
    <div className='h-full w-full pb-8 items-center lg:py-12 px-2 lg:px-4 flex lg:flex-col gap-2 lg:items-end'>
      <ArrowButton
        onClick={handleArrowClick}
        accessibilityText='ver anteriores'
        type='previous'
      />
      <div className='flex lg:flex-col gap-1 lg:gap-2 items-center lg:items-end grow'>
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
        type='next'
      />
    </div>
  )
}

export default PointMaterialsMenu
