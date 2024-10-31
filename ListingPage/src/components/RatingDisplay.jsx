import { Rating } from '@mui/material';

const RatingDisplay = ({ rating, reviewCount }) => {
  return (
    <div style={{ display: 'flex', flexDirection: 'row', width: '100%', justifyContent: 'center', gap: '3px', padding: '0px' }}>
      <Rating value={rating} readOnly />
      <div>{rating}</div>
      <div style={{ padding: '5px', fontSize: '13px', color: 'gray' }}>{`(${reviewCount})`}</div>
    </div>
  );
};

export default RatingDisplay;
