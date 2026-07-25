import { useState } from 'react';
import {
  Alert,
  Avatar,
  Badge,
  Breadcrumb,
  Button,
  Card,
  Checkbox,
  Col,
  DatePicker,
  Descriptions,
  Divider,
  Empty,
  Flex,
  Form,
  Input,
  InputNumber,
  List,
  Menu,
  Modal,
  Pagination,
  Popconfirm,
  Progress,
  Radio,
  Rate,
  Result,
  Row,
  Select,
  Skeleton,
  Slider,
  Space,
  Spin,
  Statistic,
  Steps,
  Switch,
  Table,
  Tabs,
  Tag,
  Timeline,
  TimePicker,
  Tooltip,
  Typography,
} from 'antd';
import {
  CheckCircleOutlined,
  ClockCircleOutlined,
  DeleteOutlined,
  EditOutlined,
  HeartTwoTone,
  InfoCircleOutlined,
  UserOutlined,
} from '@ant-design/icons';
import dayjs from 'dayjs';
import type { Dayjs } from 'dayjs';

const { Title, Text, Paragraph } = Typography;

interface ShowcaseFormValues {
  input?: string;
  password?: string;
  textarea?: string;
  number?: number;
  select?: string;
  multiSelect?: string[];
  radio?: string;
  checkbox?: string[];
  switch?: boolean;
  slider?: number;
  rate?: number;
  date?: Dayjs;
  dateRange?: [Dayjs, Dayjs];
  time?: Dayjs;
}

const listData = [
  { title: 'Ant Design', description: 'An enterprise-class UI design language.' },
  { title: 'Next.js', description: 'The React Framework for the Web.' },
  { title: 'TypeScript', description: 'Type-safe JavaScript at scale.' },
];

const tableData = [
  { key: '1', name: 'Mike Brown', age: 32, address: 'New York No. 1 Lake Park' },
  { key: '2', name: 'John Green', age: 42, address: 'London No. 1 Lake Park' },
  { key: '3', name: 'Joe Black', age: 32, address: 'Sidney No. 1 Lake Park' },
];

const tableColumns = [
  { title: 'Name', dataIndex: 'name', key: 'name' },
  { title: 'Age', dataIndex: 'age', key: 'age' },
  { title: 'Address', dataIndex: 'address', key: 'address' },
];

const formatValue = (value: unknown): unknown => {
  if (dayjs.isDayjs(value)) return value.format();
  if (Array.isArray(value)) return value.map((v) => formatValue(v));
  return value;
};

