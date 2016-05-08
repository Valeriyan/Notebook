'use strict';

require('file?name=index.html!./index.html');

require('./scripts/set-polyfills.js');
require('./scripts/libs/modernizr-custom.js');

import ReactDom from 'react-dom';
import React from 'react';
import {NotebookApp} from './react-components/notebook-app.js';

ReactDom.render(<NotebookApp />, document.querySelector('.content'));
