import React from 'react';
import { COUNTRY_CURRENCY_CODE_LIST } from '../../constants/CountryCurrencyCodeList';

interface CurrencySelectProps {
  className: string;
  defaultValue: string;
  onChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
}

function CurrencySelect({ ...props }: CurrencySelectProps) {
  return (
    <select {...props}>
      {COUNTRY_CURRENCY_CODE_LIST.map((COUNTRY) => (
        <option value={COUNTRY.CODE} key={COUNTRY.CODE}>
          {COUNTRY.CURRENCY}
        </option>
      ))}
    </select>
  );
}

export default CurrencySelect;
