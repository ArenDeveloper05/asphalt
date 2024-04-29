import "./BaseTitle.scss";

const BaseTitle = ({ title, description }) => {
  return (
    <div className="base-title">
      {title && <h1 className="base-title-heading">{title}</h1>}
      {description && (
        <div className="base-title-description">{description}</div>
      )}
    </div>
  );
};

export default BaseTitle;
