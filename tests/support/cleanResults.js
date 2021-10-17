const { removeSync } = require('fs-extra');
path = require('path');
removeSync(path.join(process.cwd(), 'reports/output'));