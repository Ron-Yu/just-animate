export const zoomOutRight: ja.IAnimationMixin = {
    css: [
        {
            offset: 0,
            opacity: 1,
            transform: 'none',
            transformOrigin: 'right center'
        },
        {
            offset: 0.4,
            opacity: 1,
            transform: 'scale3d(.475, .475, .475) translate3d(-42px, 0, 0)'
        },
        {
            offset: 1,
            opacity: 0,
            transform: 'scale(.1) translate3d(2000px, 0, 0)',
            transformOrigin: 'right center'
        }
    ],

    to: 1000,
    easing: 'elegantSlowStartEnd'
    ,
    name: 'zoomOutRight'
};
