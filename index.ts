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

    if (s.includes("png")) {
        return s.split(".png").join(".avif");
    }
    return s.split(".jpg").join(".avif");
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

    if (s.includes("png")) {
        return s.split(".png").join(".webp");
    }
    return s.split(".jpg").join(".webp");
}

export { dateForDisplay, log, avif, jpeg, webp };
