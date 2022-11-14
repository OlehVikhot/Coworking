import logo from "../../assets/logo.svg";
import InputEmail from "../UI/InputEmail";
import "./Footer.scss";

const Footer: React.FC = () => {
  return (
    <>
      <hr />
      <footer className="footer">
        <div className="logo">
          <img src={logo} alt="logo" />
        </div>
        <div className="info-container">
          <div className="email">
            <h3>Don't miss out on great offers</h3>
            <InputEmail placeholder="Enter your email" />
          </div>
          <div className="info">
            <div>
              <ul>
                <h3>Search</h3>
                <li>
                  <a href="#">By city</a>
                </li>
                <li>
                  <a href="#">By map</a>
                </li>
              </ul>
            </div>
            <div>
              <ul>
                <h3>For coworkings</h3>
                <li>
                  <a href="#">Add your coworking</a>
                </li>
                <li>
                  <a href="#">Prices</a>
                </li>
              </ul>
            </div>
            <div>
              <ul>
                <h3>About coworking</h3>
                <li>
                  <a href="#">What is coworking?</a>
                </li>
                <li>
                  <a href="#">What are the advantages of coworking?</a>
                </li>
                <li>
                  <a href="#">Why our search service?</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="social-media">
            <a href="#">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M19 3H5C3.895 3 3 3.895 3 5V19C3 20.105 3.895 21 5 21H12.621V14.039H10.278V11.314H12.621V9.309C12.621 6.985 14.042 5.718 16.116 5.718C16.815 5.716 17.513 5.752 18.208 5.823V8.253H16.78C15.65 8.253 15.43 8.787 15.43 9.575V11.31H18.13L17.779 14.035H15.414V21H19C20.105 21 21 20.105 21 19V5C21 3.895 20.105 3 19 3Z"
                  fill="currentColor"
                />
              </svg>
            </a>
            <a href="#">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M20.3027 2.98437C20.0138 2.99694 19.7486 3.08005 19.5156 3.17187C19.3004 3.25662 18.5275 3.58146 17.2969 4.09765C16.0662 4.61383 14.4355 5.29823 12.6973 6.02929C9.22084 7.49141 5.31424 9.13612 3.3125 9.97851C3.24376 10.0071 2.96459 10.0926 2.65625 10.3281C2.3472 10.5642 2.00391 11.0765 2.00391 11.6367C2.00391 12.0887 2.22952 12.549 2.50195 12.8125C2.77439 13.076 3.05049 13.1992 3.28125 13.291V13.2891C4.06128 13.5998 6.39069 14.5319 6.94531 14.7539C7.14204 15.3434 7.98659 17.8673 8.1875 18.5019H8.18555C8.32756 18.9512 8.46598 19.2439 8.6582 19.4883C8.75432 19.6105 8.86904 19.7212 9.00977 19.8086C9.06376 19.8421 9.12355 19.8681 9.18359 19.8926C9.19196 19.8961 9.20059 19.897 9.20898 19.9004L9.18555 19.8945C9.20296 19.9015 9.21858 19.9118 9.23633 19.918C9.26524 19.9279 9.28529 19.9276 9.32422 19.9355C9.46122 19.9777 9.59798 20.0058 9.72461 20.0058C10.2682 20.0058 10.6016 19.7109 10.6016 19.7109L10.623 19.6953L12.9707 17.709L15.8457 20.3691C15.8982 20.4433 16.3096 21 17.2617 21C17.8298 21 18.279 20.7188 18.5664 20.4238C18.8538 20.1289 19.0328 19.8271 19.1133 19.418L19.1152 19.416C19.1794 19.0858 21.9316 5.26562 21.9316 5.26562L21.9258 5.28905C22.0114 4.90671 22.0367 4.53695 21.9355 4.16015C21.8344 3.78334 21.5613 3.41562 21.2324 3.22265C20.9036 3.02968 20.5917 2.9718 20.3027 2.98437ZM19.9082 5.17382C19.7994 5.71985 17.334 18.1059 17.1816 18.8828L13.0293 15.041L10.2227 17.4141L11 14.375C11 14.375 16.3625 8.94685 16.6855 8.63085C16.9455 8.37785 17 8.28916 17 8.20116C17 8.08416 16.9398 7.99999 16.8008 7.99999C16.6758 7.99999 16.506 8.11977 16.416 8.17577C15.2724 8.88878 10.4013 11.6647 8.00586 13.0273C7.8617 12.9695 5.6974 12.1004 4.53125 11.6348C6.60551 10.7618 10.1612 9.2658 13.4727 7.87304C15.2106 7.1421 16.8408 6.45709 18.0703 5.9414C19.1082 5.50609 19.6495 5.28069 19.9082 5.17382ZM17.1523 19.0254H17.1543C17.1543 19.0256 17.1524 19.0309 17.1523 19.0312C17.1536 19.0248 17.1514 19.0304 17.1523 19.0254Z"
                  fill="currentColor"
                />
              </svg>
            </a>
            <a href="#">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M8 3C5.239 3 3 5.239 3 8V16C3 18.761 5.239 21 8 21H16C18.761 21 21 18.761 21 16V8C21 5.239 18.761 3 16 3H8ZM18 5C18.552 5 19 5.448 19 6C19 6.552 18.552 7 18 7C17.448 7 17 6.552 17 6C17 5.448 17.448 5 18 5ZM12 7C14.761 7 17 9.239 17 12C17 14.761 14.761 17 12 17C9.239 17 7 14.761 7 12C7 9.239 9.239 7 12 7ZM12 9C11.2044 9 10.4413 9.31607 9.87868 9.87868C9.31607 10.4413 9 11.2044 9 12C9 12.7956 9.31607 13.5587 9.87868 14.1213C10.4413 14.6839 11.2044 15 12 15C12.7956 15 13.5587 14.6839 14.1213 14.1213C14.6839 13.5587 15 12.7956 15 12C15 11.2044 14.6839 10.4413 14.1213 9.87868C13.5587 9.31607 12.7956 9 12 9Z"
                  fill="currentColor"
                />
              </svg>
            </a>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
