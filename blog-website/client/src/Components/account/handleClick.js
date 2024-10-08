import { performSignup, performLogin } from "../../service/accountWork.js";

export async function handleClickSignin(inputData, fieldData, setFieldData) {
    if (fieldData.name === "" || 
        fieldData.email === "" ||
        fieldData.username === "" ||
        fieldData.password === "" ){
        alert("Please fill all the input fields");
        return;
    }

    await performSignup(fieldData);
}

export async function handleClickLogin(inputData, fieldData, setFieldData){
    if (fieldData.username === "" ||
        fieldData.password === "" ){
        alert("Please fill all the input fields");
        return;
    }

    const userData = await performLogin(fieldData);

    return userData;
}