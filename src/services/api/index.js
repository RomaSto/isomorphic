import _ from 'lodash';
import runtimeEnv from '@mars/heroku-js-runtime-env';

import { API_ON_ERROR, API_ON_LOADING, API_ON_DATA } from './types';

const env = runtimeEnv();

export function onError(AP, value) {
  return {
    type: `${AP}_${API_ON_ERROR}`,
    payload: {
      error: value
    }
  };
}

export function onLoading(AP, value) {
  return {
    type: `${AP}_${API_ON_LOADING}`,
    payload: {
      isLoading: value
    }
  };
}

export function onData(AP, data) {
  return {
    type: `${AP}_${API_ON_DATA}`,
    payload: data
  };
}

function parseResponse(response) {
  return new Promise((resolve) => response.json()
    .then((json) => {
      response.data = json;
      return resolve(response);
    }).catch(()=> {
      console.debug('No response provided');
      response.data = {};
      return resolve(response);
    }));
}

const what = (args) => {
  if (!args.response.ok) {
    throw args.response;
  }
  args.dispatch(onLoading(args.actionPrefix, false));
  return args.response;
};

const ok = (args) => {
  return args.dispatch(onData(args.actionPrefix, args.response.data));
};

const bad = (args) => {
  console.error('Error occurred while request', args);
  return args.dispatch(onError(args.actionPrefix, args.response.data));
};

const defaultConfig = () => {
  const ac = localStorage.getItem('_ac');
  return {
    // cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
    // credentials: 'same-origin', // include, *omit
    headers: new Headers({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${ac}`
    }),
    method: 'GET'
  }
};

function setHeaders(values, replace = false) {
  const headers = defaultConfig().headers;
  Object.keys(values).forEach((key) => {
    if (replace) {
      _.isNull(values[key]) ? headers.delete(key) : headers.set(key, values[key]);
    } else {
      headers.append(key, values[key]);
    }
  });
  return headers;
}

export function post(actionPrefix, resourceUrl, body, options) {
  const requestConfig = defaultConfig();
  options = options || {};

  requestConfig.method = 'POST';
  if (options.useFormData) {
    requestConfig.body = body;
  } else {
    requestConfig.body = _.isObject(body) ? JSON.stringify(body) : body;
  }
  if (options.headers) {
    requestConfig.headers = setHeaders(options.headers, options.replaceHeaders);
  }
  return request(actionPrefix, resourceUrl, requestConfig);
}

export function put(actionPrefix, resourceUrl, body) {
  const requestConfig = defaultConfig();
  requestConfig.body = _.isObject(body) ? JSON.stringify(body) : body;
  requestConfig.method = 'PUT';
  return request(actionPrefix, resourceUrl, requestConfig);
}

export function patch(actionPrefix, resourceUrl, body) {
  const requestConfig = defaultConfig();
  requestConfig.body = _.isObject(body) ? JSON.stringify(body) : body;
  requestConfig.method = 'PATCH';
  return request(actionPrefix, resourceUrl, requestConfig);
}

export function get(actionPrefix, resourceUrl, body) {
  const requestConfig = defaultConfig();
  return request(actionPrefix, resourceUrl, requestConfig);
}

export function del(actionPrefix, resourceUrl, body) {
  const requestConfig = defaultConfig();
  requestConfig.method = 'DELETE';
  return request(actionPrefix, resourceUrl, requestConfig);
}

export function request(actionPrefix, resourceUrl, config) {
  const url = `${env.REACT_APP_API_ROOT}${resourceUrl}`;
  return (dispatch) => {
    dispatch(onLoading(actionPrefix, true));
    return fetch(url, config)
      .then(parseResponse)
      .then((response) => what({ response, actionPrefix, dispatch }))
      .then((response) => ok({ response, actionPrefix, dispatch }))
      .catch((response) => bad({ response, actionPrefix, dispatch }));
  };
}