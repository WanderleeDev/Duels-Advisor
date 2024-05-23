import banner from '../../../assets/svg/banner.svg'

export default function Banner () {
  return (
    <div className='fixed inset-0'>
      <img
        className='block h-full w-full object-cover'
        src={banner}
        alt='banner'
      />
    </div>
  )
}
