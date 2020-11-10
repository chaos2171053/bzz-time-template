import React, { useContext } from 'react';
import { Content } from '@buildrun/boot';
import { observer } from 'mobx-react-lite';
import {
  Table,
  Form,
} from 'choerodon-ui/pro';
import Store from './stores';
import { renderNum } from '../../../payment-utils';
import './styles/list.less';

const { Column } = Table;

function ListView(props) {
  const context = useContext(Store);
  const {
    organizationId,
    AppState,
    listDataSet,
  } = context;

  const tableButtons = [];

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
