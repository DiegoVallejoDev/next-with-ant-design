import { Card, Typography, Table, Tag, Space, Button, Statistic, Row, Col } from 'antd';
import { PlaySquareOutlined, CheckCircleOutlined, ClockCircleOutlined } from '@ant-design/icons';
import type { ColumnsType } from 'antd/es/table';

interface DataType {
  key: string;
  name: string;
  status: string;
  date: string;
  tags: string[];
}

const columns: ColumnsType<DataType> = [
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: 'Status',
    dataIndex: 'status',
    key: 'status',
    render: (status: string) => (
      <Tag color={status === 'active' ? 'green' : status === 'pending' ? 'orange' : 'default'}>
        {status.toUpperCase()}
      </Tag>
    ),
  },
  {
    title: 'Date',
    dataIndex: 'date',
    key: 'date',
  },
  {
    title: 'Tags',
    key: 'tags',
    dataIndex: 'tags',
    render: (tags: string[]) => (
      <Space>
        {tags.map((tag) => (
          <Tag color="blue" key={tag}>{tag}</Tag>
        ))}
      </Space>
    ),
  },
  {
    title: 'Action',
    key: 'action',
    render: () => (
      <Space size="middle">
        <Button type="link">Edit</Button>
        <Button type="link" danger>Delete</Button>
      </Space>
    ),
  },
];

const data: DataType[] = [
  { key: '1', name: 'Project Alpha', status: 'active', date: '2024-01-15', tags: ['react', 'typescript'] },
  { key: '2', name: 'Project Beta', status: 'pending', date: '2024-02-20', tags: ['nextjs'] },
  { key: '3', name: 'Project Gamma', status: 'completed', date: '2024-03-10', tags: ['antd', 'react'] },
  { key: '4', name: 'Project Delta', status: 'active', date: '2024-04-05', tags: ['node', 'api'] },
];

export default function Example() {
  return (
    <>
      <Typography.Title level={2}>
        <PlaySquareOutlined /> Example Page
      </Typography.Title>

      <Row gutter={16} style={{ marginBottom: 24 }}>
        <Col span={8}>
          <Card>
            <Statistic
              title="Active Projects"
              value={2}
              prefix={<CheckCircleOutlined />}
              valueStyle={{ color: '#3f8600' }}
            />
          </Card>
        </Col>
        <Col span={8}>
          <Card>
            <Statistic
              title="Pending"
              value={1}
              prefix={<ClockCircleOutlined />}
              valueStyle={{ color: '#cf1322' }}
            />
          </Card>
        </Col>
        <Col span={8}>
          <Card>
            <Statistic title="Total" value={4} />
          </Card>
        </Col>
      </Row>

      <Card title="Projects">
        <Table columns={columns} dataSource={data} />
      </Card>
    </>
  );
}
