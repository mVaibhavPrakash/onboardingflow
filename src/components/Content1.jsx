import Button from './Button'
import Description from './Description';

const Content1 = (props) => {
    return (
    <>
      <Description text1='Welcome! First things first...' text2='You can always change them later.'/>
      <div className='form-input'>
        <label>Full Name</label>
        <input placeholder='Steve Jobs' value={props.state1} onChange={e =>{e.preventDefault();props.setState1(e.target.value)}}/>
      </div>
      <div className='form-input'>
        <label>Display Name</label>
        <input placeholder='Steve' value={props.state2} onChange={e =>{e.preventDefault();props.setState2(e.target.value)}}/>
      </div>
      <Button index={props.index} last={props.last} text='Create Workspace'/>
    </>
  )
}

export default Content1