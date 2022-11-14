import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "../store/configureStore";

import getText from "../constants/phrases";

import ButtonPrimary from "../components/UI/ButtonPrimary";
import InputSearch from "../components/UI/InputSearch";
import SliderPopular from "../components/UI/Slider/SliderPopular";
import NavigationBar from "../components/layout/NavigationBar";

import mainSearchImage from "../assets/img/main-search.png";
import firstInfo from "../assets/img/info-first.png";
import secondInfo from "../assets/img/info-second.png";
import ownerCoworking from "../assets/img/coworking-owner.png";

import "./MainPage.scss";

export default function MainPage() {
  const DATA = useSelector((state: RootState) => state.data.allCoworkings);
  const cityPath = useSelector((state: RootState) => state.data.cityFilter);

  const lvivData = DATA.filter((item) => item.city === "Lviv");
  const kyivData = DATA.filter((item) => item.city === "Kyiv");

  return (
    <>
      <NavigationBar />
      <main className="main-page">
        <section className="search-container">
          <div className="search">
            <div className="highlight">
              <h1>Find</h1>
              <h1>Coworkings</h1>
            </div>
            <div className="input">
              <InputSearch placeholder="Select a city to start" />
            </div>
            {cityPath ? (
              <Link className="link" to={`/search/${cityPath}`}>
                <ButtonPrimary text="Find out" />
              </Link>
            ) : (
              <ButtonPrimary text="Find out" disabled />
            )}
          </div>
          <div className="image">
            <img src={mainSearchImage} alt="main-search" />
          </div>
        </section>
        <section className="info-container ">
          <div className="image">
            <img src={firstInfo} alt="" />
          </div>
          <div className="info">
            <h2>What is coworking?</h2>
            <p>{getText("WHAT_IS_COWORKING")}</p>
            <ButtonPrimary text="Read more" secondary />
          </div>
        </section>
        <section className="info-container first-info">
          <div className="second-info">
            <div className="info">
              <h2>What are the advantages of coworking?</h2>
              <p>{getText("ADVANTAGES_OF_COWORKING")}</p>
              <ButtonPrimary text="More benefits" secondary />
            </div>
            <div className="image">
              <img src={secondInfo} alt="" />
            </div>
          </div>
        </section>
        <section className="info-container">
          <div className="third-info">
            <div className="image">
              <h2>Why our search service?</h2>
            </div>
            <div className="info">
              <p>{getText("COFINDER_DESCR")}</p>
              <ButtonPrimary text="Read more" secondary />
            </div>
          </div>
        </section>
        <section className="slider-container">
          <SliderPopular cowArray={lvivData} city={"Lviv"} />
          <SliderPopular cowArray={kyivData} city={"Kyiv"} />
        </section>

        <section className="info-container">
          <div className="image">
            <img src={ownerCoworking} alt="" />
          </div>
          <div className="info">
            <h2>Owner of a coworking space?</h2>
            <p>{getText("OVNER_OF_COWORKING")}</p>
            <ButtonPrimary text="Add coworking" secondary />
          </div>
        </section>
      </main>
    </>
  );
}
