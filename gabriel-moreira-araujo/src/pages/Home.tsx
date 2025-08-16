import Header from '@/components/Header/Header'
import Banner from '@/components/Banner/Banner'
import Categories from '@/components/Categories/Categories'
import ContainerLayout from '@/components/ContainerLayout/ContainerLayout'
import RelatedProducts from '@/components/RelatedProducts/RelatedProducts'

const Home = () => {

  return (
    <>
      <Header></Header>
      <main>
        <Banner></Banner>
        <ContainerLayout>
          <Categories></Categories>
          <RelatedProducts showBtnSeeAll={true}></RelatedProducts>
        </ContainerLayout>
      </main>
    </>
  )
}

export default Home
