const fnDown = (el, ev) => {
    // console.log(ev);
    let currentX = el.offsetLeft;
    let currentY = el.offsetTop;

    let downX = ev.clientX;
    let downY = ev.clientY;

    const fnMove = ev => {
        let left = ev.clientX - downX + currentX;
        let top = ev.clientY - downY + currentY;
        el.style.left = left + "px";
        el.style.top = top + "px";
    };

    const fnUp = ev => {
        document.removeEventListener("mousemove", fnMove, false);
        document.removeEventListener("mouseup", fnUp, false);
    };
    document.addEventListener("mousemove", fnMove, false);
    document.addEventListener("mouseup", fnUp, false);
    return false;
};

export default (el) => {
    el.addEventListener("mousedown", fnDown.bind(null, el), false);
}