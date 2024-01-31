document.addEventListener("DOMContentLoaded", function() {
    // ページ内のすべてのボタンに対してイベントリスナーを設定
    document.querySelectorAll('button').forEach(button => {
        // ボタンのテキストが「詳細」でない場合のみ処理
        if (button.textContent.trim() !== '詳細') {
            button.addEventListener('click', function() {
                // お問い合わせセクションにスムーズスクロール
                document.querySelector('#contact').scrollIntoView({
                    behavior: 'smooth'
                });
            });
        }
    });
});
