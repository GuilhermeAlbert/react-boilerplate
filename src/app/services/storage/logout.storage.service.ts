import StorageConstants from "../../../app/constants/storage.constants";
import { StorageService } from "../storage.service";

export class StorageLogoutItemService {
  private static _instance: StorageLogoutItemService;
  private storageService: StorageService = StorageService.Instance;

  public static get Instance() {
    return this._instance || (this._instance = new this());
  }

  public remove = async () => {
    this.storageService.removeItem(StorageConstants.SESSION);
  };
}
