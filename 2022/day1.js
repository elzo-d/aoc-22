
const tdata = `1000
2000
3000

4000

5000
6000

7000
8000
9000

10000`;

export function part1(data) {
  return Math.max(...data.split("\n\n").map(i => i.split("\n").map(s => +s).reduce((a, s) => a + s, 0)));
}

export function part2(data) {
  return data.split("\n\n").map(i => i.split("\n").map(s => +s).reduce((a, s) => a + s, 0)).sort((a, b) => b - a).slice(0, 3).reduce((a, s) => a + s, 0);
}
