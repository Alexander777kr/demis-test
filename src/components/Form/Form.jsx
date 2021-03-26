import React from "react";
import { Field, reduxForm } from "redux-form";
import styles from "./Form.module.css";
import FormDataTable from "./FormDataTable";

function FormPage(props) {

    const onContactFormSubmit = (formData) => {
        console.log(formData);
    }


  return (
    <div>
      <ReduxContactForm onSubmit = {onContactFormSubmit}/> 
      <FormDataTable />
    </div>
  );
}

const ContactForm = (props) => {
  return (
    <form onSubmit = {props.handleSubmit} className={styles.contactForm}>
      <div className={styles.inputs}>
        <div>
          <span>Ф. И. О.</span>
          <Field
            component="input"
            type="text"
            name = "fullName"
            placeholder="Иванов Иван Иванович"
            autoFocus
          />
        </div>
        <div>
          <span>Адрес</span>
          <Field
            component="input"
            type="text"
            name = "address"
            placeholder="Страна, город, улица"
          />
        </div>
        <div>
          <span>Телефон</span>
          <Field
            component="input"
            type="tel"
            name = "phone"
            placeholder="+7 (999) 999-99-99"
          />
        </div>
        <div>
          <span>e-mail</span>
          <Field
            component="input"
            type="email"
            name = "email"
            placeholder="example@gmail.com"
          />
        </div>
      </div>

      <div className={styles.formBtns}>
        <button className={`${styles.btn} ${styles.sendBtn}`}>Отправить</button>
        <button className={`${styles.btn} ${styles.cancelBtn}`}>Очистить</button>
      </div>
    </form>
  );
};

const ReduxContactForm = reduxForm({
  form: "contact",
})(ContactForm);

export default FormPage;
