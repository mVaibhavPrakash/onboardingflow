import Button from './Button'
import Description from './Description';

const Content2 = (props) => {
  return (
    <>
          <Description text1="Let's set up a home for all your work" text2='You can always create another workspace later.'/>
          <div className='form-input'>
            <label>Workspace Name</label>
            <input placeholder='Eden' value={props.state1} onChange={e =>{e.preventDefault();props.setState1(e.target.value)}}/>
          </div>
          <div className='form-input'>
            <label>Workspace URL<span className='optional-input'> (optional)</span></label>
            <div id="url-input" >
              <input id='url' placeholder='Example' value={props.state2} onChange={e =>{e.preventDefault();props.setState2(e.target.value)}}/>
              <div id='url-div'>www.eden.com/</div>
            </div>
          </div>
          <Button index={props.index} last={props.last} text='Create Workspace'/>
    </>
  )
}

export default Content2