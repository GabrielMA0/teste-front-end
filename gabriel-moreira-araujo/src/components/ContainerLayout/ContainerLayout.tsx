import styles from "@/components/ContainerLayout/ContainerLayout.module.scss"
import type { ReactNode } from "react"

type ContainerProps = {
    children: ReactNode
}

const ContainerLayout = (props: ContainerProps) => {
    const {children} = props

    return(
        <section className={styles.container}>
            {children}
        </section>
    )
}

export default ContainerLayout