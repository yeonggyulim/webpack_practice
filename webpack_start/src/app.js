import bar from './bar';

function app() {
	// h1 tag를 만들고 문자열을 저장한다.
	const contents = document.createElement('h1');
	contents.innerHTML = 'Hello ' + bar();

	return contents;
}

// app 함수가 반환한 h1 tag를 body tag에 붙인다.
document.body.appendChild(app());
