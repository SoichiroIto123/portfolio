setTimeout(() => {
    const obj = document.querySelector('.scroll');
    obj.style.display = 'block';
}, 6250);


function closeMenu() {
    // ハンバーガーメニューのチェックボックスを非選択状態にする
    document.getElementById("menu-btn-check").checked = false;
}
document.addEventListener("click", function(event) {
    // クリックされたリンクがページ内リンクかつハンバーガーメニューが開いている場合のみ、メニューを閉じる
    if (event.target.tagName === "A" && event.target.getAttribute("href").charAt(0) === "#" && document.getElementById("menu-btn-check").checked) {
      closeMenu();
    }
});
