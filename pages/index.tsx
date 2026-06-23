import { HeartTwoTone, GithubOutlined, HeartOutlined } from '@ant-design/icons';
import { Row, Col, Form, Select, InputNumber, DatePicker, Switch, Slider, Button, Card, Typography } from 'antd';

export default function Home() {
  return (
    <>
      <h1>Home</h1>

      <Card>
        <Typography.Title level={2} style={{ textAlign: 'center' }}>
          <img src="/nextlogo.svg" alt="Next.js" style={{ maxHeight: '5em' }} />
          <span style={{ fontSize: '2em' }}>  +  </span>
          <img src="/antdlogo.svg" alt="Ant Design" style={{ maxHeight: '5em' }} />
        </Typography.Title>

        <Typography.Title level={2} style={{ textAlign: 'center' }}>
          Built with <HeartTwoTone twoToneColor="#eb2f96" />
        </Typography.Title>

        <Typography.Title level={2} style={{ textAlign: 'center' }}>
          <Button
            size="large"
            type="primary"
            onClick={() => window.open('https://github.com/DiegoVallejoDev/next-with-ant-design/', '_blank')}
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
        </Typography.Title>

        <Typography.Title level={2} style={{ textAlign: 'center' }}>
          Used by:
        </Typography.Title>
        <Row justify="center">
          <Col>
            <a href="https://weaglex.com">
              <img src="/weaglex.png" alt="weaglex" height="100px" />
            </a>
          </Col>
        </Row>
      </Card>

      <Form layout="horizontal" style={{ marginTop: 24 }}>
        <Form.Item
          label="Input Number"
          labelCol={{ span: 8 }}
          wrapperCol={{ span: 8 }}
        >
          <InputNumber
            size="large"
            min={1}
            max={10}
            style={{ width: 100 }}
            defaultValue={3}
          />
        </Form.Item>

        <Form.Item
          label="Switch"
          labelCol={{ span: 8 }}
          wrapperCol={{ span: 8 }}
        >
          <Switch defaultChecked />
        </Form.Item>

        <Form.Item
          label="Slider"
          labelCol={{ span: 8 }}
          wrapperCol={{ span: 8 }}
        >
          <Slider defaultValue={70} />
        </Form.Item>

        <Form.Item
          label="Select"
          labelCol={{ span: 8 }}
          wrapperCol={{ span: 8 }}
        >
          <Select
            size="large"
            defaultValue="lucy"
            style={{ width: 192 }}
            options={[
              { value: 'jack', label: 'Jack' },
              { value: 'lucy', label: 'Lucy' },
              { value: 'disabled', label: 'Disabled', disabled: true },
              { value: 'yiminghe', label: 'Yiminghe' },
            ]}
          />
        </Form.Item>

        <Form.Item
          label="DatePicker"
          labelCol={{ span: 8 }}
          wrapperCol={{ span: 8 }}
        >
          <DatePicker />
        </Form.Item>

        <Form.Item style={{ marginTop: 48 }} wrapperCol={{ span: 8, offset: 8 }}>
          <Button size="large" type="primary" htmlType="submit">
            OK
          </Button>
          <Button size="large" style={{ marginLeft: 8 }}>
            Cancel
          </Button>
        </Form.Item>
      </Form>
    </>
  );
}
