export class RegistrationModel {
  id?: number;
  name: string = "";
  email: string = "";
  login: string = "";
  password: string = "";
  passwordConfirm?: string = "";
  emailConfirmed?: boolean;
  createDate?: Date;
}

export class LoginModel {
  login: string = "";
  password: string = "";
}
