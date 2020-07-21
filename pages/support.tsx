import { Row, Col, Card, Typography, Button } from 'antd'
import { GithubOutlined, createFromIconfontCN } from '@ant-design/icons';



const IconFont = createFromIconfontCN({
  scriptUrl: '//at.alicdn.com/t/font_8d5l8fzk5b87iudi.js',
});

export default function () {

  return <Row>
    <Col span={24}>
      <Card>

        <Typography.Title level={2} style={{ textAlign: 'center' }}>
          Contribute to source code
        </Typography.Title>

        <Typography.Paragraph style={{ textAlign: 'center' }}>

          
          <p style={{fontSize:'1.2em'}}>
            This project is still in a very early stage of development.  <br />
            Any support is greatly appreciated.<br />
            If your company uses this project contact us and we will put your image on the Landing page
          </p>
          <p style={{ fontSize: '1.2em' }}>
            Please send a GitHub Pull Request with a clear list of what you've done.<br />
            When you send a pull request. Please follow good prectices and coding conventions and make
            sure all of your commits are atomic (one feature per commit).
          </p>
          <Button
            size="large"
            type="primary"
            icon={<GithubOutlined />}
            onClick={() => window.open("https://github.com/Destructor1702/next-with-ant-design/", '_blank')}
          >
            Contribute on Github
          </Button>

        </Typography.Paragraph>
      </Card>
    </Col>
    <Col span={24}>
      <Card>

        <Typography.Title level={2} style={{ textAlign: 'center' }}>
          Donate
        </Typography.Title>

        <Typography.Paragraph style={{ textAlign: 'center' }}>
          <img src="/PayPal.svg" alt="PayPal" height="55px" />
          <br />
          <Button
            style={{margin:'2em 0'}}
            size="large"
            type="primary"
            onClick={() => window.open("https://www.paypal.me/DiegoV17", '_blank')}
          >
            Donate via Paypal
          </Button>
          
          <h4>
            Donate Bitcoin:
          </h4>
          <img src="/btc.jpg" alt="Bitcoin QR code" height="200px" />
          <p>1KaEDh8VsKmTowAXsHnZUVq25dvGA558XR</p>

          


        </Typography.Paragraph>
      </Card>
    </Col>
  </Row>
}