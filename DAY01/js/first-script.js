/**
 * --------------------------------
 * 자바스크립트는 동적으로 뭔가를 수행한다.
 * ----------------------------- */
// 문서(document)에서 <html> 요소(루트 엘리먼트: root element, documentElement)에 접근하여
// 콘솔(console)에게 기록(log)을 남긴다.
// console.log(document.documentElement);
// class 속성(Attribute) 값을 'this-is-html'로 설정한다.

// document.documentElement.setAttribute(어떤 속성을?, 어떤 값을?);
document.documentElement.setAttribute('class', 'this-is-html');

