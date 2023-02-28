import React from 'react'
import CurrencySelect from "./common/currencySelect";
import { useGetCurrency } from '../hooks/useGetCurrency';

function Currency() {
  const { baseAmount, setBaseAmount, baseCode, setBaseCode, targetAmount, targetCode, setTargetCode } = useGetCurrency();

  return (
    <main>
      <h1>환율 계산기</h1>
        <form>
          <input type="text" placeholder='금액을 입력해주세요.' value={baseAmount} onChange={e => setBaseAmount(e.target.value)} />
          <CurrencySelect className="base-currency" defaultValue={baseCode} onChange={e => setBaseCode(e.target.value)}/>
          <CurrencySelect className="target-currency" defaultValue={targetCode} onChange={e => setTargetCode(e.target.value)}/>
          <h2>{baseAmount} {baseCode} = {targetAmount.toFixed(2)} {targetCode}</h2>
        </form>
    </main>
  );
}

export default Currency;