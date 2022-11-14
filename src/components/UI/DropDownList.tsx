import "./DropDownList.scss";

const DropDownList: React.FC<{
  citiesList: string[];
  pickCity: (city: string) => void;
  button?: boolean;
}> = ({ citiesList, pickCity, button }) => {
  let style = button ? { top: "50px", right: 0 } : { top: "auto" };

  return (
    <ul style={style} className="dropdown-list">
      {citiesList.map((item, index) => {
        if (index < 7) {
          return (
            <li key={Math.random()} onClick={() => pickCity(item)}>
              {item}
            </li>
          );
        }
      })}
    </ul>
  );
};

export default DropDownList;
