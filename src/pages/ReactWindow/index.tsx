import { PageContainer } from '@ant-design/pro-layout';
import { FixedSizeList as List } from 'react-window';

import './index.css';

const Row = ({ index, style }) => (
  <div className={index % 2 ? 'ListItemOdd' : 'ListItemEven'} style={style}>
    Row {index}
  </div>
);

const Example = () => (
  <List className="List" height={150} itemCount={1000} itemSize={35} width={300}>
    {Row}
  </List>
);

const ReactWindow: React.FC = () => {
  return (
    <PageContainer>
      <Example />
    </PageContainer>
  );
};

export default ReactWindow;
