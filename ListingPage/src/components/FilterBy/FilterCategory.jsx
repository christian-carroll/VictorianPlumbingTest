import FilterOption from './FilterOption';

const FilterCategory = ({ categoryData, setActiveFilters, filterCategory }) => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', width: '100%' }}>
      {categoryData &&
        categoryData.map((item) => (
          <FilterOption key={item.identifier} optionData={item} setActiveFilters={setActiveFilters} filterCategory={filterCategory} />
        ))}
    </div>
  );
};

export default FilterCategory;
