import { Col, Row } from "antd";
import { LoadingItem } from "./loadingItem";

export default function NftsLoading() {
  return (
    <Row gutter={[32, 32]}>
      {
        [1,2,3,4,5,6].map((item: any, index: number) => (
          <Col md={8} span={24} className="hp-p-16" key={index}>
            <LoadingItem />
          </Col>)
        )
      }
    </Row>
  )
};