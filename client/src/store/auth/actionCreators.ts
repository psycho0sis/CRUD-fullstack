import type { Dispatch } from '@reduxjs/toolkit';

import { api } from '../../api';
import type { ILoginRequest } from '../../api/auth/types';
import { loginFailure, loginStart, loginSuccess } from './authReducer';

export const loginUser =
  (data: ILoginRequest) =>
  async (dispatch: Dispatch): Promise<void> => {
    try {
      dispatch(loginStart());

      const res = await api.auth.login(data);
      dispatch(loginSuccess(res.accessToken));
    } catch (error: any) {
      console.log(error);
      dispatch(loginFailure(error.message));
    }
  };
