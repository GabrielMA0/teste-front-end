import styles from '@/components/Brands/Brands.module.scss'
import Title from '@/components/Title/Title'
import Logo from '@/assets/icons/logo-icon.svg?react'

const Brands = () => {
    return(
        <section>
            <Title className={styles.titleMain}>Navegue por marcas</Title>
            <div className={styles.containerBrands}>
                <div className={styles.brand}>
                    <Logo/>
                </div>

                <div className={styles.brand}>
                    <Logo/>
                </div>

                <div className={styles.brand}>
                    <Logo/>
                </div>

                <div className={styles.brand}>
                    <Logo/>
                </div>
            </div>
            
        </section>
    )
}

export default Brands