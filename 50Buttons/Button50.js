function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

$(document).ready(function(){

    // 1
    $("#a").click(function() {
        alert("I'm a button.");
    });

    // 2
    var b = 0;
    $("#b").click(function() {
        if (b < 12) {
            var $circ = $('<div class="circle" />').appendTo(this);
            $circ.css("left", b % 4 * 100 + 50);
            $circ.animate({"top": "+=" + (100 - 100 * parseInt(b / 4)) + "px"}, "slow");
            b++;
        }
    });


    // 3
    var c = false;
    $("#c").click(function() {
        if (c == false) {
            var $txt = $('<p id="hello">Hello, JS!</p>').appendTo(this);
            $txt.css("position", "relative");
            $txt.css("text-align", "center");
            //$txt.css("margin", "0");
            $txt.css("top", "100%");
            $txt.animate({"top": "-=70%"}, "slow", "linear");
            c = true;
        }
    });

    // 4
    var d = false;
    $("#d").click(function() {
        if (d == false) {
            $circle = $('<div class="circle"></div>').appendTo(this);
            $circle.css('position', 'relative');
            //$circle.css('width', '50%');
            //$circle.css('height', '50%');
            $circle.css('margin', '0 auto');
            //$circle.css('top', '50%');
            //$circle.css('left', '50%');
            d = true;
        }
    });

    // 5
    var e = false;
    $("#e").click(function() {
        var $circle = $("#e .circle");
        if ($circle.length == 0) {
            $circle = $('<div class="circle"></div>').appendTo(this);
            $circle.css('position', 'relative');
            $circle.css('top', '40%');
        }
        $circle.css('left', '0');
        $circle.animate({"left": "+=200px"}, "slow");
    });

    // 6
    var f = false;
    $("#f").click(function() {
        if ($("#f .sheldon").length == 0) {
            $(this).append("<img class=\"sheldon\" src=\"images/sheldon.jpg\"></div>");
            var $img0 = $("#f .sheldon");
            var width = $img0.width();    // Current image width
            var height = $img0.height();  // Current image height
            var ratio = width / height;
            $img0.css("position", "relative");
            $img0.css("width", 200);
            $img0.css("height", 200 / ratio);
            $img0.css("", 50);
            $img0.css("top", 50);
        }
    });

    // 7
    var g = false;
    $("#g").click(function() {
        var $img0 = $('<img class=\"something\" src=\"images/sheldon.jpg\"/>').appendTo('body');
        var width = $img0.width();    // Current image width
        var height = $img0.height();  // Current image height
        var ratio = width / height;
        $img0.css("position", "absolute");
        $img0.css("width", 100);
        $img0.css("height", 100 / ratio);
        // center a position absolute element
        $img0.css("left", 0);
        $img0.css("right", 0);
        $img0.css("margin-left", "auto");
        $img0.css("margin-right", "auto");
        $img0.animate({"width": 1000, "height": 1000 / ratio}, "slow");
        // remove after 1s
        setTimeout(function() {
            $img0.remove();
        }, 1000);

    });

    // 8
    $("#h").click(function() {
        // in reality this function will have object and target inputs
        function animateImage($img) {                
            function rotate(now, fx) {
                $(this).css('-webkit-transform','rotate('+now+'deg)'); 
                $(this).css('-moz-transform','rotate('+now+'deg)');
                $(this).css('transform','rotate('+now+'deg)');
            }
            $img.animate({  borderSpacing: -10 }, {
                step: rotate,
                duration:'slow'
            },'linear').animate({  borderSpacing: 10 }, {
                step: rotate,
                duration:'slow'
            },'linear').animate({  borderSpacing: -10 }, {
                step: rotate,
                duration:'slow'
            },'linear');
        }

        // create image array
        var imgs = [];

        var numInRow = 3;
        for (var i = 0; i < 9; i++) {
            var $img = $('<img id="img' + i +'" class=\"something\" src=\"images/sheldon.jpg\"/>').appendTo('body');
            $img.css("position", "absolute");
            $img.css("left", 200 * (i % numInRow));
            $img.css("top", 200 * parseInt(i / numInRow));
            imgs.push($img);
        }

        // let them rock!
        for (var i = 0; i < 3; i++) {
            for (var idx in imgs) {
                animateImage(imgs[idx]);
            }
        }

        // remove it
        setTimeout(function() {
            for (var idx in imgs) {
                imgs[idx].remove();
            }	
        }, 4000);


    });

    // 9
    var i = 0;
    $("#i").click(function() {
        var $txt = $('<p id="hello">'+i+'</p>').appendTo(this);
        $txt.css("text-align", "center");
        //$txt.css("position", "relative");
        //$txt.css("margin", "0");
        //$txt.css("top", "50%");
        //$txt.css("left", "50%");
        i++;
    });

    // 10
    var j= 0;
    $("#j").click(function() {
        if (j==0) {
            $( "#pink" ).css( "width", "700px");
            $( "#pink" ).css( "height", "700px");
            $( "#pink" ).css( "border-radius", "500px");
            $( "#gatsby" ).animate({opacity: "1"}, 500); 
            j++;
        }
        else if (j==1) {
            $( "#gatsby" ).html( "Do not click!");
            j++;
        }
        else if (j==2) {
            $( "#gatsby" ).html( "Stop!!!");
            j++;
        }
        else if (j=3) {
            $( "#gatsby" ).html( "HEY!");
            $( "#pink" ).delay(1000).css( "width", "50px");
            $( "#pink" ).delay(1000).css( "height", "50px");

            j=0;
        }
    });


    //11
    var k= true;
    $("#k").click(function(){ 
        if (k==true) {
            $( "#eleven").html( "11");
            $( "#eleven").css( "font-size","280px");
            $( "#eleven").css( "color","#4DDED9");
            pa=false;
        }
        else {
            $( "#eleven").html( "11");
            $( "#eleven").css( "font-size","16px");
            $( "#eleven").css( "color","black");
            k=true;  
        }

    });

    //12
    var l= 0;
    $("#l").click(function(){
        $( "#add" ).css( "top", (Math.random()*100) + "%");
        $( "#add" ).css( "left", (Math.random()*100) + "%");

        l++;
    });

    //13
    var m= true;
    $("#m").click(function(){
        if (m==true) {
            $( "#toggle" ).css( "opacity", "0");
            $( "#toggle2" ).css( "opacity", "1");

            m=false;
        }
        else {
            $( "#toggle2" ).css( "opacity", "0");
            $( "#toggle" ).css( "opacity", "1");

            m=true;
        }    
    });


    //14
    $("#n").click(function(){
        if (n==true) {
            $( "#toggle" ).css( "opacity", "0");
            $( "#toggle2" ).css( "opacity", "1");

            n=false;
        }
        else {
            $( "#toggle2" ).css( "opacity", "0");
            $( "#toggle" ).css( "opacity", "1");

            n=true;
        }    
    });

    //15
    var o= true;
    $("#o").click(function(){

        if (o==true) {
            $("#germ").css("height", "200px");
            $("#germ").css("width", "200px");
            o=false;
        }
        else {
            $("#germ").css("height", "200px");
            $("#germ").css("width", "50px");
            o=true;
        }
    });


    //16
    var p= 1;
    $("#p").click(function(){
        $( "#p" ).append( "<div class=\"circle\" id=\"add" + p +"\"></div>");
        $( "#add" + p ).css( "top", (Math.random()*100) + "%");
        $( "#add" + p ).css( "left", (Math.random()*100) + "%");

        if (p%2==1) {
            $( "#add" + p ).css( "background-color", "#6668DE");
        }
        else {
            $( "#add" + p ).css( "background-color", "#4DDED9");
        }

        p++;
    });


    //17
    var q= true;
    $("#q").click(function(){
        if (q==true) {

            $( "body" ).css( "-webkit-filter", "hue-rotate(90deg)");
            $( "body" ).css( "filter", "hue-rotate(90deg)");


            q=false;
        }
        else {
            $( "body" ).css( "-webkit-filter", "hue-rotate(0deg)");
            $( "body" ).css( "filter", "hue-rotate(0deg)");

            q=true;
        }    
    });


    //18  
    var r= true;
    $("#r").click(function(){
        if (r==true) {
            $( "#spin" ).css( "-webkit-transform", "rotate(90deg)");
            $( "#spin" ).css( "-ms-transform", "rotate(180deg)");
            $( "#spin" ).css( "transform", "rotate(180deg)");
            $( "#spin" ).css( "top", "46%");
            $( "#spin" ).css( "left", "-50%");    
            r=false;
        }
        else {
            $( "#spin" ).css( '-webkit-transform', "rotate(0deg);");
            $( "#spin" ).css( '-ms-transform', "rotate(0deg);");
            $( "#spin" ).css( 'transform', "rotate(0deg)");
            r=true;
        }    
    });


    //19
    var s= 80;
    $(function(){
        $( "#drug" ).draggable();
    });

    //20

    var t= true;
    $("#t").click(function(){
        if (t==true) {
            $( ".num" ).addClass("white");

            t=false;
        }
        else {
            $( ".num" ).removeClass("white");

            t=true;
        }    
    });

    //21
    var u= 0;
    $("#u").click(function(){
        $( this ).append( "<marquee class=\"moveIt\" id=\"marq" + u +"\">I'm</marquee>");
        u++;

    });


    //22
    var v= 0;
    $("#v").click(function(){
        $( this ).append( "<marquee class=\"moveIt\" id=\"marq" + v +"\">moving</marquee>");
        v++;

    });



    //23
    var w= 0;
    $("#w").click(function(){
        $( this ).append( "<marquee class=\"moveIt\" id=\"marq" + w +"\">slow-</marquee>");
        w++;

    });

    //24
    var x= 0;
    $("#x").click(function(){
        $( this ).append( "<marquee class=\"moveIt\" id=\"marq" + x +"\">ly</marquee>");
        x++;

    });

    //25
    var y= true;
    $("#y").click(function(){

        if (y==true) {
            $( "#breach" ).css( "width", "200%" );
            y=false;
        }
        else {
            $( "#breach" ).css( "width", "50%" );
            y=true;
        }    

    });

    //26    
    var z= true;
    $("#z").click(function(){
        if (z==true) {
            $( this ).addClass("drop");        
            z=false;
        }
        else {

            $( this ).removeClass("drop");        
            z=true;
        }    
    });


    // 27
    $("#aa").click(function() {
        var $gif = $("#walkingman");
        $gif.show();
    });

    // 28
    $("#ba").click(function() {
        var $gif = $("#walkingman");
        var left = $gif.position().left;
        if (left >= 200)
            $gif.animate({"left": "-=200px"}, "slow");
        else
            $gif.animate({"left": "-=" + left + "px"}, "slow", "linear");
    });

    // 29
    $("#ca").click(function() {
        var $gif = $("#walkingman");
        var top = $gif.position().top;
        if (top >= 200)
            $gif.animate({"top": "-=200px"}, "slow");
        else
            $gif.animate({"top": "-=" + top + "px"}, "slow", "linear");
    });

    // 30
    $("#da").click(function() {
        var $gif = $("#walkingman");
        var left = $gif.position().left;
        var max = document.body.clientWidth - 150;
        if (max - left >= 200)
            $gif.animate({"left": "+=200px"}, "slow");
        else
            $gif.animate({"left": "+=" + (max - left) + "px"}, "slow", "linear");    
    });

    // 31
    $("#ea").click(function() {
        var $gif = $("#walkingman");
        var top = $gif.position().top;
        var max = document.body.clientHeight - 250;
        if (max - top >= 200)
            $gif.animate({"top": "+=200px"}, "slow");
        else
            $gif.animate({"top": "+=" + (max - top) + "px"}, "slow", "linear");
    });

    // 32
    $("#fa").click(function() {
        var $gif = $("#walkingman");
        $gif.hide();
    });

    // 33
    $("#ga").click(function() {
        $("#bgm")[0].play();
    });

    // 34
    $("#ha").click(function() {
        $("#bgm")[0].pause();
    });

    // 35
    lastX = 0, lastY = 0;
    $("#ia #myCanvas").on("mousemove", function(event) {
        var c = document.getElementById("myCanvas");
        var ctx = c.getContext("2d");
        ctx.beginPath();
        ctx.strokeStyle = "black";
        ctx.lineWidth = 5;
        ctx.lineJoin = "round";
        if (lastX != 0 && lastY != 0)
            ctx.moveTo(lastX, lastY);
        ctx.lineTo(event.pageX - $(this).offset().left, event.pageY - $(this).offset().top);
        ctx.closePath();
        ctx.stroke();
        lastX = event.pageX - $(this).offset().left;
        lastY = event.pageY - $(this).offset().top;
    });

    // 36
    $("#ja").click(function() {
        var c = document.getElementById("myCanvas");
        var ctx = c.getContext("2d");
        ctx.setTransform(1, 0, 0, 1, 0, 0);
        ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
    });

    // 37
    $("#ka").click(function() {
        $("#ka #rainbow").fadeIn(1500).delay(100).fadeOut(1500);
    });

    // 38
    var la = 1;
    $("#la").click(function() {
        $hello = $("#la #hello");
        langs = ['Hello', '你好', 'Hola', 'Bonjour', 'こんにちは', '여보세요', 'Ciao', 'Здравствуйте'];
        $hello.html(langs[la]);
        la = (la + 1) % langs.length;
    });

    // 39
    $("#ma").click(function() {
        var win = window.open('https://github.com/zhz1208', '_blank');
        if (win) {
            win.focus();
        } else {
            alert('Browser doesn\'t allow pop-ups.');
        }
    });

    // 40
    var na = 1;
    var blockColor = [$("#na #block1").css("background-color"), 
                      $("#na #block2").css("background-color"),
                      $("#na #block4").css("background-color"),
                      $("#na #block3").css("background-color")];
    $("#na").click(function() {
        $("#na #block1").css("background-color", blockColor[na % 4]);
        $("#na #block2").css("background-color", blockColor[(na + 1) % 4]);
        $("#na #block4").css("background-color", blockColor[(na + 2) % 4]);
        $("#na #block3").css("background-color", blockColor[(na + 3) % 4]);
        na++;
    });

    // 41
    $("#oa div").click(function(e) {
        $("#oa").css("background-color", $(this).css("background-color"));
        $("#oa div").hide();
        e.stopPropagation();
    });
    $("#oa").click(function() {
        $("#oa div").show();
    });

    //42
    var pa= true;
    $("#pa").click(function(){
        if (pa==true) {
            $( "#cover" ).css( 'position', 'fixed');
            $( "#cover" ).css( 'z-index', '12');
            pa=false;
        }
        else {
            $( "#cover" ).css( 'position', 'absolute');
            $( "#cover" ).css( 'z-index', '0');
            pa=true;
        }    
    });

    //43
    var qa= 0;
    $("#qa").click(function(){
        $( "#qa" ).append( "<p class=\"snowflake\" id=" + qa +">&#9733</p>").fadeIn(2000);
        $( "#" + qa ).css( "top", (Math.random()*100) + "%");
        $( "#" + qa ).css( "left", (Math.random()*100) + "%");

        qa++;
    });

    $("#snowflake").click(function(){
        $( ".snowflake").remove();

        qa++;
    });

    //44
    var ra= 0;
    $("#ra").click(function(){

        var rand =(Math.round(Math.random() * 10));
        $( "#ra" ).append( "<p class=\"numby\" id=\"" + "numby" + ra +"\">"+ rand + "</p>");
        $( "#number" ).append( rand );
        $( "#numby" + ra ).css( "top", (Math.random()*100) + "%");
        $( "#numby" + ra ).css( "left", (Math.random()*100) + "%");
        $( "#numby" + ra ).css( "font-size", (Math.random()*200) + "px");

        ra++;
    });

    //45
    var sa= true;
    $("#sa").click(function(){ 
        if (sa==true) {
            $( ".numby").css( "display", "none");
            sa=false;
        }
        else {
            $( ".numby").css( "display", "inherit");
            sa=true;      
        }

    });


    //46
    var ta= true;
    $("#ta").click(function(){
        $( "body" ).animate({scrollTop: $("#a").offset().top}, 2000);
    });


    // 47
    var ua = false;
    $("#ua #clickme").hover(function() {
        $clickme = $("#ua #clickme");
        if (ua == false) {
            $clickme.css("left", "200px");
            ua = true;
        }
        else {
            $clickme.css("left", "50px");
            ua = false;
        }
    });

    // 48 
    var rotation = 0;
    jQuery.fn.rotate = function(degrees) {
        $(this).css({'-webkit-transform' : 'rotate('+ degrees +'deg)',
                     '-moz-transform' : 'rotate('+ degrees +'deg)',
                     '-ms-transform' : 'rotate('+ degrees +'deg)',
                     'transform' : 'rotate('+ degrees +'deg)'});
        return $(this);
    };

    $('#va img').click(function() {
        rotation += 45;
        $(this).rotate(rotation);
    });

    // 49    
    var wa= true;
    $("#wa").click(function wart (){
        if (w==true) {
            $( "#wa" ).animate({width:"0%"}, 1000);
            $( "#wawa" ).animate({width:"33.33%"}, 1000);

            wa=false;
        }
        else {
            $( "#wa" ).animate({width:"33.33%"}, 1000);
            $( "#wawa" ).animate({width:"0%"}, 1000);

            wa=true;
        }   
    });

    $("#wawa").click(function wart (){
        if (wa==true) {
            $( "#wa" ).animate({width:"0%"}, 1000);
            $( "#wawa" ).animate({width:"33.33%"}, 1000);

            wa=false;
        }
        else {
            $( "#wa" ).animate({width:"33.33%"}, 1000);
            $( "#wawa" ).animate({width:"0%"}, 1000);

            wa=true;
        }   
    });


});