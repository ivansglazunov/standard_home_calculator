import React, { useState, useContext } from 'react';
import _ from 'lodash';
import 'date-fns';

import { useTranslation } from '../imports/i18n';

import { useUrlState } from '../imports/packages/use-url-state';
import { wrapPage } from '../imports/wrap-page';
import { CalcProvider, CalcContext } from '../imports/project/calc';

import { TextField, makeStyles, Grid, LinearProgress, Slider, InputAdornment, FormHelperText, Typography } from '@material-ui/core';
import {
  FormatPaint,
  HowToVote,
  ShowChart,
  Speed,
  AccessTime,
} from '@material-ui/icons';
import MomentUtils from '@date-io/moment';
import {
  MuiPickersUtilsProvider,
  KeyboardTimePicker,
  KeyboardDatePicker,
} from '@material-ui/pickers';

const Body = ({ children }) => {
  return <Grid container justify="center" alignItems="center">
    <Grid item xs={12}>
      {children}
    </Grid>
  </Grid>;
};

const ItemRangeInput = ({
  context = CalcContext,
  label,
  padding = 16,
  background = '#76a5af',
  end = <></>,
  min = 1,
  max = 100,
  helperText = null,
  ...props
}) => {
  const { t } = useTranslation();
  const { state, values, setState } = useContext(context);

  return <Grid item {...props} style={{ padding, background }}>
    <div style={{ position: 'relative' }}>
      <TextField
        label={t(label)}
        type="number"
        value={+values[label]}
        onChange={(e) => {
          const v = +e.target.value;
          setState({ ...state, [label]: +v });
        }}
        variant="standard"
        fullWidth
        InputProps={{
          endAdornment: <InputAdornment position="end">{end}</InputAdornment>,
        }}
        helperText={helperText}
      />
      <Slider
        value={+values[label]}
        onChange={(e, v) => {
          setState({ ...state, [label]: +v });
        }}
        step={1}
        min={min}
        max={max}
        style={{
          position: 'absolute',
          width: '100%',
          left: 0,
          top: 38,
        }}
      />
    </div>
  </Grid>
};

const ItemDateInput = ({
  context = CalcContext,
  label,
  padding = 16,
  background = '#76a5af',
  ...props
}) => {
  const { t } = useTranslation();
  const { state, values, setState } = useContext(context);

  return <Grid item {...props} style={{ padding, position: 'relative', background }}>
    <KeyboardDatePicker
      variant="inline"
      format="MM/DD/YYYY"
      margin="normal"
      label={t(label)}
      fullWidth
      value={new Date(values[label])}
      onChange={(date) => {
        setState({ ...state, [label]: date.valueOf() });
      }}
    />
  </Grid>
};

const ItemTextInput = ({
  context = CalcContext,
  title,
  description,
  padding = 16,
  background = '#76a5af',
  ...props
}) => {
  const { t } = useTranslation();
  const { state, values, setState } = useContext(context);

  return <Grid item {...props} style={{ padding, position: 'relative', background }}>
    <Typography variant="caption" style={{ opacity: 0.5 }}>
      {title}
    </Typography>
    <Typography variant="body2">
      {description}
    </Typography>
  </Grid>
};

const ItemChildren = ({
  context = CalcContext,
  padding = 16,
  background = '#76a5af',
  children,
  ...props
}) => {
  const { t } = useTranslation();
  const { state, values, setState } = useContext(context);

  return <Grid item {...props} style={{ padding, position: 'relative', background }}>
    <div style={{ position: 'relative' }}>
      {children}
    </div>
  </Grid>
};

const Divider = () => {
  return <Grid item xs={12} style={{
    height: 4,
    background: 'black',
  }}/>;
};

const Progress = ({
  background = '#000',
  width = '100%',
  label = '',
  labelDir = 'top',
}) => {
  return <div style={{
    display: 'inline-block',
    height: 20,
    background,
    width,
    position: 'relative',
  }}>
  </div>;
};

