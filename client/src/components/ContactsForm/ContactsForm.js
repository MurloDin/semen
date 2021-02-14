import React from "react";
import axios from "axios";
import {Form, Field} from 'react-final-form'
import "./ContactsForm.scss";


const ContactsForm = ({total, items}) => {

    const onSubmit = values => {
        const apiUrl = 'http://localhost:8000/api/order';
        axios.post(apiUrl, JSON.stringify(values), {headers: {"content-type": "application/json"}}).then((resp) => console.log('r', resp))
    };


    return (
        <Form
            onSubmit={onSubmit}
            initialValues={{}}
            render={({handleSubmit, form, submitting, pristine, values}) => (
                <form
                    onSubmit={handleSubmit}
                    className="contacts-form"
                    autoComplete="off"
                >
                    <div className="contacts-form__input-wrapper">
                        <Field
                            placeholder="Имя"
                            name="name"
                            component="input"
                            type="text"
                            className="contacts-form__input"
                        />
                    </div>
                    <div className="contacts-form__input-wrapper">
                        <Field
                            placeholder="Сроки"
                            name="date"
                            component="input"
                            type="date"
                            className="contacts-form__input"
                        />
                    </div>
                    <div className="contacts-form__input-wrapper">
                        <Field
                            placeholder="Телефон"
                            name="phone"
                            component="input"
                            type="phone"
                            className="contacts-form__input"
                        />
                    </div>
                    <div className="contacts-form__input-wrapper">
                        <Field
                            placeholder="Ваш комментарий"
                            name="comment"
                            component="textarea"
                            type="text"
                            className="contacts-form__textarea"
                        />
                    </div>
                    <button
                        type="submit"
                        disabled={submitting || pristine}
                        className="contacts-form__btn"
                    >
                        Отправить
                    </button>
                </form>
            )}
        />
    )
}

export default ContactsForm;
