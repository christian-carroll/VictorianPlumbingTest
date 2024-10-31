import ProductCard from './ProductCard';

const ProductsList = ({ productData }) => {
  return (
    <div style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap', gap: '40px' }}>
      {productData &&
        productData?.map((product) => (
          <ProductCard
            key={product.id}
            productName={product.productName}
            averageRating={product.averageRating}
            reviewsCount={product.reviewsCount}
            currentPrice={product.price.priceIncTax}
            previousPrice={product.price.wasPriceIncTax}
            onPromotion={product.price.isOnPromotion}
            imageUrl={product.image.url}
            altText={product.image.imageAltText}
          />
        ))}
    </div>
  );
};

export default ProductsList;
