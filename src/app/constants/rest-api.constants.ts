type HTTP_METHOD = "GET" | "POST" | "PATCH" | "DELETE" | "PUT";

export default class RestAPIConstants {
  /**
   * HTTP Methods
   * @var HTTP_METHOD
   */
  static readonly GET_METHOD: HTTP_METHOD = "GET";
  static readonly POST_METHOD: HTTP_METHOD = "POST";
  static readonly PATCH_METHOD: HTTP_METHOD = "PATCH";
  static readonly DELETE_METHOD: HTTP_METHOD = "DELETE";
  static readonly PUT_METHOD: HTTP_METHOD = "PUT";

  /**
   * Base codes
   * @var string
   */
  static readonly CONTENT_TYPE_KEY: string = "Content-Type";
  static readonly CONTENT_TYPE_DEFAULT_VALUE: string = "application/json";
  static readonly CONTENT_TYPE_MULTIPART: string = "multipart/form-data";
  static readonly BEARER_TOKEN_PREFIX: string = "Bearer ";
  static readonly X_AUTHORIZATION_KEY: string = "X-Authorization";

  /**
   * Pagination constants
   */
  static readonly LIMIT: number = 10;

  /**
   * Auth endpoints
   * @var string
   */
  static readonly AUTH: string = "auth";
  static readonly LOGIN: string = `${RestAPIConstants.AUTH}/login`;
  static readonly LOGOUT: string = `${RestAPIConstants.AUTH}/logout`;
  static readonly AUTHENTICATED: string = `${RestAPIConstants.AUTH}/user`;
  static readonly REGISTER: string = `${RestAPIConstants.AUTH}/register`;

  /**
   * Password endpoints
   * @var string
   */
  static readonly PASSWORD: string = "password";
  static readonly FORGOT_PASSWORD: string = `${RestAPIConstants.PASSWORD}/forgot`;
  static readonly RESET_PASSWORD: string = `${RestAPIConstants.PASSWORD}/reset`;
}
