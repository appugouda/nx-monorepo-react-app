import styles from './header.module.css';

import { fintradeMenu } from "@brady-comm/models";
import ResponsiveAppBar from '../responsive-app-bar/responsive-app-bar';

/* eslint-disable-next-line */
export interface HeaderProps {}

export function Header(props: HeaderProps) {
  return (
    <div className={styles['wrapper']}>
      <div className={styles['container']}>
      {/* <ul>
        {fintradeMenu.map((menu) => (
          <li key={menu.id}>
            <strong>{menu.name}</strong>
          </li>
        ))}
      </ul> */}
      </div>
    </div>
  );
}

export default Header;
