import { useState } from 'react';
import { Card, Typography, Table, Tag, Space, Button, Statistic, Row, Col, Modal, Form, Input, Select, Popconfirm, message } from 'antd';
import { TableOutlined, CheckCircleOutlined, ClockCircleOutlined, EditOutlined, DeleteOutlined } from '@ant-design/icons';
import type { ColumnsType } from 'antd/es/table';

interface DataType {
  key: string;
  name: string;
  status: 'active' | 'pending' | 'completed';
  date: string;
  tags: string[];
}

const initialData: DataType[] = [
  { key: '1', name: 'Project Alpha', status: 'active', date: '2024-01-15', tags: ['react', 'typescript'] },
  { key: '2', name: 'Project Beta', status: 'pending', date: '2024-02-20', tags: ['nextjs'] },
  { key: '3', name: 'Project Gamma', status: 'completed', date: '2024-03-10', tags: ['antd', 'react'] },
  { key: '4', name: 'Project Delta', status: 'active', date: '2024-04-05', tags: ['node', 'api'] },
];

export default function Example() {
  const [data, setData] = useState<DataType[]>(initialData);
  const [editing, setEditing] = useState<DataType | null>(null);
  const [form] = Form.useForm();

  const activeCount = data.filter((item) => item.status === 'active').length;
  const pendingCount = data.filter((item) => item.status === 'pending').length;

  const handleDelete = (key: string) => {
    setData((prev) => prev.filter((item) => item.key !== key));
    message.success('Project deleted');
  };

  const handleEdit = (record: DataType) => {
    setEditing(record);
    form.setFieldsValue(record);
  };

  const handleSave = (values: Partial<DataType>) => {
    if (!editing) return;
    setData((prev) =>
      prev.map((item) => (item.key === editing.key ? { ...item, ...values } as DataType : item))
    );
    setEditing(null);
    message.success('Project updated');
  };

  const columns: ColumnsType<DataType> = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
      ellipsis: true,
      width: 160,
    },
    {
      title: 'Status',
      dataIndex: 'status',
      key: 'status',
      width: 120,
      render: (status: DataType['status']) => (
        <Tag color={status === 'active' ? 'green' : status === 'pending' ? 'orange' : 'default'}>
          {status.toUpperCase()}
        </Tag>
      ),
    },
    {
      title: 'Date',
      dataIndex: 'date',
      key: 'date',
      width: 120,
    },
    {
      title: 'Tags',
      key: 'tags',
      dataIndex: 'tags',
      width: 180,
      render: (tags: string[]) => (
        <Space size="small" wrap>
          {tags.map((tag) => (
            <Tag color="blue" key={tag}>{tag}</Tag>
          ))}
        </Space>
      ),
    },
    {
      title: 'Action',
      key: 'action',
      width: 140,
      render: (_, record) => (
        <Space size="small">
          <Button type="link" icon={<EditOutlined />} onClick={() => handleEdit(record)}>
            Edit
          </Button>
          <Popconfirm
            title="Delete this project?"
            onConfirm={() => handleDelete(record.key)}
            okText="Yes"
            cancelText="No"
          >
            <Button type="link" danger icon={<DeleteOutlined />}>
              Delete
            </Button>
          </Popconfirm>
        </Space>
      ),
    },
  ];

  return (
    <>
      <Typography.Title level={2}>
        <TableOutlined /> Data Table
      </Typography.Title>

      <Row gutter={[16, 16]} style={{ marginBottom: 24 }}>
        <Col xs={24} sm={8}>
          <Card>
            <Statistic
              title="Active Projects"
              value={activeCount}
              prefix={<CheckCircleOutlined />}
              valueStyle={{ color: '#3f8600' }}
            />
          </Card>
        </Col>
        <Col xs={24} sm={8}>
          <Card>
            <Statistic
              title="Pending"
              value={pendingCount}
              prefix={<ClockCircleOutlined />}
              valueStyle={{ color: '#cf1322' }}
            />
          </Card>
        </Col>
        <Col xs={24} sm={8}>
          <Card>
            <Statistic title="Total" value={data.length} />
          </Card>
        </Col>
      </Row>

      <Card title="Projects">
        <Table
          columns={columns}
          dataSource={data}
          scroll={{ x: 'max-content' }}
          pagination={{ pageSize: 5 }}
        />
      </Card>

      <Modal
        title="Edit project"
        open={!!editing}
        onCancel={() => setEditing(null)}
        onOk={() => form.submit()}
      >
        <Form form={form} layout="vertical" onFinish={handleSave}>
          <Form.Item label="Name" name="name" rules={[{ required: true, message: 'Please enter a project name' }]}>
            <Input />
          </Form.Item>
          <Form.Item label="Status" name="status" rules={[{ required: true }]}>
            <Select
              options={[
                { value: 'active', label: 'Active' },
                { value: 'pending', label: 'Pending' },
                { value: 'completed', label: 'Completed' },
              ]}
            />
          </Form.Item>
        </Form>
      </Modal>
    </>
  );
}
