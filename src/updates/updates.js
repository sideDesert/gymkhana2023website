const updates = [];

//fetching updates
const PROJECT_ID = 'w2t1mzvp';
const DATASET = 'gymkhana-updates';

let QUERY = encodeURIComponent('*[_type == "update"]');
// Compose the URL for your project's endpoint and add the query
let URL = `https://${PROJECT_ID}.api.sanity.io/v2023-03-12/data/query/${DATASET}?query=${QUERY}`;

fetch(URL)
  .then((res) => res.json())
  .then(({ result }) => {
    // get the list element, and the first item
    console.log(result);
    if (result.length > 0) {
      // remove the placeholder content
      list.removeChild(firstListItem);

      result.forEach((update) => {
        // create a list element for each pet
        updates.append(update);
      });
    }
  })
  .catch((err) => console.error(err));

console.log(updates);

export default updates;
