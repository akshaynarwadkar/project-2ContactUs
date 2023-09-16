import styles from "../Navigation.module.css";

const Navigation = () => {

  return (
    <nav className={styles.nav}>
      <img src="/assets/Frame.png" alt="logo"></img>
      <div>
        <ul className={styles.navlist}>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </div>
    </nav>
  );
};
export default Navigation;
