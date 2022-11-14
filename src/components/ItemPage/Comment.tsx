import "./Comment.scss";
import Rating from "../UI/Rating";

const Comment = () => {
  return (
    <div className="comment">
      <div className="person">
        <div className="img">
          <img
            src="https://thumbs.dreamstime.com/b/nice-to-talk-smart-person-indoor-shot-attractive-interesting-caucasian-guy-smiling-broadly-nice-to-112345489.jpg"
            alt=""
          />
        </div>
        <div className="name-rate">
          <p>Maks</p>
          <Rating rating={5} />
        </div>
      </div>
      <div className="text">
        <p>
          Дуже рекомендую Комуну. Чудове місце для роботи та нетворкінгу. Багато
          зон, чудова ціна. Усе необхідне поруч
        </p>
      </div>
    </div>
  );
};

export default Comment;
