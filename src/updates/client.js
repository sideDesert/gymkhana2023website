import client from '@sanity/client';

export default client({
  projectID: 'w2t1mzvp',
  dataset: 'production',
  useCDN: true,
  apiVersion: '12-03-2023',
});
