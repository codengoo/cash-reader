import {createSelector, createSlice, PayloadAction} from '@reduxjs/toolkit';
import {extract} from '@src/utils';
import {isToday} from 'date-fns';

export interface IMessage {
  address: string;
  body: string;
  date: number;
}

export interface IMessageDetail {
  date: number;
  address: string;
  body: string;
  name: string;
  amount: number;
  id: string;
}

export interface ISummary {
  total: number;
  count: number;
}

export interface MoneyState {
  transaction: IMessageDetail[];
}

const initialState: MoneyState = {
  transaction: [],
};

// const space = 2 * 1000;
const space = 10 * 60 * 1000; // 10 minutes

export const moneySlice = createSlice({
  name: 'money',
  initialState,
  reducers: {
    addTransaction: (state, payload: PayloadAction<IMessage>) => {
      const {amount, name = 'Vô danh'} = extract(payload.payload.body);
      const {address, body, date} = payload.payload;

      state.transaction.push({
        address,
        body,
        date,
        amount,
        name: name,
        id: date.toString(),
      });
    },

    resetTransaction: state => {
      state.transaction = [];
    },
  },
  selectors: {
    selectTransaction: state => state.transaction,
  },
});

export const {addTransaction, resetTransaction} = moneySlice.actions;
export const {selectTransaction} = moneySlice.selectors;

export const selectMostRecentTransactions = createSelector(
  [moneySlice.selectors.selectTransaction],
  trans =>{
    const tmp = trans.filter(t => {
      return Date.now() - Number(t.date) <= space;
    });
    return [...tmp].reverse();
  }
    
);

export const selectRecentTransactions = createSelector(
  [moneySlice.selectors.selectTransaction],
  trans => {
    const tmp = trans.filter(t => {
      return Date.now() - Number(t.date) > space;
    });

    return [...tmp].reverse();
  }
    
);

export const selectTodaySummary = createSelector(
  [moneySlice.selectors.selectTransaction],
  trans => {
    const _trans = trans.filter(t => {
      const date = new Date(t.date);
      return isToday(date);
    });

    const total = _trans.reduce((acc, curr) => acc + curr.amount, 0);

    return {
      total,
      count: _trans.length,
    };
  },
);

export const selectTotalSummary = createSelector(
  [moneySlice.selectors.selectTransaction],
  trans => {
    const total = trans.reduce((acc, curr) => acc + curr.amount, 0);

    return {
      total,
      count: trans.length,
    };
  },
);

export const selectMessage = (id: string) =>
  createSelector([moneySlice.selectors.selectTransaction], trans => {
    return trans.find(tran => tran.id === id);
  });

export default moneySlice.reducer;
