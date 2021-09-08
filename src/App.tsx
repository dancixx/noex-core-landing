// core imports
import { Dispatch, Fragment, ReactElement, SetStateAction, useEffect, useState } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { hotjar } from 'react-hotjar';
import { isEmpty } from 'lodash';
import ReactPixel from 'react-facebook-pixel';

// component imports
import { TeamLandingProps } from './utils/interfaces';
import Home from './components/Home/Home';

const options = {
    autoConfig: true, // set pixel's autoConfig. More info: https://developers.facebook.com/docs/facebook-pixel/advanced/
    debug: process.env.NODE_ENV === 'development' ? true : false, // enable logs
};

interface AppProps {}

function App({}: AppProps): ReactElement {
    const [data, setData]: [TeamLandingProps, Dispatch<SetStateAction<TeamLandingProps>>] = useState<TeamLandingProps>(Object);

    useEffect(() => {
        fetch('https://us-central1-connect-web-590a1.cloudfunctions.net/teamLandingEndpoint', {
            method: 'POST',
            mode: 'cors',
            headers: {
                'Access-Control-Allow-Origin': '*',
            },
            body: JSON.stringify({ host: window.location.origin }),
        })
            .then(async (response) => {
                const { data }: { data: TeamLandingProps } = await response.json();
                setData(data);
            })
            .catch((error) => console.log(error));
    }, [window.location.origin]);

    useEffect(() => {
        if (isEmpty(data) === false) {
            hotjar.initialize(data?.hotjar?.hjid, data?.hotjar?.hjsv);
            ReactPixel.init(data?.fbPixelId, undefined, options);
            ReactPixel.pageView();
            ReactPixel.fbq('track', 'PageView');
        }
    }, [data]);

    return (
        <Fragment>
            <Helmet>
                <title>{data?.header?.teamName}</title>
            </Helmet>
            <Router>
                <Route children={<Home data={data} />} exact={true} path="/" />
            </Router>
        </Fragment>
    );
}

export default App;
