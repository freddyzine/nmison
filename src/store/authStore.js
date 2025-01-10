import { computed, makeAutoObservable, observable, action } from "mobx";
import { makePersistable } from "mobx-persist-store";

class AuthStore {
  token = null;
  resetToken = "";
  isLoggedIn = false;
  uuid = null;

  constructor() {
    makeAutoObservable(
      this,
      {
        token: observable,
        isLoggedIn: observable,
        uuid: observable,
        resetToken: observable,
        updateLogin: action,
        updateToken: action,
        updateUuid: action,
        updateResetToken: action,
        authDetails: computed,
      },
      { autoBind: true }
    );
    makePersistable(this, {
      name: "AuthStore",
      properties: ["token", "isLoggedIn", "uuid"],
      storage: window.localStorage,
    });
  }

  updateToken(token) {
    this.token = token;
  }

  updateResetToken(token) {
    this.resetToken = token;
  }

  updateUuid(uuid) {
    this.uuid = uuid;
  }

  updateLogin(status) {
    this.isLoggedIn = status;
  }

  get authDetails() {
    return {
      token: this.token,
      isLoggedIn: this.isLoggedIn,
      uuid: this.uuid,
      resetToken: this.resetToken,
    };
  }
}

export const authStore = new AuthStore();
