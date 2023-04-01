export const refreshPage = (props) => {
    const showInfo = props;
    if (showInfo) {
        alert(showInfo)
        setTimeout(() => {
            window.location.reload(false);
        }, 100);
        console.log(showInfo)
        return;
    } else {
        window.location.reload(false);
    }
};