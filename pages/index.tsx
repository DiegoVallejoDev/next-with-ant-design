import { useRouter } from 'next/router';
import Image from 'next/image';
import { HeartTwoTone, GithubOutlined, HeartOutlined } from '@ant-design/icons';
import { Row, Col, Form, Select, InputNumber, DatePicker, Switch, Slider, Button, Card, Typography, Flex } from 'antd';
import dayjs from 'dayjs';

const { Title, Text } = Typography;

export default function Home() {
  const router = useRouter();
  const [form] = Form.useForm();

  const onFinish = (values: Record<string, unknown>) => {
    console.log('Showcase submitted:', values);
    form.resetFields();
  };

  return (
    <Flex vertical gap="middle" style={{ maxWidth: 960, margin: '0 auto' }}>
      <Card bordered={false} styles={{ body: { padding: '16px 24px' } }}>
        <Flex vertical align="center" gap="middle" style={{ textAlign: 'center' }}>
          <Flex align="center" justify="center" wrap="wrap" gap="small">
            <Image
              src="/nextlogo.svg"
              alt="Next.js"
              width={100}
              height={60}
              priority
              unoptimized
            />
            <Text style={{ fontSize: 24, fontWeight: 600, lineHeight: 1 }}>+</Text>
            <Image
              src="/antdlogo.svg"
              alt="Ant Design"
              width={60}
              height={60}
              priority
              unoptimized
            />
          </Flex>

          <Title level={3} style={{ margin: 0 }}>
            Next.js + Ant Design
          </Title>
          <Text type="secondary" style={{ fontSize: 16 }}>
            Built with <HeartTwoTone twoToneColor="#eb2f96" />
          </Text>

          <Flex wrap="wrap" gap="small" justify="center">
            <Button
              type="primary"
              href="https://github.com/DiegoVallejoDev/next-with-ant-design/"
              target="_blank"
              rel="noopener noreferrer"
              icon={<GithubOutlined />}
            >
              Clone it from Github
            </Button>
            <Button
              icon={<HeartOutlined />}
              onClick={() => router.push('/support')}
            >
              Support this project
            </Button>
          </Flex>

          <div>
            <Text type="secondary" style={{ display: 'block', marginBottom: 4, fontSize: 12 }}>
              Used by
            </Text>
            <a
              href="https://weaglex.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src="/weaglex.png"
                alt="weaglex"
                width={60}
                height={60}
              />
            </a>
          </div>
        </Flex>
      </Card>

      <Card
        title="Component Showcase"
        bordered={false}
        styles={{ body: { padding: '16px 24px' } }}
      >
        <Form
          form={form}
          name="showcase"
          layout="vertical"
          initialValues={{
            inputNumber: 3,
            switch: true,
            slider: 70,
            select: 'lucy',
            datePicker: dayjs(),
          }}
          onFinish={onFinish}
        >
          <Row gutter={[12, 8]}>
            <Col xs={24} md={12}>
              <Form.Item label="Input Number" name="inputNumber">
                <InputNumber min={1} max={10} style={{ width: '100%' }} />
              </Form.Item>
            </Col>
            <Col xs={24} md={12}>
              <Form.Item label="Switch" name="switch" valuePropName="checked">
                <Switch />
              </Form.Item>
            </Col>
            <Col xs={24} md={12}>
              <Form.Item label="Slider" name="slider">
                <Slider />
              </Form.Item>
            </Col>
            <Col xs={24} md={12}>
              <Form.Item label="Select" name="select">
                <Select
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
            <Col xs={24} md={12}>
              <Form.Item label="DatePicker" name="datePicker">
                <DatePicker style={{ width: '100%' }} />
              </Form.Item>
            </Col>
            <Col xs={24} md={12} style={{ display: 'flex', alignItems: 'flex-end' }}>
              <Form.Item style={{ width: '100%', marginBottom: 0 }}>
                <Flex gap="small" wrap="wrap">
                  <Button type="primary" htmlType="submit">
                    OK
                  </Button>
                  <Button onClick={() => form.resetFields()}>
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
