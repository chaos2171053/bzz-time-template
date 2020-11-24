import React, { FC } from 'react';
import { PageHeader,Layout } from 'antd';
import GenerateForm from './components/GenerateForm'
import './App.css';

const {  Footer,  Content } = Layout;


const App: FC = () => (
    <Layout>
      <PageHeader title="Bzz time Template"/>
      <Content> 
        <GenerateForm/>
      </Content>
      <Footer>
       Copyright © 2020 @chaos2171053@gmail.com All rights reserved. Based on Antd.
      </Footer>
    </Layout>
);

export default App;