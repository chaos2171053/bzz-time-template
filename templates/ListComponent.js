import React, { useContext } from 'react';
import { Content } from '@buildrun/boot';
import { observer } from 'mobx-react-lite';
import {
  Table,
  Form,
  Tooltip,
  Button,
  Modal,
} from 'choerodon-ui/pro';
import Store from './stores';
// TODO: 把 payment 替换为 微服务名
import { renderNum } from '../../../payment-utils';
// TODO: 把 payment 替换为 微服务名,并确认有 useListRefresh 这个hook
import useListRefresh from '../../../pay-hooks/useListRefresh';
import './styles/List.less';
// TODO: 建议把 Modal 名字改得更详细易懂
import CreateModal from './modal/CreateModal';

const { Column } = Table;
const modalStyle = {
  width: '40%',
};

function renderTooltip({ value }) {
  return (
    <Tooltip placement="bottom" title={value}>
      <span>{value}</span>
    </Tooltip>
  );
}

function ListView(props) {
  const context = useContext(Store);
  const {
    organizationId,
    AppState,
    listDataSet,
    // TODO: 建议把 createDataSet 名字改得更详细易懂
    createDataSet,
  } = context;

  const onClickAddBtn = () => {
    createDataSet.create();
    Modal.open({
      key: Modal.key(),
      title: '新增',
      style: modalStyle,
      fullScreen: false,
      destroyOnClose: true,
      drawer: true,
      children: (
        <CreateModal />
      ),
      onOk() {
      },
      onClose() {
        createDataSet.reset();
      },
    });
  };

  const tableButtons = [
    [
      <Button icon="playlist_add" funcType="flat" onClick={() => { onClickAddBtn(); }}>
        添加
      </Button>,
    ],
    ['query', { icon: 'refresh', children: '刷新' }]];

  const { refresh } = useListRefresh({
    listDataSet,
    communityId: AppState.communityId,
    organizationId,
  });

  return (
    <>
      <Content>
        <Form>
          <Table
            pristine
            dataSet={listDataSet}
            buttons={tableButtons}
            queryBar="normal"
            queryFieldsLimit={5}
            className="timework-table"
            key="timework-talbe"
          >
            <Column
              width={70}
              name="rowNum"
              renderer={renderNum}
              lock="left"
              align="center"
              key="rowNum"
            />
          </Table>
        </Form>
      </Content>
    </>
  );
}
ListView.displayName = 'ListView';
export default observer(ListView);