export default function Showcase() {
  const [form] = Form.useForm<ShowcaseFormValues>();
  const values = Form.useWatch<ShowcaseFormValues>([], form);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentStep, setCurrentStep] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [menuKey, setMenuKey] = useState('mail');

  const displayValues = JSON.stringify(
    Object.fromEntries(
      Object.entries(values || {}).map(([k, v]) => [k, formatValue(v)])
    ),
    null,
    2
  );

  const onFinish = (formValues: ShowcaseFormValues) => {
    console.log('Showcase form values:', formValues);
  };

  const tabItems = [
    {
      key: 'general',
      label: 'General',
      children: (
        <Space direction="vertical" size="middle" style={{ width: '100%' }}>
          <Card title="Typography" size="small">
            <Title level={4}>Heading</Title>
            <Paragraph>This is a paragraph with <Text type="secondary">secondary text</Text> and <Text keyboard>Ctrl + C</Text>.</Paragraph>
          </Card>

          <Card title="Buttons" size="small">
            <Flex wrap="wrap" gap="small">
              <Button type="primary">Primary</Button>
              <Button>Default</Button>
              <Button type="dashed">Dashed</Button>
              <Button type="link">Link</Button>
              <Button type="primary" loading>Loading</Button>
              <Button icon={<HeartTwoTone twoToneColor="#eb2f96" />}>Icon</Button>
            </Flex>
          </Card>

          <Card title="Tags & Badges" size="small">
            <Space>
              <Tag color="magenta">magenta</Tag>
              <Tag color="volcano">volcano</Tag>
              <Tag color="geekblue">geekblue</Tag>
              <Badge count={5}><Avatar shape="square" icon={<UserOutlined />} /></Badge>
              <Badge status="success" text="Success" />
              <Badge status="warning" text="Warning" />
            </Space>
          </Card>

          <Divider>Divider</Divider>
        </Space>
      ),
    },
    {
      key: 'data-entry',
      label: 'Data Entry',
      children: (
        <Row gutter={[16, 16]}>
          <Col xs={24} lg={16}>
            <Card title="Form" size="small">
              <Form
                form={form}
                layout="vertical"
                name="showcase-form"
                initialValues={{
                  input: 'Hello Ant Design',
                  number: 3,
                  select: 'lucy',
                  multiSelect: ['a10', 'c12'],
                  radio: 'a',
                  checkbox: ['Pear'],
                  switch: true,
                  slider: 70,
                  rate: 3,
                  date: dayjs(),
                  dateRange: [dayjs(), dayjs().add(7, 'day')],
                  time: dayjs('09:00', 'HH:mm'),
                }}
                onFinish={onFinish}
              >
                <Row gutter={16}>
                  <Col xs={24} md={12}>
                    <Form.Item label="Input" name="input" rules={[{ required: true }]}>
                      <Input placeholder="Basic input" />
                    </Form.Item>
                  </Col>
                  <Col xs={24} md={12}>
                    <Form.Item label="Password" name="password">
                      <Input.Password placeholder="Password" />
                    </Form.Item>
                  </Col>
                  <Col xs={24}>
                    <Form.Item label="TextArea" name="textarea">
                      <Input.TextArea rows={2} placeholder="Free text" />
                    </Form.Item>
                  </Col>
                  <Col xs={24} md={12}>
                    <Form.Item label="Input Number" name="number">
                      <InputNumber min={1} max={10} style={{ width: '100%' }} />
                    </Form.Item>
                  </Col>
                  <Col xs={24} md={12}>
                    <Form.Item label="Select" name="select">
                      <Select
                        options={[
                          { value: 'jack', label: 'Jack' },
                          { value: 'lucy', label: 'Lucy' },
                          { value: 'yiminghe', label: 'Yiminghe' },
                        ]}
                      />
                    </Form.Item>
                  </Col>
                  <Col xs={24} md={12}>
                    <Form.Item label="Multi Select" name="multiSelect">
                      <Select
                        mode="multiple"
                        options={[
                          { value: 'a10', label: 'A10' },
                          { value: 'b11', label: 'B11' },
                          { value: 'c12', label: 'C12' },
                        ]}
                      />
                    </Form.Item>
                  </Col>
                  <Col xs={24} md={12}>
                    <Form.Item label="Radio" name="radio">
                      <Radio.Group
                        options={[
                          { value: 'a', label: 'A' },
                          { value: 'b', label: 'B' },
                          { value: 'c', label: 'C' },
                        ]}
                      />
                    </Form.Item>
                  </Col>
                  <Col xs={24} md={12}>
                    <Form.Item label="Checkbox Group" name="checkbox">
                      <Checkbox.Group
                        options={[
                          { value: 'Apple', label: 'Apple' },
                          { value: 'Pear', label: 'Pear' },
                          { value: 'Orange', label: 'Orange' },
                        ]}
                      />
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
                    <Form.Item label="Rate" name="rate">
                      <Rate />
                    </Form.Item>
                  </Col>
                  <Col xs={24} md={12}>
                    <Form.Item label="DatePicker" name="date">
                      <DatePicker style={{ width: '100%' }} />
                    </Form.Item>
                  </Col>
                  <Col xs={24} md={12}>
                    <Form.Item label="RangePicker" name="dateRange">
                      <DatePicker.RangePicker style={{ width: '100%' }} />
                    </Form.Item>
                  </Col>
                  <Col xs={24} md={12}>
                    <Form.Item label="TimePicker" name="time">
                      <TimePicker style={{ width: '100%' }} />
                    </Form.Item>
                  </Col>
                </Row>
                <Form.Item>
                  <Space>
                    <Button type="primary" htmlType="submit">Submit</Button>
                    <Button onClick={() => form.resetFields()}>Reset</Button>
                  </Space>
                </Form.Item>
              </Form>
            </Card>
          </Col>
          <Col xs={24} lg={8}>
            <Card title="Live values" size="small">
              <Paragraph copyable style={{ whiteSpace: 'pre-wrap', fontFamily: 'monospace' }}>
                {displayValues || '{}'}
              </Paragraph>
            </Card>
          </Col>
        </Row>
      ),
    },
    {
      key: 'display',
      label: 'Data Display',
      children: (
        <Space direction="vertical" size="middle" style={{ width: '100%' }}>
          <Row gutter={[16, 16]}>
            <Col xs={24} sm={12} lg={8}>
              <Card title="Statistic" size="small">
                <Statistic title="Active Users" value={1128} prefix={<CheckCircleOutlined />} />
              </Card>
            </Col>
            <Col xs={24} sm={12} lg={8}>
              <Card title="Avatar & Badge" size="small">
                <Space>
                  <Avatar icon={<UserOutlined />} />
                  <Avatar style={{ backgroundColor: '#f56a00' }}>U</Avatar>
                  <Badge dot><Avatar shape="square" icon={<UserOutlined />} /></Badge>
                </Space>
              </Card>
            </Col>
            <Col xs={24} sm={12} lg={8}>
              <Card title="Timeline" size="small">
                <Timeline
                  items={[
                    { children: 'Create a services site 2015-09-01' },
                    { children: 'Solve initial network problems 2015-09-01' },
                    { children: 'Technical testing 2015-09-01' },
                  ]}
                />
              </Card>
            </Col>
          </Row>

          <Card title="Table" size="small">
            <Table dataSource={tableData} columns={tableColumns} pagination={false} size="small" />
          </Card>

          <Row gutter={[16, 16]}>
            <Col xs={24} md={12}>
              <Card title="Descriptions" size="small">
                <Descriptions column={1} bordered size="small">
                  <Descriptions.Item label="Product">Cloud Database</Descriptions.Item>
                  <Descriptions.Item label="Billing Mode">Prepaid</Descriptions.Item>
                  <Descriptions.Item label="Region">Asia Pacific</Descriptions.Item>
                </Descriptions>
              </Card>
            </Col>
            <Col xs={24} md={12}>
              <Card title="List" size="small">
                <List
                  size="small"
                  dataSource={listData}
                  renderItem={(item) => (
                    <List.Item>
                      <List.Item.Meta title={item.title} description={item.description} />
                    </List.Item>
                  )}
                />
              </Card>
            </Col>
          </Row>

          <Empty description="No more data" />
        </Space>
      ),
    },
    {
      key: 'feedback',
      label: 'Feedback',
      children: (
        <Space direction="vertical" size="middle" style={{ width: '100%' }}>
          <Alert message="Success alert" type="success" showIcon />
          <Alert message="Info alert" description="Additional description" type="info" showIcon />
          <Alert message="Warning alert" type="warning" closable />

          <Card title="Progress" size="small">
            <Progress percent={30} />
            <Progress percent={50} status="active" />
            <Progress percent={70} status="exception" />
          </Card>

          <Card title="Result" size="small">
            <Result
              status="success"
              title="Successfully Purchased Cloud Server!"
              subTitle="Order number: 2017182818828182881"
            />
          </Card>

          <Card title="Skeleton & Spin" size="small">
            <Space>
              <Spin />
              <Skeleton avatar paragraph={{ rows: 1 }} active />
            </Space>
          </Card>

          <Card title="Confirmations" size="small">
            <Space>
              <Button type="primary" onClick={() => setIsModalOpen(true)}>Open Modal</Button>
              <Popconfirm
                title="Delete the task"
                description="Are you sure?"
                onConfirm={() => {}}
                okText="Yes"
                cancelText="No"
              >
                <Button danger icon={<DeleteOutlined />}>Delete</Button>
              </Popconfirm>
            </Space>
          </Card>
        </Space>
      ),
    },
    {
      key: 'navigation',
      label: 'Navigation',
      children: (
        <Space direction="vertical" size="middle" style={{ width: '100%' }}>
          <Card title="Breadcrumb" size="small">
            <Breadcrumb
              items={[
                { title: 'Home' },
                { title: 'Showcase' },
                { title: 'Navigation' },
              ]}
            />
          </Card>

          <Card title="Pagination" size="small">
            <Pagination current={currentPage} onChange={setCurrentPage} total={50} />
          </Card>

          <Card title="Steps" size="small">
            <Steps
              current={currentStep}
              onChange={setCurrentStep}
              items={[
                { title: 'Finished', icon: <CheckCircleOutlined /> },
                { title: 'In Progress', icon: <ClockCircleOutlined /> },
                { title: 'Waiting', icon: <InfoCircleOutlined /> },
              ]}
            />
          </Card>

          <Card title="Menu" size="small">
            <Menu
              onClick={(e) => setMenuKey(e.key)}
              selectedKeys={[menuKey]}
              mode="horizontal"
              items={[
                { key: 'mail', label: 'Navigation One' },
                { key: 'app', label: 'Navigation Two' },
                { key: 'alipay', label: 'Navigation Three' },
              ]}
            />
          </Card>
        </Space>
      ),
    },
  ];

  return (
    <>
      <Title level={2}>Component Showcase</Title>
      <Tabs defaultActiveKey="data-entry" items={tabItems} />

      <Modal
        title="Modal example"
        open={isModalOpen}
        onOk={() => setIsModalOpen(false)}
        onCancel={() => setIsModalOpen(false)}
      >
        <Paragraph>This is a basic Ant Design Modal triggered from the Feedback tab.</Paragraph>
      </Modal>
    </>
  );
}
