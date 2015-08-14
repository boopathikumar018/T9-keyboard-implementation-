var count = -1,
    previously_pressed = '',
    date1, date2, datediff, str , 
	longpress = 1000 , start;

$(document).ready(function() {
    $("#phone").find("button").mousedown(function(event) {
            start = new Date().getTime();
        }),
        $("#phone").find("button").mouseleave(function(event) {
            start = 0;
        }),
        $("#phone").find("button").mouseup(function(event) {
            var button_pressed = $(event.currentTarget).data("value")
            $("#result").val(t9($("#result").val(), button_pressed))
        })
})


function t9(text, button_pressed) {
    end = new Date();
    longtime =(parseInt((end - start) / 100).toString())
    if (longtime>10) {
        return document.getElementById("result").value + button_pressed;
    } else {


        if (button_pressed == '7' || button_pressed == '9') {
            if (count >= 3) {
                count = -1;
            }
        } else {
            if (count >= 2) {
                count = -1;
            }
        }
        if (previously_pressed === '' || previously_pressed !== button_pressed) {

            count = 0;
            date1 = new Date();
            previously_pressed = button_pressed;
            return document.getElementById("result").value + $("button[data-value=" + button_pressed + "] span").text().split(' ')[count];
        } else if (previously_pressed === button_pressed) {
            count++;
            date2 = new Date();
            datediff = (parseInt((date2 - date1) / 100).toString());
            date1 = date2;
            if (datediff > 10) {
                count = 0;
                return document.getElementById("result").value + $("button[data-value=" + button_pressed + "] span").text().split(' ')[count];
            } else if (datediff <= 10) {
                str = document.getElementById("result").value;
                return str.substring(0, str.length - 1) + $("button[data-value=" + button_pressed + "] span").text().split(' ')[count];
            }
        }
    }
}
