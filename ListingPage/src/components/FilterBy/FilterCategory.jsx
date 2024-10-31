import FilterOption from './FilterOption';

const FilterCategory = ({ categoryData }) => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', width: '100%' }}>
      {categoryData && categoryData.map((item) => <FilterOption key={item.identifier} optionLabel={item.displayValue} productCount={item.productCount} />)}
    </div>
  );
};

export default FilterCategory;
