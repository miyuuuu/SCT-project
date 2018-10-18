/**
 * パート7
 * イベント
 * 
 * ・すでに記述されている要素は変更禁止です。
 * ・HTML・CSSは変更禁止です。
 * ・スコープを作るために即時関数を使用します。解答はfunction内に記述してください。
 */


/**
 * 問題1
 * "#switchInput" 要素の状態に合わせて、"#switchCondition"が下記の状態になる様にしましょう。
 * ・チェックされている：テキストを「ON」に変更し、クラス ".on" を追加する。
 * ・チェックされてない：テキストを「OFF」に変更し、クラス ".on" を削除する。
 */
(function q1() {

	const checkBox = document.getElementById('switchInput');
	const changeText = document.getElementById('switchCondition'); 
	
	const switchChange = 'on';
	
	checkBox.onClick = () => {
		if (checkBox.checked) {
			changeText.innerText = 'ON';
			changeText.classList.add(switchChange);
		} else {
			changeText.innerText = 'OFF';
			changeText.classList.remove(switchChange);
		}
	};
}());

/**
 * 問題2
 * キーボードの「1」「2」「3」キーが押下された際に、対応する数字が表示された".num-box"要素が下記の動きをするようにしましょう。
 * 
 * ・".bg-num"が適用されていない場合：".bg-num"を適用する
 * ・".bg-num"が適用されている場合：".bg-num"を取り除く
 */
(function q2() {
	const BG_NUM = 'bg-num';
	const numBox = document.getElementsByClassName('num-box');
	document.onkeydown = (event) => {
		const {
			key
		} = event;
		if (key === '1' || key === '2' || key === '3') {
			const index = parseInt(key) -1;
			const target = numBox[index];
			target.classList.toggle(BG_NUM);
		}
	};
}());


/**
 * 問題3
 * "#btnGood" が押下される度に、".count"が１ずつ増える様にしましょう。
 */
(function q3() {
	const btn = document.getElementById('btnGood');
    const count = document.getElementsByClassName('count');
    btn.onclick = () => {
        for (const item of count) {
            const num = parseInt(item.innerText);
            item.innerText = num + 1;
        }
    };
}());