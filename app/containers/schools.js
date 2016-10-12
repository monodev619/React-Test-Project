/**
 * Created by admin on 09/10/2016.
 */
import React, {Component, PropTypes} from 'react'
import { Field, SubmissionError, reduxForm } from 'redux-form'
import Select from 'react-select'
import 'react-select/dist/react-select.css'
import {connect} from 'react-redux';

import {changeCity, saveSchool} from '../actions/school'


function validate(values) {
    var errors = {};
    var hasErrors = false;

    if (!values.city || values.city.trim() === '') {
        errors.city = '请选择国内城市';
        hasErrors = true;
    }

    if (!values.flightnum || values.flightnum.trim() === '') {
        errors.flightnum = '请输入航班号';
        hasErrors = true;
    }

    if (!values.curSchool || values.curSchool.trim() === '') {
        errors.curSchool = '请选择就读学校';
        hasErrors = true;
    }

    if (!values.wechat || values.wechat.trim() === '') {
        errors.wechat = '请输入您的微信号';
        hasErrors = true;
    }

    return hasErrors && errors;
}

function cityChange(value) {
    console.log(value);
}

const renderField = ({ input, label, placeholder, type, meta: { asyncValidating, touched, error } }) => (
    <div className={`form-group ${touched && error ? 'has-error' : ''}`}>
        <label className="control-label">{label}</label>
        <input type={type} className="form-control form-control-solid placeholder-no-fix" {...input} placeholder={placeholder}/>
        <div className={`help-block ${touched && error ? '' : 'hidden'}`}>
            {touched ? error : ''}
        </div>
    </div>
);

const renderSelectField = ({ input, name, options, onChange, placeholder, meta: { touched, error } }) => (
    <div className={`form-group ${touched && error ? 'has-error' : ''}`}>
        <Select
            simpleValue
            options={options}
            onChange={onChange}
            placeholder={placeholder}
            {...input}
            onBlur={() => input.onBlur(input.value)}
        />
        <div className={`help-block ${touched && error ? '' : 'hidden'}`}>
            {touched ? error : ''}
        </div>
    </div>
);

function saveSchoolHandler(values, dispatch) {
    return dispatch(saveSchool(values))
        .then(function (response) {
            console.log(response);
        });
}

class SchoolForm extends Component {
    static contextTypes = {
        router: PropTypes.object
    };

    render() {
        const { error, handleSubmit, city, pristine, reset, submitting } = this.props;

        const cityOptions = [
            { value: 'beijing', label: '北京' },
            { value: 'liaoning', label: '辽宁' },
            { value: 'hebei', label: '河北' },
            { value: 'jilin', label: '吉林' }
        ]

        const curSchoolOptions = [
            { value: '1', label: '北京大学' },
            { value: '2', label: '东北大学' },
            { value: '3', label: '福建大学' },
            { value: '4', label: '上海交大' }
        ]

        console.log(this.props.school);

        return (
            <div className="container">
                <div className="col-sm-offset-4 col-sm-4">
                    <h3>Test Form</h3>
                    <form role="form" onSubmit={handleSubmit(saveSchoolHandler)}>
                        <Field component={renderSelectField} options={cityOptions} placeholder="国内城市" name="city" onChange={cityChange}/>
                        <Field component={renderField} type="text" placeholder="国内学校" name="school"/>
                        <Field component={renderField} type="text" placeholder="航班号" name="flightnum"/>
                        <Field component={renderSelectField} options={curSchoolOptions} placeholder="就读学校" name="curSchool" onChange={cityChange}/>
                        <Field component={renderField} type="text" placeholder="微信" name="wechat"/>
                        <button type="submit" className="btn">submit</button>
                    </form>
                </div>
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {

    }
}

function mapStateToProps(state, ownProps) {
    return {
        school: state.school
    }
}

SchoolForm = reduxForm({
    form: 'SchoolForm',
    validate
})(SchoolForm);

export default connect(mapStateToProps, mapDispatchToProps)(SchoolForm)