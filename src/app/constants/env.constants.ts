export default class EnvConstants {
  /**
   * Encrypt storage secret key
   * @var string
   */
  static readonly ENCRYPT_STORAGE_SECRET_KEY: string =
    process.env.REACT_APP_ENCRYPT_STORAGE_SECRET_KEY ??
    "encrypt_storage_secret_key";

  /**
   * Base API url
   * @var string
   */
  static readonly APP_BASE_API_URL: string =
    process.env.REACT_APP_BASE_API_URL ?? "https://trebla.com.br/api";
  
  /**
   * Environment
   * @var string
   */
  static readonly NODE_ENV: string = process.env.NODE_ENV ?? "development";
}
