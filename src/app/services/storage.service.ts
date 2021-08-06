import EncryptStorage, { EncryptStorageTypes } from "encrypt-storage";
import EnvConstants from "../../app/constants/env.constants";

export class StorageService {
  private static _instance: StorageService;
  private encryptStorage: EncryptStorageTypes = EncryptStorage(
    EnvConstants.ENCRYPT_STORAGE_SECRET_KEY
  );

  public static get Instance() {
    return this._instance || (this._instance = new this());
  }

  /**
   * Set items
   * @param key
   * @param value
   */
  public setItem = (key: string, value: any): void => {
    this.encryptStorage.setItem(key, value);
  };

  /**
   * Set items
   * @param key
   * @param value
   */
  public removeItem = (key: string): void => {
    this.encryptStorage.removeItem(key);
  };

  /**
   * Set items
   * @param key
   * @param value
   */
  public getItem = (key: string): any => this.encryptStorage.getItem(key);
}
