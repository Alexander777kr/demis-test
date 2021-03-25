import React from 'react';
import styles from './Form.module.css';
import {connect} from "react-redux";

function FormDataTable(props) {
    return (
        <div>
            <table className = {styles.userData}>
                <tbody>
                <tr>
                    <td>Ф. И. О.</td>
                    <td>{props.userData.fullName}</td>
                </tr>

                <tr>
                    <td>Адрес</td>
                    <td>{props.userData.address}</td>
                </tr>

                <tr>
                    <td>Телефон</td>
                    <td>{props.userData.phone}</td>
                </tr>

                <tr>
                    <td>e-mail</td>
                    <td>{props.userData.email}</td>
                </tr>
                </tbody>
                
            </table>
        </div>
    )
}

let mapStateToProps = (state) => ({
    userData: state.tablePage

});

export default connect(mapStateToProps)(FormDataTable);
