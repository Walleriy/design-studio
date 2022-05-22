import { ApiService } from './Api.Service';

export class EmailService {
  static async sendEmail(params) {
    try {
      const result = await ApiService.get(`/api/send-email?${params}`);
      return result;
    } catch (e) {
      // log it and ignore
      return { result: 'Something went wrong'};
    }
  }
}
