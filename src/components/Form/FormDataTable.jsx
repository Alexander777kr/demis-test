import React from "react";
import styles from "./Form.module.css";
import { connect } from "react-redux";

function FormDataTable(props) {
  return (
    <div>
      <table className={styles.userData}>
        <tbody>
          <tr>
            <td>Ф. И. О.</td>
            <td>{props.fullName}</td>
          </tr>

          <tr>
            <td>Адрес</td>
            <td>{props.address}</td>
          </tr>

          <tr>
            <td>Телефон</td>
            <td>{props.phone}</td>
          </tr>

          <tr>
            <td>e-mail</td>
            <td>{props.email}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

let mapStateToProps = (state) => ({
  fullName: state.tablePage.fullName,
  address: state.tablePage.address,
  phone: state.tablePage.phone,
  email: state.tablePage.email,
});

export default connect(mapStateToProps)(FormDataTable);
