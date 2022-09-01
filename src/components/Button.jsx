import indexChange from '../js/indexChange';

const Button = (props) => {
    return (
    <button className='btn' type='button' onClick={e=>
      indexChange(props.index+1,props.last)}>{props.text}</button>
  )
}

export default Button