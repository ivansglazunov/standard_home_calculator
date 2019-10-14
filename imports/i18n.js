import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import moment from 'moment';
import 'moment/locale/ru';

const resources = {
  ru: {
    translation: {
      ownerMonths: 'длительность',
      startDate: 'дата начало',
      plainMonthPrice: 'владельцу/за месяц',
      plainPeriodPrice: 'владельцу/за договор',
      liquidMonthPrice: 'ликвидная цена',
      firstRepair: 'стоимость начального ремонта',
      beforeRepare: 'подготовка к жельцу',
      afterRepare: 'подготовка после жильца',
      repairPeriodPrice: 'подготовка за договор',
      repairMonthPrice: 'подготовка в месяц (примерно)',
      costPeriodPrice: 'траты по договору',
      basePeriodSum: 'базовая сумма съема за договор',
      baseMonthSum: 'базовая сумма съема в месяц',
      minMonthCash: 'минимальный доход с договора',
      minPercent: 'минимальный процент дохода от базовой суммы',
      minMonthCashPercent: 'доход по минимальному проценту',
      minPercentCash: 'процент по минимальному доходу',
      percent: 'итоговый наибольший процент дохода',
      cashPeriod: 'доход за весь договор',
      cashMonth: 'доход в месяц',
      sumPeriod: 'сумма съема за договор',
      sumMonth: 'сумма съема за месяц',
      bankPercent: 'процент банка',
      sumPeriodBank: 'сумма съема в рассрочку за договор',
      sumMonthBank: 'сумма съема в рассрочку в месяц',
      tax: 'налоги',
      taxPeriod: 'налоги на договор',
      taxMonth: 'налоги в месяц',
      rollback: 'откаты',
      rollbackPeriod: 'откаты на договор',
      rollbackMonth: 'откаты в месяц',
      minusPeriod: 'итого трат за договор',
      minusMonth: 'итого трат в месяц',
      liveCashPeriod: 'итого доход с договора',
      liveCashMonth: 'итого доход за месяц',
      agentFixPeriod: 'фикс агенту за договор',
      partnersFixPeriod: 'фикс партнерам за договор',
      fundedLiveCashPeriod: 'оставшаяся сумма на развитие',

      calculatorForPartner: 'калькулятор для партнера',
      fromMeasurer: 'устанавливает замерщик',
      partsCash: 'доли прибыли',
      totalSum: 'доли оборота',
    },
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: 'ru',

  keySeparator: false,

  interpolation: {
    escapeValue: false,
  },
});

export default i18n;

export { useTranslation } from 'react-i18next';
