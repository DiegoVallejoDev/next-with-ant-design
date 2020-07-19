import Link from 'next/link'
import { Card, Button, Alert, Typography } from 'antd';
import { HeartTwoTone, SmileTwoTone, GithubOutlined, HeartOutlined } from '@ant-design/icons';
import {Row, Col} from 'antd'

export default function Home(props) {



  return <>
    <h1>Home</h1>


    <Card>
      <Typography.Title level={2} style={{ textAlign: 'center' }}>
        <img src="/nextlogo.svg" alt="Next.js" style={{ maxHeight: '5em' }}></img>
        <span style={{ fontSize: '2em' }}>  +  </span>
        <img src="/antdlogo.svg" alt="Ant Design" style={{ maxHeight: '5em' }}></img>
      </Typography.Title>

      <Typography.Title level={2} style={{ textAlign: 'center' }}>
        Built with <HeartTwoTone twoToneColor="#eb2f96" />
      </Typography.Title>

      <Typography.Title level={2} style={{ textAlign: 'center' }}>

        <Button
          size="large"
          type="primary"
          onClick={() => window.open("https://github.com/Destructor1702/next-with-ant-design/", '_blank')}
          icon={<GithubOutlined />}
        >
          Clone it from Github
          </Button>
        {'\t'}
        <Button
          size="large"
          type="default"
          icon={<HeartOutlined />}
          href="/support"
        >
          Support this project
        </Button>


        <br />
        <Typography.Title level={2} style={{ textAlign: 'center' }}>
          <br />Trusted by:
        </Typography.Title>
        <Row gutter={12}>
          <Col span={6}></Col>
          <Col span={6}><a href="https://weaglex.com"><img src="/weaglex.png" alt="weaglex" height="100px" /></a></Col>
          <Col span={6}></Col>
          <Col span={6}></Col>
        </Row>
      </Typography.Title>

     
    
    </Card>
    
  </>

}