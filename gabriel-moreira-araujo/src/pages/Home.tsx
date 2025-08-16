import Header from '@/components/Header/Header'
import Banner from '@/components/Banner/Banner'
import Categories from '@/components/Categories/Categories'
import ContainerLayout from '@/components/ContainerLayout/ContainerLayout'
import RelatedProducts from '@/components/RelatedProducts/RelatedProducts'
import Partners from '@/components/Partners/Partners'
import Brands from '@/components/Brands/Brands'

const Home = () => {

  return (
    <>
      <Header/>
      <main>
        <Banner/>
        <ContainerLayout>
          <Categories/>
          <RelatedProducts showBtnSeeAll={false}/>
          <Partners/>
          <RelatedProducts showBtnSeeAll={true}/>
          <Partners/>
          <Brands/>
          <RelatedProducts showBtnSeeAll={true}/>
        </ContainerLayout>
      </main>
    </>
  )
}

export default Home
