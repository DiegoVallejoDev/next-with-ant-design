import { Row, Col, Card, Typography, Button, Space } from 'antd';
import { GithubOutlined } from '@ant-design/icons';

export default function Support() {
  return (
    <Row gutter={[16, 16]}>
      <Col span={24}>
        <Card>
          <Typography.Title level={2} style={{ textAlign: 'center' }}>
            Contribute to source code
          </Typography.Title>

          <Typography.Paragraph style={{ textAlign: 'center', fontSize: '1.2em' }}>
            This project is still in a very early stage of development.<br />
            Any support is greatly appreciated.<br />
            If your company uses this project contact us and we will put your image on the landing page.
          </Typography.Paragraph>

          <Typography.Paragraph style={{ textAlign: 'center', fontSize: '1.2em' }}>
            Please send a GitHub Pull Request with a clear list of what you&apos;ve done.<br />
            When you send a pull request, please follow good practices and coding conventions and make
            sure all of your commits are atomic (one feature per commit).
          </Typography.Paragraph>

          <Space style={{ display: 'flex', justifyContent: 'center' }}>
            <Button
              size="large"
              type="primary"
              icon={<GithubOutlined />}
              onClick={() => window.open('https://github.com/DiegoVallejoDev/next-with-ant-design/', '_blank')}
            >
              Contribute on Github
            </Button>
          </Space>
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
              style={{ margin: '2em 0' }}
              size="large"
              type="primary"
              onClick={() => window.open('https://www.paypal.me/DiegoV17', '_blank')}
            >
              Donate via Paypal
            </Button>

            <Typography.Title level={4}>Donate Bitcoin:</Typography.Title>
            <img src="/btc.jpg" alt="Bitcoin QR code" height="200px" />
            <Typography.Paragraph copyable>1KaEDh8VsKmTowAXsHnZUVq25dvGA558XR</Typography.Paragraph>
          </Typography.Paragraph>
        </Card>
      </Col>
    </Row>
  );
}
