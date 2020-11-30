import React, { FC } from "react";
import { PageHeader, Layout } from "antd";
import { HashRouter } from "react-router-dom";
import Main from "./routes";
import "./App.css";
import Container from "./components/Container";

const { Footer, Content } = Layout;

const App: FC = () => (
  <Layout>
    <PageHeader title="Bzz time Template" />
    <HashRouter>
      <Content>
        <Container>
          <Main />
        </Container>
      </Content>
    </HashRouter>
    <Footer className="footer">
      Copyright © 2020 @chaos2171053@gmail.com All rights reserved. Based on
      Antd.
    </Footer>
  </Layout>
);

export default App;
