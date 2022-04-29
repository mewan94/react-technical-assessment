import React, { useState } from 'react';
import { Col, Row, FormWrapper, FormHeader, FormBody } from '../../components/common';
import { Button, TextInput, DropDown, RadioBtnGroup, MobileNoInput } from '../../components/input';

export function UserForm() {

  const [email, setEmail] = useState('test')

  return (
    <div data-testid="user-form-1" className="flex flex-col items-center justify-center mb-20">
      <div className="flex flex-col bg-white shadow-md px-4 sm:px-6 md:px-8 lg:px-10 py-8 rounded-md w-full max-w-md">
        <FormWrapper>
          <FormHeader title={'Data Form'} customClass='text-center' />
          <FormBody customClass="mt-10">
            <Col customClass="mb-6">
              <TextInput
                id="email1"
                type="email"
                name={'email1'}
                isDisabled={false}
                label={'Email'}
                value={email}
                onChange={setEmail}
              />
            </Col>
            <Col customClass="mb-6">
              <TextInput
                id="password2"
                type="password"
                name={'password2'}
                label={'Password'}
                placeholder="Password"
                value='123'
              />
            </Col>

            <Col customClass="mb-6">
              <DropDown
                value={'2021'}
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
                title={''}
                name={''}
                onChange={() => { }}
                isDisabled={false}
              />
            </Col>

            <Col customClass="mb-6">
              <RadioBtnGroup
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
                title={'Radio title'}
                value='2022'
                isDisabled={true}
              />
            </Col>

            <Col customClass='mb-6'>
              <MobileNoInput
                id='mobile'
                name={'mobile'}
                label={'Mobile No'}
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

      </div>
    </div>
  )
}