"use strict";

// Masks for input
$(".js-mask-phone").inputmask({
	mask: '+7 999 999-99-99',
	showMaskOnHover: false
});
$(".js-mask-email").inputmask({
	alias: "email",
	showMaskOnHover: false
});

// Payment System Carousel
function initPaymentSystemCarousel() {
    $(".js-paymentSystems").fotorama({
        width: "100%",
        nav: false,
        shadows: false,
        height: "66px",
        arrows: "always"
    });
}

function destroyPaymentSystemCarousel() {
    var fotoramaApi = $(".js-paymentSystems").data('fotorama');

    if (fotoramaApi) {
        fotoramaApi.destroy();
        $(".js-paymentSystems").removeClass("fotorama");
    }
}

enquire.register("screen and (max-width: 640px)", {
    match: initPaymentSystemCarousel,
    unmatch: destroyPaymentSystemCarousel
});
