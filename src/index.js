import $ from 'jquery';

function htmlTemplate() {
  return `<li> 
 <p>Full name</p>
 <p>Description</p>
 <p>Website URL</p>
 </li>
 `;
}

function searchParks() {
  // Listens to when user clicks submit
  $('.js-form').submit(function (event) {
    event.preventDefault();
    let states = $('js-states').val();
    let statessearch = states.split(' ');
    console.log(statessearch);
    let numResults = $('js-numOfResult').val();
  });
}

function main() {
  console.log('DOM is loaded');
  searchParks();
  const startMsg = $('<p>Webpack is working!</p>');
  $('#root').append(startMsg);
}

$(main);