const EMAIL = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
const PASSWORD = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
const NAME = /^[A-Za-z]+$/;
const PHONE = /^\d{10}$/;
const URL = /^(ftp|http|https):\/\/[^ "]+$/;

export { EMAIL, PASSWORD, NAME, PHONE, URL };
