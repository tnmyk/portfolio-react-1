const Tool = ({width,toolname}) => {
    const finalwidth = 380 *width /100
    return ( <div className='tool'>
        
        <div className='progress' style={{width:`${finalwidth}px`}}> </div>
         <span className='tool-name'>{toolname}</span>
    </div>);
}
 
export default Tool;