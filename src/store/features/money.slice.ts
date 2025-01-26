import {createSlice, PayloadAction} from '@reduxjs/toolkit';
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
  },
  selectors: {
    selectTotalMoney: state => state.total,
    selectMostRecentTransactions: state => {
      // const space = 10 * 60 * 1000;
      const space = 2 * 1000;
      return state.transaction.filter(
        trans => Date.now() - Number(trans.date) <= space,
      );
    },

    selectRecentTransactions: state => {
      // const space = 10 * 60 * 1000;
      const space = 2 * 1000;
      return state.transaction.filter(
        trans => Date.now() - Number(trans.date) >= space,
      );
    },
    selectNumberTransaction: state => state.transaction.length,
  },
});

export const {addTransaction} = moneySlice.actions;
export const {
  selectMostRecentTransactions,
  selectRecentTransactions,
  selectNumberTransaction,
  selectTotalMoney,
} = moneySlice.selectors;

export default moneySlice.reducer;
