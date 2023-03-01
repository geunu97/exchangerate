import { useEffect, useState } from 'react';
import { getConvertedCurrency } from '../apis/currency';

export const useGetCurrency = () => {
  const [baseAmount, setBaseAmount] = useState('');
  const [baseCode, setBaseCode] = useState('KRW');
  const [targetAmount, setTargetAmount] = useState(0);
  const [targetCode, setTargetCode] = useState('USD');

  async function updateTargetAmount() {
    const response = await getConvertedCurrency(baseCode, targetCode, baseAmount);
    setTargetAmount(response);
  }

  useEffect(() => {
    if (baseAmount) {
      updateTargetAmount();
    }
  }, [baseAmount, baseCode, targetCode]);

  return {
    baseAmount,
    setBaseAmount,
    baseCode,
    setBaseCode,
    targetAmount,
    targetCode,
    setTargetCode,
  };
};
