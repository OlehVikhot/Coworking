import { Rating } from "../../../components";
import "./Comment.scss";

export const Comment = () => {
  return (
    <div className='comment'>
      <div className='person'>
        <div className='img'>
          <img
            src='https://thumbs.dreamstime.com/b/nice-to-talk-smart-person-indoor-shot-attractive-interesting-caucasian-guy-smiling-broadly-nice-to-112345489.jpg'
            alt=''
          />
        </div>
        <div className='name-rate'>
          <p>Maks</p>
          <Rating rating={5} />
        </div>
      </div>
      <div className='text'>
        <p>
          I highly recommend the Commune. A great place to work and network.
          Many zones, great price. Everything you need is nearby
        </p>
      </div>
    </div>
  );
};
