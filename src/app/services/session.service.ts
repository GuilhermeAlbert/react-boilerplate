import EncryptStorage from "encrypt-storage";
import EnvConstants from "../constants/env.constants";
import StorageConstants from "../constants/storage.constants";

import {
  SessionStorageItem,
  SessionStorageItemConvert,
} from "../entities/storage/session.storage.entity";

export class SessionService {
  private static _instance: SessionService;

  public static get Instance() {
    return this._instance || (this._instance = new this());
  }

  /**
   * Find session at local storage
   * @returns {string | null}
   */
  public findSession = (): string | null => {
    const encryptStorage = EncryptStorage(
      EnvConstants.ENCRYPT_STORAGE_SECRET_KEY
    );

    return encryptStorage.getItem(StorageConstants.SESSION);
  };

  /**
   * Find session token at local storage
   * @returns {string | null}
   */
  public findToken = (): string | null => {
    const sessionString: string | null = this.findSession();

    if (sessionString) {
      const session: SessionStorageItem =
        SessionStorageItemConvert.toSessionStorageItem(
          JSON.stringify(sessionString)
        );

      if (session.token) return session.token;
    }

    return null;
  };

  /**
   * Verify if is authenticated
   * @returns {boolean}
   */
  public isAuthenticated = (): boolean => {
    const token: string | null = this.findToken();

    return token ? true : false;
  };
}
