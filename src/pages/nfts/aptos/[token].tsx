/* eslint-disable @next/next/no-img-element */
import { useRouter } from "next/router";
import React, { useState, useEffect } from 'react'

import { Row, Col, Card, Divider, Tag, Button } from "antd";
import { RiAlignLeft, RiDiscordLine, RiPriceTag3Fill, RiShieldLine, RiTelegramFill, RiTelegramLine, RiTimeLine } from "react-icons/ri";
import axios from "axios";
import Head from "next/head";
import Link from "next/link";
import ErrorPage from 'next/error';

type ItemDefaultType = {
  name: string;
  collection_name: string;
  image: string;
  description: string;
  properties?: any;
  royalty_points_numerator: number;
  royalty_points_denominator: number;
  attributes: any;
  floor_price: number | null;
  total_volume: number | null;
  floor_apply: string | null;
  owners: string | null;
}

export default function NftsAptosTokenPage() {
  const router = useRouter();
  const { token } = router.query;
  const [item, setItem] = useState<ItemDefaultType | null>(null);
  const [isError, setIsError] = useState<boolean>(false);

  const royalty = (item?.royalty_points_numerator || 0) / (item?.royalty_points_denominator || 0) * 100;

  useEffect(() => {
    (async() => {
      if (token) {
        try {
          const response = await axios.get(process.env.NEXT_PUBLIC_ENDPOINT + '/v1/nfts-wallet/token/' + token);
          if (response.data) {
            setItem(response.data);
          }
        } catch (e) {
          setIsError(true);
        }
      }
    })()
  }, [token]);
  return (
    <>
      <Head>
        <title>{ item?.name }</title>
      </Head>
      {
        isError ? <ErrorPage statusCode={404} /> : (
          <Col span={24}>
            <Card className="hp-border-color-black-40">
              <Row>
                <Tag className="hp-position-absolute-top-left hp-z-index hp-m-sm-16 hp-m-32 hp-border-none hp-py-4 hp-font-weight-500" color="blue">
                  NFT
                </Tag>
                <Col lg={12} span={24} className="hp-ecommerce-app-detail-slider hp-mt-sm-24 hp-mb-md-64 hp-mb-md-32">
                  <div className="app-detail-nft-item hp-text-center">
                    <img src={ item?.image } alt={item?.name} />
                  </div>
                </Col>
                <Col lg={12} span={24}>
                  <h2 className="hp-mb-8">{ item?.collection_name }</h2>
                  <h3 className="hp-mb-8">{ item?.name }</h3>

                  <span className="hp-caption hp-d-block hp-text-color-black-60">
                    Royalty 
                    <span className="hp-ml-4 hp-text-color-black-80 hp-text-color-dark-30"> { royalty }%</span>
                  </span>

                  <Divider />
                  <Row gutter={[24, 24]}>
                    <Col md={12} span={24}>
                      <div className="info-price">
                        <label className="info-price__content">{ item?.total_volume ? +item?.total_volume.toFixed(3) : 0 } APTOS</label>
                        <label className="info-price__label">Total Volume</label>
                      </div>
                    </Col>
                    <Col md={12} span={24}>
                      <div className="info-price">
                        <label className="info-price__content">{ item?.floor_price ? +item?.floor_price.toFixed(3) : 0 } APTOS</label>
                        <label className="info-price__label">Floor Price</label>
                      </div>
                    </Col>
                    <Col md={12} span={24}>
                      <div className="info-price">
                        <label className="info-price__content">{ item?.owners }</label>
                        <label className="info-price__label">Owners</label>
                      </div>
                    </Col>
                    <Col md={12} span={24}>
                      <div className="info-price">
                        <label className="info-price__content">{ item?.floor_apply }</label>
                        <label className="info-price__label">Total Apply</label>
                      </div>
                    </Col>
                  </Row>
                  <Divider />
                  {
                    item?.description ? (<Row gutter={[24, 24]}>
                      <Col md={24} span={24}>
                        <div className="description hp-p-16">
                          <h4 className="title"><RiAlignLeft /> Description</h4>
                          <div className="content">{ item?.description }</div>
                        </div>
                      </Col>
                    </Row>) : ''
                  }
                  <Divider />
                  {
                    item?.properties ? (<Row gutter={[24, 24]}>
                      <Col md={24} span={24}>
                        <div className="properties hp-p-16">
                          <h4 className="title"><RiPriceTag3Fill /> Properties</h4>
                          <Row gutter={[24, 24]}>
                            {
                              item?.properties.filter((a: any) => a.type=='string').map((property: any, index: number) => (
                                <Col md={6} span={24} key={index}>
                                  <div className="item">
                                    <p className="item__label">{property.key}</p>
                                    <p className="item__content">{property.value}</p>
                                  </div>
                                  
                                </Col>
                              ))
                            }
                          </Row>
                        </div>
                      </Col>
                    </Row>) : ''
                  }
                  {
                    item?.attributes ? (<Row gutter={[24, 24]}>
                      <Col md={24} span={24}>
                        <div className="properties hp-p-16">
                          <h4 className="title"><RiPriceTag3Fill /> Properties</h4>
                          <Row gutter={[24, 24]}>
                            {
                              item?.attributes.map((property: any, index: number) => (
                                <Col md={6} span={24} key={index}>
                                  <div className="item">
                                    <p className="item__label">{property.trait_type}</p>
                                    <p className="item__content">{property.value}</p>
                                  </div>
                                  
                                </Col>
                              ))
                            }
                          </Row>
                        </div>
                      </Col>
                    </Row>) : ''
                  }
                  
                  <Divider />
                  <Row gutter={[24, 24]}>
                    <Col md={24} span={24}>
                      <Link href="https://t.me/NftPriceNotifyBot">
                        <Button
                          type="primary"
                          style={{ marginRight: 16, marginBottom: 16 }}
                          icon={<RiTelegramFill className="remix-icon" />}
                        >
                          Add Price Alert
                        </Button>
                      </Link>
                      <Link href="https://discord.gg/EuDaF2Evqw">
                        <Button
                          type="primary"
                          ghost
                          icon={<RiDiscordLine className="remix-icon" />}
                        >
                          Add New Sale Alert
                        </Button>
                      </Link>
                    </Col>
                  </Row>
                </Col>
              </Row>

              <Divider />
            </Card>
          </Col>
        )
      }
    </>
  )
}