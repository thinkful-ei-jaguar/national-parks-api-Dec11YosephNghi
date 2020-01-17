import $ from 'jquery';

function htmlTemplate(name, des, url) {
  return `<li> 
 <p>${name}</p>
 <p>${des}</p>
 <p>${url}</p>
 </li>
 `;
}

function printList(data) {
  $('.results').html(data.map(park =>
    htmlTemplate(park.fullName, park.description, park.url)));
}

function callAPI(states, num) {
  const stateQuery = 'stateCode=' + states;
  const apiKey = 'api_key=6QEP3kxADqkQeVG9008RiZTaidHle4iLaSSvWJmI';
  const limit = 'limit=' + num;
  fetch(`https://developer.nps.gov/api/v1/parks?${stateQuery}&${limit}&${apiKey}`)
    .then(res => res.ok ? res.json() : Promise.reject('Cannot fetch parks data'))
    .then(res => printList(res.data));
}

function searchParks() {
  // Listens to when user clicks submit
  $('.js-form').submit(function (event) {
    event.preventDefault();
    let states = $('.js-states').val();
    let numResults = $('.js-numOfResult').val();
    callAPI(states, numResults.toString());
  });
}

function main() {
  searchParks();
}

$(main);