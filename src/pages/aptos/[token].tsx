import axios from "axios";
import {useRouter} from "next/router";
import {useEffect, useState} from "react";
import Head from "next/head";
import {Col, Pagination, Row} from "antd";
import PageContent from "../../components/Layouts/page-content";
import NftList from "../../components/nfts/nftList";
import NftsLoading from "components/nfts/nftsLoading";
import ErrorPage from 'next/error';

const title = 'Nfts In Wallet';

async function getNftsInWallet(tokenAddress: any, page = 1) {
  try {
    const response = await axios.get(process.env.NEXT_PUBLIC_ENDPOINT + '/v1/nfts-wallet/' + tokenAddress, {
      params: {
        page,
      }
    })
    if (response.data) {
      return response.data;
    }
    return null;
  } catch (e) {
    return Promise.reject(e);
  }
}

async function fetchData(token: string, page = 1) {
  const response = await getNftsInWallet(token);
  const newData = response.data ? response.data.map((item: any) => {
    return {
      bg: item.bg,
      title: item.collection_name,
      lastBid: item.name,
      price: null,
      avatars: []
    }
  }) : [];
  return {
    data: newData,
    total: response.total,
  }
}

const AptosTokenPage = () => {
  const router = useRouter();
  const { token } = router.query;
  const [data, setData] = useState<[]>([]);
  const [totalPage, setTotalPage] = useState<number>(0);
  const [isLoading, setIsLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [isError, setIsError] = useState<boolean>(false);

  const changePage = (page: number, pageSize: number) => {
    setCurrentPage(page);
  }
  
  useEffect(() => {
    (async () => {
      if (token) {
        try {
          setIsLoading(true);
          const response = await getNftsInWallet(token, currentPage);
          const newData = response.data ? response.data.map((item: any) => {
            return {
              bg: item.bg,
              title: item.collection_name,
              lastBid: item.name,
              price: null,
              avatars: [],
              link: '/nfts/aptos/'+item.token_data_id_hash,
            }
          }) : [];
          setData(newData);
          setTotalPage(response.total);
          setIsLoading(false);
        } catch (e) {
          setIsError(true);
        }
      }
    })()
  }, [token, currentPage])

  return (
    <>
      <Head>
        <title>{ title }</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {
        isError ? <ErrorPage statusCode={404} /> : (
          <>
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
          {
            isLoading ? <NftsLoading /> : <NftList items={data} />
          }
          <Row gutter={[32, 32]}>
            <Pagination defaultCurrent={1} total={totalPage} defaultPageSize={6} onChange={changePage} />
          </Row>
          </>
        )
      }
      
    </>
  )
}

export default AptosTokenPage;