'use strict';

document.querySelector('button').addEventListener('click', function(event) {

  console.log('You submitted!');
  let query = document.querySelector('#queryInput').value;
  let url = "https://api.github.com/search/repositories?sort=stars&q="+query;

  
  


});
