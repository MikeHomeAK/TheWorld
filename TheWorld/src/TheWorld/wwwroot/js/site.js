//site.js
(function () {    

    //var main = $("#main");
    //main.on("mouseenter", function () {
    //    main.style = "background-color: #9AD;";
    //});

    //main.onmouseleave = function () {
    //    main.style.backgroundColor = ""       
    //}

    var $sidebarAndWrapper = $("#sidebar, #wrapper");
    var $icon = $("#sidebarToggle i.fa");

    $("#sidebarToggle").on("click", function () {
        $sidebarAndWrapper.toggleClass("hide-sidebar");
        if($sidebarAndWrapper.hasClass("hide-sidebar")) {
            $icon.removeClass("fa-angle-left");
            $icon.addClass("fa-angle-right");
        }
        else {
            $icon.addClass("fa-angle-left");
            $icon.removeClass("fa-angle-right");
        }
    });

    //var menuItems = $("ul.menu li a");
    //var altName = $("#username");
    //var mainName = $altName.text();
    //menuItems.on("click", function () {
    //    var me = $(this);
    //    if($me.text() == "Home")
    //    {            
    //        $altName.text("Big Daddy");
    //    }
    //    else {
    //        $altName.text(mainName);
    //    }
    //});

    
})();