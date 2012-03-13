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
var data = [500,500,100,200,900,500,500,500,500,500,500,100,200,900,500,500,500,500,500,500,100,200,900,500,500,500,500,500,500,100,200,900,500,500,500,500,500,500,100,200,900];
var opts = {"stroke":"#f89406", "background":"rgba(255,255,255,0);"};
new Sparkline('hr-sparkline-mini',data, opts).draw();

var data = [100,200,500,1000,600,900,300,500,800,800,900,1000];

//blood pressure sparkline
var data = shuffle(data);
var opts = {"stroke":"#468847", "background":"rgba(255,255,255,0);"};
new Sparkline('bp-sparkline-mini',data, opts).draw();

var data = [100,200,500,1000,600,900,300,500,800,800,900,1000,50,40];

//pulse oximetry sparkline
var data2 = shuffle(data);
new Sparkline('po-sparkline-mini',data, opts).draw();

var data = [100,120,120,130,125,125,125,128,120,120,120,120,130,120,120,120,130,120,125,125,120];

//temperature sparkline
var data3 = shuffle(data);
new Sparkline('te-sparkline-mini',data, opts).draw();


//var opts = {"stroke":"#b94a48"}; red color for later?