import React, { createContext, useMemo } from 'react';
import { DataSet } from 'choerodon-ui/pro';
import { inject } from 'mobx-react';
import { injectIntl } from 'react-intl';
import { observer } from 'mobx-react-lite';
import ListDataSet from './ListDataSet';
import CreateDataSet from './CreateDataSet';

const Store = createContext();

export default Store;

export const StoreProvider = injectIntl(
  inject('AppState')(
    observer((props) => {
      const {
        AppState: {
          userInfo,
          communityId,
          currentMenuType: { id: organizationId },
        },
        children,
      } = props;
      const intlPrefix = 'org';
      const listDataSet = useMemo(
        () =>
          new DataSet(
            ListDataSet({
              organizationId,
              communityId,
            }),
            []
          ),
        []
      );

      const createDataSet = useMemo(
        () =>
          new DataSet(
            CreateDataSet({
              organizationId,
              communityId,
            }),
            []
          ), []
      );

      const value = {
        ...props,
        prefixCls: 'br-org',
        userInfo,
        organizationId,
        intlPrefix,
        listDataSet,
        createDataSet,
      };

      return (
        <Store.Provider value={value}>
          {children}
        </Store.Provider>
      );
    })
  )
);
