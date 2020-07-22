import Link from 'next/link'

import { HeartTwoTone, SmileTwoTone, GithubOutlined, HeartOutlined } from '@ant-design/icons';
import { Row, Col } from 'antd'

import {
  Form,
  Select,
  InputNumber,
  DatePicker,
  Switch,
  Slider,
  Button,
  Card,
  Alert,
  Typography
} from 'antd'

const FormItem = Form.Item
const Option = Select.Option

export default function Home() {
  return (
    <>
      <h1>Home</h1>

      <Card>
        <Typography.Title level={2} style={{ textAlign: 'center' }}>
          <img src="/nextlogo.svg" alt="Next.js" style={{ maxHeight: '5em' }}></img>
          <span style={{ fontSize: '2em' }}>  +  </span>
          <img src="/antdlogo.svg" alt="Ant Design" style={{ maxHeight: '5em' }}></img>
        </Typography.Title>

        <Typography.Title level={2} style={{ textAlign: 'center' }}>
          Built with <HeartTwoTone twoToneColor="#eb2f96" />
        </Typography.Title>

        <Typography.Title level={2} style={{ textAlign: 'center' }}>

          <Button
            size="large"
            type="primary"
            onClick={() => window.open("https://github.com/Destructor1702/next-with-ant-design/", '_blank')}
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


          <br />
          <Typography.Title level={2} style={{ textAlign: 'center' }}>
            <br />Used by:
        </Typography.Title>
          <Row >
            <Col span={8}></Col>
            <Col span={8}><a href="https://weaglex.com"><img src="/weaglex.png" alt="weaglex" height="100px" /></a></Col>
            <Col span={8}></Col>
          </Row>
        </Typography.Title>



      </Card>

      <Form layout="horizontal">
        <FormItem
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
            name="inputNumber"
          />
          <a href="#">Link</a>
        </FormItem>

        <FormItem
          label="Switch"
          labelCol={{ span: 8 }}
          wrapperCol={{ span: 8 }}
        >
          <Switch defaultChecked />
        </FormItem>

        <FormItem
          label="Slider"
          labelCol={{ span: 8 }}
          wrapperCol={{ span: 8 }}
        >
          <Slider defaultValue={70} />
        </FormItem>

        <FormItem
          label="Select"
          labelCol={{ span: 8 }}
          wrapperCol={{ span: 8 }}
        >
          <Select size="large" defaultValue="lucy" style={{ width: 192 }}>
            <Option value="jack">jack</Option>
            <Option value="lucy">lucy</Option>
            <Option value="disabled" disabled>
              disabled
            </Option>
            <Option value="yiminghe">yiminghe</Option>
          </Select>
        </FormItem>

        <FormItem
          label="DatePicker"
          labelCol={{ span: 8 }}
          wrapperCol={{ span: 8 }}
        >
          <DatePicker name="startDate" />
        </FormItem>
        <FormItem style={{ marginTop: 48 }} wrapperCol={{ span: 8, offset: 8 }}>
          <Button size="large" type="primary" htmlType="submit">
            OK
          </Button>
          <Button size="large" style={{ marginLeft: 8 }}>
            Cancel
          </Button>
        </FormItem>
      </Form>
    </>
  )
}
