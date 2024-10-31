import { Select, MenuItem, InputLabel } from '@mui/material';

const sortOptions = {
  1: 'Recommended',
  2: 'Price: Low to High',
  3: 'Price: High to Low',
  4: 'Largest Discount',
};

const SortSelector = ({ currentSort }) => {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'end',
        gap: '3px',
        padding: '5px',
        alignItems: 'center',
      }}>
      <div>Sort By</div>
      <Select value={currentSort} style={{ padding: '3px', width: '200px' }}>
        {Object.keys(sortOptions).map((key) => (
          <MenuItem key={key} value={key}>
            {sortOptions[key]}
          </MenuItem>
        ))}
      </Select>
    </div>
  );
};

export default SortSelector;
