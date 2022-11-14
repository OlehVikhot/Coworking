import { useState } from "react";
import ButtonPrimary from "../UI/ButtonPrimary";
import "./ItemImages.scss";

const ItemImages: React.FC<{ images: string[] }> = ({ images }) => {
  const [morePhotos, setMorePhotos] = useState(false);
  return (
    <div className="item-images-container">
      <div className="item-images-component">
        <div className="main-image">
          <img src={images[0]} alt="coworking" />
        </div>
        <div className="middle-images">
          <img src={images[2]} alt="coworking" />
          <img src={images[3]} alt="coworking" />
        </div>
        <div className="more-images">
          <img src={images[4]} alt="coworking" />
          {
            <ButtonPrimary
              text={morePhotos ? "Less photos" : "More photos"}
              onClick={() => setMorePhotos(!morePhotos)}
            />
          }
        </div>
      </div>

      {morePhotos && (
        <div className="item-images-component">
          <div className="more-images left">
            <img src={images[4]} alt="coworking" />
          </div>
          <div className="middle-images">
            <img src={images[2]} alt="coworking" />
            <img src={images[3]} alt="coworking" />
          </div>
          <div className="main-image">
            <img src={images[1]} alt="coworking" />
          </div>
        </div>
      )}
    </div>
  );
};

export default ItemImages;
