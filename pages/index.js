import Head from "next/head";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div>
      <Navbar />
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero numquam
        reprehenderit officia nobis eveniet molestias? Nobis aliquam, saepe
        magni magnam inventore commodi, beatae voluptatibus dignissimos
        provident, harum reprehenderit corrupti debitis.
      </p>
      <Footer />
    </div>
  );
}
