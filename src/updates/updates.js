const updates = [
  {
    imgUrl: 'images/updates section/diesta-open.jpg',
    //altText = '',D:\gymkhana2023website\public\images\updates section\diesta-open.jpg
    //desc = '',
    title: 'DJ and Icecream Night Party',
    organiser: 'Diesta',
    //topic = '',
    //speaker = '',
    dateTime: '25th March 2023 - 8 pm',
    venue: 'Near Mess Lawns',
    //preRequisite = '',
  },
];

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
