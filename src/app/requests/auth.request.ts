import { RestAPIProvider } from "../providers/rest-api.provider";
import { ToastService } from "../services/toast.service";

export class AuthService {
  private static _instance: AuthService;
  private restAPIProvider: RestAPIProvider = RestAPIProvider.Instance;
  private toastService: ToastService = ToastService.Instance;

  public static get Instance() {
    return this._instance || (this._instance = new this());
  }

  /**
   * Registra o usuário
   * @param {any} data Dados para register
   * @returns {Promise<void>} Resultado do register
   */
  public register = async (data: any) => {
    return await this.restAPIProvider
      .register({
        name: data.name,
        email: data.email,
        password: data.password,
      })
      .catch((error: any) => {
        this.toastService.httpRequestError(error);

        throw error;
      });
  };

  /**
   * Loga o usuário
   * @param {any} data Dados para login
   * @returns {Promise<void>} Resultado do login
   */
  public login = async (data: any) => {
    return await this.restAPIProvider
      .login({
        email: data.email,
        password: data.password,
      })
      .catch((error: any) => {
        this.toastService.httpRequestError(error);

        throw error;
      });
  };

  /**
   * Obtém os dados do usuário logado
   * @param {any} data Dados
   * @returns {Promise<void>} Resultado
   */
  public getAuthenticatedUser = async () => {
    return await this.restAPIProvider
      .getAuthenticatedUser()
      .catch((error: any) => {
        this.toastService.httpRequestError(error);

        throw error;
      });
  };

  /**
   * Desloga o usuário
   * @returns {Promise<number>} Resultado do logout
   */
  public logout = async () => {
    return await this.restAPIProvider.logout().catch((error: any) => {
      this.toastService.error();

      throw error;
    });
  };

  /**
   * Recupera a senha do usuário
   * @param {any} data Dados para requisição
   * @returns {Promise<void>} Resultado da requisição
   */
  public resetPassword = async (data: any) => {
    return await this.restAPIProvider
      .resetPassword({
        email: data.email,
        password: data.password,
        token: data.token,
      })
      .catch((error: any) => {
        this.toastService.httpRequestError(error);

        throw error;
      });
  };

  /**
   * Envia email para recuperar senha
   * @param {any} data Dados para requisição
   * @returns {Promise<void>} Resultado da requisição
   */
  public forgotPassword = async (data: any) => {
    return await this.restAPIProvider
      .forgotPassword({
        email: data.email,
      })
      .catch((error: any) => {
        this.toastService.httpRequestError(error);

        throw error;
      });
  };
}
