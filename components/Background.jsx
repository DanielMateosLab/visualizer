import Image from 'next/image'
import baseKitchen from '../public/baseKitchen.jpeg'

const Background = () => (
  <div className='absolute h-[130vh] w-full z-0 blur-md'>
    <div className='relative h-full w-full'>
      <Image
        src={baseKitchen}
        layout='fill'
        objectFit='cover'
        objectPosition='center'
        alt=''
      />
    </div>
  </div>
)

export default Background
