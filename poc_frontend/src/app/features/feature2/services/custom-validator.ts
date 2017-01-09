export class CustomValidator{
    /**
     * Validator which makes all address group members mandatory if at least one is provided.
     */
    static groupAddressValidator(group): any {
        let streetName = group.controls.streetName;
        let streetNumber = group.controls.streetNumber;
        let zipCode = group.controls.zipCode;
        let municipality = group.controls.municipality;
        let box = group.controls.box;

        //if all fields are empty, clean all validation messages
        if (CustomValidator.fieldIsEmpty(streetName.value)
                && CustomValidator.fieldIsEmpty(streetNumber.value)
                && CustomValidator.fieldIsEmpty(zipCode.value)
                && CustomValidator.fieldIsEmpty(municipality.value)
                && CustomValidator.fieldIsEmpty(box.value)) {
            //clean errors
            CustomValidator.clearErrors(streetName);
            CustomValidator.clearErrors(streetNumber);
            CustomValidator.clearErrors(zipCode);
            CustomValidator.clearErrors(municipality);
            return null;
        } else {
            //when at least one field is not empty, all the others are mandatory
            CustomValidator.setRequiredErrorIfEmpty(streetName);
            CustomValidator.setRequiredErrorIfEmpty(streetNumber);
            CustomValidator.setRequiredErrorIfEmpty(zipCode);
            CustomValidator.setRequiredErrorIfEmpty(municipality);
        }
    }

    /**
     * Determines if given field is empty
     */
    static fieldIsEmpty (field) {
        return (field === undefined || field === null || field.length === 0);
    }
    /**
     * Clears all errors on given field
     */
    static clearErrors (field) {
        field.setErrors(null);
    }


    /**
     * Sets required error on field if it is empty.
     */
    static setRequiredErrorIfEmpty (field) {
        if ( CustomValidator.fieldIsEmpty(field.value) ) {
            let errors = {};
            errors['required'] = 'error';
            field.setErrors(errors);
        }
    }
}