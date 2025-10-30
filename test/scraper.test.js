const { execSync } = require('child_process');

test('Scraper runs without crashing', () => {
  execSync('node run.js', { stdio: 'inherit' });
});
