import ProductCard from '@/components/ProductCard/ProductCard';
import ArrowSlideIcon from '@/assets/icons/arrow-right-icon.svg?react';
import { fetchProducts } from '@/service/fetchProducts';
import Modal from '@/components/Modal/Modal'

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import { useEffect, useState } from 'react';

const Carousel = () => {

    const [products, setProducts] = useState<Product[]>([]);
    const [productSelected, setproductSelected] = useState<Product | null>({});
    const [amoutProduct, setAmoutProduct] = useState<number>(0);

    const loadProducts = async (): Promise<void> =>{
        const response: Product[] = await fetchProducts();
        setProducts(response);
    }

    useEffect(() => {
        loadProducts();
    }, [])

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
                        <ProductCard onClick={() => setproductSelected(product)} product={product}/>
                    </SwiperSlide>
                ))}
            </Swiper>

            <button type='button' className='slideNextBtn'>
                <ArrowSlideIcon/>
            </button>

            <button type='button' className='slidePrevBtn'>
                <ArrowSlideIcon/>
            </button>

        </div>

        {Object.keys(productSelected ?? {}).length > 0   && (
            <Modal productSelected={productSelected} setproductSelected={setproductSelected} setAmoutProduct={setAmoutProduct} amoutProduct={amoutProduct} />
        )}
        </>    
    )
}

export default Carousel