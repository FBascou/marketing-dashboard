import React from 'react';
// import StackedChart from '../charts/StackedChart/StackedChart';
import './BudgetExpense.css';
import GaugeChart from '../charts/GaugeChart/GaugeChart';
import { sumValue } from '../../helpers/helpers';

const BudgetExpense = ({ data, colorPrimary, colorSecondary }) => {
  const colors = { Budget: 'dodgerblue', Expense: 'purple' };
  const budgetSum = sumValue(data, 'budgetTotal');
  const expenseSum = sumValue(data, 'expenseTotal');

  const value = expenseSum;
  const min = 0;
  const max = budgetSum;
  const label = (expenseSum / budgetSum) * 100;
  const units = 'Expense';

  return (
    <div className="budget-expense-container">
      {/* <h2>Budget & Expense</h2> */}
      <div className="budget-expense-info">
        <div className="budget-expense-chart">
          {/* <StackedChart data={data} legendKeys={legendKeys} colors={colors} /> */}
          <GaugeChart
            value={value}
            min={min}
            max={max}
            label={label}
            colorPrimary={colorPrimary}
            colorSecondary={colorSecondary}
            // units={units}
          />
        </div>
        <div className="budget-expense-overview">
          <div className="budget-expense-total">
            <h2>Expense</h2>
            <p>${expenseSum.toLocaleString('en')}</p>
          </div>
          <div className="budget-expense-total">
            <h2>Budget</h2>
            <p>${budgetSum.toLocaleString('en')}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BudgetExpense;
