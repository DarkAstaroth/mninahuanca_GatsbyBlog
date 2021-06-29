import React from 'react';
import { Helmet } from 'react-helmet';
import '../css/fonts/hk-grotesk/style.css';
import '../css/fonts/fontello/css/fontello.css';
import '../css/main.css';
import '../css/styles.css';

const Layout = (props) => {
    return (
        <>
            <Helmet>
                <title>Welcome! I am mninahuanca</title>
            </Helmet>
            <body >
                {props.children}
            </body>

        </>
    );
}

export default Layout;