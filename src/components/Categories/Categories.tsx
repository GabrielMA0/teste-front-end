import styles from '@/components/Categories/Categories.module.scss'
import ScreensIcon from '@/assets/icons/screens-icon.svg?react'
import SuperMarketIcon from '@/assets/icons/super-market-icon.svg?react'
import DrinksIcon from '@/assets/icons/drink-icon.svg?react'
import ToolsIcon from '@/assets/icons/tools-icon.svg?react'
import HealthIcon from '@/assets/icons/health-care-icon.svg?react'
import SportsIcon from '@/assets/icons/race-icon.svg?react'
import FashionIcon from '@/assets/icons/fashion-icon.svg?react'
import { useState } from 'react'

const Categories = () => {
    const [category, setCategory] = useState<string>('screens');

    return(
        <section className={styles.containerCategories}>
            <button onClick={() => setCategory('screens')} className={`${category === 'screens' ? styles.selectedCategory : null} ${styles.containerCategory}`}>
                <div className={styles.containerImg}>
                    <ScreensIcon/>
                </div>
                <span>Tecnologia</span>
            </button>

            <button onClick={() => setCategory('superMarket')} className={`${category === 'superMarket' ? styles.selectedCategory : null} ${styles.containerCategory}`}>
                <div className={styles.containerImg}>
                    <SuperMarketIcon/>
                </div>
                <span>Supermercado</span>
            </button>

            <button onClick={() => setCategory('drinks')} className={`${category === 'drinks' ? styles.selectedCategory : null} ${styles.containerCategory}`}>
                <div className={styles.containerImg}>
                    <DrinksIcon/>
                </div>
                <span>Bebidas</span>
            </button>

            <button onClick={() => setCategory('tools')} className={`${category === 'tools' ? styles.selectedCategory : null} ${styles.containerCategory}`}>
                <div className={styles.containerImg}>
                    <ToolsIcon/>
                </div>
                <span>Ferramentas</span>
            </button>

            <button onClick={() => setCategory('health')} className={`${category === 'health' ? styles.selectedCategory : null} ${styles.containerCategory}`}>
                <div className={styles.containerImg}>
                    <HealthIcon/>
                </div>
                <span>Saúde</span>
            </button>

            <button onClick={() => setCategory('sports')} className={`${category === 'sports' ? styles.selectedCategory : null} ${styles.containerCategory}`}>
                <div className={styles.containerImg}>
                    <SportsIcon/>
                </div>
                <span>Esportes e Fitness</span>
            </button>

            <button onClick={() => setCategory('fashion')} className={`${category === 'fashion' ? styles.selectedCategory : null} ${styles.containerCategory}`}>
                <div className={styles.containerImg}>
                    <FashionIcon/>
                </div>
                <span>Moda</span>
            </button>
        </section>
    )
}

export default Categories