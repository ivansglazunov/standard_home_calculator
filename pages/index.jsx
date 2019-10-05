import React, { useState } from 'react';
import _ from 'lodash';

import { useTranslation } from '../imports/i18n';

import { useUrlState } from '../imports/packages/use-url-state';
import { wrapPage } from '../imports/wrap-page';
import { TextField, makeStyles, Grid } from '@material-ui/core';

import LinearProgress from '@material-ui/core/LinearProgress';

import {
  FormatPaint,
  HowToVote,
  ShowChart,
  Speed,
  AccessTime,
} from '@material-ui/icons';

const useBodyStyle = makeStyles(() => ({
  root: {
    padding: 16,
    margin: '0 auto',
    maxWidth: 500,
  },
}));

const Body = ({ children }) => {
  const classes = useBodyStyle();
  return <div className={classes.root}>{children}</div>;
};

const defaultInput = {
  plainMonthPrice: 50000,
  firstRepair: 150000,
  minPeriodCash: 300000,
  maxMonthRate: 50000,
  period: 24,
  beforeRepare: 15000,
  afterRepare: 5000,
  countTenants: 2,
  manualPercentage: 0,
};

export default wrapPage(() => {
  const { t } = useTranslation();
  const [urlInput, setUrlInput] = useUrlState('input', defaultInput);

  const [stateInput, setStateInput] = useState(
    _.merge({}, defaultInput, urlInput),
  );

  const {
    plainMonthPrice,
    firstRepair,
    minPeriodCash,
    maxMonthRate,
    period,
    beforeRepare,
    afterRepare,
    countTenants,
    manualPercentage,
  } = stateInput;

  const setInput = input => {
    setStateInput({ ...stateInput, ...input });
    setUrlInput({ ...stateInput, ...input });
  };

  const Input = ({ name }) => {
    return (
      <TextField
        label={t(name)}
        fullWidth
        type="number"
        value={stateInput[name]}
        onChange={e => {
          setInput({
            [name]: +e.target.value,
          });
        }}
      />
    );
  };

  const Output = ({ label, value, ...props }) => {
    return (
      <TextField
        label={t(label)}
        fullWidth
        type="number"
        value={value}
        disabled
        {...props}
      />
    );
  };

  const repairPeriodPrice =
    firstRepair + (beforeRepare + afterRepare) * countTenants;
  const repairMonthPrice = Math.floor(repairPeriodPrice / period);
  const plainPeriodPrice = plainMonthPrice * period;
  const allPeriodPrice = repairPeriodPrice + plainPeriodPrice;
  const percentage = Math.ceil(
    manualPercentage || minPeriodCash / (allPeriodPrice / 100),
  );
  const cashPeriodPrice = (allPeriodPrice / 100) * percentage;
  const cashMonthPrice = Math.floor(cashPeriodPrice / period);
  const finalPeriodPrice = allPeriodPrice + cashPeriodPrice;
  const finalMonthPrice = Math.floor(finalPeriodPrice / period);
  const maxMonthPrice =
    finalMonthPrice > maxMonthRate ? finalMonthPrice : maxMonthRate;

  return (
    <>
      <Body>
        <Grid container spacing={3}>
          <Grid item xs={6}>
            <div style={{ textAlign: 'center' }}>
              <HowToVote />
            </div>
            {Input({ name: 'plainMonthPrice' })}
          </Grid>
          <Grid item xs={6}>
            <div style={{ textAlign: 'center' }}>
              <AccessTime />
            </div>
            {Input({ name: 'period' })}
          </Grid>
          <Grid item xs={6}>
            <div style={{ textAlign: 'center' }}>
              <FormatPaint />
            </div>
            {Input({ name: 'firstRepair' })}
            {Input({ name: 'beforeRepare' })}
            {Input({ name: 'afterRepare' })}
          </Grid>
          <Grid item xs={6}>
            <div style={{ textAlign: 'center' }}>
              <ShowChart />
            </div>
            {Input({ name: 'minPeriodCash' })}
            {Input({ name: 'maxMonthRate' })}
            {Input({ name: 'countTenants' })}
            {Input({ name: 'manualPercentage' })}
          </Grid>
          <Grid item xs={12}>
            <Grid container justify="flex-end" alignItems="center">
              <Grid item xs={4}>
                <HowToVote />
              </Grid>
              <Grid item xs={4}>
                {Output({
                  label: 'plainMonthPrice',
                  value: plainMonthPrice,
                })}
              </Grid>
              <Grid item xs={4}>
                {Output({
                  label: 'plainPeriodPrice',
                  value: plainPeriodPrice,
                })}
              </Grid>
            </Grid>
            <LinearProgress
              variant="determinate"
              value={plainPeriodPrice / (finalPeriodPrice / 100)}
            />
          </Grid>
          <Grid item xs={12}>
            <Grid container justify="flex-end" alignItems="center">
              <Grid item xs={4}>
                <FormatPaint />
              </Grid>
              <Grid item xs={4}>
                {Output({
                  label: 'repairMonthPrice',
                  value: repairMonthPrice,
                })}
              </Grid>
              <Grid item xs={4}>
                {Output({
                  label: 'repairPeriodPrice',
                  value: repairPeriodPrice,
                })}
              </Grid>
            </Grid>
            <LinearProgress
              variant="determinate"
              value={repairPeriodPrice / (finalPeriodPrice / 100)}
            />
          </Grid>
          <Grid item xs={12}>
            <Grid container justify="flex-end" alignItems="center">
              <Grid item xs={2}>
                <ShowChart />
              </Grid>
              <Grid item xs={2}>
                {Output({
                  label: 'percentage',
                  value: percentage,
                  error: percentage > 100,
                })}
              </Grid>
              <Grid item xs={4}>
                {Output({
                  label: 'cashMonthPrice',
                  value: cashMonthPrice,
                })}
              </Grid>
              <Grid item xs={4}>
                {Output({
                  label: 'cashPeriodPrice',
                  value: cashPeriodPrice,
                })}
              </Grid>
            </Grid>
            <LinearProgress
              variant="determinate"
              value={cashPeriodPrice / (finalPeriodPrice / 100)}
            />
          </Grid>
          <Grid item xs={12}>
            <Grid container justify="flex-end" alignItems="center">
              <Grid item xs={4}>
                <Speed />
              </Grid>
              <Grid item xs={4}>
                {Output({
                  label: 'finalMonthPrice',
                  value: finalMonthPrice,
                })}
              </Grid>
              <Grid item xs={4}>
                {Output({
                  label: 'maxMonthRate',
                  value: maxMonthRate,
                })}
              </Grid>
            </Grid>
            <LinearProgress
              variant="determinate"
              value={finalMonthPrice / (maxMonthPrice / 100)}
            />
            <LinearProgress
              variant="determinate"
              color="secondary"
              value={maxMonthRate / (maxMonthPrice / 100)}
            />
          </Grid>
        </Grid>
      </Body>
    </>
  );
});
