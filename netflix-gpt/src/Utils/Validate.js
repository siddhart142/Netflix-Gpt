

export const checkValidData = (email,password) => {
    const isEmailValid = /^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/.test(email)
    const isPassWordValid =/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password)

    if(!isEmailValid) return "Email Id is not Valid";
    if(!isPassWordValid) return "Password not valid";
    return null;

}