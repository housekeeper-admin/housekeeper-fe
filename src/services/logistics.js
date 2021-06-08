import client from './http';

/**
 *
 * @param {string} search
 */
export const getLogisticsList = search => {
  const params = {};
  if (search.trim()) {
    params.search = search;
  }
  const res = client.post('/logistics', params);
  return res;
};
