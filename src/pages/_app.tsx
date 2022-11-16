import type { AppProps } from 'next/app'
import Layouts from "../components/Layouts";
import {Provider} from "react-redux";
import store from "../redux/store";
import "antd/dist/antd.css";
import '../styles/globals.css'

export default function App({ Component, pageProps }: AppProps) {
  return (
      <Provider store={store} >
        <Layouts>
          <Component {...pageProps} />
        </Layouts>
      </Provider>
  )
}
