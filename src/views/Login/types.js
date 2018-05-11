import { API_ON_ERROR, API_ON_LOADING, API_ON_DATA } from '../../services/api/types';

export const _PRE = 'LOGIN'; // use as prefix only
export const ON_ERROR = `${_PRE}_${API_ON_ERROR}`;
export const ON_LOADING = `${_PRE}_${API_ON_LOADING}`;
export const ON_DATA = `${_PRE}_${API_ON_DATA}`;

export const STORE_MOBILE_NUMBER = `${_PRE}_STORE_PHONE_NUMBER`;
export const STORE_MOBILE_NUMBER_WITHOUT_CODE = `${_PRE}_STORE_MOBILE_NUMBER_WITHOUT_CODE`;
export const SET_AUTHENTICATED = `${_PRE}_SET_AUTHENTICATED`;
export const SET_AUTO_LOGOUT = `${_PRE}_SET_AUTO_LOGOUT`;
