/*
*
*
* */

$(function () {
  $(".tag-con > .con-items > a").click(function () {
    var ob = $(this);
    if (!ob.hasClass('type-active')) {
      ob.parent().find("input").val(ob.data('value'));
      ob.parent().find('.type-active').removeClass('type-active');
      ob.addClass('type-active');
    }
    return false;
  });
  /*
    *
    * */


  $('#sort-time').click(function () {
    $("input[name='sortField']").val('time');
    $('.sort-active').removeClass('sort-active');
    $(this).addClass('sort-active');
    return false;
  });
  $('#sort-count').click(function () {
    $("input[name='sortField']").val('count');
    $('.sort-active').removeClass('sort-active');
    $(this).addClass('sort-active');
    return false;
  });

  /*
  * 左侧边栏
  * */
  var offsettop = $('.chapter-con').offset().top;
  $(window).scroll(function(){
    var h = $(document).scrollTop();
    /*if( h>offsettop ){
      $('.chapter-con').css({
        'position':'fixed',
        'width':'258px',
        'top':'0px',
        'z-index':'9'
      });
    }else{
      $('.chapter-con').css({
        'position':'relative',
        'z-index':'0'
      })
    }
   if( h>=$(document).height()-$(window).height()-300 ){
      if($('#J_Tree').height()>400){
        $('#J_Tree').css({
          'height':'400px'
        })
      }
    }else {
      $('#J_Tree').css({
        'height':'auto'
      })
    }*/
  })
 /* function reloadQuestionList(onPager) {


    if (!onPager) {
      $("input[name='page']").val(1);
    }
    var inputs = select_form.serializeArray();
    $.getJSON('/question/list', inputs).done(function (data) {
      MockDataTestPaper = data.data;
      OT2.renderQList(MockDataTestPaper);
      if (data.total) {
        $('.null-page').hide();
      } else {
        $('.null-page').show();
      }
      $('.page').html(data.pager);
      $("div[class='total'] > b").html(data.total);
      var checked = $('.switch-detail').find('.checkbox input[type=checkbox]').prop('checked');
      QList.basket.publish('show-analyticbox', checked); // 初始化操作
      $("div[class='pagenum'] > a[href*='page']").click(function () {
        var ob = $(this);
        $("input[name='page']").val(ob.data('page'));
        reloadQuestionList(true);
        if (typeof window.dispatchEvent === 'undefined') $('html, body').scrollTop(0);
        else $('html, body').animate({scrollTop: 0}, 'fast');
        return false;
      });

      $("#paper-jump").click(function (e) {
        e.preventDefault();
        var ob = $(this);
        $("input[name='page']").val();
        reloadQuestionList(true);
        if (typeof window.dispatchEvent === 'undefined') $('html, body').scrollTop(0);
        else $('html, body').animate({scrollTop: 0}, 'fast');
        return false;
      });

      $("#paper-jump").keyup(function (e) {
        e.preventDefault();
        var ob = $(this);
        $("input[name='page']").val();
        reloadQuestionList(true);
        if (typeof window.dispatchEvent === 'undefined') $('html, body').scrollTop(0);
        else $('html, body').animate({scrollTop: 0}, 'fast');
        return false;
      });
    });
  }*/
})