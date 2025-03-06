import Image from "next/image";
import ParticleCanvas from "./loading/page";

export default function Home() {
  return (
    <div className=" relative">
     <ParticleCanvas />
    </div>
  );
}
