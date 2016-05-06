"use strict";
exports.bounceInDown = {
    'keyframes': [
        {
            'offset': 0,
            'easing': 'cubic-bezier(0.215, 0.610, 0.355, 1.000)',
            'opacity': 0,
            'transform': 'translate3d(0, -3000px, 0)'
        },
        {
            'offset': 0.6,
            'easing': 'cubic-bezier(0.215, 0.610, 0.355, 1.000)',
            'opacity': 1,
            'transform': 'translate3d(0, 25px, 0)'
        },
        {
            'offset': 0.75,
            'easing': 'cubic-bezier(0.215, 0.610, 0.355, 1.000)',
            'opacity': 1,
            'transform': 'translate3d(0, -10px, 0)'
        },
        {
            'offset': 0.9,
            'easing': 'cubic-bezier(0.215, 0.610, 0.355, 1.000)',
            'opacity': 1,
            'transform': 'translate3d(0, 5px, 0)'
        },
        {
            'offset': 1,
            'easing': 'cubic-bezier(0.215, 0.610, 0.355, 1.000)',
            'opacity': 1,
            'transform': 'none'
        }
    ],
    'timings': {
        'duration': 900,
        'fill': 'both',
        'easing': 'easeOutCubic'
    },
    'name': 'bounceInDown'
};