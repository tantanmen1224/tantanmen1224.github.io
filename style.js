'use strict';

// このファイルにJavaScriptのコードを記述していきます。
// 例えば、スクロールに応じたアニメーションや、
// モバイル表示の際のハンバーガーメニューの開閉処理など。

console.log('ウェブサイトへようこそ！');


// --- 以下は実装例のコメントです ---

/*
// スムーススクロールの実装例
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
*/