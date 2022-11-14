import { useLocation, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../store/configureStore";

import getIcon from "../constants/icons";

import ButtonText from "../components/UI/ButtonText";
import ListPerks from "../components/ItemPage/ListPerks";
import Comment from "../components/ItemPage/Comment";
import Path from "../components/ItemPage/Path";
import ItemImages from "../components/ItemPage/ItemImages";
import NavigationBar from "../components/layout/NavigationBar";

import map from "../assets/img/map.png";

import "./ItemPage.scss";
import { useEffect } from "react";
import { pickCoworking } from "../store/dataSlice";
import Booking from "../components/ItemPage/Booking";

export default function ItemPage() {
  const dispatch = useDispatch();

  const { id } = useParams();

  const anotherId = useLocation();

  useEffect(() => {
    if (id) {
      dispatch(pickCoworking(Number(id)));
    }
    if (!id) {
      dispatch(pickCoworking(Number(anotherId.state)));
    }
  }, [dispatch, id, anotherId]);

  let ITEM = useSelector((state: RootState) => state.data.pickedCoworking);
  const allCoworkings = useSelector(
    (state: RootState) => state.data.allCoworkings
  );

  if (!ITEM) {
    ITEM = allCoworkings.filter(
      (item) => item.id === Number(id) && anotherId.state
    )[0];
  }

  return (
    <div>
      <NavigationBar />
      <section>
        <Path name={ITEM.name} city={ITEM.city} />
      </section>
      <div className="item-page">
        <section className="images">
          <ItemImages images={ITEM.allImages} />
        </section>
        <section className="description">
          <div className="info">
            <h2>{ITEM.name}</h2>
            <div className="location">
              {getIcon("location")}
              <p>{ITEM.location}</p>
            </div>
            <div className="check-added">
              <div className="location">
                {getIcon("verified")}
                {ITEM.isVerified && <p>Verified</p>}
              </div>
              <div className="location">
                {getIcon("calendar")}
                <p>{ITEM.addedDate}</p>
              </div>
            </div>
            <div className="text-button">
              <ButtonText text="See all coworking spaces of the network" />
            </div>
            <div className="scedule">
              <h4>Schedule</h4>
              <div>
                <div className="days-hours">
                  <p className="days">Mon-Fri</p>
                  <p>08:00 - 00:00</p>
                </div>
                <div className="days-hours">
                  <p className="days">Sat</p>
                  <p>08:00 - 00:00</p>
                </div>
                <div className="days-hours">
                  <p className="days">Sun</p>
                  <p>08:00 - 00:00</p>
                </div>
              </div>
            </div>
          </div>
          <div className="info-text">
            <h3>General overview</h3>
            <p className="description">{ITEM.desciption}</p>
            <div className="text-button">
              <ButtonText text="Order a review" />
            </div>
            <div className="share-links">
              <p>{`Follow the ${ITEM.name} co-working space`}</p>
              <div className="links">
                <a href={ITEM.facebookLink} className="link">
                  {getIcon("facebook")}
                </a>
                <a href={ITEM.instagramLink} className="link">
                  {getIcon("instagram")}
                </a>
                <a href={ITEM.telegramLink} className="link">
                  {getIcon("telegram")}
                </a>
              </div>
            </div>
          </div>
        </section>
        <section className="book">
          <Booking />
        </section>
        <section className="perks-list">
          <h3>Perks</h3>
          <ListPerks list={ITEM.perksList} />
        </section>
        <section className="map">
          <img src={map} alt="map" />
        </section>
        <section className="reviews">
          <div className="comments">
            <Comment />
            <Comment />
            <Comment />
          </div>
          <div className="text-button">
            <ButtonText text="See more reviews" />
          </div>
        </section>
      </div>
    </div>
  );
}
