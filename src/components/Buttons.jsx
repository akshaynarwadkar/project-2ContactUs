import styles from "../Hero.module.css";
import { MdMessage } from "react-icons/md";

const Buttons = ({ isOutline, text, icon, ...rest }) => {
  return (
    <div>
      <button
        {...rest}
        className={isOutline ? styles.emailbutton : styles.buttoncontainer}
      >
        {icon}&nbsp; {text}
      </button>
    </div>
  );
};
export default Buttons;
