import "./BaseRow.scss";

const BaseRow = ({ imagesArr, light }) => {
  return (
    <div className="base-row">
      {imagesArr &&
        imagesArr.map((img, i) => {
          return (
            <div key={i} className="base-row-image">
              <img
                src={img}
                alt="base-img"
                style={light ? { filter: "brightness(3.5)" } : {}}
              />
            </div>
          );
        })}
    </div>
  );
};

export default BaseRow;
