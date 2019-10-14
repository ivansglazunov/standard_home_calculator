import moment from 'moment';
import { useState, createContext } from 'react';
import _ from 'lodash';

import { useUrlState } from '../packages/use-url-state';

export const defaultState = () => ({
  ownerMonths: 36,
  startDate: new Date().valueOf(),
  plainMonthPrice: 30000,
  liquidMonthPrice: 50000,
  firstRepair: 150000,
  beforeRepare: 10000,
  afterRepare: 10000,
  minMonthCash: 15000,
  minPercent: 20,
  bankPercent: 15,
  tax: 20,
  rollback: 20,
  agentFixPeriod: 10000,
  partnersFixPeriod: 100000,
});

const { ceil } = Math;

export const calc = (s) => {
  const r = {};
  r.ownerMonths = s.ownerMonths;
  r.startDate = s.startDate;
  r.plainMonthPrice = s.plainMonthPrice;
  r.plainPeriodPrice = ceil(r.ownerMonths * r.plainMonthPrice);
  r.liquidMonthPrice = s.liquidMonthPrice;
  r.firstRepair = s.firstRepair;
  r.beforeRepare = s.beforeRepare;
  r.afterRepare = s.afterRepare;
  r.repairPeriodPrice = r.firstRepair + r.beforeRepare + r.afterRepare;
  r.repairMonthPrice = ceil(r.repairPeriodPrice / r.ownerMonths);
  r.costPeriodPrice = r.repairPeriodPrice + r.plainPeriodPrice;
  r.basePeriodSum = r.costPeriodPrice;
  r.baseMonthSum = ceil(r.basePeriodSum / r.ownerMonths);
  r.minMonthCash = s.minMonthCash;
  r.minPercent = s.minPercent;
  r.minMonthCashPercent = ceil(r.minMonthCash / (r.baseMonthSum / 100));
  r.minPercentCash = ceil(r.minPercent * (r.baseMonthSum / 100));
  r.percent = r.minPercent > r.minMonthCashPercent ? r.minPercent : r.minMonthCashPercent;
  r.cashPeriod = ceil(r.percent * (r.basePeriodSum / 100));
  r.cashMonth = ceil(r.cashPeriod / r.ownerMonths);
  r.sumPeriod = r.cashPeriod + r.basePeriodSum;
  r.sumMonth = r.cashMonth + r.baseMonthSum;
  r.bankPercent = s.bankPercent;
  r.sumPeriodBank = r.sumPeriod + ((r.sumPeriod / 100) * r.bankPercent);
  r.sumMonthBank = r.sumMonth + ((r.sumMonth / 100) * r.bankPercent);
  r.tax = s.tax;
  r.taxPeriod = ceil((r.cashPeriod / 100) * r.tax);
  r.taxMonth = ceil(r.taxPeriod / r.ownerMonths);
  r.rollback = s.rollback;
  r.rollbackPeriod = ceil((r.cashPeriod / 100) * r.rollback);
  r.rollbackMonth = ceil(r.rollbackPeriod / r.ownerMonths);
  r.minusPeriod = r.taxPeriod + r.rollbackPeriod;
  r.minusMonth = ceil(r.minusPeriod / r.ownerMonths);
  r.liveCashPeriod = r.cashPeriod - r.minusPeriod;
  r.liveCashMonth = ceil(r.liveCashPeriod / r.ownerMonths);
  r.agentFixPeriod = s.agentFixPeriod;
  r.partnersFixPeriod = s.partnersFixPeriod;
  r.fundedLiveCashPeriod = r.liveCashPeriod - r.agentFixPeriod - r.partnersFixPeriod;
  return r;
};

export const CalcContext = createContext({});

export function useCalcState(defaultState) {
  const [state, setState] = useUrlState('calc', defaultState);
  return [_.mapValues(state, v => +v), s => setState(_.mapValues(s, v => String(v)))];
}

export const CalcProvider = ({
  context = CalcContext,
  _useCalcState = useCalcState,
  children = null,
}) => {
  const [state, setState] = _useCalcState(defaultState());

  return <context.Provider
    value={{
      state: state,
      values: calc(state),
      setState,
    }}
  >
    {children}
  </context.Provider>;
};
