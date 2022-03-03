const debounce = (func: any, wait: any) => {
    let timer: any = null;
    return function () {
        clearTimeout(timer);
        timer = setTimeout(func, wait);
    }
}

export { debounce }
