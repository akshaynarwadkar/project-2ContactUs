import styles from "../Hero.module.css";
import Buttons from "./Buttons";
import { MdMessage, MdMail } from "react-icons/md";
import { BiSolidPhoneCall } from "react-icons/bi";
import Inputfield from "./Inputfield";
import { useState } from "react";

const ContactForm = () => {
  const [name, setName] = useState("Akshay");
  const [email, setEmail] = useState("Akshay@help.com");
  const [text, setText] = useState("I need to hurry");

  const viaChat = () => {
    console.log("chat opened");
  };
  const viaCall = () => {
    console.log("call started");
  };
  const viaEmail = () => {
    console.log("email write");
  };
  const onSubmit = (e) => {
    e.preventDefault();
    console.log(e);
    setName(e.target[0].value);
    setEmail(e.target[1].value);
    setText(e.target[2].value);
  };
  return (
    <div>
      <div className={styles.heroflex}>
        <div className={styles.btnflex}>
          <div className={styles.pribtnflex}>
            <Buttons
              onClick={viaChat}
              text="Via Support Chat"
              icon={<MdMessage fontSize="22px" />}
            />

            <Buttons
              onClick={viaCall}
              text="Via Call"
              icon={<BiSolidPhoneCall fontSize="22px" />}
            />
          </div>
          <div className={styles.emailbutton}>
            <Buttons
              onClick={viaEmail}
              isOutline="true"
              text="Via Email form"
              icon={<MdMail fontSize="22px" />}
            />
          </div>
          <div>
            <form onSubmit={onSubmit}>
              <div className={styles.formControl}>
                <Inputfield label="Name"></Inputfield>
              </div>
              <div className={styles.formControl}>
                <Inputfield label="Email"></Inputfield>
              </div>
              <div className={styles.formControl}>
                <Inputfield isTextArea="true" label="Text"></Inputfield>
              </div>
              <div className={styles.submitBtn}>
                <button type="submit">Submit</button>
              </div>
            </form>
          </div>
          <div>{name + "," + email + "," + text}</div>
        </div>

        <div className={styles.image}>
          <img src="/assets/CC_Image.svg"></img>
        </div>
      </div>
    </div>
  );
};
export default ContactForm;
