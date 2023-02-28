import { getConvertedCurrencyType } from '../types/apis/currency';
import { client } from './common/client';

export const getConvertedCurrency: getConvertedCurrencyType = async (baseCode, targetCode, baseAmount) => {
  try {
    const response = await client.get(`/convert?from=${baseCode}&to=${targetCode}&amount=${baseAmount}`)
    return response.data.result;
  } catch (e) {
    console.log('서버로부터 정보를 가져오는 과정에서 오류가 발생했습니다.');
  }
};