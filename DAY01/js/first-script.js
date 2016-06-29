/**
 * ------------------------------------
 * 1. 자바스크립트는 동적으로 뭔가를 수행하는군?!
 * ------------------------------------ */

// 문서(document)에서 <html> 요소(루트 엘리먼트: root element, documentElement)에 접근하여
// 콘솔(console)에게 기록(log)을 남긴다.
// console.log(document.documentElement);
// class 속성(Attribute) 값을 'this-is-html'로 설정한다.

// document.documentElement.setAttribute(어떤 속성을?, 어떤 값을?);
document.documentElement.setAttribute('class', 'this-is-html');

/**
 * --------------------------------
 * 2. 자바스크립트의 실행 흐름이 궁금해?!
 * ----------------------------- */

// 문서의 <body> 요소에 접근
// console.log(document.body); // 결과: null (값이 비어있다)
// 접근한 요소에 class 속성을 설정
// 속성 값이 'this-is-body'이다.
// document.body.setAttribute('class', 'this-is-body');


// 시간(Time)을 설정(set) 아웃(out)
// 타임아웃을 설정한다. setTimeout(할일(기능, Function), 언제??)
// setTimeout( function(){ console.log('일!') }, 3000 );

// 특정 시간(2000ms)이 지나면 <body> 요소에 class 속성 값을 'this-is-body'로 설정한다.
setTimeout(function(){
  document.body.setAttribute('class', 'this-is-body');
}, 2000);


