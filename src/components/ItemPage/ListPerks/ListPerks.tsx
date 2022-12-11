import { ALL_PERKS_LIST } from "../../../constants/DATA";

import "./ListPerks.scss";

export const ListPerks: React.FC<{ list: string[] }> = ({ list }) => {
  return (
    <div className='perks'>
      {list.map((item, index) => (
        <div key={index} className='perk'>
          <div className='icon'>
            {ALL_PERKS_LIST.filter((perk) => perk.name === item)[0].icon}
          </div>
          <div className='text'>{item}</div>
        </div>
      ))}
    </div>
  );
};
