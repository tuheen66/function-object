function cmToM(cm) {
  const meter = cm / 100;
  return meter;
}

const totalMeter = cmToM(1000);
console.log(totalMeter);
