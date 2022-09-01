const changeCardStyle = (index,length) => {

    document.getElementsByClassName(`${index}`)[0].className=`${index} card activeCard`
    for(let i=0;i<length;i++){
        if(i !==index)
        document.getElementsByClassName(`${i}`)[0].className=`${i} card`
    }
}

export default changeCardStyle