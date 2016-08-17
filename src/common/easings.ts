import {cssFunction} from './strings';
import {cubicBezier} from './resources';

export const easings: ja.IMap<string> = {
    easeInBack: cssFunction(cubicBezier, 0.6, -0.28, 0.735, 0.045),
    easeInCirc: cssFunction(cubicBezier, 0.6, 0.04, 0.98, 0.335),
    easeInCubic: cssFunction(cubicBezier, 0.55, 0.055, 0.675, 0.19),
    easeInExpo: cssFunction(cubicBezier, 0.95, 0.05, 0.795, 0.035),
    easeInOutBack: cssFunction(cubicBezier, 0.68, -0.55, 0.265, 1.55),
    easeInOutCirc: cssFunction(cubicBezier, 0.785, 0.135, 0.15, 0.86),
    easeInOutCubic: cssFunction(cubicBezier, 0.645, 0.045, 0.355, 1),
    easeInOutExpo: cssFunction(cubicBezier, 1, 0, 0, 1),
    easeInOutQuad: cssFunction(cubicBezier, 0.455, 0.03, 0.515, 0.955),
    easeInOutQuart: cssFunction(cubicBezier, 0.77, 0, 0.175, 1),
    easeInOutQuint: cssFunction(cubicBezier, 0.86, 0, 0.07, 1),
    easeInOutSine: cssFunction(cubicBezier, 0.445, 0.05, 0.55, 0.95),
    easeInQuad: cssFunction(cubicBezier, 0.55, 0.085, 0.68, 0.53),
    easeInQuart: cssFunction(cubicBezier, 0.895, 0.03, 0.685, 0.22),
    easeInQuint: cssFunction(cubicBezier, 0.755, 0.05, 0.855, 0.06),
    easeInSine: cssFunction(cubicBezier, 0.47, 0, 0.745, 0.715),
    easeOutBack: cssFunction(cubicBezier, 0.175,  0.885, 0.32, 1.275),
    easeOutCirc: cssFunction(cubicBezier, 0.075, 0.82, 0.165, 1),
    easeOutCubic: cssFunction(cubicBezier, 0.215, 0.61, 0.355, 1),
    easeOutExpo: cssFunction(cubicBezier, 0.19, 1, 0.22, 1),
    easeOutQuad: cssFunction(cubicBezier, 0.25, 0.46, 0.45, 0.94),
    easeOutQuart: cssFunction(cubicBezier, 0.165, 0.84, 0.44, 1),
    easeOutQuint: cssFunction(cubicBezier, 0.23, 1, 0.32, 1),
    easeOutSine: cssFunction(cubicBezier, 0.39, 0.575, 0.565, 1),
    elegantSlowStartEnd: cssFunction(cubicBezier, 0.175, 0.885, 0.32, 1.275)
};