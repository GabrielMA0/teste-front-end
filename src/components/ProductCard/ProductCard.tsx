import styles from '@/components/ProductCard/ProductCard.module.scss'
import Button from '../Button/Button'

type TypeProps = {
    product: Product,
    onClick: () => void
}

const ProductCard = (props: TypeProps) => {
    const {product, onClick} = props

    return(
        <div className={styles.containerProductCard} onClick={onClick}>
            <img src={product.photo} alt={product.descriptionShort} />
            <span className={styles.productName}>{product.productName}</span>
            <span className={styles.discount}>R$ 30,90</span>
            <span className={styles.value}>
                {new Intl.NumberFormat('pt-BR', {
                style: 'currency',
                currency: 'BRL'
                }).format(product.price || 0)}
            </span>
            <span className={styles.installment}>ou 2x de R$ 49,95 sem juros</span>
            <span className={styles.freight}>Frete grátis</span>
            <Button styleBtn='primary'>COMPRAR</Button>
        </div>
    )
}

export default ProductCard