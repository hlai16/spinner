const spins = ['|', '/', '-', '\\', '|'];

let delay = 0;

for (const spin of spins) {
  setTimeout(() => {
    process.stdout.write(spin + '\r'), delay;
  },
      
  delay += 100);
}

