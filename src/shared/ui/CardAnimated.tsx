import card from '/public/images/others/blueEyes.webp'

export default function CardAnimated () {
  return (
    <img
      className='w-40 h-44 rotate-[15deg]'
      src={card}
      alt='card loader'
    />
  )
}
