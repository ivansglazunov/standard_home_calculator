import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import moment from 'moment';
import 'moment/locale/ru';

const resources = {
  ru: {
    translation: {
      plainMonthPrice: 'Рента/мес',
      firstRepair: 'Начальный ремонт',
      minPeriodCash: 'Доход/договора',
      maxMonthRate: 'Ликвидно/мес',
      period: 'Длительность договора',
      beforeRepare: 'Подготовительный ремонт',
      afterRepare: 'Чистка после',
      countTenants: 'Жильцов/договор',
      manualPercentage: 'Вручную установленный %',
      repairPeriodPrice: 'Ремонт/договор',
      repairMonthPrice: 'Ремонт/мес',
      plainPeriodPrice: 'Рента/договор',
      allPeriodPrice: 'Расходы/договор',
      percentage: 'Процент',
      cashPeriodPrice: 'Доход/договор',
      cashMonthPrice: 'Доход/мес',
      finalPeriodPrice: 'Цена/договор',
      finalMonthPrice: 'Цена/мес',
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
