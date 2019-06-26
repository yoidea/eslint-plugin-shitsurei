const a = 0;
const b = 0;
const c = [1, 2, 3];

// great-var
if (b === a) {
  console.log();
} else {
  console.log();
}

// no-break
for (;;) {
  if (0 === 0) break;
}

// no-else
if (a === a) {
  console.log();
}

// koukai
const d = c.map(v => v * v);

// no-no-return
function test() {
  console.log();
}
test2 = () => {
  console.log();
};
