import React from "react";
import { Field, reduxForm } from "redux-form";
import styles from "./Form.module.css";
import { connect } from "react-redux";


function FormPage(props) {
  return (
    <div>

      <ContactForm onSubmit={(values) => props.handleInputSubmit(values)} />

    </div>
  );
}

let ContactForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit} className={styles.contactForm}>
      <div className={styles.inputs}>
        <div>
          <span>Ф. И. О.</span>
          <Field
            component="input"
            type="text"
            name="fullName"
            placeholder="Иванов Иван Иванович"
            autoFocus
          />
        </div>
        <div>
          <span>Адрес</span>
          <Field
            component="input"
            type="text"
            name="address"
            placeholder="Страна, город, улица"
          />
        </div>
        <div>
          <span>Телефон</span>
          <Field
            component="input"
            type="tel"
            name="phone"
            placeholder="+7 (999) 999-99-99"
          />
        </div>
        <div>
          <span>e-mail</span>
          <Field
            component="input"
            type="email"
            name="email"
            placeholder="example@gmail.com"
          />
        </div>
      </div>

      <div className={styles.formBtns}>
        <button className={`${styles.btn} ${styles.sendBtn}`}>Отправить</button>
        <button className={`${styles.btn} ${styles.cancelBtn}`} type="reset">
          Очистить
        </button>
      </div>
    </form>
  );
};

ContactForm = reduxForm({
  form: "contact",
})(ContactForm);

const mapDispatchToProps = (dispatch) => ({
  handleInputSubmit: (value) =>
    dispatch({ type: "INPUT_SUBMIT", payload: value }),
});

export default connect(null, mapDispatchToProps)(FormPage);
