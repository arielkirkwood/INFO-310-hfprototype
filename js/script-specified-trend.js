/* Author:

*/

//not needed because we don't want to use mouse-overs when we don't have to
//$('#lower-bp-param').tooltip({placement: "bottom"});
//$('#upper-bp-param').tooltip({placement: "bottom"});

//shuffle data for last two sparklines
function shuffle(array) {
    var tmp, current, top = array.length;

    if(top) while(--top) {
        current = Math.floor(Math.random() * (top + 1));
        tmp = array[current];
        array[current] = array[top];
        array[top] = tmp;
    }

    return array;
}

//heart rate sparkline
var data = [500,500,500,500,500,500,500,500,100,200,900,500,500,500,500,500,500,500,500,500,500,100,200,900,500,500,500,500,500,500,500,500,500,500,500,500,500,500,100,200,900,500,500,500,500,500,500,500,500,500,500,500,500,500,500,500,500,500,500,500,500,500,500,500,500,100,200,900,500,500,500];
var opts = {"stroke":"#f89406"};
new Sparkline('hr-sparkline-before',data, opts).draw();

var data = [500,500,100,200,900,500,500,500,500,500,500,100,200,900,500,500,500,500,500,100,200,900,500,500,500,500,500,500,100,200,900,500,500,500,500,500,100,200,900,500,500,500,500,500,500,100,200,900,500,500,500]
var opts = {"stroke":"#468847"};
new Sparkline('hr-sparkline-after',data, opts).draw();