import globals from 'globals'

import base from './base.js'

const nodeConfig = {
  name: 'wooden-script/node',
  languageOptions: {
    globals: {
      ...globals.node,
    },
  },
}

export default [...base, nodeConfig]
