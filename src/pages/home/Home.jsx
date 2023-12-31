import OffersBanner from "../../components/home_components/offersBanner/OffersBanner";
import Footer from "../../components/global_components/footer/Footer";
import Navbar from "../../components/global_components/navbar/Navbar";
import "./home.css";
import HotelsBanner from "../../components/home_components/hotelsBanner/HotelsBanner";
import MainBanner from "../../components/home_components/mainBanner/MainBanner";
import AboutBanner from "../../components/home_components/aboutBanner/AboutBanner";
import AppBanner from "../../components/home_components/appBanner/AppBanner";
import SearchBar from "../../components/global_components/searchBar/searchBar";

const Home = () => {
  return (
    <main>
      <Navbar />
      <div className="mx-auto max-w-6xl py-6 sm:px-6 lg:px-8">
        <SearchBar />
        <OffersBanner />
        <HotelsBanner />
      </div>
      <MainBanner/>
      <AboutBanner/>
      <AppBanner/>
      <Footer/>
    </main>
  )
};

export default Home;
