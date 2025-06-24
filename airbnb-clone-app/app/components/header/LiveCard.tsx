import { Liveitem } from '@/app/types/app';
import Image from 'next/image';

type LiveCardProps = Liveitem ;

const LiveCard = ({title,img}:LiveCardProps) => {
  return (
    <div className='cursor-pointer hover:scale-105 transform transition duration-300 ease-out'>
<div className="relative h-80 w-80">
  <Image
    src={img}
    alt='LiveCard-img' fill/>

</div>
      <h3 className="text-lg font-semibold mt-2">{title}</h3>
      
    </div>
  )
}

export default LiveCard