import styles from '@/components/Banner/Banner.module.scss'
import Button from '@/components/Button/Button'

const Banner = () => {
    return(
        <section className={styles.banner}>
            <h1 className={styles.title}>Venha conhecer nossas promoções</h1>
            <h2 className={styles.subTitle}><strong>50% Off</strong> nos produtos </h2>
            <Button styleBtn="secondary">Ver produto</Button>
        </section>
    )
}

export default Banner