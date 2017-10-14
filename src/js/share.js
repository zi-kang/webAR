/**
 * Created by huzikang on 17/10/14.
 */
function shareFun() {
    $(function() {
        FastClick.attach(document.body);
    });
    var shareBtn = $('.share-btn'),
        shareCover = $('.share-cover'),
        shareBody = $('.share-condent'),
        shareFBtn = $('.share-f'),
        shareCBtn = $('.share-c');
    shareBtn.on('click',(e)=>{
        shareCover.removeClass('dn');
    });
    shareCover.on('click',(e)=>{
        shareCover.addClass('dn');
    });
    shareBody.on('click',(e)=> {
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
}