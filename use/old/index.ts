const button = document.getElementById('send');
if (!button) {
    throw new Error('buttonがありません！');
}
button.addEventListener('click', function () {
    const isbn = document.getElementById('isbn').value;
    if (isbn.length < 1) {
        alert('Please insert your name here');
    }
    else {
        const json = { "string": isbn };
        fetch('http://localhost:3000/', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            //値をjsonに変換
            body: JSON.stringify(json)
        }).then(function (response) {
            if (response.ok) { // ステータスがokならば確認する
                return response.text(); // レスポンスをテキストとして変換する
            }
            else {
                throw new Error();
            }
        })
            .then(function (text) {
            document.getElementById('result').textContent = text;
            const el = document.getElementById('div-02');
            el.remove();
        })["catch"](function (error) {
            document.getElementById('result').textContent = error;
        });
    }
});
