import { SessionService } from "../services/session.service";

export class SessionMiddleware {
  /**
   * @var SessionMiddleware
   */
  private static _instance: SessionMiddleware;

  /**
   * @var SessionService
   */
  private sessionService: SessionService = SessionService.Instance;

  /**
   * @public
   * @var Instance
   */
  public static get Instance(): SessionMiddleware {
    return this._instance || (this._instance = new this());
  }

  /**
   * Handle an incoming request.
   *
   * @return {boolean}
   */
  public handle = (): boolean => {
    const token: string | null = this.sessionService.findToken();

    return token ? false : true;
  };
}
