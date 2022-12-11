import "./DropDownList.scss";

export const DropDownList: React.FC<{
  citiesList: string[];
  pickCity: (city: string) => void;
  button?: boolean;
}> = ({ citiesList, pickCity, button }) => {
  let style = button ? { top: "50px", right: 0 } : { top: "auto" };

  return (
    <ul style={style} className='dropdown-list'>
      {citiesList.map((item, index) => {
        if (index < 7) {
          return (
            <li key={index} onClick={() => pickCity(item)}>
              {item}
            </li>
          );
        }
      })}
    </ul>
  );
};
