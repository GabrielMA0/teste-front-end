import ShieldCheckIcon from '@/assets/icons/shield-check-icon.svg?react';
import TruckIcon from '@/assets/icons/truck-icon.svg?react';
import CreditCardIcon from '@/assets/icons/credit-card-icon.svg?react';
import LogoIcon from '@/assets/icons/logo-icon.svg?react';
import BoxArrowIcon from '@/assets/icons/box-arrow-icon.svg?react';
import HeartIcon from '@/assets/icons/heart-icon.svg?react';
import UserCircleIcon from '@/assets/icons/user-circle-icon.svg?react'
import ShoppingCartIcon from '@/assets/icons/shopping-cart-icon.svg?react';
import CrownSimpleIcon from '@/assets/icons/crown-simple-icon.svg?react';
import SearchIcon from '@/assets/icons/search-icon.svg?react'

import styles from './Header.module.scss';

const Header = () => {

  return (
    <header className={styles.container}>
      <div className={styles.containerinfoBadges}>
        <div className={styles.infoBadge}>
          <ShieldCheckIcon/>
          <span>Compra <strong>100% segura</strong></span>
        </div>

        <div className={styles.infoBadge}>
          <TruckIcon/>
          <span><strong>Frete grátis</strong>  acima de R$ 200 </span>
        </div>

        <div className={styles.infoBadge}>
          <CreditCardIcon/>
          <span><strong>Parcele</strong> suas compras </span>
        </div>
      </div>

      <div className={styles.containerSearch}>
        <a href="/">
          <LogoIcon/>
        </a>
        <div className={styles.containerFieldSearch}>
          <input className={styles.inputSearch} type="text" placeholder='O que você está buscando?'/>
          <SearchIcon/>
        </div>
        <div className={styles.containerBtnsSearch}>
          <button>
            <BoxArrowIcon className={styles.boxArrowIcon}/>
          </button>

          <button>
            <HeartIcon/>
          </button>

          <button>
            <UserCircleIcon/>
          </button>

          <button>
            <ShoppingCartIcon/>
          </button>
        </div>
      </div>

      <nav className={styles.menu}>
        <ul>
          <li>
            <a href="/">
              Todas categorias
            </a>
          </li>
          <li>
            <a href="/">
              Supermercado
            </a>
          </li>
          <li>
            <a href="/">
              Livros
            </a>
          </li>
          <li>
            <a href="/">
              Moda
            </a>
          </li>
          <li>
            <a href="/">
              Lançamentos
            </a>
          </li>
          <li>
            <a href="/" className={styles.selectedPage}>
              Ofertas do dia
            </a>
          </li>
          <li className={styles.signature}>
            <a href="/">
              <CrownSimpleIcon/>
              Assinatura
            </a>
          </li>
        </ul>
      </nav>
      
    </header>
  )
}

export default Header
