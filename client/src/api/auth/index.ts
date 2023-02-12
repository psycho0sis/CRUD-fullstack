import type { ResponsePromise } from 'ky';
import { api } from '../api';
import { endpoints } from '../endpoints';
import type { ILoginRequest } from './types';

export const login = (params: ILoginRequest): ResponsePromise =>
  api.post(endpoints.AUTH.LOGIN, {
    headers: {
      'content-type': 'application/json',
    },
    json: {
      params,
    },
  });