const Form = ({
  context = CalcContext,
}) => {
  const { t } = useTranslation();
  const { state, values: v, setState } = useContext(context);
  
  return (
    <>
      <Body>
        <Grid container>
          <ItemTextInput
            xs={12}
            background={'#fff'}
            title={<></>}
            description={t('calculatorForPartner')}
          />
          <Divider/>
          <ItemRangeInput
            label="ownerMonths"
            xs={6} md={3}
            background={'#76a5af'}
            end={<>{t('m.')}</>}
            min={6}
            max={36}
          />
          <ItemDateInput
            label="startDate"
            xs={6} md={3}
            background={'#8ea3c4'}
          />
          <ItemRangeInput
            label="plainMonthPrice"
            xs={6} md={3}
            background={'#ffe599'}
            end={<>{t('r.')}/{t('m.')}</>}
            min={1}
            max={100000}
            helperText={<>
              {t('plainPeriodPrice')} {+v.plainPeriodPrice}{t('r.')}
            </>}
          />
          <ItemRangeInput
            label="liquidMonthPrice"
            xs={6} md={3}
            background={'#deaaaa'}
            end={<>{t('r.')}/{t('m.')}</>}
            min={1}
            max={100000}
          />
          <ItemRangeInput
            label="firstRepair"
            xs={12} md={4}
            background={'#c9daf8'}
            end={<>{t('r.')}</>}
            min={1}
            max={700000}
            helperText={t('fromMeasurer')}
          />
          <ItemRangeInput
            label="beforeRepare"
            xs={6} md={4}
            background={'#c9daf8'}
            end={<>{t('r.')}</>}
            min={1}
            max={400000}
            helperText={t('fromMeasurer')}
          />
          <ItemRangeInput
            label="afterRepare"
            xs={6} md={4}
            background={'#c9daf8'}
            end={<>{t('r.')}</>}
            min={1}
            max={400000}
            helperText={t('fromMeasurer')}
          />
          <ItemTextInput
            xs={6} md={3}
            background={'#6fa8dc'}
            title={t('repairPeriodPrice')}
            description={<>{+v.repairPeriodPrice} {t('r.')}</>}
          />
          <ItemTextInput
            xs={6} md={3}
            background={'#a4c2f4'}
            title={t('repairMonthPrice')}
            description={<>{+v.repairMonthPrice} {t('r.')}/{t('m.')}</>}
          />
          <ItemTextInput
            xs={6} md={3}
            background={'#93c47d'}
            title={t('basePeriodSum')}
            description={<>{+v.basePeriodSum} {t('r.')}</>}
          />
          <ItemTextInput
            xs={6} md={3}
            background={'#b6d7a8'}
            title={t('baseMonthSum')}
            description={<>{+v.baseMonthSum} {t('r.')}/{t('m.')}</>}
          />
          <ItemRangeInput
            label="minMonthCash"
            xs={6} md={4}
            background={'#9fff73'}
            end={<>{t('r.')}/{t('m.')}</>}
            min={1}
            max={400000}
            helperText={<>
              {t('minMonthCashPercent')} {+v.minMonthCashPercent}{t('%')}
            </>}
          />
          <ItemRangeInput
            label="minPercent"
            xs={6} md={4}
            background={'#9fff73'}
            end={<>{t('%')}</>}
            min={1}
            max={100}
            helperText={<>
              {t('minPercentCash')} {+v.minPercentCash}{t('r.')}
            </>}
          />
          <ItemTextInput
            xs={12} md={4}
            background={'#50ff00'}
            title={t('percent')}
            description={<>{+v.percent} {t('%')}</>}
          />
          <Divider/>
          <ItemTextInput
            xs={6}
            background={'#67da8b'}
            title={t('cashPeriod')}
            description={<>{+v.cashPeriod} {t('r.')}</>}
          />
          <ItemTextInput
            xs={6}
            background={'#89eda8'}
            title={t('cashMonth')}
            description={<>{+v.cashMonth} {t('r.')}/{t('m.')}</>}
          />
          <Divider/>
          <ItemTextInput
            xs={4}
            background={'#e06666'}
            title={t('sumPeriod')}
            description={<>{+v.sumPeriod} {t('r.')}</>}
          />
          <ItemTextInput
            xs={4}
            background={'#ea9999'}
            title={t('sumMonth')}
            description={<>{+v.sumMonth} {t('r.')}/{t('m.')}</>}
          />
          <ItemRangeInput
            label="bankPercent"
            xs={4}
            background={'#ff93ff'}
            end={<>{t('%')}</>}
            min={1}
            max={100}
            helperText={<>
              <div>{t('sumPeriodBank')} {+v.sumPeriodBank}{t('r.')}/{t('m.')}</div>
              <div>{t('sumMonthBank')} {+v.sumMonthBank}{t('r.')}/{t('m.')}</div>
            </>}
          />
          <ItemRangeInput
            label="tax"
            xs={6}
            background={'#935b22'}
            end={<>{t('%')}</>}
            min={1}
            max={100}
            helperText={<>
              <div>{t('taxPeriod')} {+v.taxPeriod}{t('r.')}</div>
              <div>{t('taxMonth')} {+v.taxMonth}{t('r.')}/{t('m.')}</div>
            </>}
          />
          <ItemRangeInput
            label="rollback"
            xs={6}
            background={'#ba5353'}
            end={<>{t('%')}</>}
            min={1}
            max={100}
            helperText={<>
              <div>{t('rollbackPeriod')} {+v.rollbackPeriod}{t('r.')}</div>
              <div>{t('rollbackMonth')} {+v.rollbackMonth}{t('r.')}/{t('m.')}</div>
            </>}
          />
          <Divider/>
          <ItemTextInput
            xs={6}
            background={'#a97d7d'}
            title={t('minusPeriod')}
            description={<>{+v.minusPeriod} {t('r.')}</>}
          />
          <ItemTextInput
            xs={6}
            background={'#c39a9a'}
            title={t('minusMonth')}
            description={<>{+v.minusMonth} {t('r.')}/{t('m.')}</>}
          />
          <Divider/>
          <ItemTextInput
            xs={6}
            background={'#c3ac57'}
            title={t('liveCashPeriod')}
            description={<>{+v.liveCashPeriod} {t('r.')}</>}
          />
          <ItemTextInput
            xs={6}
            background={'#dfc76a'}
            title={t('liveCashMonth')}
            description={<>{+v.liveCashMonth} {t('r.')}/{t('m.')}</>}
          />
          <Divider/>
          <ItemRangeInput
            label="agentFixPeriod"
            xs={4}
            background={'#b1b200'}
            end={<>{t('r.')}</>}
            min={1}
            max={100000}
          />
          <ItemRangeInput
            label="partnersFixPeriod"
            xs={4}
            background={'#ffff00'}
            end={<>{t('r.')}</>}
            min={1}
            max={300000}
          />
          <ItemTextInput
            xs={4}
            background={'#ff9f00'}
            title={t('fundedLiveCashPeriod')}
            description={<>{+v.fundedLiveCashPeriod} {t('r.')}</>}
          />
          <ItemTextInput
            xs={12}
            background={'#fff'}
            title={<></>}
            description={t('partsCash')}
          />
          <ItemChildren
            xs={12}
            background={'#fff'}
          >
            <Progress background={'#b1b200'} width={`${(+v.agentFixPeriod) / ((+v.liveCashPeriod) / 100)}%`}/>
            <Progress background={'#ffff00'} width={`${(+v.partnersFixPeriod) / ((+v.liveCashPeriod) / 100)}%`}/>
            <Progress background={'#ff9f00'} width={`${(+v.fundedLiveCashPeriod) / ((+v.liveCashPeriod) / 100)}%`}/>
          </ItemChildren>
          <ItemTextInput
            xs={12}
            background={'#fff'}
            title={<></>}
            description={t('totalSum')}
          />
          <ItemChildren
            xs={12}
            background={'#fff'}
          >
            <Progress background={'#e06666'} width={'100%'}/>
            <Progress background={'#6fa8dc'} width={`${(+v.repairPeriodPrice) / ((+v.sumPeriod) / 100)}%`}/>
            <Progress background={'#ffd966'} width={`${(+v.plainPeriodPrice) / ((+v.sumPeriod) / 100)}%`}/>
            
            <Progress background={'#935b22'} width={`${(+v.taxPeriod) / ((+v.sumPeriod) / 100)}%`}/>
            <Progress background={'#ba5353'} width={`${(+v.rollbackPeriod) / ((+v.sumPeriod) / 100)}%`}/>
            
            <Progress background={'#b1b200'} width={`${(+v.agentFixPeriod) / ((+v.sumPeriod) / 100)}%`}/>
            <Progress background={'#ffff00'} width={`${(+v.partnersFixPeriod) / ((+v.sumPeriod) / 100)}%`}/>
            <Progress background={'#ff9f00'} width={`${(+v.fundedLiveCashPeriod) / ((+v.sumPeriod) / 100)}%`}/>
          </ItemChildren>
          <Divider/>
        </Grid>
      </Body>
    </>
  );
};

export default wrapPage(() => {
  return (
    <>
      <MuiPickersUtilsProvider utils={MomentUtils}>
        <CalcProvider>
          <Form/>
        </CalcProvider>
      </MuiPickersUtilsProvider>
    </>
  );
});
