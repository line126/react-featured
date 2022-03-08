const p1 = new Promise((resolve, reject) => {
  setTimeout(reject, 500, 'one');
});

const p2 = new Promise((resolve, reject) => {
  setTimeout(reject, 100, 'two');
});

const np1 = new Promise((resolve, reject) => {
  p1.then(
    () => {
      resolve('np1 fulfilled');
    },
    () => {
      reject('np1 rejected');
    },
  );
});

const np2 = new Promise((resolve, reject) => {
  p2.then(
    () => {
      resolve('np2 fulfilled');
    },
    () => {
      reject('np2 rejected');
    },
  );
});

try {
  Promise.all([np1, np2])
    .then(
      (a) => {
        console.log('then a:', a);
      },
      (b) => {
        console.log('then b:', b);
      },
    )
    .catch((b) => {
      console.log('catch:', b);
    });
} catch (error) {
  console.log('try catch', error);
}
