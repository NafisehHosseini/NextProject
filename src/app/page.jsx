
import Image from "next/image";
import img from "../../public/Home.jpg";
import "./page1.scss";
export default function Home() {
  return (
    <div className="containers">
      <Image src={img} alt="home img" className="imghome"></Image>
      <div >
        <p className="text">
          Be Your Best with us
          <br />
          Better Design For Your Products
        </p>
        
        <button className="btn">see our works</button>
      </div>
    </div>
  );
}
