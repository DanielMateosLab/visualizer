import Image from 'next/image'

const MaterialButton = ({ name, previewImgSrc, selected, onClick }) => (
  <button
    className='flex items-center p-1 lg:p-1 bg-gray-50 rounded-md'
    onClick={onClick}
    aria-current={selected}
  >
    {selected && <span className='px-1 lg:px-4'>{name}</span>}
    <div className='relative w-14 h-14 lg:w-16 lg:h-16'>
      <Image
        className='object-cover'
        layout='fill'
        alt={`Muestra del material "${name}"`}
        src={previewImgSrc}
      />
    </div>
  </button>
)

export default MaterialButton
