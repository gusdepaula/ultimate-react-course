import CreateCustomer from "./feature/customers/CreateCustomer";
import Customer from "./feature/customers/Customer";
import AccountOperations from "./feature/account/AccountOperations";
import BalanceDisplay from "./feature/account/BalanceDisplay";

function App() {
  return (
    <div>
      <h1>🏦 The React-Redux Bank ⚛️</h1>
      <CreateCustomer />
      <Customer />
      <AccountOperations />
      <BalanceDisplay />
    </div>
  );
}

export default App;
