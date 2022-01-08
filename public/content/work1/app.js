// GAME
var open_count = 0;
var open_card1 = 0;
var open_card2 = 0;
var tmp_id = null;

const all_img = 18;
const cardNums = 36;
var all_card = cardNums;

$(function () {
    $("#view2").hide();
    $("#stopBtn").hide();
    $("#playBtn").click(startGame);
    $("#stopBtn").click(stopGame);
    $("#view2 img").click(imgClick);
});


// FUNCTION
function startGame() {
    shuffer();
    $("#stopBtn").show();
    $("#playBtn").hide();
    $("#view2").show();
    $("#view1").hide();
}


function stopGame() {
    $("[state=2]").fadeIn(200).attr("state", 0).attr("src", "./asset/search.gif");
    $("#stopBtn").hide();
    $("#playBtn").show();
    $("#view2").hide();
    $("#view1").show();
}

function imgClick() {
    // console.log(this);

    //if ($(this).attr("state") != 0) return;
    if (open_count >= 2) return;

    open_count++;
    var s = $(this).attr("srcx");

    if (open_count == 1) {
        tmp_id = $(this).attr("id");        
        open_card1 = s;
    }
    if (open_count == 2) 
        if (tmp_id != $(this).attr("id")) open_card2 = s;


    console.log(tmp_id, $(this).attr("id"));

    $(this).hide().attr("src", s).fadeIn(300);
    $(this).attr("state", 1);
    if (open_count == 2) {
        setTimeout(() => {
            if (open_card1 == open_card2) {
                all_card -= 2;
                $("[state=1]").fadeOut(200).attr("state", 2);
            } else {
                $("[state=1]").attr("state", 0).attr("src", "./asset/search.gif");
            }
            open_count = 0;
            open_card2 = "";
            open_card1 = "";

        }, 2000)
    }
}


function shuffer() {
    var list = [];
    list[0] = 0;
    for (var i = 1; i <= all_img; i++) {
        list.push(i);
        list.push(i);
    }
    // console.log(list);
    for (var i = 1; i < 100; i++) {
        var a = 1 + Math.round( Math.random() * (all_card-1) );
        var b = 1 + Math.round( Math.random() * (all_card-1) );
        var t = list[a];
        list[a] = list[b];
        list[b] = t;
    }

    $("#view2 img").attr("src", "asset/search.gif")
        .attr("state", 0);

    for (var i = 1; i <= all_card; i++) {
        $("#img" + i).attr("srcx", "asset/img" + list[i] + ".jfif");
    }

    console.log(list);
    console.log(all_img);
}