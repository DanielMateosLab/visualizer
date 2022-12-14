const ArrowButton = ({ type, onClick, accessibilityText }) => {
  const rotationClass = type === 'next' ? 'rotate-90 lg:rotate-180' : '-rotate-90 lg:rotate-0'

  return (
    <button className={`p-1 lg:p-4 text-gray-50 ${rotationClass}`} onClick={onClick}>
      <svg
        xmlns='http://www.w3.org/2000/svg'
        fill='none'
        viewBox='0 0 24 24'
        strokeWidth={2.5}
        stroke='currentColor'
        className='w-6 h-6'
      >
        <path
          strokeLinecap='round'
          strokeLinejoin='round'
          d='M4.5 15.75l7.5-7.5 7.5 7.5'
        />
      </svg>
      <span className='sr-only'>{accessibilityText}</span>
    </button>
  )
}

export default ArrowButton
