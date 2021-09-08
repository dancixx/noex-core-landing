import { ReactElement } from 'react';
import styled from 'styled-components';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import { map } from 'lodash';
import { TeamLandingProps } from '../../../utils/interfaces';

const VisionSectionWrapper = styled.div`
    padding: 54px 0 20px 0;
    background-color: black;

    @media screen and (max-width: 575px) {
        padding: 40px 0 40px 0;
    }
`;

const TitleGroup = styled.div`
    padding-right: 40px;

    height: 100%;

    @media screen and (max-width: 1279px) {
        padding-right: 15px;
        padding-left: 15px;
    }

    h2 {
        font-family: 'Montserrat';
        font-style: normal;
        font-weight: 700;
        font-size: 32px;
        line-height: 40px;
        color: white;
        margin-top: 16px;
        margin-bottom: 38px;

        @media screen and (max-width: 575px) {
        }
    }

    h3 {
        font-weight: 700;
        font-family: 'Montserrat';
        font-style: normal;
        font-size: 20px;
        line-height: 30px;
        color: white;
        margin-top: 0;
        margin-bottom: 10px;
    }

    h4 {
        font-weight: 700;
        font-family: 'Montserrat';
        font-style: normal;
        font-size: 16px;
        line-height: 25px;
        color: white;
        margin: 0;
    }

    h5 {
        font-family: Montserrat;
        font-style: normal;
        font-weight: bold;
        font-size: 19px;
        line-height: 23px;
        color: white;
        margin: 0;
        margin-bottom: 8px;
    }

    p {
        font-family: Inter;
        font-style: normal;
        font-weight: 400;
        font-size: 15px;
        color: white;
        margin: 0;
        margin-bottom: 30px;
    }

    img {
        height: 42px;
        width: 42px;
        margin-bottom: 12px;
    }
`;

interface NoexSecondProps {
    teamLandingData: TeamLandingProps;
}

function NoexSecond({ teamLandingData }: NoexSecondProps): ReactElement {
    return (
        <VisionSectionWrapper>
            <Container>
                <Grid container>
                    <Grid item md={6} xs={12}>
                        <TitleGroup>
                            <h4>{teamLandingData?.visionSection4?.text1}</h4>
                            <h2>{teamLandingData?.visionSection4?.text2}</h2>
                        </TitleGroup>
                    </Grid>
                </Grid>
                <Grid container>
                    {map(teamLandingData?.visionSection4?.keyFeatures, (item, index) => (
                        <Grid item md={3} xs={12} key={index}>
                            <TitleGroup>
                                <h5>{item?.text1}</h5>

                                <p>{item?.text2}</p>
                            </TitleGroup>
                        </Grid>
                    ))}
                </Grid>
            </Container>
        </VisionSectionWrapper>
    );
}

export default NoexSecond;
