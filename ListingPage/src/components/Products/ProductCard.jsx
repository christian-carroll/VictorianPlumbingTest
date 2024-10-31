import RatingDisplay from './RatingDisplay';
import PriceDisplay from './PriceDisplay';

const ProductCard = ({ productName, averageRating, reviewsCount, currentPrice, previousPrice, onPromotion, imageUrl, altText }) => {
  return (
    <div
      style={{ display: 'flex', flexDirection: 'column', width: '200px', backgroundColor: 'white', padding: '10px', gap: '0px', justifyContent: 'flex-start' }}>
      <img src={imageUrl} alt={altText} />
      <h4>{productName}</h4>
      <PriceDisplay currentPrice={currentPrice} previousPrice={previousPrice} onPromotion={onPromotion} />
      {averageRating && <RatingDisplay rating={averageRating} reviewCount={reviewsCount} />}
    </div>
  );
};

export default ProductCard;
