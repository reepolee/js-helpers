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
function avif(url: string, size: number) {
    let s = url;
    if (size) {
        const fname = s.split("/").pop().split("/").pop();
        s = s.replace(fname, `${size}/${fname}`);
    }

    if (s.endsWith("png")) {
        return s.split(".png").join(".avif");
    }
    if (s.endsWith("jpg")) {
        return s.split(".jpg").join(".avif");
    }
    if (s.endsWith("jpeg")) {
        return s.split(".jpeg").join(".avif");
    }
}

// ----------------------------------------------------------------------------
function jpeg(url: string, size: number) {
    let s = url;
    if (size) {
        const fname = s.split("/").pop().split("/").pop();
        s = s.replace(fname, `${size}/${fname}`);
    }

    return s;
}

// ----------------------------------------------------------------------------
function webp(url: string, size: number) {
    let s = url;
    if (size) {
        const fname = s.split("/").pop().split("/").pop();
        s = s.replace(fname, `${size}/${fname}`);
    }

    if (s.endsWith("png")) {
        return s.split(".png").join(".webp");
    }
    if (s.endsWith("jpg")) {
        return s.split(".jpg").join(".webp");
    }
    if (s.endsWith("jpeg")) {
        return s.split(".jpeg").join(".webp");
    }
}

export { dateForDisplay, log, avif, jpeg, webp };
