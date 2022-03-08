const p1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log('p1 start');
    resolve('one');
    console.log('p1 done');
  }, 500);
});

const p2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log('p2 start');
    resolve('two');
    console.log('p2 done');
  }, 100);
});

Promise.race([p1, p2]).then((res) => {
  console.log(res);
});

export {}; // Cannot redeclare block-scoped variable 'p2'.

/**
 * Promise 对象是由关键字 new 及其构造函数来创建的。
 * 该构造函数会把一个叫做“处理器函数”（executor function）的函数作为它的参数。
 * 这个“处理器函数”接受两个函数——resolve 和 reject ——作为其参数。
 * 当异步任务顺利完成且返回结果值时，会调用 resolve 函数；而当异步任务失败且返回失败原因（通常是一个错误对象）时，会调用reject 函数。
 *
 * 一个 Promise 必然处于以下几种状态之一：
 * 待定（pending）: 初始状态，既没有被兑现，也没有被拒绝。
 * 已兑现（fulfilled）: 意味着操作成功完成。
 * 已拒绝（rejected）: 意味着操作失败。
 *
 * 如果一个 promise 已经被兑现（fulfilled）或被拒绝（rejected），那么我们也可以说它处于已敲定（settled）状态。
 * 您还会听到一个经常跟 promise 一起使用的术语：已决议（resolved），它表示 promise 已经处于已敲定(settled)状态，或者为了匹配另一个 promise 的状态被"锁定"了。
 *
 */
