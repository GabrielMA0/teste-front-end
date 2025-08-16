import styles from '@/components/relatedProducts/relatedProducts.module.scss'
import Carousel from '@/components/Carousel/Carousel';
import Title from '@/components/Title/Title';

import { useState } from 'react'

type Props = {
    showBtnSeeAll: boolean;
}

const RelatedProducts = (props: Props) => {
    const {showBtnSeeAll = false} = props
    const [subCategorySelected, setSubCategorySelected] = useState<string>('cellphone');

    return(
        <section className={styles.containerRelatedProducts}>
            <div className={styles.containerTitle}>
                <Title className={styles.titleMain}>Produtos relacionados</Title>
                <hr />
            </div>

            {showBtnSeeAll ? (
                <button className={styles.btnSeeAll}>Ver todos</button>
            ): (
                <div className={styles.containerSubCategory}>
                    <button
                    onClick={() => setSubCategorySelected('cellphone')}
                    className={`${styles.btnSubCategory} ${subCategorySelected === 'cellphone' ? styles.btnActive : ''}`}
                    >
                    CELULAR
                    </button>
                    <button 
                    onClick={() => setSubCategorySelected('accessories')}
                    className={`${styles.btnSubCategory} ${subCategorySelected === 'accessories' ? styles.btnActive : ''}`}>
                        ACESSÓRIOS
                    </button>
                    <button 
                    onClick={() => setSubCategorySelected('tablets')}
                    className={`${styles.btnSubCategory} ${subCategorySelected === 'tablets' ? styles.btnActive : ''}`}>
                        TABLETS
                    </button>
                    <button 
                    onClick={() => setSubCategorySelected('notebooks')}
                    className={`${styles.btnSubCategory} ${subCategorySelected === 'notebooks' ? styles.btnActive : ''}`}>
                        NOTEBOOKS
                    </button>
                    <button 
                    onClick={() => setSubCategorySelected('tvs')}
                    className={`${styles.btnSubCategory} ${subCategorySelected === 'tvs' ? styles.btnActive : ''}`}>
                        TVS
                    </button>
                    <button 
                    onClick={() => setSubCategorySelected('seeAll')}
                    className={`${styles.btnSubCategory} ${subCategorySelected === 'seeAll' ? styles.btnActive : ''}`}>
                        VER TODOS
                    </button>
                </div>
            )}

            {subCategorySelected === 'cellphone' &&(
                <Carousel/>
            )}

        </section>
    )
}

export default RelatedProducts