import styles from '@/components/Button/Button.module.scss'
import type { ReactNode, ButtonHTMLAttributes } from 'react'

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  children: ReactNode;
  styleBtn: 'primary' | 'secondary';
};

const Button = ({ children, styleBtn = 'primary'}: ButtonProps) => {
  return (
    <button
      type="button"
      className={`${styles.btn} ${styleBtn === 'primary' ? styles.primary : styles.secondary}`}
    >
      {children}
    </button>
  );
};


export default Button