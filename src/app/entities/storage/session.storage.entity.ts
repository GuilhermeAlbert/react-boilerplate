export interface SessionStorageItem {
  token: string;
  remember_me: string;
}

export class SessionStorageItemConvert {
  public static toSessionStorageItem(json: string): SessionStorageItem {
    return JSON.parse(json);
  }

  public static sessionStorageItemToJson(value: SessionStorageItem): string {
    return JSON.stringify(value);
  }
}
