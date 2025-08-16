import ShieldCheck from '@/assets/icons/ShieldCheck.svg';
import Truck from '@/assets/icons/Truck.svg';
import CreditCard from '@/assets/icons/CreditCard.svg';
import Logo from '@/assets/icons/Logo.svg';
import Vector from '@/assets/icons/Vector.svg';
import Heart from '@/assets/icons/Heart.svg';
import UserCircle from '@/assets/icons/UserCircle.svg';
import ShoppingCart from '@/assets/icons/ShoppingCart.svg';
import CrownSimple from '@/assets/icons/CrownSimple.svg';
import SearchIcon from '@/assets/icons/SearchIcon.svg?react'

import styles from './Header.module.scss';

const Header = () => {

  return (
    <header className={styles.container}>
      <div className={styles.containerinfoBadges}>
        <div className={styles.infoBadge}>
          <img src={ShieldCheck} />
          <span>Compra <strong>100% segura</strong></span>
        </div>

        <div className={styles.infoBadge}>
          <img src={Truck} />
          <span><strong>Frete grátis</strong>  acima de R$ 200 </span>
        </div>

        <div className={styles.infoBadge}>
          <img src={CreditCard} />
          <span><strong>Parcele</strong> suas compras </span>
        </div>
      </div>

      <div className={styles.containerSearch}>
        <img src={Logo} alt='logo da empresa' />
        <div className={styles.containerFieldSearch}>
          <input className={styles.inputSearch} type="text" placeholder='O que você está buscando?'/>
          <SearchIcon/>
        </div>
        <div className={styles.containerBtnsSearch}>
          <button>
            <img src={Vector} alt='logo da empresa' />
          </button>

          <button>
            <img src={Heart} alt='logo da empresa' />
          </button>

          <button>
            <img src={UserCircle} alt='logo da empresa' />
          </button>

          <button>
            <img src={ShoppingCart} alt='logo da empresa' />
          </button>
        </div>
      </div>

      <nav className={styles.menu}>
        <ul>
          <li>Todas categorias</li>
          <li>Supermercado</li>
          <li>Livros</li>
          <li>Moda</li>
          <li>Lançamentos</li>
          <li>Ofertas do dia</li>
          <li className={styles.signature}>
            <img src={CrownSimple} />
            Assinatura
          </li>
        </ul>
      </nav>
      
    </header>
  )
}

export default Header
