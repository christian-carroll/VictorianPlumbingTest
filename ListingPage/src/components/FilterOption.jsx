import { Checkbox } from '@mui/material';

const FilterOption = ({ optionLabel, productCount }) => {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'flex-start',
        gap: '3px',
        padding: '5px',
        alignItems: 'center',
        borderTop: '1px solid lightgray',
        fontSize: '16px',
      }}>
      <Checkbox size="small" style={{ padding: '3px' }} />
      <div>{optionLabel}</div>
      <div style={{ padding: '5px', fontSize: '13px', color: 'gray' }}>{`(${productCount})`}</div>
    </div>
  );
};

export default FilterOption;
