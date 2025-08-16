import Button from "@/components/Button/Button"
import styles from '@/components/PartnerCard/PartnerCard.module.scss'

const PartnerCard = () => {
    return (
        <div className={styles.containerPartner}>
            <span className={styles.title}>Parceiros</span>
            <span className={styles.subTitle}>Lorem ipsum dolor sit amet, consectetur</span>
            <Button styleBtn="secondary">CONFIRA</Button>
        </div>
    )
}

export default PartnerCard