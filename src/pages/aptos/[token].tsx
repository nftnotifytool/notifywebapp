import axios from "axios";
import {useRouter} from "next/router";
import {useEffect, useState} from "react";
import Head from "next/head";
import {Col, Row} from "antd";
import PageContent from "../../components/Layouts/page-content";
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
        setData(response);
      }
    })()
  }, [token])

  return (
    <>
      <Head>
        <title>Nfts In Wallet</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Row gutter={[32, 32]}>
        <Col span={24}>
          <PageContent
            title="Nfts In Wallet"
            breadcrumb={[
              {
                title: "Pages",
              },
              {
                title: "Nfts In Wallet",
              }
            ]}
          />
        </Col>
      </Row>
    </>
  )
}

export default AptosTokenPage;