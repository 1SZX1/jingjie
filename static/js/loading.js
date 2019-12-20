// loading动画
function showLoading(arr) {
    var loadingEl = document.querySelector('.loading');
    loadingEl.innerHTML = `<div class="circle">
                                <div class="o">
                                  <div class="brick">1</div>
                                  <div class="brick">2</div>
                                  <div class="brick">3</div>
                                  <div class="brick">4</div>
                                  <div class="brick">5</div>
                                  <div class="brick">6</div>
                                </div>
                            </div>`
    var count = 0;
    arr.forEach((ele, index) => {
        var img = new Image();
        img.src = ele;
        img.index = index;
        img.onload = function () {
            count++;
            if (count == arr.length) {
                closeLoading();
                clearTimeout(autoClose)
            }
        }
    })

    var autoClose = setTimeout(function () {
        count = arr.length;
        closeLoading()
    }, 5000)

    function closeLoading() {
        loadingEl.classList.add('hide');
        setTimeout(function () {
            loadingEl.parentNode.removeChild(document.querySelector('.loading'));
        }, 500)
    }
}