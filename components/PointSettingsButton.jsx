import FingerPrint from "./FingerPrint";

const PointSettingsButton = ({ coordX, coordY, name }) => {
  console.log(coordX, coordY);
  return (
    <button
      className={"absolute bg-black text-white rounded-full opacity-50"}
      style={{
        top: `${coordY}%`,
        left: `${coordX}%`,
      }}
    >
      <FingerPrint />
      <span className="sr-only">{name}</span>
    </button>
  );
};

export default PointSettingsButton;
