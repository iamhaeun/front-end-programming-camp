/*! timing-action.js © yamoo9.net, 2016 */

// 아래 2 요소를 찾아서 각 시간마다 action 클래스를 설정한다.
// <span class="display-message-a">This is</span>
// console.log( document.querySelector('.display-message-a') );

// variable: 변수
// 변수 선언
var memory1;
var memory2;

// console.log( document.querySelector('.display-message-a').getAttribute('class') );

// 변수에 값을 할당(대입) ㅣ 선언된 변수에 가져온 클래스 속성 값을 기억
memory1 = document.querySelector('.display-message-a').getAttribute('class');
memory2 = document.querySelector('.display-message-b').getAttribute('class');

// console.log(memory);

setTimeout(function() {
  document.querySelector('.display-message-a').setAttribute('class', memory1 + ' action');
}, 1000);
setTimeout(function() {
  document.querySelector('.display-message-b').setAttribute('class', memory2 + ' action');
}, 2000);
// <span class="display-message-b">JavaScript</span>
// console.log( document.querySelector('.display-message-b') );
