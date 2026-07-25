import Link from 'next/link';
import { ProLayout } from '@ant-design/pro-layout';
import type { ProLayoutProps } from '@ant-design/pro-layout';
import {
  HomeOutlined,
  AppstoreOutlined,
  TableOutlined,
  SettingOutlined,
  HeartOutlined,
} from '@ant-design/icons';

const ROUTES: ProLayoutProps['route'] = {
  path: '/',
  routes: [
    {
      path: '/',
      name: 'Home',
      icon: <HomeOutlined />,
    },
    {
      path: '/showcase',
      name: 'Component Showcase',
      icon: <AppstoreOutlined />,
    },
    {
      path: '/example',
      name: 'Data Table',
      icon: <TableOutlined />,
    },
    {
      path: '/welcome',
      name: 'Account Settings',
      icon: <SettingOutlined />,
    },
    {
      path: '/support',
      name: 'Support US',
      icon: <HeartOutlined />,
    },
  ],
};

export default function MainLayout({ children }: { children: React.ReactNode }) {
  return (
    <ProLayout
      title="Next.js + Ant Design"
      logo={false}
      style={{ minHeight: '100vh' }}
      contentStyle={{ padding: 24 }}
      route={ROUTES}
      menuItemRender={(item, dom) => (
        <Link href={item.path || '/'}>{dom}</Link>
      )}
      menuHeaderRender={(logo, title, props) => (
        <Link href="/">
          {logo}
          {!props?.collapsed && title}
        </Link>
      )}
    >
      {children}
    </ProLayout>
  );
}
