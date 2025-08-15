import styles from '@/components/Categories/Categories.module.scss'
import Screens from '@/assets/icons/screens.png'
import SuperMarketIcon from '@/assets/icons/supermercados 1.png'
import DrinksIcon from '@/assets/icons/whiskey.png'
import ToolsIcon from '@/assets/icons/ferramentas 1.png'
import HealthIcon from '@/assets/icons/cuidados-de-saude 1.png'
import SportsIcon from '@/assets/icons/corrida 1.png'
import FashionIcon from '@/assets/icons/moda 1.png'

const Categories = () => {
    return(
        <div className={styles.containerCategories}>
            <div className={styles.containerCategory}>
                <div className={styles.containerImg}>
                    <img src={Screens} alt="" />
                </div>
                <span>Tecnologia</span>
            </div>

            <div className={styles.containerCategory}>
                <div className={styles.containerImg}>
                    <img src={SuperMarketIcon} alt="" />
                </div>
                <span>Supermercado</span>
            </div>

            <div className={styles.containerCategory}>
                <div className={styles.containerImg}>
                    <img src={DrinksIcon} alt="" />
                </div>
                <span>Bebidas</span>
            </div>

            <div className={styles.containerCategory}>
                <div className={styles.containerImg}>
                    <img src={ToolsIcon} alt="" />
                </div>
                <span>Ferramentas</span>
            </div>

            <div className={styles.containerCategory}>
                <div className={styles.containerImg}>
                    <img src={HealthIcon} alt="" />
                </div>
                <span>Saúde</span>
            </div>

            <div className={styles.containerCategory}>
                <div className={styles.containerImg}>
                    <img src={SportsIcon} alt="" />
                </div>
                <span>Esportes e Fitness</span>
            </div>

            <div className={styles.containerCategory}>
                <div className={styles.containerImg}>
                    <img src={FashionIcon} alt="" />
                </div>
                <span>Moda</span>
            </div>
        </div>
    )
}

export default Categories