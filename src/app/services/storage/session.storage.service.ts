import StorageConstants from "../../../app/constants/storage.constants";
import { SessionStorageItem } from "../../entities/storage/session.storage.entity";
import { StorageService } from "../storage.service";

export class StorageSessionItemService {
  private static _instance: StorageSessionItemService;
  private storageService: StorageService = StorageService.Instance;

  public static get Instance() {
    return this._instance || (this._instance = new this());
  }

  /**
   * Monta os dados do item
   * @param token
   * @param rememberMe
   * @returns
   */
  public mount = async (token: string, rememberMe: string) => {
    return await {
      token: token,
      remember_me: rememberMe,
    };
  };

  public get = async () => {
    const session: SessionStorageItem | null =
      await this.storageService.getItem(StorageConstants.SESSION);

    if (session) return session;
  };

  public getToken = async () => {
    const session: SessionStorageItem | undefined = await this.get();

    if (session) return session.token;
  };

  public getRememberMe = async () => {
    const session: SessionStorageItem | undefined = await this.get();

    if (session) return session.remember_me;
  };

  public save = async (token: string, rememberMe: string) => {
    const sessionItem: SessionStorageItem = await this.mount(token, rememberMe);

    this.storageService.setItem(
      StorageConstants.SESSION,
      JSON.stringify(sessionItem)
    );
  };
}
