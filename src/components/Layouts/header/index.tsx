import { Button, Col, Input, Row } from "antd";
import { SearchNormal1 } from "iconsax-react";
import { FC, useRef, useState } from "react";
import { RiCloseLine } from "react-icons/ri";
import HeaderSearch from "./headerSearch";

const MenuHeader: FC<any> = () => {
  const { Search } = Input;
  const onSubmitChangeWallet = (e: any) => {
    const wallet = e.target.value;
    window.location.href = '/aptos/' + wallet;
  }
  return (
    <div style={{ marginLeft: 16, marginRight: 16 }}>
      <Row
          className="hp-w-100 hp-position-relative hp-p-16"
          
          justify="center"
        >
        <Col
          xl={22} span={24}
          style={{ display: 'block'}}
          className={`hp-mr-md-0 hp-mr-16 hp-pr-0 hp-header-search hp-header-search-active`}
        >
          <HeaderSearch onPressEnter={onSubmitChangeWallet} />
        </Col>
      </Row>
    </div>
    
  )
}

export default MenuHeader;