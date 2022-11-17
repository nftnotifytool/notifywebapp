import axios from "axios";
import {useRouter} from "next/router";
import {useEffect, useState} from "react";
import Head from "next/head";
import {Col, Row} from "antd";
import PageContent from "../../components/Layouts/page-content";
import NftList from "../../components/nfts/nftList";
const title = 'Nfts In Wallet';

async function getNftsInWallet(tokenAddress: any) {
  try {
    const response = await axios.get('http://localhost:3049/v1/nfts-wallet/' + tokenAddress)
    if (response.data) {
      return response.data;
    }
    return null;
  } catch (e) {
    return Promise.reject(e);
  }
}
const AptosTokenPage = () => {
  const router = useRouter();
  const { token } = router.query;
  const [data, setData] = useState<[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    (async () => {
      if (token) {
        const response = await getNftsInWallet(token);
        const newData = response.map((item: any) => {
          return {
            bg: item.bg,
            title: item.collection_name,
            lastBid: item.name,
            price: null,
            avatars: []
          }
        })
        setData(newData);
      }
    })()
  }, [token])

  return (
    <>
      <Head>
        <title>{ title }</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Row gutter={[32, 32]}>
        <Col span={24}>
          <PageContent
            title={title}
            breadcrumb={[
              {
                title: "Pages",
              },
              {
                title,
              }
            ]}
          />
        </Col>
      </Row>
      <NftList items={data} />
    </>
  )
}

export default AptosTokenPage;