export const refreshPage = (props) => {
    alert(props)
    setTimeout(()=>{
        window.location.reload(false);
    }, 100);
    console.log(props)
    return;
};