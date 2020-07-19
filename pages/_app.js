import { useRouter } from 'next/router'
import Head from 'next/head'
import Link from 'next/link'
import 'antd/dist/antd.css'
import '../styles.css'
import { Layout, Menu, PageHeader } from 'antd';
import { MailOutlined, UploadOutlined, HomeOutlined, HeartOutlined, CloseCircleOutlined } from '@ant-design/icons'


const { SubMenu } = Menu;
const { Header, Content, Footer, Sider } = Layout;

function MyApp({ Component, pageProps }) {
    const router = useRouter()
    return <>
        <Head>
            <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        </Head>
        <Layout style={{ minHeight: 'calc(100vh)' }}>
            <Sider
                breakpoint="lg"
                collapsedWidth="0"
                onBreakpoint={broken => {
                    console.log(broken);
                }}
                onCollapse={(collapsed, type) => {
                    console.log(collapsed, type);
                }}
            >
                <div className="logo" >Next.js + antD</div>
                <Menu theme="dark" mode="inline" defaultSelectedKeys={['4']}>
                    <Menu.Item key="1" icon={<HomeOutlined />}>
                        <Link href="/">
                            <a>Home</a>
                        </Link>
                    </Menu.Item>
                    <Menu.Item key="2" icon={<HeartOutlined />}>
                        
                        <Link href="/support">
                            <a>Support us</a>
                        </Link>
                    </Menu.Item>
                    <Menu.Item key="3" icon={<CloseCircleOutlined />}>
                        <Link href="/fake">
                            <a>Error Page</a>
                        </Link>
                    </Menu.Item>
                    <SubMenu key="sub1" icon={<MailOutlined />} title="Navigation Dropdown">
                        <Menu.Item key="4">Option 0</Menu.Item>
                        <Menu.Item key="5">Option 1</Menu.Item>
                        <Menu.Item key="6">Option 2</Menu.Item>
                        <Menu.Item key="7">Option 3</Menu.Item>
                        <Menu.Item key="8">Option 4</Menu.Item>
                    </SubMenu>
                </Menu>
            </Sider>
            <Layout>
                <PageHeader
                    className="site-page-header"
                    onBack={() => router.push('/')}
                    title={router.asPath}
                    subTitle=''
                />

                <Content style={{ margin: '0px 16px 0' }}>
                    <div className="site-layout-background" style={{ padding: 24, minHeight: 360 }}>
                        <Component {...pageProps} />
                    </div>
                </Content>
                <Footer style={{ textAlign: 'center' }}>Next.js + Ant Dessign Boilerplate ©2020 Created by <a href="https://github.com/Destructor1702" >Diego Vallejo</a></Footer>
            </Layout>
        </Layout>



    </>
}

// Only uncomment this method if you have blocking data requirements for
// every single page in your application. This disables the ability to
// perform automatic static optimization, causing every page in your app to
// be server-side rendered.
//
// MyApp.getInitialProps = async (appContext) => {
//   // calls page's `getInitialProps` and fills `appProps.pageProps`
//   const appProps = await App.getInitialProps(appContext);
//
//   return { ...appProps }
// }

export default MyApp