import { toast } from "react-toastify";
import { HTTPConstants } from "../../app/constants/http.constants";

export class ToastService {
  private static _instance: ToastService;

  public static get Instance() {
    return this._instance || (this._instance = new this());
  }

  public httpRequestError = (error: any) => {
    if (error.response !== undefined) {
      if (error.response.status === HTTPConstants.BAD_REQUEST) {
        this.warning(error.response.data[0] ?? "feedback.request_error");
      } else if (error.response.status === HTTPConstants.UNAUTHORIZED) {
        this.warning("feedback.invalid_email_or_password");
      } else {
        this.error("feedback.request_error");
      }
    } else {
      this.error("feedback.request_error");
    }
  };

  public success = (message?: string) => {
    toast.success(message ?? "feedback.request_success");
  };

  public error = (message?: string) => {
    toast.error(message ?? "feedback.request_error");
  };

  public warning = (message?: string) => {
    toast.warning(message ?? "feedback.request_error");
  };
}
