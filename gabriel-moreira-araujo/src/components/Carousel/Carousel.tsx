import ProductCard from '@/components/ProductCard/ProductCard';
import arrowSlide from '@/assets/icons/arrow-right.svg'
import { fetchProducts } from '@/service/fetchProducts';
import Button from '@/components/Button/Button';
import CloseIcon from '@/assets/icons/close-icon.svg?react';
import MoreIcon from '@/assets/icons/icon-more.svg?react'
import LessIcon from '@/assets/icons/icon-less.svg?react'
import styles from '@/components/Carousel/Carousel.module.scss'

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import { useEffect, useState } from 'react';

const Carousel = () => {

    const [products, setProducts] = useState<Product[]>([]);
    const [productSelected, setproductSelected] = useState<Product>({});
    const [amoutProduct, setAmoutProduct] = useState<number>(0);

    const responseProducts = async (): Promise<void> =>{
        const response: Product[] = await fetchProducts();
        setProducts(response);
    }

    useEffect(() => {
        responseProducts();
    }, [])

    const selectProduct = (product: Product) => {
        setproductSelected(product)
    }
  
    return(
        <>

        <div style={{ width: '100%', position: 'relative'}}>
           <Swiper
            modules={[Navigation]}
            slidesPerView={1}
            spaceBetween={10}
            navigation={{
                nextEl: '.slideNextBtn',
                prevEl: '.slidePrevBtn'
            }}
            breakpoints={{
                640: {          
                slidesPerView: 2,
                spaceBetween: 10,
                },
                1024: {              
                slidesPerView: 4,
                spaceBetween: 5,
                },
                1440: {               
                slidesPerView: 7,
                spaceBetween: 2,
                },
            }}
            >
                {products?.map((product, index) => (
                    <SwiperSlide key={index}>
                        <ProductCard onClick={() => selectProduct(product)} product={product}/>
                    </SwiperSlide>
                ))}
            </Swiper>

            <button type='button' className='slideNextBtn'>
                <img src={arrowSlide} alt="icone de uma seta para direita" />
            </button>

            <button type='button' className='slidePrevBtn'>
                <img src={arrowSlide} alt="icone de uma seta para esquerda" />
            </button>

        </div>

        {Object.keys(productSelected).length > 0   && (
            <>
                <div className={styles.background}></div>

                <div className={styles.modal}>
                    <button onClick={() => setproductSelected({})} className={styles.closeBtn}>
                        <CloseIcon/>
                    </button>
                
                    <div className={styles.containerModal}>
                        <img className={styles.productImg} src={productSelected.photo} alt={productSelected.descriptionShort} />
                   
                        <div className={styles.containerProductDetails}>
                            <span className={styles.name}>{productSelected.productName}</span>
                            <span className={styles.productPrice}>
                                {new Intl.NumberFormat('pt-BR', {
                                style: 'currency',
                                currency: 'BRL'
                                }).format(productSelected.price || 0)}
                            </span>
                            <span className={styles.productDetails}>Many desktop publishing packages and web page editors now many desktop publishing</span>
                            <button className={styles.detailsBtn}>Veja mais detalhes do produto {'>'} </button>

                            <div className={styles.containerProductBtns}>
                                <div className={styles.containerAmountProduct}>
                                    <button className={styles.btnLess} onClick={() => setAmoutProduct( amoutProduct === 0 ? 0 : amoutProduct - 1 )}>
                                        <LessIcon/>
                                    </button>
                                    <span className={styles.textAmount}>{amoutProduct}</span>
                                    <button className={styles.btnMore} onClick={() => setAmoutProduct(amoutProduct + 1)}>
                                        <MoreIcon/>
                                    </button>
                                </div>
                                <Button styleBtn='secondary'>COMPRAR</Button>
                            </div>   
                        </div>
                    </div>
                </div>
            </>
        )}
        </>    
    )
}

export default Carousel