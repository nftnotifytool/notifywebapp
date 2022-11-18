import NftItem from "./nftItem";
import {Col, Row} from "antd";

export default function NftList(prop: any) {
  const { items } = prop;
  return (
    <Row gutter={[32, 32]}>
      {
        items.map((item: any, index: number) => (
          <Col md={8} span={24} className="hp-p-16" key={index}>
            <NftItem item={item} />
          </Col>)
        )
      }
    </Row>
  )
}