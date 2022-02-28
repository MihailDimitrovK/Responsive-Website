((d, w) => {

    w.addEventListener('load', sendHeight);
    w.addEventListener('resize', sendHeight);

    let btnGame = $('.pull');

    if(!/game\.html/gi.test(location.href) && btnGame){

        btnGame.addEventListener('click', () => {
            (new Image).src = 'https://a.abv.bg/www/delivery/lg.php?bannerid=178487&campaignid=5340&zoneid=63&time=' + Date.now();
        });
        
        return;
    }
    
    let desktopImgsURL, mobileImgsURL, desktopWidth, currentDevice, btnSave, btnPull, currentImg, sharedIMG;

    desktopImgsURL = [
        './imgs/desktop/random/01_desktop.png',
        './imgs/desktop/random/02_desktop.png',
        './imgs/desktop/random/03_desktop.png',
        './imgs/desktop/random/04_desktop.png',
        './imgs/desktop/random/05_desktop.png',
        './imgs/desktop/random/06_desktop.png',
        './imgs/desktop/random/07_desktop.png',
        './imgs/desktop/random/08_desktop.png',
        './imgs/desktop/random/09_desktop.png',
        './imgs/desktop/random/10_desktop.png',
        './imgs/desktop/random/11_desktop.png',
        './imgs/desktop/random/12_desktop.png',
        './imgs/desktop/random/13_desktop.png',
        './imgs/desktop/random/14_desktop.png',
        './imgs/desktop/random/15_desktop.png',
        './imgs/desktop/random/16_desktop.png',
        './imgs/desktop/random/17_desktop.png',
        './imgs/desktop/random/18_desktop.png',
        './imgs/desktop/random/19_desktop.png',
        './imgs/desktop/random/20_desktop.png',
        './imgs/desktop/random/21_desktop.png',
        './imgs/desktop/random/22_desktop.png',
        './imgs/desktop/random/23_desktop.png',
        './imgs/desktop/random/24_desktop.png',
        './imgs/desktop/random/25_desktop.png',
        './imgs/desktop/random/26_desktop.png'
    ];

    mobileImgsURL = [
        './imgs/mobile/random/01_mobile.png',
        './imgs/mobile/random/02_mobile.png',
        './imgs/mobile/random/03_mobile.png',
        './imgs/mobile/random/04_mobile.png',
        './imgs/mobile/random/05_mobile.png',
        './imgs/mobile/random/06_mobile.png',
        './imgs/mobile/random/07_mobile.png',
        './imgs/mobile/random/08_mobile.png',
        './imgs/mobile/random/09_mobile.png',
        './imgs/mobile/random/10_mobile.png',
        './imgs/mobile/random/11_mobile.png',
        './imgs/mobile/random/12_mobile.png',
        './imgs/mobile/random/13_mobile.png',
        './imgs/mobile/random/14_mobile.png',
        './imgs/mobile/random/15_mobile.png',
        './imgs/mobile/random/16_mobile.png',
        './imgs/mobile/random/17_mobile.png',
        './imgs/mobile/random/18_mobile.png',
        './imgs/mobile/random/19_mobile.png',
        './imgs/mobile/random/20_mobile.png',
        './imgs/mobile/random/21_mobile.png',
        './imgs/mobile/random/22_mobile.png',
        './imgs/mobile/random/23_mobile.png',
        './imgs/mobile/random/24_mobile.png',
        './imgs/mobile/random/25_mobile.png',
        './imgs/mobile/random/26_mobile.png',
    ];

    desktopWidth = screen.width;
    currentDevice = desktopWidth > 576 ? desktopImgsURL : mobileImgsURL;

    btnSave = $('.save');
    btnPull = $('.pull-img');
    btnShareFB = $('.FB');

    btnSave.addEventListener('click', () => {
        (new Image).src = 'https://a.abv.bg/www/delivery/lg.php?bannerid=178487&campaignid=5340&zoneid=63&time=' + Date.now();
    });

    btnPull.addEventListener('click', () => {
        randomImg();
        sharedIMG = currentImg.substring(1);
        btnSave.href = currentImg;
        (new Image).src = 'https://a.abv.bg/www/delivery/lg.php?bannerid=178487&campaignid=5340&zoneid=63&time=' + Date.now();
    });

    btnShareFB.addEventListener('click', () => {
        fbShare();
    });

    let randomImg = () => {
        randomNum = Math.floor(Math.random() * currentDevice.length);
        currentImg = currentDevice[randomNum];
        $('.lucky-img').src = currentImg;
    };
   
    const fbShare = () => {
        window.open('http://www.facebook.com/sharer.php?u=' + 
        encodeURIComponent('https://bimg.abv.bg/banners/milka/' + 
        sharedIMG) + '&t=' + 
        encodeURIComponent('Milka'), 'Milka share', 'toolbar=0,status=0,width=320,height=180');
    }

    d.addEventListener('DOMContentLoaded', () => {
        randomImg();
        sharedIMG = currentImg.substring(1);
        btnSave.href = currentImg;
    });
    
    function getDocHeight() {
        return Math.max(
            d.body.offsetHeight,
            d.documentElement.offsetHeight
        );
    }

    function sendHeight() {
        let h = getDocHeight();
        w.top.postMessage(h, '*');
    }

    function $(sel){
        return d.querySelector(sel);
    }

})(document, window);
