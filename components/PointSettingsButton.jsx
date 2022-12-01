import FingerPrint from './FingerPrint'

const PointSettingsButton = ({
  coordX,
  coordY,
  name,
  onClick,
  selectingMaterial
}) => {
  const settingsButtonVisibilityClass = selectingMaterial ? 'invisible' : ''

  return (
    <button
      className={`absolute box-border bg-black text-white rounded-full
       opacity-50 p-0.5 lg:p-1 ring ring-offset-1 lg:ring-offset-2 ring-black hover:opacity-20 
       z-20 -translate-x-1/2 -translate-y-1/2 ${settingsButtonVisibilityClass}`}
      style={{
        top: `${coordY}%`,
        left: `${coordX}%`
      }}
      onClick={onClick}
    >
      <FingerPrint />
      <span className='sr-only'>{name}</span>
    </button>
  )
}

export default PointSettingsButton
