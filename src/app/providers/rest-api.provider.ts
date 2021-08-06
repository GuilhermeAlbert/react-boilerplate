import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios";
import EnvConstants from "../constants/env.constants";
import RestAPIConstants from "../constants/rest-api.constants";
import RouteConstants from "../constants/route.constants";
import { StorageSessionItemService } from "../services/storage/session.storage.service";


export class RestAPIProvider {
  private static _instance: RestAPIProvider;

  private axiosInstance: AxiosInstance = axios.create({
    baseURL: `${EnvConstants.APP_BASE_API_URL}`,
    headers: {
      [RestAPIConstants.CONTENT_TYPE_KEY]:
        RestAPIConstants.CONTENT_TYPE_DEFAULT_VALUE,
    },
  });

  public static get Instance(): RestAPIProvider {
    return this._instance || (this._instance = new this());
  }

  constructor() {
    this.axiosInstance.interceptors.request.use(
      this._requestsInterceptor,
      (error: any) => {
        Promise.reject(error);
      }
    );

    this.axiosInstance.interceptors.response.use(
      (response: AxiosResponse<any>) => response,
      (error) => {
        if (!error.response) window.location.replace(RouteConstants.ERROR);

        return Promise.reject(error);
      }
    );
  }

  /**
   * @private
   * Intercepta todas as requisições
   * @param {AxiosRequestConfig} requestConfig Configurações da requisição
   * @returns {AxiosRequestConfig | Promise<AxiosRequestConfig>}  Configurações após interceptação
   */
  private async _requestsInterceptor(
    requestConfig: AxiosRequestConfig
  ): Promise<AxiosRequestConfig> {
    const storageSessionItemService: StorageSessionItemService =
      StorageSessionItemService.Instance;

    const bearerToken: string | undefined =
      await storageSessionItemService.getToken();

    if (bearerToken)
      requestConfig.headers.Authorization = `${RestAPIConstants.BEARER_TOKEN_PREFIX}${bearerToken}`;

    return requestConfig;
  }

  /**
   * @private
   * Monta um form data com base num JSON recebido
   * @param {any} formDataJson JSON com as informações do form data
   * @param {boolean} isPatch Informa se a requisição é do tipo Patch ou não
   * @returns {FormData} FormData criado
   */
  private _mountFormData(formDataJson: any): FormData {
    if (typeof formDataJson == "string")
      formDataJson = JSON.parse(formDataJson);

    const formData: FormData = new FormData();

    Object.keys(formDataJson).forEach((key) =>
      formData.append(key, formDataJson[key])
    );

    return formData;
  }

  /**
   * @public
   * Loga um usuário
   * @param {any} data Dados para login
   * @returns {Promise<AxiosResponse<any>>} Resultado da requisição
   */
  public login = (data: any): Promise<AxiosResponse<any>> => {
    return this.axiosInstance.request({
      method: RestAPIConstants.POST_METHOD,
      url: RestAPIConstants.LOGIN,
      data,
    });
  };

  /**
   * @public
   * Desloga o usuário
   * @returns {Promise<AxiosResponse<any>>} Resultado da requisição
   */
  public logout = (): Promise<AxiosResponse<any>> => {
    return this.axiosInstance.request({
      method: RestAPIConstants.GET_METHOD,
      url: RestAPIConstants.LOGOUT,
    });
  };

  /**
   * @public
   * Obtém os dados do usuário logado
   * @returns {Promise<AxiosResponse<any>>} Resultado da requisição
   */
  public getAuthenticatedUser = (): Promise<AxiosResponse<any>> => {
    return this.axiosInstance.request({
      method: RestAPIConstants.GET_METHOD,
      url: RestAPIConstants.AUTHENTICATED,
    });
  };

  /**
   * @public
   * Envia email para recupearar a senha
   * @param {any} data Dados para requisição
   * @returns {Promise<AxiosResponse<any>>} Resultado da requisição
   */
  public forgotPassword = (data: any): Promise<AxiosResponse<any>> => {
    return this.axiosInstance.request({
      method: RestAPIConstants.POST_METHOD,
      url: RestAPIConstants.FORGOT_PASSWORD,
      data,
    });
  };

  /**
   * @public
   * Reseta a senha do usuário
   * @param {any} data Dados para requisição
   * @returns {Promise<AxiosResponse<any>>} Resultado da requisição
   */
  public resetPassword = (data: any): Promise<AxiosResponse<any>> => {
    return this.axiosInstance.request({
      method: RestAPIConstants.POST_METHOD,
      url: RestAPIConstants.RESET_PASSWORD,
      data,
    });
  };

  /**
   * @public
   * Cadastra um usuário
   * @param {any} data Dados para cadastro
   * @returns {Promise<AxiosResponse<any>>} Resultado da requisição
   */
  public register = (data: any): Promise<AxiosResponse<any>> => {
    return this.axiosInstance.request({
      method: RestAPIConstants.POST_METHOD,
      url: RestAPIConstants.REGISTER,
      data,
    });
  };
}
