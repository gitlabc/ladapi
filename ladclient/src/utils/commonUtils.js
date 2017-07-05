export function secondsToHms(seconds) {
    let d = Number(seconds);
    let h = Math.floor(d / 3600);
    let m = Math.floor(d % 3600 / 60);
    let s = Math.floor(d % 3600 % 60);

    var hDisplay = h > 0 ? h + 'h' : "";
    var mDisplay = m > 0 ? m + 'm' : "";
    var sDisplay = s > 0 ? s + 's' : "";
    let disArray = [hDisplay, mDisplay, sDisplay];

    if (h === 0 && m === 0 && s < 15) {
        return 'Soon';
    } else {
        return disArray.join(' ');
    }
}

export function getCurrentTimestamp() {
    return (new Date()).getTime();
}
