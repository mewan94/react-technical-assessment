import React from 'react';
import { Col, Row, FormWrapper, FormHeader, FormBody } from '../../components/common';
import { Button, TextInput, DropDown, RadioBtnGroup, MobileNoInput } from '../../components/input';

export const Form: React.VFC = () => {

    return (
        <FormWrapper onSubmit={values => {console.log((values))}}>
            <FormHeader title={'Data Form'} customClass='text-center' />
            <FormBody customClass="mt-10">
                <Col customClass="mb-6">
                    <TextInput
                        id="email1"
                        type="email"
                        name={'email1'}
                        isDisabled={false}
                        label={'Sample Email Input'}
                    />
                </Col>
                <Col customClass="mb-6">
                    <TextInput
                        id="password2"
                        type="password"
                        name={'password2'}
                        label={'Sample Password Input'}
                        placeholder="Password"
                    />
                </Col>

                <Col customClass="mb-6">
                    <DropDown
                        title='Sample Dropdown Input'
                        options={[
                            {
                                label: '2020',
                                value: '2020'
                            },
                            {
                                label: '2021',
                                value: '2021'
                            },
                            {
                                label: '2022',
                                value: '2022'
                            },
                            {
                                label: '2023',
                                value: '2023'
                            },
                        ]}
                        name={''}
                        onChange={() => { }}
                    />
                </Col>

                <Col customClass="mb-6">
                    <RadioBtnGroup
                        title={'Sample Radio Input'}
                        name='years'
                        options={[
                            {
                                label: '2020',
                                value: '2020'
                            },
                            {
                                label: '2021',
                                value: '2021'
                            },
                            {
                                label: '2022',
                                value: '2022'
                            },
                            {
                                label: '2023',
                                value: '2023'
                            },
                        ]}

                    />
                </Col>

                <Col customClass='mb-6'>
                    <MobileNoInput
                        id='mobile'
                        name={'mobile'}
                        label={'Sample Mobile No'}
                        value=''
                        placeholder={'+(00) 1234-123 1234'}
                    />
                </Col>

                <Row>
                    <Button
                        id="submit"
                        btnType={'submit'}
                        label={'Submit'}
                        onClick={() => { }}
                    />
                </Row>
            </FormBody>
        </FormWrapper>
    );
};
