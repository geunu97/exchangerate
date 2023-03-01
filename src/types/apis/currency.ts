export interface getConvertedCurrencyType {
  (baseCode: string, targetCode: string, baseAmount: string): Promise<number>;
}
