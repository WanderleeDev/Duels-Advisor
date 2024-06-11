import Banner from './components/Banner'
import InfoLink from './components/InfoLink'
import Footer from './components/Footer'
import Content from './components/Content'

export default function Home () {
  return (
    <>
      <Banner />
      <div className='absolute z-10 top-7 left-2/4 -translate-x-2/4 w-full'>
        <InfoLink />
      </div>
      <Content />
      <Footer />
    </>
  )
}
