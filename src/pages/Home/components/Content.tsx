import { Link } from 'react-router-dom'
import MainLogo from '../../../shared/ui/MainLogo'

export default function Content () {
  return (
    <section className='bg-white dark:bg-gray-900 min-h-dvh grid place-content-center'>
      <div className='py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 z-10 relative'>
        <div className='animate-slide-up-fade animate-duration-800'>
          <MainLogo />
          <p className='mb-8 text-lg font-thin font-Belwe lg:text-xl sm:px-16 lg:px-48 text-gray-200 select-none py-4 text-balance'>
            Card catalog, information, strategies and more, create your custom
            deck and get a tailor-made strategy
          </p>
          <Link className='text-amber-400 hover:text-white underline font-Belwe text-2xl transition-colors' to='/advisor'>
            let's duel
          </Link>
        </div>
      </div>
      <div className='bg-gradient-to-b from-blue-50 to-transparent dark:from-blue-900 w-full h-full absolute top-0 left-0 z-0' />
    </section>
  )
}
