import RatingDisplay from './RatingDisplay';

const ProductCard = ({ productName, averageRating, reviewsCount, currentPrice, previousPrice, onPromotion, imageUrl, altText }) => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', width: '200px', backgroundColor: 'white', padding: '10px', gap: '0px', justifyContent: 'start' }}>
      <img src={imageUrl} alt={altText} />
      <h4>{productName}</h4>
      <div>Current Price: {currentPrice}</div>
      {onPromotion && <div>Previous Price: {previousPrice}</div>}
      {averageRating && <RatingDisplay rating={averageRating} reviewCount={reviewsCount} />}
    </div>
  );
};

export default ProductCard;
