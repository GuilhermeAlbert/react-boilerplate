export interface User {
  id: number;
  email: string;
  email_verified_at: Date;
  username: string;
  created_at: Date;
  updated_at: Date;
  deleted_at: Date;
}

export class UserConvert {
  public static toUser(json: string): User {
    return JSON.parse(json);
  }

  public static userToJson(value: User): string {
    return JSON.stringify(value);
  }
}
