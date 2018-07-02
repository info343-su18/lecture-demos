'use strict';

let h1 = $('h1') //calling jQuery('h1')
console.log(h1);

h1.html('Hello <em>World</em>!')
    .addClass('text-success')
console.log(h1.html());

let ball = $('circle');
// ball.attr('cx', 225)
//     .attr('cy', 95)
//     .attr('r', 40)

ball.attr({cx: 225, cy: 95, r: 40})

let buttons = $('button');
buttons.addClass('btn-success');

$('#text p').text("Spam");

//make a new element
//let newPara = document.createElement('p');
let newPara = $('<p>I am <em>new</em>!</p>')
$('#text .card-body').prepend(newPara);

//event handling
//ball.addEventListener('click', function() { ... });
let state = {
    ballPosition: {cx: 225, cy: 95}
}

ball.click(function() {
    if(state.ballPosition.cx == 225) {
        state.ballPosition = {cx:415, cy:320};       
    } else {
        state.ballPosition = {cx: 225, cy: 95};
    }

    ball.attr(state.ballPosition);
});

//animation
h1.click(function() {
    h1.slideUp(1000);
})

$('#collapseAll').click(function() {
    $('.collapse').collapse('hide');
})

$('hi')




