//
//-----------------------------------------------------------------
// 공통 스크립트
//-----------------------------------------------------------------
//

const gb = (function () {
  return {
    wW: window.innerWidth,
    wH: window.innerHeight,
    html: $('html'),
    body: $('body'),
    layout: $('#layout'),
    main: $('main'),
    header: $('#gnb'),
    btnActiveModal: $('.button-active-modal'),
    isMob: window.innerWidth <= 821 ? true : false,
    isFocus: false,
  };
})();

window.addEventListener('load', () => {
  gb.CommonFunction.init();
});

gb.CommonFunction = (function () {
  const setGnb = () => {
    // 헤더
    //gsap.to(gb.main, { y: 0, duration: 0.5, delay: 0.3 });
    gsap.to(gb.header, { y: 0, opacity: 1, duration: 0.4, delay: 0.4 });

    if (document.documentElement.scrollTop >= 40) {
      gb.html.addClass('fixed');
    } else {
      gb.html.removeClass('fixed');
    }

    $('.btn-mob-menuOpen').on('click', function () {
      if (gb.html.hasClass('m-menu')) {
        mobMenuClose();
      } else {
        gb.html.addClass('m-menu');
        gb.body.append('<div class="dimmed btn-mob-menuClose"></div>');
        gb.body.css({
          height: '100vh',
          'overflow-y': 'hidden',
        });
        if (!gb.main.length) {
          gb.html.removeClass('active');
        }
      }
    });

    $(document).on('click', '.btn-mob-menuClose', function () {
      mobMenuClose();
    });

    const mobMenuClose = () => {
      gb.html.removeClass('m-menu');
      $('.dimmed').remove();
      gb.body.css({
        height: 'auto',
        'overflow-y': 'visible',
      });
      if (!gb.main.length) {
        gb.html.addClass('active');
      }
    };

    $('.depth1')
      .find('> li > a')
      .on('click', function (e) {
        const trg_ = $(this);
        if (trg_.next('.depth2').length) {
          e.preventDefault();
          e.stopPropagation();

          if (trg_.closest('li').hasClass('on')) {
            trg_.closest('li').removeClass('on');
            trg_.next('.depth2').stop().slideUp(300);
          } else {
            trg_.closest('li').addClass('on');
            trg_.next('.depth2').stop().slideDown(300);
          }
        }
      });
  };
  const modalOn = () => {
    // 공통 모달 열기
    gb.btnActiveModal.on('click', function (event) {
      event.preventDefault();
      event.stopPropagation();

      const trg = $(this);
      const modalName = trg.data('modal-name');

      $('.modal').removeClass('zoomIn');
      $('.dimmed').remove();

      trg.addClass('selected');
      trg.closest('.list-item').addClass('on');
      $('.modal#modal-' + modalName).addClass('zoomIn');

      gb.body.append('<div class="dimmed fixed btn-close-modal"></div>');
      gb.body.css({
        height: '100vh',
        'overflow-y': 'hidden',
      });

      if (modalName === 'voteResult') {
        chartOn();
      }
    });

    $(document).on('click', '.btn-close-modal', () => {
      modalOff();
    });
  };
  const modalOff = () => {
    // 공통 모달 닫기
    gb.btnActiveModal.removeClass('selected');
    $('.list-item').removeClass('on');
    $('.modal').removeClass('zoomIn');
    $('.dimmed').remove();

    gb.body.css({
      height: 'auto',
      'overflow-y': 'visible',
    });
  };
  const fileUpload = (el, type) => {
    // input file
    const pathpoint = el.value.lastIndexOf('.');
    const filepoint = el.value.substring(pathpoint + 1, el.length);
    const filetype = filepoint.toLowerCase(); // 업로드 파일 확장자
    const fileReader = new FileReader();
    const fileName = $(el)[0].files[0].name; // 첨부 파일 명
    const filesize = $(el)[0].files[0].size; // 첨부 파일 용량

    fileReader.readAsDataURL($(el)[0].files[0]);

    if (type == 'image') {
      // 이미지 업로드
      if (filetype == 'jpg' || filetype == 'gif' || filetype == 'png' || filetype == 'jpeg' || filetype == 'bmp') {
        // 정상적인 이미지 확장자 파일일 경우
        // fileReader.onload = function (e) {
        //   $(el).closest('.file-up-list').find('.file-attach-image img').attr('src', e.target.result);
        // };
      } else {
        alert('이미지 파일만 선택 할 수 있습니다.');
        parentObj = el.parentNode;
        node = parentObj.replaceChild(el.cloneNode(true), el);
        return false;
      }
    }

    $(el).closest('.file-attach').find('.text-wrap input[type=text]').val(fileName);
  };
  const copyToClipboard = (val) => {
    // 클립 보드에 복사
    const t = document.createElement('textarea');

    document.body.appendChild(t);

    t.value = val;
    t.select();

    document.execCommand('copy');
    document.body.removeChild(t);
  };
  const copyUrl = () => {
    // url 복사
    copyToClipboard(location.href);
    alert('링크가 복사되었습니다.\n ' + location.href);
  };
  const goScrollTop = () => {
    gb.html.stop().animate({ scrollTop: 0 }, 300);
  };
  const vdPlay = () => {
    const buttonVdActive = document.querySelector('.vd-active');

    if (buttonVdActive) {
      buttonVdActive.addEventListener('click', function () {
        const trg = this;

        if (trg.classList.contains('vd-play')) {
          trg.classList.remove('vd-play');
          trg.previousElementSibling.pause();
          trg.parentElement.classList.add('vd-stop');
        } else {
          trg.classList.add('vd-play');
          trg.previousElementSibling.play();
          trg.parentElement.classList.remove('vd-stop');
        }
      });
    }
  };
  const createCalendar = function () {
    const defaultOption = {
      closeText: '닫기',
      currentText: '오늘',
      prevText: '이전 달',
      nextText: '다음 달',
      monthNames: ['1월', '2월', '3월', '4월', '5월', '6월', '7월', '8월', '9월', '10월', '11월', '12월'],
      monthNamesShort: ['1월', '2월', '3월', '4월', '5월', '6월', '7월', '8월', '9월', '10월', '11월', '12월'],
      dayNames: ['일', '월', '화', '수', '목', '금', '토'],
      dayNamesShort: ['일', '월', '화', '수', '목', '금', '토'],
      dayNamesMin: ['일', '월', '화', '수', '목', '금', '토'],
      weekHeader: '주',
      yearSuffix: '년',
    };

    $.datepicker.setDefaults(defaultOption);

    $('.calendar > input[type=text]').datepicker({
      showOn: 'both',
      dateFormat: 'yy-mm-dd',
      minDate: 'd',
    });
  };
  const createTimePicker = function () {
    $('.time > input[type=text]').timepicker({
      timeFormat: 'hh:mm p',
      interval: 10,
      minTime: '00:00',
      maxTime: '23:50',
      defaultTime: '00:00',
      startTime: '00:00',
      dynamic: false,
      dropdown: true,
      scrollbar: true,
    });
  };
  const openSide = function () {
    const buttonOpenSideCts = document.getElementsByClassName('btn-openSideCts');
    const buttonOffSideCts = document.getElementsByClassName('btn-offSideCts');
    const dragArea = document.getElementById('dragArea');
    const ctsSide = document.getElementById('ctsSide');

    if (ctsSide) {
      buttonOpenSideCts[0].addEventListener('click', function () {
        gsap.to(ctsSide, { y: 0, duration: 0.3 });
        gb.body.css('touch-action', 'none');
        gb.body.css('overflow-y', 'hidden');
      });

      buttonOffSideCts[0].addEventListener('click', function () {
        gsap.to(ctsSide, { y: '100%', duration: 0.3 });
        gb.body.css('touch-action', 'pan-y');
        gb.body.css('overflow-y', 'auto');
      });

      dragArea.addEventListener('touchstart', function (event) {
        gb.touchPoint = 0;
      });

      dragArea.addEventListener('touchmove', function (event) {
        gb.touchPoint = event.touches[0].clientY;

        if (gb.touchPoint > ctsSide.offsetTop) {
          gsap.to(ctsSide, { y: gb.touchPoint - ctsSide.offsetTop, duration: 0, delay: 0 });
        }
      });

      dragArea.addEventListener('touchend', function (event) {
        if (gb.touchPoint >= ctsSide.offsetTop + ctsSide.scrollHeight / 3) {
          gsap.to(ctsSide, { y: '100%', duration: 0.3 });
          gb.body.css('touch-action', 'pan-y');
          gb.body.css('overflow-y', 'auto');
        } else {
          gsap.to(ctsSide, { y: '0', duration: 0.3 });
          gb.body.css('touch-action', 'none');
          gb.body.css('overflow-y', 'hidden');
        }
      });
    }
  };
  const checkAll = () => {
    // 전체 선택
    const chkAll = document.querySelectorAll('.chkList input[type=checkbox][name^=allChk]');
    const chk_ = document.querySelectorAll('.chkList input[type=checkbox]:not([name^=allChk])');

    chkAll.forEach(function (el) {
      el.addEventListener('change', function () {
        const _name = el.getAttribute('name').split('_')[1];
        const _item = document.querySelectorAll(`input[type=checkbox][name^=${_name}]`);

        if (el.checked) {
          _item.forEach(function (elem) {
            elem.checked = false;
          });
        }
      });
    });

    chk_.forEach(function (el) {
      el.addEventListener('change', function () {
        const _name = el.getAttribute('name').split('_')[0];
        const _item = document.querySelectorAll(`input[type=checkbox][name^=allChk_${_name}]`);

        if (el.checked) {
          _item.forEach(function (elem) {
            elem.checked = false;
          });
        }
      });
    });
  };
  const chartOn = () => {
    const chart = document.querySelectorAll('.chart');
    chart.forEach(function (el) {
      const data = el.children[0];
      const count = el.children[1].innerText;
      const total = el.children[2].innerText;
      const percentage = ((count / total) * 100).toFixed();
      gsap.fromTo(data, { width: 0 }, { width: `${percentage}%`, delay: 0.3, duration: 0.4 });

      for (let i = 0; i <= percentage; i++) {
        (function (n) {
          setTimeout(function () {
            el.lastElementChild.innerHTML = `${i}%`;
          }, n * 20);
        })(i);
      }
    });
  };
  const init = () => {
    setGnb();
    modalOn();
    openSide();
    checkAll();
    //createCalendar();
    //createTimePicker();
    //vdPlay();
  };

  return {
    init,
    modalOff,
    goScrollTop,
    fileUpload,
    copyUrl,
  };
})();

window.addEventListener('scroll', () => {
  if (document.documentElement.scrollTop >= 40) {
    gb.html.addClass('fixed');
  } else {
    gb.html.removeClass('fixed');
  }
});

// 쿠키설정
function setCookie(cName, cValue, cDay) {
  const expire = new Date();
  let cookies;

  expire.setDate(expire.getDate() + cDay);
  cookies = cName + '=' + escape(cValue) + '; path=/ '; // 한글 깨짐을 막기위해 escape(cValue)를 합니다.
  if (typeof cDay != 'undefined') cookies += ';expires=' + expire.toGMTString() + ';';
  document.cookie = cookies;
}

function getCookie(cName) {
  cName = cName + '=';
  const cookieData = document.cookie;
  let start = cookieData.indexOf(cName);
  let cValue = '';
  if (start != -1) {
    start += cName.length;
    let end = cookieData.indexOf(';', start);
    if (end == -1) end = cookieData.length;
    cValue = cookieData.substring(start, end);
  }
  return unescape(cValue);
}
