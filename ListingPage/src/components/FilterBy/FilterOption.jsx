import { Checkbox } from '@mui/material';

const FilterOption = ({ optionData, setActiveFilters, filterCategory }) => {
  const isFilterActive = (activeFilters, identifier) => {
    for (const key in activeFilters) {
      if (Array.isArray(activeFilters[key])) {
        const match = activeFilters[key].some((item) => item.identifier === identifier);
        if (match) return true;
      }
    }
    return false;
  };

  const removeFilter = (activeFilters, identifier) => {
    const copyArray = JSON.parse(JSON.stringify(activeFilters));

    for (const key in copyArray) {
      if (Array.isArray(copyArray[key])) {
        copyArray[key] = copyArray[key].filter((item) => item.identifier !== identifier);

        if (copyArray[key].length === 0) {
          delete copyArray[key];
        }
      }
    }

    return copyArray;
  };

  const addFilter = (activeFilters, identifier, filterCategory) => {
    if (activeFilters[filterCategory]) {
      return { ...activeFilters, [filterCategory]: [...activeFilters[filterCategory], { identifier: optionData.identifier, value: optionData.value }] };
    } else {
      return { ...activeFilters, [filterCategory]: [{ identifier: optionData.identifier, value: optionData.value }] };
    }
  };

  const handleClick = () => {
    setActiveFilters((prevActiveFilters) => {
      const filterActive = isFilterActive(prevActiveFilters, optionData.identifier);
      return filterActive ? removeFilter(prevActiveFilters, optionData.identifier) : addFilter(prevActiveFilters, optionData.identifier, filterCategory);
    });
  };

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
      <Checkbox size="small" style={{ padding: '3px' }} onChange={handleClick} />
      <div>{optionData.displayValue}</div>
      <div style={{ padding: '5px', fontSize: '13px', color: 'gray' }}>{`(${optionData.productCount})`}</div>
    </div>
  );
};

export default FilterOption;
