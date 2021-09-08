import { ReactElement } from 'react';
import styled from 'styled-components';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import ScrollAnimation from 'react-animate-on-scroll';
import 'animate.css/animate.min.css';

import { TeamLandingProps } from '../../../utils/interfaces';

const GridContainer = styled.div`
    margin-top: 80px;
    margin-bottom: 100px;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: 1fr 1fr 1fr;
    gap: 32px 32px;
    grid-template-areas:
        'small-left big-div big-div'
        'big-left big-div big-div'
        'big-left small-right-1 small-right-2';
    height: 700px;

    @media screen and (max-width: 575px) {
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-template-rows: 4.6fr 1.2fr 0.2fr 1.6fr 0.6fr;
        gap: 12px 12px;
        grid-template-areas:
            'big-div big-div'
            'small-left small-right-1'
            'big-left small-right-1'
            'big-left small-right-2'
            'big-left .';
        height: 600px;
    }
`;

const BigDiv = styled(ScrollAnimation)`
    grid-area: big-div;
    box-shadow: 0px 4px 14px 5px rgba(0, 0, 0, 0.07);
    border-radius: 4px;
    background-position: center;
    background-repeat: no-repeat;
    background-size: contain;
`;

const SmallLeft = styled(ScrollAnimation)`
    grid-area: small-left;
    box-shadow: 0px 4px 14px 5px rgba(0, 0, 0, 0.07);
    border-radius: 4px;
    background-position: center;
    background-repeat: no-repeat;
    background-size: contain;
`;

const BigLeft = styled(ScrollAnimation)`
    grid-area: big-left;
    background-position: center;
    background-repeat: no-repeat;
    background-size: contain;
`;

const SmallRight1 = styled(ScrollAnimation)`
    grid-area: small-right-1;
    box-shadow: 0px 4px 14px 5px rgba(0, 0, 0, 0.07);
    border-radius: 4px;
    background-position: center;
    background-repeat: no-repeat;
    background-size: contain;
`;

const SmallRight2 = styled(ScrollAnimation)`
    grid-area: small-right-2;
    box-shadow: 0px 4px 14px 5px rgba(0, 0, 0, 0.07);
    border-radius: 4px;
    background-position: center;
    background-repeat: no-repeat;
    background-size: contain;
`;

interface GridLayoutProps {
    teamLandingData: TeamLandingProps;
}

function GridLayout({ teamLandingData }: GridLayoutProps): ReactElement {
    return (
        <Container>
            <Grid container>
                <Grid item xs={12}>
                    <GridContainer>
                        <BigDiv
                            style={{
                                backgroundImage: `url("${teamLandingData?.gridSection?.imageUrl1?.downloadURL}")`,
                            }}
                            animateOnce={true}
                            animateIn="animate__fadeInUp"
                            duration={0.8}
                        ></BigDiv>
                        <SmallLeft
                            style={{
                                backgroundImage: `url("${teamLandingData?.gridSection?.imageUrl2?.downloadURL}")`,
                            }}
                            animateOnce={true}
                            animateIn="animate__fadeInUp"
                            duration={0.8}
                        ></SmallLeft>
                        <BigLeft
                            style={{
                                backgroundImage: `url("${teamLandingData?.gridSection?.imageUrl3?.downloadURL}")`,
                            }}
                            animateOnce={true}
                            animateIn="animate__fadeInUp"
                            duration={0.8}
                        ></BigLeft>
                        <SmallRight1
                            style={{
                                backgroundImage: `url("${teamLandingData?.gridSection?.imageUrl4?.downloadURL}")`,
                            }}
                            animateOnce={true}
                            animateIn="animate__fadeInUp"
                            duration={0.8}
                        ></SmallRight1>
                        <SmallRight2
                            style={{
                                backgroundImage: `url("${teamLandingData?.gridSection?.imageUrl5?.downloadURL}")`,
                            }}
                            animateOnce={true}
                            animateIn="animate__fadeInUp"
                            duration={0.8}
                        ></SmallRight2>
                    </GridContainer>
                </Grid>
            </Grid>
        </Container>
    );
}

export default GridLayout;
