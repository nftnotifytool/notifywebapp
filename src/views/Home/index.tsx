import {Card, Col, Row, Table} from "antd";
import axios from "axios";
import {useEffect, useState} from "react";
import AvatarNft from "../../components/nft-home/AvatarNft";
import { Typography } from 'antd';
const { Title } = Typography;

const fetchData = async ({page = 1, limit = 10}) => {
  try {
    const response = await axios.get(process.env.NEXT_PUBLIC_ENDPOINT + '/collections', {
      params: {
        page,
        limit,
        chain_id: 1,
      }
    })
    if (response.data) {
      //console.log(response.data);
      return response.data;
    }
    return null;
  } catch (e) {
    return Promise.reject(e);
  }
}
export default function HomeView() {
  const [data, setData] = useState<[]>([]);
  const [totalPage, setTotalPage] = useState<number>(0);
  const [isLoading, setIsLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [pagination, setPagination] = useState({});

  const handleTableChange = (pagination: any) => {
    setCurrentPage(pagination.current);
  };
  useEffect(() => {
    (async () => {
      setIsLoading(true);
      try {
        const response = await fetchData({
          page: currentPage
        });
        const newData = response.data.map((collection: any) => {
          collection.key = collection.id;
          return collection;
        });
        setData(newData);
        setTotalPage(response.pagination.total);
        setPagination(response.pagination);
      } catch (e) {
      }
      setIsLoading(false);
    })()
  }, [currentPage]);
  const columns = [
    {
      title: 'COLLECTION',
      dataIndex: ['name', 'image', 'link_collection'],
      key: 'name',
      render: (name: string, record: any) => <AvatarNft name={record.name} avatar={record.image} link={record.link_collection} />
    },
    {
      title: 'CODE NAME',
      dataIndex: 'symbol',
      key: 'symbol',
      render: (text: number) => <Title level={5}>{text}</Title>
    },
    {
      title: 'VOLUME',
      dataIndex: 'total_volume',
      key: 'total_volume',
      render: (text: number, record: any) => <Title level={5}>{text.toFixed(4)} {record.chain}</Title>
    },
    {
      title: 'FLOOR PRICE',
      dataIndex: 'floor_price',
      key: 'floor_price',
      render: (text: number, record: any) => <Title level={5} type="warning">{text.toFixed(4)} {record.chain}</Title>
    },
    {
      title: 'ITEMS',
      dataIndex: 'floor_apply',
      key: 'floor_apply',
      render: (text: number) => <Title level={5}>{text}</Title>
    },
    {
      title: 'OWNERS',
      dataIndex: 'owners',
      key: 'owners',
      render: (text: number) => <Title level={5}>{text}</Title>
    },
  ];

  return (
    <Card className="hp-border-color-black-40" style={{marginTop: '24px'}}>
      <Row>
        <Col className="hp-mb-16" lg={12} span={20}>
          <h4>Top / Trending NFTs</h4>
        </Col>
        <Col span={24}>
          <Table columns={columns} dataSource={data} scroll={{ x: 500 }} pagination={pagination} onChange={handleTableChange} loading={isLoading} />
        </Col>
      </Row>
    </Card>
  )
}