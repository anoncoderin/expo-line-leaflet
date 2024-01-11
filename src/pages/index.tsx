import dynamic from "next/dynamic";
import Image from "next/image";

const DynamicMap = dynamic(() => import("../../components/Map"), {
  ssr: false,
});

//REASON using dynamic is because map will render in client side..

export default function Home() {
  return (
    <>
      <header 
      style={{
        textAlign: "center",
        padding: "15px",
        backgroundColor: "#254859",
        display: "flex",
        justifyContent: "center",
        gap: 25,
        alignItems: "center",
      }}
      >
        <h1 style={{ color: "white", fontSize: 25 }}>
          Millennium Line & Expo Line SkyTrain Station</h1>
        <Image src="/images/SVG/train.svg" width={40} height={40} alt="logo"/>
      </header>
      <DynamicMap />
    </>
  );
}
