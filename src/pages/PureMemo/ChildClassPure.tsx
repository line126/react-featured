import { PureComponent } from 'react';

let cnt = 0;

class ChildClassPure extends PureComponent {
  render() {
    cnt = cnt + 1;

    return <p>Class组件发生渲染次数: {cnt}</p>;
  }
}

export default ChildClassPure;
