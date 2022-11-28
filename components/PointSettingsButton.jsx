import FingerPrint from "./FingerPrint";

const PointSettingsButton = ({ coordX, coordY, name }) => (
  <button
    className={
      "absolute box-border bg-black text-white rounded-full opacity-50 p-1 ring ring-offset-2 ring-black hover:opacity-20"
    }
    style={{
      top: `${coordY}%`,
      left: `${coordX}%`,
    }}
  >
    <FingerPrint />
    <span className="sr-only">{name}</span>
  </button>
);

export default PointSettingsButton;
