$(document).ready(function() {
  console.log('jquery ready')

  // collapse the navbar on scroll
  function collapseNavbar() {
      if ($(".navbar").offset().top > 50) {
          $(".navbar-fixed-top").addClass("top-nav-collapse");
      } else {
          $(".navbar-fixed-top").removeClass("top-nav-collapse");
      }
  }

  $(window).scroll(collapseNavbar);
  $(document).ready(collapseNavbar);

  // page scrolling feature
  $(function() {
      $('a.page-scroll').bind('click', function(event) {
          var $anchor = $(this);
          $('html, body').stop().animate({
              scrollTop: $($anchor.attr('href')).offset().top
          }, 1500, 'easeInOutExpo');
          event.preventDefault();
      });
  });

  // Closes the Responsive Menu on Menu Item Click
  $('.navbar-collapse ul li a').click(function() {
    if ($(this).attr('class') != 'dropdown-toggle active' && $(this).attr('class') != 'dropdown-toggle') {
      $('.navbar-toggle:visible').click();
    }
  });


    var $form_modal = $('.cd-user-modal'),
    $form_login = $form_modal.find('#cd-login'),
    $form_signup = $form_modal.find('#cd-signup'),
    $form_forgot_password = $form_modal.find('#cd-reset-password'),
    $form_modal_tab = $('.cd-switcher'),
    $tab_login = $form_modal_tab.children('li').eq(0).children('a'),
    $tab_signup = $form_modal_tab.children('li').eq(1).children('a'),
    $forgot_password_link = $form_login.find('.cd-form-bottom-message a'),
    $back_to_login_link = $form_forgot_password.find('.cd-form-bottom-message a'),
    $modal_trigger = $('.modal-trigger');

  //open modal
  $modal_trigger.on('click', function(event){

    if( $(event.target).is($modal_trigger) ) {
      // on mobile open the submenu
      $(this).children('ul').toggleClass('is-visible');
    } else {
      // on mobile close submenu
      $modal_trigger.children('ul').removeClass('is-visible');
      //show modal layer
      $form_modal.addClass('is-visible');
      //show the selected form
      ( $(event.target).is('.cd-signup') ) ? signup_selected() : login_selected();
    }

  });

  //close modal
  $('.cd-user-modal').on('click', function(event){
    if( $(event.target).is($form_modal) || $(event.target).is('.cd-close-form') ) {
      $form_modal.removeClass('is-visible');
    }
  });


  //switch from a tab to another
  $form_modal_tab.on('click', function(event) {
    event.preventDefault();
    ( $(event.target).is( $tab_login ) ) ? login_selected() : signup_selected();
  });

  //show forgot-password form
  $forgot_password_link.on('click', function(event){
    event.preventDefault();
    forgot_password_selected();
  });

  //back to login from the forgot-password form
  $back_to_login_link.on('click', function(event){
    event.preventDefault();
    login_selected();
  });

  function login_selected(){
    $form_login.addClass('is-selected');
    $form_signup.removeClass('is-selected');
    $form_forgot_password.removeClass('is-selected');
    $tab_login.addClass('selected');
    $tab_signup.removeClass('selected');
  }

  function signup_selected(){
    $form_login.removeClass('is-selected');
    $form_signup.addClass('is-selected');
    $form_forgot_password.removeClass('is-selected');
    $tab_login.removeClass('selected');
    $tab_signup.addClass('selected');
  }

  function forgot_password_selected(){
    $form_login.removeClass('is-selected');
    $form_signup.removeClass('is-selected');
    $form_forgot_password.addClass('is-selected');
  }

  //show error messages
  /*
  $form_login.find('input[type="submit"]').on('click', function(event){
    event.preventDefault();
    $form_login.find('input[type="email"]').toggleClass('has-error').next('span').toggleClass('is-visible');
  });
*/

   //------------- for quizContainer stuffs

  var curQuestion = 1;
  var questionCount = 10

  $('#next_button').on('click',function(e){
    curQuestion = curQuestion > questionCount-1 ? 1 : curQuestion+1;

    //cover questions
    $('#question_cover').fadeIn("slow", function(){
      //unlock y-scroll
      $('#quiz_container').css({
        overflow: 'visible'
      });

      $('#quiz_container').animate({
        scrollTop: $("#q"+curQuestion).offset().top-260
      }, 1);

      //lock y-scroll
      $('#quiz_container').css({
        overflow: 'hidden'
      });
      //uncover questions
      $('#question_cover').fadeOut("slow");
    });
  });

  });




