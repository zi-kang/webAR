/**
 * Created by huzikang on 17/10/14.
 */
function indexFunc() {
    $(function() {
        FastClick.attach(document.body);
    });
    var shareBtn = $('.share-btn'),
        shareFBtn = $('.share-f'),
        shareCBtn = $('.share-c'),
        shareCover = $('.share-cover'),
        shareBody = $('.share-condent'),
        pageNormal = $('.webAR-index-normal'),
        pageIOS = $('.webAR-index-iOS');

    shareBtn.on('click',(e)=>{
        shareCover.removeClass('dn');
    });
    shareCover.on('click',(e) =>{
        shareCover.addClass('dn');
    });
    shareBody.on('click',(e)=>{
        if ( e && e.stopPropagation )
            e.stopPropagation();
        else
            window.event.cancelBubble = true;
        if ( e && e.preventDefault )
            e.preventDefault();
        else
            window.event.returnValue = false;
        return false;
    });

    function is_iOSWechat() {
        var ua = navigator.userAgent.toLowerCase(),
            isWechat = 1,
            is_iOS = 1;
        if (/iphone|ipad|ipod/.test(ua)) {
            is_iOS = 2;
        } else if (/android/.test(ua)) {
            is_iOS = 1;
        }
        if(ua.match(/MicroMessenger/i)=="micromessenger") {
            isWechat = 2;
        } else {
            isWechat = 1;
        }
        if( isWechat == 2 && is_iOS == 2 ){
            pageNormal.addClass('dn');
            pageIOS.removeClass('dn');
         }else{
            pageIOS.addClass('dn');
            pageNormal.removeClass('dn');
        }
    }
    is_iOSWechat();

}

