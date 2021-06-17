export default function VolumeButtons(props) {
    const { volumeHandler } = props;
    return (
        <div className = 'volButtonContainer'>
            <div className='volButton'
                 onClick = {()=>volumeHandler(true)}
            > + </div>
            <p className = 'volLabel'>vol</p>
            <div className='volButton'
                onClick = {()=>volumeHandler(false)}
            > - </div>
        </div>
    )
}