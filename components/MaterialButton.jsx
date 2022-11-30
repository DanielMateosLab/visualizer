const MaterialButton = ({ name, previewImgSrc, selected, onClick }) => (
  <button
    className="flex items-center p-1 bg-gray-50 rounded-md"
    onClick={onClick}
  >
    {selected && <span className="w-20 px-4">{name}</span>}
    <img
      className="w-16"
      alt={`Muestra del material "${name}"`}
      src={previewImgSrc}
    />
  </button>
);

export default MaterialButton;
