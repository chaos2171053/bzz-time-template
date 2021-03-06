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
import {
  Popconfirm,
} from 'choerodon-ui';

import Store from './stores';
import { renderNum } from '../../../microServiceName-utils';
import useListRefresh from '../../../microServiceName-hooks/useListRefresh';
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
    communityId,
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
        <CreateModal createDataSet={createDataSet} />
      ),
      onOk() {
      },
      onClose() {
        if (createDataSet.current) {
          createDataSet.remove(createDataSet.current);
        }
      },
    });
  };
  const onClickEditBtn = () => {
    createDataSet.create();
    Modal.open({
      key: Modal.key(),
      title: '编辑',
      style: modalStyle,
      fullScreen: false,
      destroyOnClose: true,
      drawer: true,
      children: (
        <CreateModal createDataSet={createDataSet} />
      ),
      onOk() {
      },
      onClose() {
        if (createDataSet.current) {
          createDataSet.remove(createDataSet.current);
        }
      },
    });
  };
  const onClickCheckBtn = () => {
    createDataSet.create();
    Modal.open({
      key: Modal.key(),
      title: '查看',
      style: modalStyle,
      fullScreen: false,
      destroyOnClose: true,
      drawer: true,
      children: (
        <CreateModal createDataSet={createDataSet} />
      ),
      onOk() {
      },
      onClose() {
        if (createDataSet.current) {
          createDataSet.remove(createDataSet.current);
        }
      },
    });
  };

  function renderCreateBtn() {
    return (
      <Button icon="playlist_add" funcType="flat" onClick={() => { onClickAddBtn(); }}>
        添加
      </Button>
    );
  }

  const tableButtons = [
    renderCreateBtn(),
    ['query', { icon: 'refresh', children: '刷新' }]];

  const { refresh } = useListRefresh({
    listDataSet,
    communityId,
    organizationId,
  });

  function renderOperations({ record }) {
    const buttonProps = {
      color: 'primary',
      funcType: 'raised',
      size: 'small',
    };
    return (
      <>
        <Tooltip placement="bottom" title="查看">
          <Button
            {...buttonProps}
            icon="details"
            key="opt-check"
            onClick={() => {
              onClickCheckBtn();
            }}
          />
        </Tooltip>
        <Tooltip placement="bottom" title="编辑">
          <Button
            {...buttonProps}
            icon="mode_edit"
            key="opt-edit"
            onClick={() => {
              onClickEditBtn();
            }}
          />
        </Tooltip>
        <Tooltip placement="bottom" title="删除">
          <Popconfirm
            title="确认删除该优惠券?"
            okText="确认"
            cancelText="取消"
            onConfirm={async () => {
              refresh();
            }}
          >
            <Button
              {...buttonProps}
              icon="delete"
              key="opt-del"
              onClick={() => { }}
            />
          </Popconfirm>
        </Tooltip>
      </>
    );
  }

  return (
    <>
      <Content>
        <Form labelLayout="horizontal">
          <Table
            pristine
            dataSet={listDataSet}
            buttons={tableButtons}
            queryBar="normal"
            queryFieldsLimit={5}
            className="timework-table"
            key="timework-talbe"
            selectionMode="none"
          >
            <Column
              name="rowNum"
              renderer={renderNum}
              lock="left"
              align="center"
              key="rowNum"
              width={50}
            />
            {/* Column */}
            <Column
              header="操作"
              renderer={renderOperations}
              lock="right"
              align="center"
              width={180}
            />
          </Table>
        </Form>
      </Content>
    </>
  );
}
ListView.displayName = 'ListView';
export default observer(ListView);
