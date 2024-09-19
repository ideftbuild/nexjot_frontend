$( document ).ready(function() {
    //Dropdown language menu
    $(".js-dropdown-click").on("click", function(e) {
        $(this).find(".dropdown-list").fadeToggle(200);
    });

    $(document).on("click", "body", function(e) {
        if ($(e.target).closest(".dropdown-list").length === 0 &&
            $(e.target).closest(".js-dropdown").length === 0 &&
            !$('.dropdown input[data-role="value"]').is(":focus")
        ) {
            $(".dropdown-list").fadeOut(300);
        }   
    });


    $("body").on("focus", ".input", function() {
        $(this).removeClass('error');
    });

    $("body").on("click", ".js-fake-submit", function() {
        $(this).parents("form").trigger("submit");
    });
});



/**
 * Namespace
 */
var uranus = {};



/**
 * Functions related to the home sections
 * @return {void} 
 */
uranus.homesections = function()
{
    //animating scroll
    $("a[data-scroll]").on("click", function(e) {
        var $section = $('section[data-scroll="' + $(this).data("scroll") + '"]');
        if ($section.length == 1) {
            e.preventDefault();
            var scrollTop = $section.offset().top - 0;
            
            $("html, body").animate({ 
                scrollTop: scrollTop + "px" 
            }, 1000);
        }
    });


    $(window).scroll(function(event) {    
        $(".img_box").each(function() {
            if ($(this).visible(true)) {
                $(this).removeClass('inactive');
            } 
        });

        $(".modules_list").each(function(i, el) {
            var el = $(el);
            if (el.visible(true)) {
                el.addClass("animation-module-box"); 
            } 
        });

        $(".module_list").each(function() {
            if ($(this).visible(true)) {
                $(this).removeClass('inactive');
            } 
        });
    });
}



/**
 * Login with Facebook
 * @param  {string} appid Facebook app ID
 * @param  {string} url   Address to post the form data
 * @return {void}       
 */
uranus.fblogin = function(appid, url) 
{   
    (function(d, s, id) {
        var js, fjs = d.getElementsByTagName(s)[0];
        if (d.getElementById(id)) return;
        js = d.createElement(s); js.id = id;
        js.src = "//connect.facebook.net/en_US/sdk.js";
        fjs.parentNode.insertBefore(js, fjs);
    }(document, 'script', 'facebook-jssdk'));


    window.fbAsyncInit = function() {
        FB.init({
            appId      : appid,
            cookie     : true,  
            xfbml      : true,  
            version    : 'v2.9'
        });

        $(".fbloginbtn").removeClass('disabled');

        $("body").on("click", ".fbloginbtn", function(){
            FB.login(function(auth){
                if(auth.status == "connected"){
                    FB.api('/me', {fields: 'first_name, last_name, email'}, function(userinfo) {
                        $("body").addClass("onprogress");

                        $.ajax({
                            url: url,
                            type: 'POST',
                            dataType: 'jsonp',
                            data: {
                                action: "fblogin",
                                firstname: userinfo.first_name,
                                lastname: userinfo.last_name,
                                email: userinfo.email,
                                token: auth.authResponse.accessToken,
                                userid: auth.authResponse.userID
                            },

                            error: function(){
                                $("body").removeClass("onprogress");
                            },

                            success: function(resp){
                                if(resp.result == 1) {
                                    window.location.href = resp.redirect;
                                } else {
                                    $("body").removeClass("onprogress");
                                }
                            }
                        })
                    });
                }
            }, { scope: 'email, public_profile' })
        })
    };
}


/**
 * Sign up 
 * @return {void} 
 */
uranus.signup = function()
{
    var $form = $("form");

    $form.find(".dot").eq(0).on("click", function() {
        $form.find(".step[data-step='2']").addClass('none');
        $form.find(".step[data-step='1']").removeClass('none');

        $form.find(".dot").removeClass('active');
        $form.find(".dot").eq(0).addClass('active');

        var label = $form.find(".formnav .label").data("text");
        $form.find(".formnav .label").text(label.replace("{step}", 1));
    });


    $form.find(".js-nextbtn, .dot:nth-child(2)").on("click", function() {
        var submitable = true;
        $form.find(".step[data-step='1'] .js-required").each(function() {
            if (!$(this).val()) {
                submitable = false;
                $(this).addClass('error');
            }   
        });

        var email = $form.find(":input[name='email']").val();
        if (!isValidEmail(email)) {
            $form.find(":input[name='email']").addClass('error');
            submitable = false;
        }

        if (!submitable) {
            return false;
        }

        $("body").addClass('onprogress');
        $form.find(".form-result").addClass('none');

        $("body").removeClass('onprogress');
        $form.find(".step[data-step='1']").addClass('none');
        $form.find(".step[data-step='2']").removeClass('none');

        $form.find(".dot").removeClass('active');
        $form.find(".dot").eq(1).addClass('active');

        var label = $form.find(".formnav .label").data("text");
        $form.find(".formnav .label").text(label.replace("{step}", 2));
    });


    $form.on("submit", function() {
        if ($form.find(".step[data-step='2']").hasClass('none')) {
            $form.find(".js-nextbtn").trigger("click");
            return false;
        }

        var submitable = true;
        $form.find(".step[data-step='2'] .js-required").each(function() {
            if (!$(this).val()) {
                submitable = false;
                $(this).addClass('error');
            }   
        });

        if (!submitable) {
            return false;
        }
    });
}




/**
 * Validate Email
 */
function isValidEmail(email) {
    var re = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,}(?:\.[a-z]{2})?)$/i;
    return re.test(email);
}