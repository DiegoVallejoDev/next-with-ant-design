import Head from 'next/head'
import { useRouter } from 'next/router'
import { Result, Button } from 'antd'
import HttpStatus from 'http-status-codes'

function CustomError({ statusCode }) {
    const router = useRouter()
    return (<>
        <Head>
            <title>Error {statusCode}</title>
            <meta name="robots" content="noindex" />
        </Head>
        <Result
            status={statusCode}
            title={`Error ${statusCode}`}
            subTitle={HttpStatus.getStatusText(statusCode)}
            extra={<Button
                size="large"
                type="primary"
                onClick={() => router.push('/')}>
                Back Home
                </Button>
            }
        />
    </>);
}

function getInitialProps({ res, err }) {
    let statusCode;
    // If the res variable is defined it means nextjs
    // is in server side
    if (res) {
        statusCode = res.statusCode;
    } else if (err) {
        // if there is any error in the app it should
        // return the status code from here
        statusCode = err.statusCode;
    } else {
        // Something really bad/weird happen and status code
        // cannot be determined.
        statusCode = null;
    }
    return { statusCode };
}

CustomError.getInitialProps = getInitialProps;

export default CustomError;