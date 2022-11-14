import { ALL_PERKS_LIST } from "../../util/DATA";

import "./ListPerks.scss";

const ListPerks: React.FC<{ list: string[] }> = ({ list }) => {
  return (
    <div className="perks">
      {list.map((item) => (
        <div key={Math.random()} className="perk">
          <div className="icon">
            {ALL_PERKS_LIST.filter((perk) => perk.name === item)[0].icon}
          </div>
          <div className="text">{item}</div>
        </div>
      ))}
    </div>
  );
};

export default ListPerks;
