import Link from 'next/link';
import { ProLayout } from '@ant-design/pro-layout';
import type { ProLayoutProps } from '@ant-design/pro-layout';
import {
  SmileOutlined,
  SettingOutlined,
  PlaySquareOutlined,
  HeartOutlined,
  AimOutlined,
} from '@ant-design/icons';

const ROUTES: ProLayoutProps['route'] = {
  path: '/',
  routes: [
    {
      path: '/',
      name: 'Welcome',
      icon: <SmileOutlined />,
      routes: [
        {
          path: '/',
          name: 'Home',
          icon: <AimOutlined />,
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
    },
    {
      path: '/example',
      name: 'Example Page',
      icon: <PlaySquareOutlined />,
    },
  ],
};

export default function MainLayout({ children }: { children: React.ReactNode }) {
  return (
    <ProLayout
      title="Next.js + Ant Design"
      logo="/nextlogo.svg"
      style={{ minHeight: '100vh' }}
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
