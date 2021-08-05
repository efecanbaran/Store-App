import StoreContextProvider from './context/StoreContextProvider';
import Store from './components/Store';

function App() {
  return (
    <div>
      <StoreContextProvider>
        <Store />
      </StoreContextProvider>
    </div>
  );
}

export default App;
