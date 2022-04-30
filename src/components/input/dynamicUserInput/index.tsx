import React from "react";
import { DropDown, MobileNoInput, RadioBtnGroup, TextInput, HiddenInput } from "../";

type optionType = {
  label: string,
  value: string
}

interface MetaDataRecordProps {
  label: string,
  type: 'email' | 'radio' | 'select' | 'telephone' | 'hidden',
  isOptional?: boolean,
  isHidden?: boolean,
  value?: string,
  options?: optionType[],
  defaultVal?: string | null,
}

const DynamicUserInput = ({ label, type, isOptional = false, isHidden = false, value = '', options = [], defaultVal = '' }: MetaDataRecordProps) => {

  if (type === 'email') {
    return (
      <TextInput
        id="email1"
        type="email"
        name={label}
        isDisabled={false}
        label={label}
        value={defaultVal ?? ''}
        isRequired={!isOptional}
      />
    )
  } else if (type === 'telephone') {
    return (
      <MobileNoInput
        id='mobile'
        name={label}
        label={label}
        value={defaultVal ?? ''}
        placeholder={'+(00) 1234-123 1234'}
        isRequired={!isOptional}
      />
    )

  } else if (type === 'radio') {

    return (
      <RadioBtnGroup
        name={label}
        options={options}
        title={label}
        value={defaultVal ?? ''}
      />
    )

  } else if (type === 'select') {
    return (
      <DropDown
        value={defaultVal ?? ''}
        options={options}
        title={label}
        name={label}
        onChange={() => { }}
        isDisabled={false}
        isRequired={!isOptional}
      />
    )
  } else if (type === 'hidden') {
    return (<HiddenInput label={label} value={value} isHidden={isHidden}></HiddenInput>)
  } else {
    return (<></>)
  }
}

export { DynamicUserInput };
export type { MetaDataRecordProps };
