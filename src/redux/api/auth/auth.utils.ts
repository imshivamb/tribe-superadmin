import { TSignInResponse } from ".";

export class UserService {
  static setUser(data: TSignInResponse) {
    localStorage.setItem("name", data.data.name);
    localStorage.setItem("email", data.data.email);
  }

  static removeUser() {
    localStorage.removeItem("name");
    localStorage.removeItem("email");
  }

  static getUser() {
    const name = localStorage.getItem("name");
    const email = localStorage.getItem("email");

    return { name, email };
  }
}
