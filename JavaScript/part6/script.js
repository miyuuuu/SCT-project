/**
 * パート6
 * DOM操作
 * 
 * ・すでに記述されている要素は変更禁止です。
 * ・HTML・CSSは変更禁止です。
 * ・一部問題で、スコープを作るために即時関数を使用します。解答はfunction内に記述してください。
 */


/**
 * 問題1
 * "#title"要素のテキストを「JavaScriptカリキュラム パート6」に書き換えましょう。
 */
(function q1() {
    const div = document.getElementById('title');
    div.innerHTML = 'JavaScriptカリキュラム パート6';
    console.log(div);
}());

/**
 * 問題2
 * "#user" 要素のフォントカラーを青色に変更しましょう。
 * 色の変更には".text-primary"クラスを利用します。
 */
(function q2() {
    const col = document.getElementById('user');
    const span = col.className;
    col.className = 'text-primary';
}());

/**
 * 問題3
 * "#user"要素の次に、下記の要素を追加しましょう。
 * 
 * 要素：<p>
 * クラス：.text-secondary
 * テキスト：ただし、仮参加ユーザは含まれません。
 */
(function q3() {
    const p = document.getElementById('description');
    const pClass = p.className;
    pClass.class = 'text-secondary';
    pElement = document.createElement('p');
    p.appendChild(pElement);
    pElement.textContent = 'ただし、仮参加ユーザは含まれません。';
}());

/**
 * 問題4 難しいです。
 * "#userTable"テーブルに、すでに記述されているusers配列内のデータを下記の形式で追加しましょう。
 * 
 * 左のカラム : name
 * 右のカラム : country
 */

(function q4() {

    const users = [{
        name: 'フィル',
        country: 'アメリカ'
    }, {
        name: '陽子',
        country: '日本'
    }, {
        name: 'ヤニス',
        country: 'ギリシャ'
    }, {
        name: 'キミ',
        country: 'フィンランド'
    }];

    const table = document.getElementById('userTable');
    const rowCount = table.rows.length;
    const cellCount = table.rows[0].cells.length;

    for (let i = 0; i < 4; i++) {
        const rowAdd = table.insertRow(rowCount);
        const cell = rowAdd.insertCell(-1);
        const cell2 = rowAdd.insertCell(-1);

        cell.textContent = users[i].name;
        cell2.textContent = users[i].country;

    }
}());