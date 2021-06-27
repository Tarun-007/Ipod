export default function Volume(props) {
  const volume = props.volumePercentage;
  return (
    <div className="volumeContainer hide">
      <div className="volume" style={{ bottom: volume }}></div>
    </div>
  );
}
