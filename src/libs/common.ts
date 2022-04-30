

export const formatMetaData = (metaData: any[]) => {
    try {
        return metaData.map(record => {
            return {
                label: record.label ?? (record.isHidden ? 'hidden-data': ''),
                type: record.type,
                isOptional: record.isOptional ?? false,
                isHidden: record.isHidden ?? false,
                options: (record.value && !record.isHidden) ? record.value.map((val: string) => { return ({ label: val, value: val }) }) : [],
                value: record.value ?? '',
                defaultVal: record.default ?? null,
            }
        })
    } catch (error) {
        console.error(error)
        return([])
    }
}

const getValue = (userData: any, key: string, type:string) => {

    if(userData && userData[key]){
        let numberPattern = /\d+/g;
        return type!=='telephone' ? userData[key] : userData[key].match(numberPattern).join('')
    } else {
        return null
    }
}

const validateField = (metaRecord: any, value: string) => {
    try {
        if(!metaRecord.isOptional && !value){
            return false
        }
        if(metaRecord.type === 'email'){
            const validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
            return validRegex.test(value)
        } else if(metaRecord.type === 'radio' || metaRecord.type === 'select'){
            let optionArr = metaRecord.options.map((op:any) => {return op.label})
            if(optionArr.includes(value)){
                return true
            } else {
                return false
            }
        } else if(metaRecord.type === 'telephone'){
            const validRegex = /([0-9]{11}),?/gi
            return validRegex.test(value)
        } else if(metaRecord.type === 'hidden'){
            return value ? true : false
        }
    } catch (error) {
        
    }
}

export const validateUserData = (metaData: any[], userData: any) => {
    try {

        let validatedValue = metaData.map(m => {
            const val = getValue(userData, m.label, m.type)
            return {
                label: m.label,
                value: val,
                isValid: validateField(m, val)
            }
        })

        return validatedValue
        
    } catch (error) {
        
    }
}