"use strict";
exports.zoomInLeft = {
    css: [
        {
            offset: 0,
            opacity: 0,
            transform: 'scale3d(.1, .1, .1) translate3d(-1000px, 0, 0)'
        },
        {
            offset: 0.6,
            opacity: 1,
            transform: 'scale3d(.475, .475, .475) translate3d(10px, 0, 0)'
        },
        {
            offset: 1,
            opacity: 1,
            transform: 'none'
        }
    ],
    to: 1000,
    easing: 'elegantSlowStartEnd',
    name: 'zoomInLeft'
};
