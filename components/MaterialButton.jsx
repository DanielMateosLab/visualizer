import Image from "next/image";

const MaterialButton = ({ name, previewImgSrc, selected, onClick }) => (
  <button
    className="flex items-center p-1 bg-gray-50 rounded-md"
    onClick={onClick}
    aria-current={selected}
  >
    {selected && <span className="px-4 ">{name}</span>}
    <div className="relative w-16 h-16">
      <Image
        className="object-cover"
        layout="fill"
        alt={`Muestra del material "${name}"`}
        src={previewImgSrc}
      />
    </div>
  </button>
);

export default MaterialButton;
