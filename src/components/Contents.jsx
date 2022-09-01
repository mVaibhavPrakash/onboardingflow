import { useState} from 'react'
import Content1 from './Content1';
import Content2 from './Content2';
import Content3 from './Content3';
import Content4 from './Content4';
import '../css/content.css'
import '../css/input.css'
import '../css/button.css'

const Contents = (props) => {
  const [FName,setFName] = useState('')
  const [DName,setDName] = useState('Elen')
  const [WorkSpace,setWorkSpace] = useState('Eden')
  const [URL,setURL] = useState('')
  return (
    <>
      <div id='content1' className='content contentActive'>
          <Content1 index={0} last={props.last} state1={FName} state2={DName} setState1={setFName} setState2={setDName}/>
      </div>
      <div id='content2' className='content'>
          <Content2 index={1} last={props.last} state1={WorkSpace} state2={URL} setState1={setWorkSpace} setState2={setURL}/>
      </div>
      <div id='content3' className='content'>
          <Content3 index={2} last={props.last} value={WorkSpace}/>
      </div>
      <div id='content4' className='content'>
          <Content4 index={3} last={props.last} state={DName}/>
      </div>    
    </>
  )
}

export default Contents