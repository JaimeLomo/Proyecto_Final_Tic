const autocannon = require('autocannon');
const fs = require('fs');

const target = process.argv[2] || 'http://localhost:3000';

autocannon({
  url: target,
  connections: 100,
  duration: 10
}, (err, result) => {
  if (err) {
    console.error('Benchmark failed:', err);
  } else {
    console.log('Benchmark completed!');
    console.log(result);

    const outputPath = `./benchmark_result_${Date.now()}.json`;
    fs.writeFileSync(outputPath, JSON.stringify(result, null, 2));
    console.log(`✅ Guardado en: ${outputPath}`);
  }
});
