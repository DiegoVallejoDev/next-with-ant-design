import { useState } from 'react';
import { useRouter } from 'next/router';
import Image from 'next/image';
import { HeartTwoTone, GithubOutlined, HeartOutlined } from '@ant-design/icons';
import { Row, Col, Form, Select, InputNumber, DatePicker, Switch, Slider, Button, Card, Typography, Flex, Modal, Descriptions } from 'antd';
import type { Dayjs } from 'dayjs';
import dayjs from 'dayjs';

const { Title, Text } = Typography;

interface ShowcaseValues {
  inputNumber?: number;
  switch?: boolean;
  slider?: number;
  select?: string;
  datePicker?: Dayjs;
}

export default function Home() {
  const router = useRouter();
  const [submittedValues, setSubmittedValues] = useState<ShowcaseValues | null>(null);
  const [form] = Form.useForm<ShowcaseValues>();

  const onFinish = (values: ShowcaseValues) => {
    setSubmittedValues(values);
  };

  const formatValue = (value: unknown) => {
    if (dayjs.isDayjs(value)) return value.format('YYYY-MM-DD');
    if (typeof value === 'boolean') return value ? 'Yes' : 'No';
    return String(value ?? '-');
  };

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
              href="https://github.com/DiegoVallejoDev/next-with-ant-design/"
              target="_blank"
              rel="noopener noreferrer"
              icon={<GithubOutlined />}
            >
              Clone it from Github
            </Button>
            <Button
              size="large"
              icon={<HeartOutlined />}
              onClick={() => router.push('/support')}
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
          <Row gutter={[16, 16]}>
            <Col xs={24} sm={12}>
              <Form.Item label="Input Number" name="inputNumber">
                <InputNumber
                  size="large"
                  min={1}
                  max={10}
                  style={{ width: '100%' }}
                />
              </Form.Item>
            </Col>
            <Col xs={24} sm={12}>
              <Form.Item label="Switch" name="switch" valuePropName="checked">
                <Switch />
              </Form.Item>
            </Col>
            <Col xs={24} sm={12}>
              <Form.Item label="Slider" name="slider">
                <Slider />
              </Form.Item>
            </Col>
            <Col xs={24} sm={12}>
              <Form.Item label="Select" name="select">
                <Select
                  size="large"
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
              <Form.Item label="DatePicker" name="datePicker">
                <DatePicker style={{ width: '100%' }} />
              </Form.Item>
            </Col>
            <Col xs={24} sm={12} style={{ display: 'flex', alignItems: 'flex-end' }}>
              <Form.Item style={{ width: '100%', marginBottom: 0 }}>
                <Flex gap="small" wrap="wrap">
                  <Button size="large" type="primary" htmlType="submit">
                    OK
                  </Button>
                  <Button size="large" onClick={() => form.resetFields()}>
                    Cancel
                  </Button>
                </Flex>
              </Form.Item>
            </Col>
          </Row>
        </Form>
      </Card>

      <Modal
        title="Submitted values"
        open={!!submittedValues}
        onCancel={() => setSubmittedValues(null)}
        footer={[
          <Button key="close" type="primary" onClick={() => setSubmittedValues(null)}>
            Close
          </Button>,
        ]}
      >
        {submittedValues && (
          <Descriptions column={1} bordered>
            {Object.entries(submittedValues).map(([key, value]) => (
              <Descriptions.Item key={key} label={key}>
                {formatValue(value)}
              </Descriptions.Item>
            ))}
          </Descriptions>
        )}
      </Modal>
    </Flex>
  );
}
