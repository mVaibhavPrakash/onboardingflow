import '../css/progress.css'

const Progress = (props) => {
    let clas = '';
    let id=''
    if(props.index === 0){
        clas='progress'
        id=`progress-first`
    }
    else if(props.index === props.len-1){
        clas='progress progress-last'
        id=`${props.index}`
    }
    else{
        clas='progress'
        id=`${props.index}`
    }
  return (
    <li id={id} className={clas}>
        {parseInt(props.index)+1}
    </li>
  )
}

export default Progress