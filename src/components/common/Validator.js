import React from "react";
import Validator from 'validator';
import isEmpty from "lodash/isEmpty";
import {FormattedMessage} from "react-intl";

export function ValidateLogin(data) {
    let errors = {};

    const required = ['email', 'password'];

    required.forEach((field) => {
        if (Validator.isEmpty(data[field])) {
            errors[field] = [<FormattedMessage id="global.validate.required" defaultMessage="This field is required"/>];
        }
    });

    if (!Validator.isEmail(data.email)) {
        errors.email = ['Email is invalid'];
    }

    if (!Validator.isLength(data.password, {min: 6})) {
        errors.password = [<FormattedMessage id="global.validate.Password_6_char"
                                             defaultMessage="Password must be at least 6 characters"/>];
    }

    return {
        errors,
        isValid: isEmpty(errors),
    }

}

export function ValidateDelivery(data) {
    let errors = {};
    if (data.origin_country_id.length === 0) {
        errors.origin_country_id = [<FormattedMessage id="global.validate.required"
                                                      defaultMessage="This field is required"/>];
    }
    if (data.origin_city_id.length === 0) {
        errors.origin_city_id = [<FormattedMessage id="global.validate.required"
                                                   defaultMessage="This field is required"/>];
    }
    if (data.destination_country_id.length === 0) {
        errors.destination_country_id = [<FormattedMessage id="global.validate.required"
                                                           defaultMessage="This field is required"/>];
    }
    if (data.destination_city_id.length === 0) {
        errors.destination_city_id = [<FormattedMessage id="global.validate.required"
                                                        defaultMessage="This field is required"/>];
    }
    if (Validator.isEmpty(data.title)) {
        errors.title = [<FormattedMessage id="global.validate.required" defaultMessage="This field is required"/>];
    }
    if (data.contact_methods_ids.length === 0) {
        errors.contact_methods_ids = [<FormattedMessage id="global.validate.required"
                                                        defaultMessage="This field is required"/>];
    }
    if (data.payment_method_id.length === 0) {
        errors.payment_method_id = [<FormattedMessage id="global.validate.required"
                                                      defaultMessage="This field is required"/>];
    }
    if (data.delivery_method_id.length === 0) {
        errors.delivery_method_id = [<FormattedMessage id="global.validate.required"
                                                       defaultMessage="This field is required"/>];
    }

    return {
        errors,
        isValid: isEmpty(errors),
    }
}

export function ValidateChangePassword(data) {
    let errors = {};

    const required = ['old_password', 'password', 'password_confirmation'];

    required.forEach((field) => {
        if (Validator.isEmpty(data[field])) {
            errors[field] = [<FormattedMessage id="global.validate.required" defaultMessage="This field is required"/>];
        }
    });

    if (!Validator.isLength(data.old_password, {min: 6})) {
        errors.old_password = ['Password is invalid'];
    }

    if (!Validator.isLength(data.password, {min: 6})) {
        errors.password = [<FormattedMessage id="global.validate.Password_6_char"
                                                 defaultMessage="Password must be at least 6 characters"/>];
    }

    if (!Validator.equals(data.password, data.password_confirmation)) {
        errors.password_confirmation = ['Passwords must match'];
    }
    return {
        errors,
        isValid: isEmpty(errors),
    }
}

export function ValidateForgotPassword(data) {
    let errors = {};
    if (Validator.isEmpty(data.email)) {
        errors.email = [<FormattedMessage id="global.validate.required" defaultMessage="This field is required"/>];
    } else if (!Validator.isEmail(data.email)) {
        errors.email = ['Email is invalid'];
    }
    return {
        errors,
        isValid: isEmpty(errors),
    }
}

export function ValidateResetPassword(data) {
    let errors = {};

    const required = ['password', 'password_confirmation'];

    required.forEach((field) => {
        if (Validator.isEmpty(data[field])) {
            errors[field] = [<FormattedMessage id="global.validate.required" defaultMessage="This field is required"/>];
        }
    });

    if (!Validator.isLength(data.password, {min: 6})) {
        errors.password = [<FormattedMessage id="global.validate.Password_6_char"
                                             defaultMessage="Password must be at least 6 characters"/>];
    }

    if (!Validator.equals(data.password, data.password_confirmation)) {
        errors.password_confirmation = [<FormattedMessage id="global.validate.password_match"
                                                          defaultMessage="Passwords must match"/>];
    }
    return {
        errors,
        isValid: isEmpty(errors),
    }
}

export function ValidateProfile(data) {
    let errors = {};

    if (!Validator.isLength(toString(data.name), {min: 3})) {
        errors.name = ['Name is invalid'];
    }

    if (typeof data.cell_number !== 'undefined' && !Validator.isEmpty(data.cell_number) && (!Validator.isMobilePhone(data.cell_number, 'fa-IR') || !Validator.isNumeric(data.cell_number))) {
        errors.cell_number = ['Cell Number is invalid'];
    }

    return {
        errors,
        isValid: isEmpty(errors),
    }

}

export function ValidateSignUp(data) {
    let errors = {};

    const required = ['name', 'email', 'password', 'password_confirmation'];

    required.forEach((field) => {
        if (Validator.isEmpty(data[field])) {
            errors[field] = [<FormattedMessage id="global.validate.required" defaultMessage="This field is required"/>];
        }
    });

    if (!Validator.isEmail(data.email)) {
        errors.email = ['Email is invalid'];
    }

    if (!Validator.isLength(data.password, {min: 6})) {
        errors.password = [<FormattedMessage id="global.validate.Password_6_char"
                                             defaultMessage="Password must be at least 6 characters"/>];
    }

    if (!Validator.isEmpty(data.cell_number) && (!Validator.isMobilePhone(data.cell_number, 'fa-IR') || !Validator.isNumeric(data.cell_number))) {
        errors.cell_number = ['Cell Number is invalid'];
    }

    if (!Validator.equals(data.password, data.password_confirmation)) {
        errors.password_confirmation = [<FormattedMessage id="global.validate.password_match"
                                                          defaultMessage="Passwords must match"/>];
    }
    return {
        errors,
        isValid: isEmpty(errors),
    }

}

