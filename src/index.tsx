import React, {Fragment} from 'react';
import ReactDOM from 'react-dom';

import { GlobalStyle } from './global-style';

import { Spinner } from './components/shared/spinner';
import { UploadIcon } from './components/shared/upload-icon';
import { Dropzone } from './components/shared/drop-zone';

import './index.css';

console.info(`⚛️ ${React.version}`)

const App: React.FC = () => (
  <Fragment>
    <GlobalStyle />
    {/* <Spinner /> */}
    {/* <UploadIcon/> */}
    <Dropzone text="some text gores here"/>
  </Fragment>
)

ReactDOM.render(<App />, document.getElementById('root'))

module.hot && module.hot.accept()
