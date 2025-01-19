import "./index.css";

const BannerCardItem = (props) => {
  const { bannerDetails } = props;
  const { headerText, description, className } = bannerDetails;

  return (
    <li className={`${className} banner-card-item`}>
      <h1 className="heading">{headerText}</h1>
      <p className="description">{description}</p>
      <button className="show-more-btn">Show More</button>
    </li>
  );
};

export default BannerCardItem;
