import '../css/card.css'
import changeCardStyle from '../js/changeCardStyle'

const Card = (props) => {
  return (
    <div className={`${props.index} card`} onClick={e =>changeCardStyle(props.index,props.len)}>
        <i className={props.icon}></i>
        <h1 className='icon-h1'>{props.h1}</h1>
        <p className='icon-p'>{props.p}</p>
    </div>
  )
}

export default Card