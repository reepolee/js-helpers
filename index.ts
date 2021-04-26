export default () => {
    return "js-helpers";
};

// ----------------------------------------------------------------------------
function dateForDisplay(dateValue: string, locale: string) {
    return new Date(dateValue).toLocaleDateString(locale);
}

// ----------------------------------------------------------------------------
function log(param: any) {
    console.log(JSON.stringify(param, null, 4));
}

// ----------------------------------------------------------------------------
// converts url string to passed extension, like jpg to avif or png to webp
// prepends size if passed for srcset, responsive images
function imgExtension(toExtension: string, url: string, size?: number) {
    let s = url;
    if (size) {
        const fname = s.split("/").pop().split("/").pop();
        s = s.replace(fname, `${size}/${fname}`);
    }

    if (s.endsWith("png")) {
        return s.split(".png").join("." + toExtension);
    }
    if (s.endsWith("jpg")) {
        return s.split(".jpg").join("." + toExtension);
    }
    if (s.endsWith("jpeg")) {
        return s.split(".jpeg").join("." + toExtension);
    }
}

// ----------------------------------------------------------------------------
function img(url: string, size?: number) {
    let s = url;
    if (size) {
        const fname = s.split("/").pop().split("/").pop();
        s = s.replace(fname, `${size}/${fname}`);
    }

    return s;
}

// ----------------------------------------------------------------------------
function avif(url: string, size?: number) {
    return imgExtension("avif", url, size);
}

// ----------------------------------------------------------------------------
function webp(url: string, size?: number) {
    return imgExtension("webp", url, size);
}

export { dateForDisplay, log, img, avif, webp };
