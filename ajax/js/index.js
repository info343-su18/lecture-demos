'use strict';

document.querySelector('button').addEventListener('click', function(event) {
  event.preventDefault();


  console.log('You submitted!');
  let query = document.querySelector('#queryInput').value;
  let url = "https://api.github.com/search/repositories?sort=stars&q="+query;

  console.log("Searching for... "+query);
  
  // let downloadPromise = fetch(url);
  // console.log(downloadPromise);

  // let newPromise = downloadPromise.then(function(response){
  //   let encodePromise = response.json();
  //   //console.log(encodePromise);
  //   return encodePromise;
  // })

  // newPromise.then(function(data){
  //   console.log(data);
  // })


  fetch(url)
    .then(function(response){
      return response.json();
    })
    .then(renderSearchResults)




  return false; //for IE
});

function renderSearchResults(data){
  let content = document.querySelector('#content');

  data.items.forEach(function(item){
    //make an li
  })
}