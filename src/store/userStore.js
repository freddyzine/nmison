import { computed, observable, action, makeObservable } from "mobx";

class UserStore {
  user = null;
  email = "";

  constructor() {
    makeObservable(this, {
      user: observable,
      email: observable,
      updateUser: action,
      updateEmail: action,
      getUser: computed,
    });
  }

  updateUser(user) {
    this.user = user;
  }

  updateEmail(email) {
    this.email = email;
  }

  get getUser() {
    return {
      user: this.user,
      email: this.email,
    };
  }
}

export const userStore = new UserStore();
