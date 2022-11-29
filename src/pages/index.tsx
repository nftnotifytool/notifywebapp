import Head from 'next/head'
import styles from '../styles/Home.module.css'
import { Row, Col } from "antd";
import PageContent from 'components/Layouts/page-content';
import HomeView from "../views/Home";
export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>App | NFT Notify</title>
        <meta name="description" content="Tracking NFT price and news" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Row gutter={[32, 32]}>
        <Col span={24}>
          <PageContent
            title="Home"
            breadcrumb={[
              {
                title: "Index",
              },
            ]}
          />
        </Col>
      </Row>
      <HomeView />
    </div>
  )
}
