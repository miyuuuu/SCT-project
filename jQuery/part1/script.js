/**
 * パート1
 * jQuery基礎
 * 
 * ・すでに記述されている要素は変更禁止です。
 * ・HTML・CSSは変更禁止です。
 * ・スコープを作るために即時関数を使用します。解答はfunction内に記述してください。
 */

/**
 * jQueryを使用する際は、この記述内で行います。覚えておいてください。
 * これはドキュメントの読み込み完了後に、この内部に書かれた処理を実行するという意味です。
 */
$(() => {

	/**
	 * Q1. #title要素を下記のように変更しましょう。
	 * テキスト：jQuery基礎
	 * クラス：.text-danger
	 * 
	 * Hint
	 * • メソッドチェーンを利用し、１行で記述しましょう。
	 */
	(function q1() {
		$('#title').addClass('text-danger').text('jQuery基礎');
	}());

	/**
	 * Q2. ajaxと外部APIを使用して、#userTable要素に行を追加しましょう。
	 * データ取得先URL：https://jsonplaceholder.typicode.com/users
	 * 左のカラムに表示するデータ：各ユーザのname
	 * 右のカラムに表示するデータ：各ユーザのemail
	 * 
	 * Hint
	 * • URLにブラウザでアクセスすると、取得できるデータがどのようなものか見ることができます。
	 */


	(function q2() {
		$.ajax({
			url: 'https://jsonplaceholder.typicode.com/users',
			dataType: 'json',
			success: function (data) {
				for (const i in data) {
					const dataInfo = data[i];
					const nameText = dataInfo.name;
					const emailText = dataInfo.email;
					$('#userTable tbody').append(`<tr><td>${nameText}</td><td>${emailText}</td></tr>`);
				}
			}
		});
	}());


	/**
	 * Q3. 下記の動作が行われるようにしましょう。ただし、2の動作については、./sample/q3.gif を参考にしてください。
	 * 1. #btnGood 要素が押下される度に、#goodCount 要素のテキストの数字が1増加する。
	 * 2. 1の動作時に、#goodCount要素に対して下記のアニメーションを行う。
	 *   a. 100ミリ秒をかけ、フォントサイズを20pxに変化させる。
	 *   b. aの動作後、100ミリ秒をかけ、フォントサイズを元に戻す。
	 * 
	 * Hint
	 * • フォントサイズを戻す時は、直接記述するのではなく、予め取得しておきましょう。
	 */
	(function q3() {
		let goodCount = 0;
		const fontSize = $('#goodCount').css('font-size');
		$('#btnGood').on('click', function () {
			goodCount++;
			$('#goodCount').text(goodCount).stop();
			$('#goodCount').animate({
				'font-size': '20px'
			}, {
				'duration': 100,
				complete: (function () {
					$('#goodCount').animate({
						'font-size': fontSize
					}, {
						'duration': 100
					});
				})
			});
		});
	}());
});