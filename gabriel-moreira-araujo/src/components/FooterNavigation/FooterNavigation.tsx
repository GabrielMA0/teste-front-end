import styles from '@/components/FooterNavigation/FooterNavigation.module.scss'
import Logo from '@/assets/icons/Logo.svg?react'
import Instagram from '@/assets/icons/instagram.svg?react'
import Facebook from '@/assets/icons/facebook.svg?react'
import Linkedin from '@/assets/icons/linkedin.svg?react'

const FooterNavigation = () => {
    return(

        <>
            <section className={styles.footer}>
                <div className={styles.footerBrands}>
                    <a href="/">
                        <Logo/>
                    </a>

                    <span className={styles.footerDescription}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</span>
                    <div className={styles.footerSocial}>
                        <a href="https://www.instagram.com/econverse.ag" target='_blank'><Instagram/></a>
                        <a href="https://www.facebook.com/agenciaeconverse" target='_blank'><Facebook/></a>
                        <a href="https://www.linkedin.com/company/econverse" target='_blank'><Linkedin/></a>
                    </div>
                </div>

                <div className={styles.footerLinks}>
                    <div className={styles.footerColums}>
                        <span className={styles.footerTitle}>Institucional</span>
                        <a href="https://www.econverse.com.br/quem-somos"  target='_blank' className={styles.footerLink}>Sobre Nós</a>
                        <a href="/" className={styles.footerLink}>Movimento</a>
                        <a href="https://www.econverse.com.br/trabalhe-conosco" target='_blank' className={styles.footerLink}>Trabalhe conosco</a>
                    </div>

                    <div className={styles.footerColums}>
                        <span className={styles.footerTitle}>Ajuda</span>
                        <a href="https://www.econverse.com.br/suporte-e-evolucao" target='_blank' className={styles.footerLink}>Suporte</a>
                        <a href="https://www.econverse.com.br/contato" target='_blank' className={styles.footerLink}>Fale Conosco</a>
                        <a href="/" className={styles.footerLink}>Perguntas Frequentes</a>
                    </div>

                    <div className={styles.footerColums}>
                        <span className={styles.footerTitle}>Termos</span>
                        <a href="/" className={styles.footerLink}>Termos e Condições</a>
                        <a href="/" className={styles.footerLink}>Política de Privacidade</a>
                        <a href="/" className={styles.footerLink}>Troca e Devolução</a>
                    </div>
                </div>
            </section>

            <section className={styles.footerContainerRight}>
                <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</span>
            </section>
        </>
        
    )
}

export default FooterNavigation