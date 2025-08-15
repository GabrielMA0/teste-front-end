import Header from '../components/Header/Header'
import Banner from '../components/Banner/Banner'
import Categories from '../components/Categories/Categories'
import ContainerLayout from '../components/ContainerLayout/ContainerLayout'

const Home = () => {

  return (
    <>
      <Header></Header>
      <main>
        <Banner></Banner>
        <ContainerLayout>
          <Categories></Categories>
        </ContainerLayout>
      </main>
    </>
  )
}

export default Home
