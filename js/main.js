window.onload = function() {
    let urlScroll = new Object(),
        impg = document.getElementById("slid"),
        btnRight = document.getElementById("rbtn"),
        btnLeft = document.getElementById("lbtn"),
        btn = document.getElementsByClassName("slide-button")

    let i = 0,
        limit = 10,
        n = limit
    $.getJSON( "https://picsum.photos/v2/list?limit=" + limit, function ( data, textStatus, jqXHR ) {
        for (key in data){
            urlScroll[key] = data[key].download_url
        }

        impg.src = urlScroll[i]
        function tabButton() {
            impg.animate([
                {
                  opacity: 0,
                  color: "#fff"
                },
                {
                  opacity: 1,
                  color: "#000"
                }
              ], 1100);
            i = i + 1 <= limit - 1 ? i + 1 : 0

            impg.src = urlScroll[i]
            console.log(i)
        }

        function reverseTabButton() {
            impg.animate([
                {
                  opacity: 0,
                  color: "#fff"
                },
                {
                  opacity: 1,
                  color: "#000"
                }
              ], 3000);
            i = i - 1 >= 0 ? i - 1 : limit - 1

            impg.src = urlScroll[i]
            console.log(i)
        }

        document.onkeypress = function(event){
            console.log(event.code)
            if (event.code == "Space") {
                tabButton()
            }
        }
        btnRight.onclick = tabButton
        btnLeft.onclick = reverseTabButton
    })
}