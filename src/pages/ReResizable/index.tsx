import React from 'react';
import { PageContainer } from '@ant-design/pro-layout';
import { Resizable } from 're-resizable';

const style = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  border: 'solid 1px #ddd',
  background: '#f0f0f0',
} as const;

const ReResizable: React.FC = () => {
  return (
    <PageContainer>
      <div style={{ width: '100%', display: 'flex' }}>
        <Resizable
          style={style}
          maxWidth="100%"
          minWidth="1"
          defaultSize={{
            width: 200,
            height: '100%',
          }}
        >
          123
        </Resizable>
        <div style={{ ...style, width: '100%', minWidth: '1px' }}>234</div>
      </div>
    </PageContainer>
  );
};

export default ReResizable;
