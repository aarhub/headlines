import { API_BBC_NEWS } from './Constants';

export async function doRequestBBCNews() {
  const result = await fetch(API_BBC_NEWS).then(response => {
    if (response && response.ok) {
      return response.json();
    }
  }).catch(err => {
    //result = err;
  });

  return result;
}