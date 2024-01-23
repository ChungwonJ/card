import Header from '@/componenents/Header'
import '@/styles/globals.scss'
import { Provider } from 'react-redux';
import store from '@/redux/store';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function App({ Component, pageProps }) {
  return (
    <>
      <Provider store={store}>
        <Header/>
        <Component {...pageProps} />
      </Provider>
    </>
    )
}
