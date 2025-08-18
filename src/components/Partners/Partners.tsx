import PartnerCard from "@/components/PartnerCard/PartnerCard"
import styles from '@/components/Partners/Partners.module.scss'

const Partners = () => {
    return (
        <section className={styles.containerPartners}>
            <PartnerCard/>
            <PartnerCard/>
        </section>
    )
}

export default Partners