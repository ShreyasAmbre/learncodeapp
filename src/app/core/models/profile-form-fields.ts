    export interface ProfileFormFields{
        data: FormFieldsJson[]
    }

    export interface FormFieldsJson{
        name: string,
        label: string,
        value: string,
        type: string,
        preFixIcon: string;
        validators: validatorJson;
        options: optionJson[];
    }

    interface validatorJson{
        required?: boolean
        email?: boolean,
        minLength?: boolean,
        maxLength?: boolean,
        pattern?: boolean,
    }

    interface optionJson{
        label: string,
        value: string
    }