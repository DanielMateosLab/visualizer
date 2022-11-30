import Image from "next/image";

const RoomDashboard = ({ children, imgSrc }) => {
  return (
    <main className="relative w-full h-full bg-white">
      <Image
        priority
        className="rounded-xl"
        src={imgSrc}
        layout="fill"
        objectFit="cover"
        alt=""
      />
      {children}
    </main>
  );
};

export default RoomDashboard;
