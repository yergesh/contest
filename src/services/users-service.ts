import http from "@/services/http-common";
import { LoginModel, RegistrationModel } from "@/types/RegistrationModel";

export async function addUser(user: RegistrationModel) {
    await http.post("users", user);
}

export async function loginAsync(loginModel: LoginModel): Promise<string> {
    return (await http.post<string>("auth/login", loginModel)).data;
}
