import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { RootState } from "../../../store/configureStore";
import { HeaderLayout } from "../../index";
import "./Path.scss";

export const Path: React.FC<{ name: string; city: string }> = ({
  name,
  city,
}) => {
  const navigate = useNavigate();
  const coworkings = useSelector(
    (item: RootState) => item.data.filteredCoworkings
  );

  return (
    <HeaderLayout>
      <div className='item-page-path'>
        <div onClick={() => navigate(-1)} className={"back"}>
          <p className='city'>{`${city} (${coworkings.length})`}</p>
        </div>
        <svg
          width='24'
          height='24'
          viewBox='0 0 24 24'
          fill='currentColor'
          xmlns='http://www.w3.org/2000/svg'
        >
          <g clipPath='url(#clip0_98_1152)'>
            <path
              d='M8.59003 16.59L13.17 12L8.59003 7.41L10 6L16 12L10 18L8.59003 16.59Z'
              fill='currentColor'
            />
          </g>
          <defs>
            <clipPath id='clip0_98_1152'>
              <rect width='24' height='24' fill='white' />
            </clipPath>
          </defs>
        </svg>
        <div>
          <p>{name}</p>
        </div>
      </div>
    </HeaderLayout>
  );
};
