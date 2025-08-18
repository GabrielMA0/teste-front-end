import styles from '@/components/Modal/Modal.module.scss'

import Button from '@/components/Button/Button';
import CloseIcon from '@/assets/icons/close-icon.svg?react';
import MoreIcon from '@/assets/icons/more-icon.svg?react'
import LessIcon from '@/assets/icons/less-icon.svg?react'

type Props = {
    productSelected: Product | null;
    setproductSelected: React.Dispatch<React.SetStateAction<Product | null>>;
    setAmoutProduct: React.Dispatch<React.SetStateAction<number>>;
    amoutProduct: number
}

const Modal = (props: Props) => {

    const {productSelected, setproductSelected, setAmoutProduct, amoutProduct} = props

    return(
        <>
                <div className={styles.background} onClick={() => setproductSelected({})}></div>

                <div className={styles.modal}>
                    <button onClick={() => setproductSelected({})} className={styles.closeBtn}>
                        <CloseIcon/>
                    </button>
                
                    <div className={styles.containerModal}>
                        <img className={styles.productImg} src={productSelected?.photo} alt={productSelected?.descriptionShort} />
                   
                        <div className={styles.containerProductDetails}>
                            <span className={styles.name}>{productSelected?.productName}</span>
                            <span className={styles.productPrice}>
                                {new Intl.NumberFormat('pt-BR', {
                                style: 'currency',
                                currency: 'BRL'
                                }).format(productSelected?.price || 0)}
                            </span>
                            <span className={styles.productDetails}>Many desktop publishing packages and web page editors now many desktop publishing</span>
                            <button className={styles.detailsBtn}>Veja mais detalhes do produto {'>'} </button>

                            <div className={styles.containerProductBtns}>
                                <div className={styles.containerAmountProduct}>
                                    <button className={styles.btnLess} onClick={() => setAmoutProduct( amoutProduct === 0 ? 0 : amoutProduct - 1 )}>
                                        <LessIcon/>
                                    </button>
                                    <span className={styles.textAmount}>{amoutProduct}</span>
                                    <button className={styles.btnMore} onClick={() => setAmoutProduct(amoutProduct + 1)}>
                                        <MoreIcon/>
                                    </button>
                                </div>
                                <Button styleBtn='secondary'>COMPRAR</Button>
                            </div>   
                        </div>
                    </div>
                </div>
            </>
    )
}

export default Modal