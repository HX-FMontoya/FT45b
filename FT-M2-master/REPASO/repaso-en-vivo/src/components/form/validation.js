export default function validation(dataUser) {
  // dataUser -> // {userName: "h"}
  let errors = {};
  if (dataUser.userName.length === 0) {
    errors.userName = "UserName no puede estar vacio";
  }
  if (dataUser.password.length === 0) {
    errors.password = "Password no puede estar vacio";
  }
  // {password: "El campo no puede estar vacio"}
  return errors;
}