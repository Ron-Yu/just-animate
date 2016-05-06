const ostring = Object.prototype.toString;
const slice = Array.prototype.slice;

export function noop(): void {
    // do nothing
}

export function clamp(val: number, min: number, max: number): number {
    return val === undefined ? undefined : val < min ? min : val > max ? max : val;
}

export function head<T>(indexed: ja.IIndexed<T>): T {
    return (!indexed || indexed.length < 1) ? undefined : indexed[0];
}
export function tail<T>(indexed: ja.IIndexed<T>): T {
    return (!indexed || indexed.length < 1) ? undefined : indexed[indexed.length - 1];
}

export function isArray(a: any): boolean {
    return !isString(a) && isNumber(a.length);
}

export function isFunction(a: any): boolean {
    return ostring.call(a) === '[object Function]';
}

export function isNumber(a: any): boolean {
    return typeof a === 'number';
}

export function isString(a: any): boolean {
    return typeof a === 'string';
}

export function toArray<T>(indexed: ja.IIndexed<T>): T[] {
    return slice.call(indexed, 0);
}

export function each<T1>(items: ja.IIndexed<T1>, fn: ja.IConsumer<T1>): void {
    for (let i = 0, len = items.length; i < len; i++) {
        fn(items[i]);
    }
}

export function max<T1>(items: ja.IIndexed<T1>, propertyName: string): any {
    let max: any = '';
    for (let i = 0, len = items.length; i < len; i++) {
        const prop = items[i][propertyName];
        if (max < prop) {
           max = prop
        }
    }
    return max;
}

export function map<T1, T2>(items: ja.IIndexed<T1>, fn: ja.IMapper<T1, T2>): T2[] {
    const results = [];
    for (let i = 0, len = items.length; i < len; i++) {
        const result = fn(items[i]);
        if (result !== undefined) {
            results.push(result);
        }
    }
    return results;
}

export function extend(target: any, ...sources: any[]): any {
    for (let i = 1, len = arguments.length; i < len; i++) {
        const source = arguments[i];
        for (let propName in source) {
            target[propName] = source[propName];
        }
    }
    return target;
}

export function multiapply(targets: ja.IIndexed<any>, fnName: string, args: ja.IIndexed<any>, cb?: ja.ICallbackHandler): any[] {
    const errors = [];
    const results = [];
    for (let i = 0, len = targets.length; i < len; i++) {
        try {
            const target = targets[i];
            let result;
            if (fnName) {
                result = target[fnName].apply(target, args);
            } else {
                result = target.apply(undefined, args);
            }
            if (result !== undefined) {
                results.push(result);
            }
        } catch (err) {
            errors.push(err);
        }
    }
    if (isFunction(cb)) {
        cb(errors);
    }
    return results;
}
