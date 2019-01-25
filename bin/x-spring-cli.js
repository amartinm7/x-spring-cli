#!/usr/bin/env node

/*
in the package.json:

  "bin": {
    "say-hello": "bin/x-spring-cli.js"
  },

when we install the artifact globally we are creating the link between this file bin/x-spring-cli.js and the symbolic link
say-hello, stored in the /usr/local/bin/say-hello
In this way we can call it as
say-hello createController com.test.ContController
and it will works
*/

// only calls to the index.js
require('../index.js')
