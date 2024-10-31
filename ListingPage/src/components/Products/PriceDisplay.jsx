const PriceDisplay = ({ currentPrice, previousPrice, onPromotion }) => {
  return (
    <div>
      {onPromotion && previousPrice && (
        <div style={{ flexDirection: 'row', display: 'flex', justifyContent: 'center' }}>
          <div style={{ fontWeight: 'bold', paddingRight: '5px' }}>{`£${currentPrice}`}</div>
          <div style={{ color: 'gray', textDecoration: 'line-through' }}>{`£${previousPrice}`}</div>
        </div>
      )}
      {!onPromotion && <div>{`£${currentPrice}`}</div>}
    </div>
  );
};

export default PriceDisplay;
