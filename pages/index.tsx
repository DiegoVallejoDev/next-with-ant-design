import Image from 'next/image';
import { HeartTwoTone, GithubOutlined, HeartOutlined } from '@ant-design/icons';
import { Row, Col, Form, Select, InputNumber, DatePicker, Switch, Slider, Button, Card, Typography, Flex } from 'antd';

const { Title, Text } = Typography;

export default function Home() {
  return (
    <Flex vertical gap="large" style={{ maxWidth: 960, margin: '0 auto' }}>
      <Card bordered={false} style={{ textAlign: 'center' }}>
        <Flex vertical align="center" gap="large">
          <Flex align="center" justify="center" wrap="wrap" gap="middle">
            <Image
              src="/nextlogo.svg"
              alt="Next.js"
              width={132}
              height={80}
              priority
              unoptimized
            />
            <Text style={{ fontSize: 32, fontWeight: 600, lineHeight: 1 }}>+</Text>
            <Image
              src="/antdlogo.svg"
              alt="Ant Design"
              width={80}
              height={80}
              priority
              unoptimized
            />
          </Flex>

          <Title level={2} style={{ margin: 0 }}>
            Built with <HeartTwoTone twoToneColor="#eb2f96" />
          </Title>

          <Flex wrap="wrap" gap="middle" justify="center">
            <Button
              size="large"
              type="primary"
              onClick={() => window.open('https://github.com/DiegoVallejoDev/next-with-ant-design/', '_blank')}
              icon={<GithubOutlined />}
            >
              Clone it from Github
            </Button>
            <Button
              size="large"
              icon={<HeartOutlined />}
              href="/support"
            >
              Support this project
            </Button>
          </Flex>

          <div>
            <Text type="secondary" style={{ display: 'block', marginBottom: 12 }}>
              Used by:
            </Text>
            <a
              href="https://weaglex.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src="/weaglex.png"
                alt="weaglex"
                width={100}
                height={100}
              />
            </a>
          </div>
        </Flex>
      </Card>

      <Card title="Component Showcase" bordered={false}>
        <Form layout="vertical">
          <Row gutter={[16, 16]}>
            <Col xs={24} sm={12}>
              <Form.Item label="Input Number">
                <InputNumber
                  size="large"
                  min={1}
                  max={10}
                  style={{ width: '100%' }}
                  defaultValue={3}
                />
              </Form.Item>
            </Col>
            <Col xs={24} sm={12}>
              <Form.Item label="Switch" valuePropName="checked">
                <Switch defaultChecked />
              </Form.Item>
            </Col>
            <Col xs={24} sm={12}>
              <Form.Item label="Slider">
                <Slider defaultValue={70} />
              </Form.Item>
            </Col>
            <Col xs={24} sm={12}>
              <Form.Item label="Select">
                <Select
                  size="large"
                  defaultValue="lucy"
                  style={{ width: '100%' }}
                  options={[
                    { value: 'jack', label: 'Jack' },
                    { value: 'lucy', label: 'Lucy' },
                    { value: 'disabled', label: 'Disabled', disabled: true },
                    { value: 'yiminghe', label: 'Yiminghe' },
                  ]}
                />
              </Form.Item>
            </Col>
            <Col xs={24} sm={12}>
              <Form.Item label="DatePicker">
                <DatePicker style={{ width: '100%' }} />
              </Form.Item>
            </Col>
            <Col xs={24} sm={12} style={{ display: 'flex', alignItems: 'flex-end' }}>
              <Form.Item style={{ width: '100%', marginBottom: 0 }}>
                <Flex gap="small" wrap="wrap">
                  <Button size="large" type="primary" htmlType="submit">
                    OK
                  </Button>
                  <Button size="large">
                    Cancel
                  </Button>
                </Flex>
              </Form.Item>
            </Col>
          </Row>
        </Form>
      </Card>
    </Flex>
  );
}
