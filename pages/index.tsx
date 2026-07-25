import { useRouter } from 'next/router';
import Image from 'next/image';
import { GithubOutlined, HeartOutlined, AppstoreOutlined, TableOutlined } from '@ant-design/icons';
import { Button, Card, Col, Flex, Row, Typography } from 'antd';

const { Title, Text, Paragraph } = Typography;

const features = [
  {
    title: 'Next.js 15',
    description: 'React framework with App Router support, static generation, and fast refreshes.',
  },
  {
    title: 'Ant Design 5',
    description: 'A comprehensive enterprise UI library with CSS-in-JS theming and design tokens.',
  },
  {
    title: 'TypeScript',
    description: 'Strict type safety across components, layouts, and API routes out of the box.',
  },
];

export default function Home() {
  const router = useRouter();

  return (
    <Flex vertical gap="large" style={{ maxWidth: 900, margin: '0 auto' }}>
      <Card bordered={false} styles={{ body: { padding: '32px 24px', textAlign: 'center' } }}>
        <Flex vertical align="center" gap="middle">
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

          <Title level={2} style={{ margin: 0 }}>
            Next.js + Ant Design
          </Title>
          <Paragraph type="secondary" style={{ maxWidth: 520, fontSize: 16, margin: 0 }}>
            A production-ready boilerplate for enterprise dashboards and admin tools, built with modern React, TypeScript, and Pro Layout.
          </Paragraph>

          <Flex wrap="wrap" gap="small" justify="center">
            <Button
              type="primary"
              size="large"
              icon={<AppstoreOutlined />}
              onClick={() => router.push('/showcase')}
            >
              Browse components
            </Button>
            <Button
              size="large"
              icon={<TableOutlined />}
              onClick={() => router.push('/example')}
            >
              View data table
            </Button>
          </Flex>

          <Flex wrap="wrap" gap="small" justify="center">
            <Button
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
        </Flex>
      </Card>

      <Row gutter={[16, 16]}>
        {features.map((feature) => (
          <Col xs={24} md={8} key={feature.title}>
            <Card title={feature.title} size="small" bordered={false}>
              <Paragraph type="secondary" style={{ margin: 0 }}>
                {feature.description}
              </Paragraph>
            </Card>
          </Col>
        ))}
      </Row>
    </Flex>
  );
}
