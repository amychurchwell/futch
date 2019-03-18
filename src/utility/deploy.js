const ghpages = require('gh-pages');

ghpages.publish(
  'public', {
    branch: 'gh-pages',
    repo: 'https://github.com/metalcanine/fx-win32k-report.github.io.git',
  },
  (err) => {
    if (!err) {
      console.log('deployed!');
    }
    else {
      console.log(`error occurred! ${err}`);
    }
  });
