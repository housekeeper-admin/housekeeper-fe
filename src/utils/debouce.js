export default function debounce(func, wait, immediate) {

    let timeout;

    return function () {
        let context = this;
        let args = arguments;

        if (timeout) clearTimeout(timeout);
        if (immediate) {
            // 如果已经执行过，不再执行
            let callNow = !timeout;
            timeout = setTimeout(function(){
                timeout = null;
            }, wait);
            if (callNow) func.apply(context, args);
        }
        else {
            timeout = setTimeout(function(){
                func.apply(context, args);
            }, wait);
        }
    };
}