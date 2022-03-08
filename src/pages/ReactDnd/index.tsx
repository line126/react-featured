import React from 'react';
import { PageContainer } from '@ant-design/pro-layout';
import { useDrag } from 'react-dnd';
import type { CSSProperties } from 'react';

const style: CSSProperties = {
  width: 200,
  height: 50,
  lineHeight: '50px',
  background: 'pink',
  margin: '30px auto',
};

const Dnd: React.FC = () => {
  const [, drager] = useDrag({
    type: 'Box',
  });

  return (
    <PageContainer>
      <div ref={drager} style={style}>
        可拖拽组件 Box
      </div>
    </PageContainer>
  );
};

export default Dnd;
