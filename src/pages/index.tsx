import { Cards, Footer, Header, Main, Wrapper } from 'components';
import CounterPage from 'modules/counter';
import { counterReducer } from 'modules/counter/store/redux/reducer';
import React from 'react';
import { Provider } from 'react-redux';
import { applyMiddleware, combineReducers, createStore } from 'redux';
import thunk from 'redux-thunk';
import GlobalStyle from 'styles/globalStyles';

const rootReducer = combineReducers({
  counter: counterReducer,
});
const mainStore = createStore(rootReducer, applyMiddleware(thunk));

export type AppRootState = ReturnType<typeof mainStore.getState>;

const Home: React.FC = () => {
  return (
    <Wrapper>
      <GlobalStyle />
      <Header />
      <Main />
      <Cards />
      <Footer />
      <Provider store={mainStore}>
        <CounterPage />
      </Provider>
    </Wrapper>
  );
};
export default Home;
