import styles from "../css/Header.module.css";
import logo from "../asset/logo.svg";
import { Link } from "react-router-dom";
import useAuthStore from "../store/store";

interface NavLink {
  to: string;
  text: string;
}

interface HeaderProps {
  navLinks: NavLink[];
}

const Header = ({ navLinks }: HeaderProps) => {
  const loginUser = useAuthStore.getState().user;

  return (
    <>
      <div className={styles.gnb}>
        <div className={styles.logoParent}>
          <img className={styles.logoIcon} alt="logo" src={logo} />
          <div className={styles.tabParent}>
            {navLinks.map((link, index) => (
              <Link
                key={index}
                to={link.to}
                className={styles.tab}
                style={{ textDecoration: "none" }}
              >
                <div className={styles.text}>{link.text}</div>
              </Link>
            ))}
          </div>
          <div className={styles.tab}>
            {loginUser ? (
              <a className={styles.text} href="/logout">
                로그아웃
              </a>
            ) : (
              <a className={styles.text} href="/login">
                로그인
              </a>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
