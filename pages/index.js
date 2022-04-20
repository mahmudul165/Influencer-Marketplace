import Image from "next/image";
import Head from "next/head";
import styles from "../styles/Home.module.css";
import Layout from "../component/layouts/layout";
import Slider from "../component/home/slider/Slider";
import Contact from "../component/home/contact/Contact";
import Mapview from "../component/home/mapview/Mapview";
import HomeOverview1 from "../component/home/overview/homeOverview1/HomeOverview1";
import HomeOverview2 from "../component/home/overview/homeOverview2/HomeOverview2";
import HomeOverview3 from "../component/home/overview/homeOverview3/HomeOverview3";
import HomeOverview4 from "../component/home/overview/homeOverview4/HomeOverview4";
import HomeOverview5 from "../component/home/overview/homeOverview5/HomeOverview5";
import VideoIntroducing from "../component/home/videoIntroducing/VideoIntroducing";
import CustomerStories from "../component/home/customerStories/CustomerStories";

export default function Home() {
  // const navbarScroll = document.getElementById("navbar-scroll");
  //console.log(navbarScroll);

  return (
    <>
      <Head>
        <title>Influencer Marketplace</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Layout>
        <Slider />

        {/* overview portion of home page */}
        <div className="header-bg">
          <HomeOverview1 />
          <HomeOverview2 />
          <HomeOverview3 />
          <Mapview />
          {/* <HomeOverview4 />
          <HomeOverview5 /> */}
        </div>
        <VideoIntroducing />
        <CustomerStories />

        {/* <Contact /> */}
      </Layout>
    </>
  );
}
