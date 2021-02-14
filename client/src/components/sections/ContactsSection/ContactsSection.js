import React from "react";
import {Map, GoogleApiWrapper, Marker, Circle} from 'google-maps-react'
import "./ContactsSection.scss";
import ContactsForm from "../../ContactsForm";


const ContactsSection = (props) => {

    return (
        <section className="contacts-section" id="fifth-section">
            <div className="container">
                <div className="row">
                    <div className="col-3">
                        <div className="contacts-section__title" style={{textAlign: "left"}}>Контакты</div>
                        <div className="contacts-section__subtitle">Email</div>
                        <div className="contacts-section__contact">semen228@mail.ru</div>
                        <div className="contacts-section__subtitle">Телефон</div>
                        <div className="contacts-section__contact">+375 25 2132 123</div>
                        <div className="contacts-section__subtitle">Адрес</div>
                        <div className="contacts-section__contact">г.Гомель Крестьянская 22</div>
                    </div>
                    <div className="col-5">
                        <div className="contacts-section__title">Связаться</div>
                        <ContactsForm/>
                    </div>
                    <div className="col-4">
                        <div className="contacts-section__title">Мы карте</div>
                        <div className="map-wrapper">
                            <Map google={props.google}
                                 zoom={13}
                                 style={{height: "420px", borderRadius: "5px"}}
                                 initialCenter={{lat: 52.41278674273404, lng: 31.022998322948137}}
                            >
                            </Map>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};


export default GoogleApiWrapper({
    apiKey: 'AIzaSyC8WBJLuoQtv-wv-M84CZNdd_eUU69nZ0Y'
})(ContactsSection);
