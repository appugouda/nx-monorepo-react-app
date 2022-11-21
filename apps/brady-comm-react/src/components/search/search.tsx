import * as React from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete, { createFilterOptions } from '@mui/material/Autocomplete';
import styles from './search.module.css';

const filter = createFilterOptions<DataServiceType>();

export default function Search() {
  const [value, setValue] = React.useState<DataServiceType | null>(null);

  return (    
  <div className={styles['wrapper']}>
    <div className={styles['container']}>
      <Autocomplete
        value={value}
        onChange={(event, newValue) => {
          if (typeof newValue === 'string') {
            setValue({
              title: newValue,
            });
          } else if (newValue && newValue.inputValue) {
            // Create a new value from the user input
            setValue({
              title: newValue.inputValue,
            });
          } else {
            setValue(newValue);
          }
        }}
        filterOptions={(options, params) => {
          const filtered = filter(options, params);

          const { inputValue } = params;
          // Suggest the creation of a new value
          const isExisting = options.some((option) => inputValue === option.title);
          if (inputValue !== '' && !isExisting) {
            filtered.push({
              inputValue,
              title: `Add "${inputValue}"`,
            });
          }

          return filtered;
        }}
        selectOnFocus
        clearOnBlur
        handleHomeEndKeys
        id="free-solo-with-text-demo"
        options={searchItems}
        getOptionLabel={(option) => {
          // Value selected with enter, right from the input
          if (typeof option === 'string') {
            return option;
          }
          // Add "xxx" option created dynamically
          if (option.inputValue) {
            return option.inputValue;
          }
          // Regular option
          return option.title;
        }}
        renderOption={(props, option) => <li {...props}>{option.title}</li>}
        sx={{ width: 300 }}
        freeSolo
        renderInput={(params) => (
          <TextField {...params} label="Data Service" />
        )}
      />
      </div>
    </div>
  );
}

interface DataServiceType {
  inputValue?: string;
  title: string;
}

const searchItems: readonly DataServiceType[] = [
  { title: 'Explorer' },
  { title: 'Staticdata' },
  { title: 'Trinity' },
  { title: 'Marketata' },
  { title: 'Membership' },
];