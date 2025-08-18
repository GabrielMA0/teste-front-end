import styles from '@/components/Title/Title.module.scss'
import type { ReactNode } from 'react'

type Props = {
    children: ReactNode,
    className?: string
}

const Title = ({children, className}: Props) => {
    return(
        <h2 className={`${styles.title} ${className}`}>
            {children}
        </h2>
    )
}

export default Title