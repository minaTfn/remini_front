import React, {useState} from "react";
import {FormattedMessage} from "react-intl";
import PropTypes from "prop-types";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faAngleDoubleRight, faMapMarkerAlt} from "@fortawesome/free-solid-svg-icons";
import api from "../../utils/api";

function ShowDelivery(props) {

    const [contactInfo, setContactInfo] = useState({});


    const {lang} = localStorage;
    const translatedTitle = lang === 'fa' ? `title_${lang}` : 'title';
    const translated_date = (lang === 'fa') ? `${lang}_request_date` : 'request_date';
    const iconDir = lang === 'fa' && `fa-flip-horizontal`;
    const {delivery} = props;

    const onContactInfoClick = async () => {
        const data = await api.delivery.getContactInfo(delivery.slug);
        setContactInfo(data);
    }

    return (
        <div className="card mt-2">
            <div className="card-header">
                <h3 className=" pb-1">
                    {delivery.title}
                </h3>
                <div className="text-muted font-sm">
                    <FormattedMessage
                        id="delivery.requested"
                        defaultMessage="requested"
                        values={{
                            date: `${delivery[translated_date]}`,
                            owner: `${delivery.owner.name}`
                        }}
                    />
                </div>
            </div>
            <div className="card-body">
                <div className="my-2">
                    <FontAwesomeIcon icon={faMapMarkerAlt} className="font-lg mx-2 text-info"/>
                    <span>
                        <b className="px-1 text-info">{delivery.origin.country[translatedTitle]},</b>
                        <span className="mx-1 font-sm">{delivery.origin.title}</span>
                        <FontAwesomeIcon icon={faAngleDoubleRight} className={`font-sm mx-2 ${iconDir}`}/>
                        <b className="px-1 text-info">{delivery.destination.country[translatedTitle]} ,</b>
                        <span className="mx-1 font-sm">{delivery.destination.title}</span>
                    </span>
                </div>
                <div className="ml-2 my-2">
                    {
                        delivery.deadline_date && <>
                            <span className="font-weight-bold">
                                <FormattedMessage
                                    id="delivery.deadline_date"
                                    defaultMessage="delivery.deadline_date"
                                />:
                            </span>
                            {` ${delivery.deadline_date}`}
                        </>
                    }
                </div>
                <div className="ml-2 my-2">
                    <span className="font-weight-bold">
                        <FormattedMessage
                            id="delivery.payment_method"
                            defaultMessage="delivery.payment_method"
                        />:
                    </span>
                    {` ${delivery.payment_method[translatedTitle]}`}
                </div>
                <div className="ml-2 my-2">
                    <span className="font-weight-bold">
                        <FormattedMessage
                            id="delivery.delivery_method"
                            defaultMessage="delivery.delivery_method"
                        />:
                    </span>
                    {` ${delivery.delivery_method[translatedTitle]}`}
                </div>
                <div className="ml-2 my-2">
                    <button onClick={onContactInfoClick} type="button"
                            className="font-weight-bold btn btn-light border">
                        <FormattedMessage
                            id="delivery.contact.information"
                            defaultMessage="Contact Info"
                        />
                    </button>

                    {contactInfo &&
                        Object.keys(contactInfo).map((keyName) => (
                            <div className="mt-2" key={contactInfo[keyName].title}>
                                - {contactInfo[keyName][translatedTitle]}: {contactInfo[keyName].value} <br/>
                            </div>
                        ))}

                </div>

                <div className="mt-1 px-2 py-3">{delivery.description}</div>
            </div>
        </div>
    );

}

ShowDelivery.propTypes = {
    delivery: PropTypes.object.isRequired,
};
export default ShowDelivery;
