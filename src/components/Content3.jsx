import { useRef } from 'react';
import Button from './Button'
import Card from './Card';
import Description from './Description';

const Content3 = (props) => {
  const left = useRef(null)
  const lefti = useRef(null)
  const right = useRef(null)
  const righti = useRef(null)
  return (
    <>
        <Description text1={`How are you planning to use ${props.value}?`} text2="We'll streamline your setup experience accordingly"/>
        <div className='cards'>
          <Card index={0} len={2} icon='fa fa-user' re={left} rei={lefti} h1='For myself' p='Write better. Think more clearly. Stay organized.' card='left-card'/>
          <Card index={1} len={2} icon='fa fa-users' re={right} rei={righti} h1='With my team' p='Wikis, docs, tasks & projects, all in one place' card='right-card'/>
        </div>
        <Button index={props.index} last={props.last} text='Create Workspace'/>
    </>
  )
}

export default Content3