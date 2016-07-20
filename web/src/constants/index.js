const __PRODUCTION__ = __PRODUCTION__ || process.env.NODE_ENV === 'production'; // eslint-disable-line

if (__PRODUCTION__) {
  throw new Error('API GATEWAY not implemented');
}

export const APIGW_URL = __PRODUCTION__ ?
  null :
  'https://k54bi9lzth.execute-api.us-east-1.amazonaws.com/dev/';

export const GRAPHQL_URL = APIGW_URL + '/graphql';
