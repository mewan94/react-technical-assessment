import React from 'react';
import { Col, Row, FormWrapper, FormHeader, FormBody } from '../../components/common';
import { Button } from '../../components/input';
import { useAppDispatch } from '../../app/hooks';
import { DynamicUserInput, MetaDataRecordProps } from '../../components/input/dynamicUserInput'
import {setUserData} from './userFormSlice'
import { validateUserData } from '../../libs/common';

interface UserFormProps {
  metaData: MetaDataRecordProps[]
}

export default function UserForm({ metaData }: UserFormProps) {

  const dispatch = useAppDispatch();

  const handleSubmit = (values: object) => {
    let validatedValue = validateUserData(metaData, values)
    dispatch(setUserData(validatedValue))
  }

  return (
    <div data-testid="user-form-1" className="flex flex-col items-center justify-center mb-20">
      <div className="flex flex-col bg-white shadow-md px-4 sm:px-6 md:px-8 lg:px-10 py-8 rounded-md w-full max-w-md">
        <FormWrapper onSubmit={handleSubmit}>
          <FormHeader title={'Data Form'} customClass='text-center' />
          <FormBody customClass="mt-10">
            
            {metaData.map((record, i) => {
              return (
                <Col customClass="mb-6" key={i}>
                  <DynamicUserInput {...record} />
                </Col>
              )
            })}

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