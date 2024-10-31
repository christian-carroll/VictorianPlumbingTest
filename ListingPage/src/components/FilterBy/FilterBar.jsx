import { Accordion, AccordionSummary, AccordionDetails } from '@mui/material';
import FilterCategory from './FilterCategory';

const FilterBar = ({ filterData }) => {
  return (
    <div>
      <h1>Filter By</h1>
      {filterData &&
        filterData?.map((item) => (
          <Accordion key={item.identifier}>
            <AccordionSummary style={{ fontSize: '20px' }}>{item.displayName}</AccordionSummary>
            <AccordionDetails>
              <FilterCategory categoryData={item.options} />
            </AccordionDetails>
          </Accordion>
        ))}
    </div>
  );
};

export default FilterBar;