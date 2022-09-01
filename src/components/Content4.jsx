import Description from "./Description"
import Button from "./Button"

const Content4 = (props) => {
  return (
    <>
        <div className='tick'>
            <li>
            &#10004;
            </li>
        </div>
        <Description text1={`Congratulations, ${props.state}`} text2='You have completed onboarding, you can start using Eden!'/>
        <Button index={props.index} last={props.last} text='Launch Eden'/>
    </>
  )
}

export default Content4