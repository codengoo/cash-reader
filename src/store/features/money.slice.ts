import {createSelector, createSlice, PayloadAction} from '@reduxjs/toolkit';
import {extract} from '@src/utils';

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
}

export interface MoneyState {
  total: number;
  transaction: IMessageDetail[];
}

const initialState: MoneyState = {
  total: 0,
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
      });
      state.total += amount;
    },

    resetTransaction: state => {
      state.total = 0;
      state.transaction = [];
    },
  },
  selectors: {
    selectTotalMoney: state => state.total,
    selectTransaction: state => state.transaction,
    selectNumberTransaction: state => state.transaction.length,
  },
});

export const {addTransaction, resetTransaction} = moneySlice.actions;
export const {selectTransaction, selectNumberTransaction, selectTotalMoney} =
  moneySlice.selectors;

export const selectMostRecentTransactions = createSelector(
  [moneySlice.selectors.selectTransaction],
  trans =>
    trans.filter(t => {
      return Date.now() - Number(t.date) <= space;
    }),
);

export const selectRecentTransactions = createSelector(
  [moneySlice.selectors.selectTransaction],
  trans =>
    trans.filter(t => {
      return Date.now() - Number(t.date) > space;
    }),
);

export default moneySlice.reducer;
