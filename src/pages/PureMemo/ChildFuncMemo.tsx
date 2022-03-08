import { memo } from 'react';

let cnt = 0;

const ChildFuncMemo = () => {
  cnt = cnt + 1;

  return <p>函数组件发生渲染次数: {cnt}</p>;
};

export default memo(ChildFuncMemo);
