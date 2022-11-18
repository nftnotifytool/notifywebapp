/* eslint-disable @next/next/no-img-element */
import { useRouter } from "next/router";
import React, { useState, useEffect } from 'react'

import { Row, Col, Button, Card, Rate, Divider, InputNumber, Tag } from "antd";
import { RiArrowRightUpLine, RiShoppingBagLine, RiTruckLine, RiCheckboxCircleLine, RiShieldLine, RiTimeLine, RiArrowLeftSLine, RiArrowRightSLine } from "react-icons/ri";

export default function NftsAptosTokenPage() {
  const router = useRouter();
  const { token } = router.query;
  const value = {
    title: 'hello hello hello',
    person: 'APTOS',
  };
  return (
    <>
      <Col span={24}>
        <Card className="hp-border-color-black-40">
          <Row>
            <Tag className="hp-position-absolute-top-left hp-z-index hp-m-sm-16 hp-m-32 hp-border-none hp-py-4 hp-font-weight-500" color="blue">
              NFT
            </Tag>
            <Col lg={12} span={24} className="hp-ecommerce-app-detail-slider hp-mt-sm-24 hp-mb-md-64 hp-mb-md-32">
              <div className="app-detail-nft-item hp-text-center">
                <img src="https://bafybeidqqrmuogwmh5imqes34zvdc5okts2xsfj6fszxe6mfiihjtodoju.ipfs.nftstorage.link/2624.png" alt={value.title} />
              </div>
            </Col>
            <Col lg={12} span={24}>
              <h2 className="hp-mb-8">Aptos Evil Octopus</h2>
              <h3 className="hp-mb-8">Evil Octopus #2624</h3>

              <span className="hp-caption hp-d-block hp-text-color-black-60">
                Royalty 
                <span className="hp-ml-4 hp-text-color-black-80 hp-text-color-dark-30"> 9%</span>
              </span>

              <Divider />
              <Row gutter={[24, 24]}>
                <Col md={24} span={24}>
                  <div className="description hp-p-16">
                    <h4 className="title">Description</h4>
                    <div className="content">
                    20,000 next-gen Avatars, by RTFKT and Takashi Murakami 🌸

                    If you own a clone without any Murakami trait please read the terms regarding RTFKT - Owned Content here:
                    </div>
                  </div>
                </Col>
              </Row>
              <Divider />

              <Row gutter={[24, 24]}>
                <Col md={10} span={24}>
                  <Row align="middle">
                    <Col
                      className="hp-border-radius-full hp-bg-color-primary-4 hp-d-flex-full-center hp-mr-8"
                      style={{ width: 36, height: 36 }}
                    >
                      <RiShieldLine className="hp-text-color-primary-1" size={24} />
                    </Col>

                    <Col>
                      <span className="hp-d-block hp-p1-body hp-font-weight-500 hp-text-color-black-100 hp-text-color-dark-0">
                        1 Year Warranty
                      </span>

                      <span className="hp-d-block hp-input-description hp-font-weight-400 hp-text-color-black-80 hp-text-color-dark-30">
                        Lorem Ipsum Dolor Sıt Amet
                      </span>
                    </Col>
                  </Row>
                </Col>

                <Col md={10} span={24}>
                  <Row align="middle">
                    <Col
                      className="hp-border-radius-full hp-bg-color-primary-4 hp-d-flex-full-center hp-mr-8"
                      style={{ width: 36, height: 36 }}
                    >
                      <RiTimeLine className="hp-text-color-primary-1" size={24} />
                    </Col>

                    <Col>
                      <span className="hp-d-block hp-p1-body hp-font-weight-500 hp-text-color-black-100 hp-text-color-dark-0">
                        14 Days Replacement
                      </span>
                      <span className="hp-d-block hp-input-description hp-font-weight-400 hp-text-color-black-80 hp-text-color-dark-30">
                        Lorem Ipsum Dolor Sıt Amet
                      </span>
                    </Col>
                  </Row>
                </Col>
              </Row>
            </Col>
          </Row>

          <Divider />
        </Card>
      </Col>
    </>
  )
}