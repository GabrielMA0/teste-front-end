import styles from '@/components/Newsletter/Newsletter.module.scss'
import Button from '@/components/Button/Button'

const Newsletter = () => {
    return(
        <section className={styles.containerNewsletter}>
            <div className={styles.containerTexts}>
                <h2 className={styles.title}>Inscreva-se na nossa newsletter</h2>
                <span className={styles.text}>Assine a nossa newsletter e receba as novidades e conteúdos exclusivos da Econverse.</span>
            </div>

            <div>
                <div className={styles.containerFields}>
                    <input type="text" placeholder='Digite seu nome' className={styles.field}/>
                    <input type="text" placeholder='Digite seu e-mail' className={styles.field}/>
                    <Button styleBtn='secondary'>INSCREVER</Button>
                </div>
              
                <div className={styles.containerCheckbox}>
                    <input id='teste' type="checkbox" />
                    <label htmlFor="teste">Aceito os termos e condições</label>
                </div>
            </div>

            
        </section>
    )
}

export default Newsletter