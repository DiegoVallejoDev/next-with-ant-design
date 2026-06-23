import { Card, Typography, Descriptions, Switch, Button, Form, Input, Avatar, Space } from 'antd';
import { UserOutlined, MailOutlined, SettingOutlined } from '@ant-design/icons';

export default function Welcome() {
  return (
    <>
      <Typography.Title level={2}>
        <SettingOutlined /> Account Settings
      </Typography.Title>

      <Card title="Profile Information" style={{ marginBottom: 24 }}>
        <Space direction="vertical" size="large" style={{ width: '100%' }}>
          <Space>
            <Avatar size={64} icon={<UserOutlined />} />
            <div>
              <Typography.Title level={4} style={{ margin: 0 }}>John Doe</Typography.Title>
              <Typography.Text type="secondary">Developer</Typography.Text>
            </div>
          </Space>

          <Descriptions column={1} bordered>
            <Descriptions.Item label="Full Name">John Doe</Descriptions.Item>
            <Descriptions.Item label="Email">john@example.com</Descriptions.Item>
            <Descriptions.Item label="Role">Administrator</Descriptions.Item>
            <Descriptions.Item label="Member Since">January 2024</Descriptions.Item>
          </Descriptions>
        </Space>
      </Card>

      <Card title="Preferences">
        <Form layout="vertical">
          <Form.Item label="Display Name">
            <Input prefix={<UserOutlined />} placeholder="Your display name" defaultValue="John Doe" />
          </Form.Item>
          <Form.Item label="Email">
            <Input prefix={<MailOutlined />} placeholder="Your email" defaultValue="john@example.com" />
          </Form.Item>
          <Form.Item label="Dark Mode">
            <Switch />
          </Form.Item>
          <Form.Item label="Email Notifications">
            <Switch defaultChecked />
          </Form.Item>
          <Form.Item>
            <Button type="primary">Save Changes</Button>
          </Form.Item>
        </Form>
      </Card>
    </>
  );
}
