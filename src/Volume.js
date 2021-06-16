export default function Volume(props) {
    const volume = props.volumePercentage;
    return (
        <div className = "volumeContainer">
            <div className = "volume" style={{bottom:volume}}></div>
        </div>
    )
}