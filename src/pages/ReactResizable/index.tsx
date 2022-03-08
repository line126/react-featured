import React, { useMemo, useState } from 'react';
import { PageContainer } from '@ant-design/pro-layout';
import { Resizable } from 'react-resizable';
import './index.css'; // 引入css才生效

class Example extends React.Component {
  state = {
    width: 200,
    height: 200,
  };

  // On top layout
  onResize = (event, { size }) => {
    this.setState({ width: size.width, height: size.height });
  };

  render() {
    return (
      <Resizable height={this.state.height} width={this.state.width} onResize={this.onResize}>
        <div
          className="box"
          style={{
            width: this.state.width + 'px',
            height: this.state.height + 'px',
            backgroundColor: '#d9f7be',
          }}
        >
          <span>Contents</span>
        </div>
      </Resizable>
    );
  }
}

const ReactResizable: React.FC = () => {
  return (
    <PageContainer>
      <Example />
    </PageContainer>
  );
};

export default ReactResizable;
