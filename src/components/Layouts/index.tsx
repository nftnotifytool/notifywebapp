import {FC, useState} from "react";
import { useSelector } from "react-redux";
import { Layout, Row, Col } from "antd";

import MenuHeader from "./header";
import MenuFooter from "./footer";
import Sidebar from "./sidebar";

const { Content } = Layout;

const Layouts: FC<any> = (props) => {
  const { children } = props;

  const [visible, setVisible] = useState(false);
  const customise = useSelector((state: any) => state.customise)

  return (
    <div>
      <Layout className="hp-app-layout">
        <Sidebar visible={visible} setVisible={setVisible} />
        <Layout className="hp-bg-black-20 hp-bg-color-dark-90">
          <MenuHeader setVisible={setVisible} />
          <Content className="hp-content-main">
            <Row justify="center">
              {
                customise.contentWidth === "full" && (
                  <Col xl={22} span={24}>
                    {children}
                  </Col>
                )
              }
              {
                customise.contentWidth === "boxed" && (
                  <Col className="hp-w-100" style={{ maxWidth: 936 }}>
                    {children}
                  </Col>
                )
              }
            </Row>
          </Content>
          <MenuFooter />
        </Layout>
      </Layout>
    </div>
  )
}

export default Layouts;