import Image from "next/image";
import baseKitchen from "../public/baseKitchen.jpeg";

const RoomDashboard = ({ children }) => {
  return (
    <main className="relative w-full h-full bg-white">
      <Image
        priority
        className="rounded-xl"
        src={baseKitchen}
        layout="fill"
        objectFit="cover"
        alt=""
      />
      {children}
    </main>
  );
};

export default RoomDashboard;
