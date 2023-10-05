

export const validateFields = (inputValues) => {
    if (inputValues.firstName == '' || inputValues.lastName == '' || inputValues.email == '' || inputValues.role == '') {
        return false;
    } else {
        return true;
    }
}

