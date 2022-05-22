import { ApiResponse, create } from 'apisauce';
import Router from 'next/router';

export class ApiService {
  static baseURL = process.env.API_BASE_URL;

  static typeJSON = {
    headers: {
      'content-type': 'application/json'
    }
  };

  static api = create({
    baseURL: this.baseURL,
    headers: this.typeJSON.headers
  });

  /**
   * Remove authentication from user
   * @returns {void}
   */
  static async logout() {
    await this.post(`/api/logout`);
    if (typeof window !== 'undefined') {
      await Router.push('/login');
    }
  }

  /**
   * Validate axios request for authentication
   * @param {ApiResponse} request
   * @returns {Promise<ApiResponse>}
   * @throws {DefaultError}
   */
  static async validate(request) {
    if (request.status === 401) {
      await this.logout();
      throw new Error('The email or password entered is invalid. Please try again.');
    }
    if (request.status >= 400) {
      throw request.data;
    }
    return request.data;
  }

  /**
   * Get API request
   * @param {string} url
   * @param {Object} [params]
   * @param {Object} [headers]
   * @returns {Promise<ApiResponse>}
   * @throws {DefaultError}
   */
  static async get(url, params = null, headers = null) {
    const request = await this.api.get(url, params, headers);
    return this.validate(request);
  }
}
