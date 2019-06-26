const a = 0;
const b = 0;

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

// no-for-test
for (var i = 0; i < 10; i++) {
  console.log();
}

// no-no-return
function test() {
  console.log();
}
test2 = () => {
  console.log();
};
