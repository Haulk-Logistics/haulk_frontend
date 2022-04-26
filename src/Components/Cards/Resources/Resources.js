import React, { useState } from "react";
import style from "./Resources.module.css";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";
import contactImage from "../../../Asset/Images/contactUsImage.svg";
import faqData from "./FAQData";

const Item = ({ ques, ans }) => {
  const [show, setShow] = useState(false);
  const toggle = () => {
    setShow(!show);
  };

  return (
    <div className={style.faqLog} style={{ width: "38.125rem " }}>
      <div className={style.faqQuestions}>
        <p>{ques}</p>
        <div onClick={toggle}>
          {show ? <AiOutlineMinus /> : <AiOutlinePlus />}
        </div>
      </div>
      <div
        className={style.faqAns}
        style={{ marginTop: `${show ? "1.5rem" : "0"}` }}
      >
        {" "}
        {show && ans}{" "}
      </div>
    </div>
  );
};

function App() {
  return (
    <div className={style.resourceSection}>
      {/* Resource Page */}
      <header className={style.resourceHeader}>
        <h2>Resources</h2>
      </header>

      <div className={style.resourceContainer}>
        <div className={style.faqSection}>
          <div className={style.faqHeading}>
            <h3>Frequently Asked Questions</h3>
            <p>
              Here is a list of different possible questions that you might find
              helpful.
            </p>
          </div>

          <div className={style.faqs}>
            <h3>FAQs</h3>
            <div>
              {faqData &&
                faqData.map((item, i) => (
                  <Item key={i} ques={item.question} ans={item.answer} />
                ))}
            </div>
          </div>
        </div>

        <div className={style.contactUs}>
          <div className={style.contactUsHeading}>
            <h3>Contact Us</h3>
            <p>
              You can contact us incase of enquiries, emergency and sponsorship
              and other thing through our Email, Phone numbers and you can also
              visit our address.
            </p>
          </div>
          <div className={style.contactImage}>
            <img src={contactImage} alt="contact-us" />
          </div>
        </div>

        <div className={style.contactDetails}>
          <div className={style.contactEmail}>
            <h4>Email</h4>
            <p>Haulklogistics@gmail.com</p>
          </div>
          <div className={style.contactNum}>
            <h4>Phone Numbers</h4>
            <span>08033343567 </span>
            <span>08069874534</span>
            <span>09045674563</span>
          </div>
          <div className={style.contactAddress}>
            <h4>Address</h4>
            <p>Tenece Complex, Centenery city, Enugu state.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
