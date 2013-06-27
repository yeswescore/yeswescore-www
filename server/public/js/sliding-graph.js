/***************************************************
                  SLIDING GRAPH
***************************************************/
function isScrolledIntoView(id)
{
    var elem = "#" + id;
    var docViewTop = $(window).scrollTop();
    var docViewBottom = docViewTop + $(window).height();

    if ($(elem).length > 0){
        var elemTop = $(elem).offset().top;
        var elemBottom = elemTop + $(elem).height();
    }

    return ((elemBottom >= docViewTop) && (elemTop <= docViewBottom)
      && (elemBottom <= docViewBottom) &&  (elemTop >= docViewTop) );
}



function sliding_horizontal_graph(id, speed){
    $("#" + id + " li span").each(function(i){
        var j = i + 1;                                           
        var cur_li = $("#" + id + " li:nth-child(" + j + ") span");
        var w = cur_li.attr("title");
        cur_li.animate({width: w + "%"}, speed);
    })
}

function graph_init(id, speed){
    $(window).scroll(function(){
        if (isScrolledIntoView(id)){
            sliding_horizontal_graph(id, speed);
        }
        else{
            //$("#" + id + " li span").css("width", "0");
        }
    })
    
    if (isScrolledIntoView(id)){
        sliding_horizontal_graph(id, speed);
    }
}

function htmlDecode(a) {
    var b = $("<div/>").html(a).text();
    return b
}

function playpause($el){
	if ($el.hasClass('playing')){
		$('#slider_container').cameraResume();
		$el.removeClass('playing').addClass('paused');
	} else {
		$('#slider_container').cameraPause();
		$el.removeClass('paused').addClass('playing');
	}
}

