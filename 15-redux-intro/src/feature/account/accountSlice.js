const initialStateAccount = {
  balance: 0,
  loan: 0,
  loanPurpose: "",
};

export default function accountReducer(state = initialStateAccount, action) {
  switch (action.type) {
    case "account/deposit":
      return { ...state, balance: Number(state.balance + action.payload) };
    case "account/withdraw":
      return { ...state, balance: Number(state.balance - action.payload) };
    case "account/requestLoan":
      if (state.loan > 0) return state;
      return {
        ...state,
        loan: action.payload.ammount,
        loanPurpose: action.payload.purpose,
        balance: state.balance + action.payload.ammount,
      };
    case "account/payLoan":
      return {
        ...state,
        loan: 0,
        loanPurpose: "",
        balance: state.balance - state.loan,
      };
    default:
      return state;
  }
}

export function deposit(ammount) {
  return { type: "account/deposit", payload: ammount };
}

export function withdraw(ammount) {
  return { type: "account/withdraw", payload: ammount };
}

export function requestLoan(ammount, purpose) {
  return { type: "account/requestLoan", payload: { ammount, purpose } };
}

export function payLoan() {
  return { type: "account/payLoan" };
}
