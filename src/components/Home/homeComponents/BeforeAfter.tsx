import { ReactElement } from 'react';
import styled from 'styled-components';
import { map } from 'lodash';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import ScrollAnimation from 'react-animate-on-scroll';

import { TeamLandingProps } from '../../../utils/interfaces';

const VisionSectionWrapper = styled.div`
    padding: 70px 0 65px 0;

    @media screen and (max-width: 575px) {
        padding: 40px 0 40px 0;
    }
`;

const TitleGroup = styled.div`
    padding-right: 40px;
    display: flex;
    flex-direction: column;
    justify-content: center;
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
        color: #131424;
        margin-top: 16px;
        margin-bottom: 18px;

        @media screen and (max-width: 575px) {
        }
    }

    h3 {
        font-weight: 700;
        font-family: 'Montserrat';
        font-style: normal;
        font-size: 20px;
        line-height: 30px;
        color: #131424;
        margin-top: 0;
        margin-bottom: 10px;
    }

    h4 {
        font-weight: 700;
        font-family: 'Montserrat';
        font-style: normal;
        font-size: 16px;
        line-height: 25px;
        color: #131424;
        margin: 0;
    }

    p {
        line-height: 25px;
        margin: 0;
        font-family: 'Inter';
        font-style: normal;
        font-weight: 400;
        font-size: 18px;
        color: #000000;
    }

    ul {
        list-style: none;
        padding: 0;

        li {
            font-family: 'Montserrat';
            margin-bottom: 15px;
            font-size: 15px;
            position: relative;
            font-weight: 500;
            padding-left: 30px;
            color: #131424;

            img {
                position: absolute;
                top: 50%;
                left: 0;
                transform: translateY(-50%);
            }
        }
    }

    button {
        margin-top: 36px;
        margin-bottom: 40px;
        min-width: 172px;
        height: 46px;
        width: 172px;
        background-color: black;
        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
        border-radius: 38px;
        font-family: 'Inter';
        font-style: normal;
        font-weight: 500;
        font-size: 20px;
        line-height: 40px;
        color: #fff;
        cursor: pointer;
        border: 2px solid black;
        transition: all 0.2s ease-out;
        padding: 0 30px;

        &:hover,
        &:focus,
        &:active {
            background-color: rgb(237, 30, 121);
            border-color: rgb(237, 30, 121);
            outline: none;
        }

        @media screen and (max-width: 575px) {
            margin-left: auto;
            margin-right: auto;
            width: 270px;
        }
    }
`;

const CustomButton = styled.button`
    margin-top: 36px;
    margin-bottom: 40px;
    min-width: 172px;
    height: 46px;
    width: 172px;
    background-color: black;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 38px;
    font-family: 'Inter';
    font-style: normal;
    font-weight: 500;
    font-size: 20px;
    line-height: 40px;
    color: #fff;
    cursor: pointer;
    border: 2px solid black;
    transition: all 0.2s ease-out;
    padding: 0 30px;

    &:hover,
    &:focus,
    &:active {
        background-color: rgb(237, 30, 121);
        border-color: rgb(237, 30, 121);
        outline: none;
    }

    @media screen and (max-width: 575px) {
        margin-left: auto;
        margin-right: auto;
        width: 270px;
    }
`;

const ThreeKeyFeaturesWrapper = styled.div`
    position: relative;
    margin-top: 40px;
    padding-bottom: 70px;

    @media screen and (max-width: 959px) {
        margin-top: 60px;
        padding-bottom: 10px;
    }

    @media screen and (max-width: 599px) {
        margin-top: 0;
    }
`;

const ListWrapper = styled.div`
    overflow: hidden;
    overflow-x: scroll;
    padding: 0 calc((100vw - 1315px) / 2) 0;

    ul {
        position: relative;
        white-space: nowrap;
        margin: 30px 0;

        li {
            width: 275px;
            padding-left: 15px;
            padding-right: 15px;
            width: 285px;
            scroll-snap-align: start;
            display: inline-block;
            vertical-align: top;
            min-height: 350px;

            &:first-child {
                padding-left: 0;
            }

            &:last-child {
                padding-right: 30px;
            }
        }
    }
`;

const Feature = styled.div`
    min-height: 280px;
    white-space: normal;
    padding: 24px 20px 41px;
    background: #fff;
    box-shadow: 0 4px 25px rgba(0, 0, 0, 0.15);
    border-radius: 4px;

    @media screen and (max-width: 959px) {
        margin-top: 0;
    }

    h2 {
        font-family: Montserrat;
        font-style: normal;
        font-weight: bold;
        font-size: 21px;
        margin-top: 20px;
        margin-bottom: 20px;
        font-weight: 700;
        line-height: 25px;
    }

    p {
        margin-top: 0;
        margin-bottom: 0;
        color: black;
        font-family: 'Inter';
        font-style: normal;
        font-weight: 400;
        font-size: 15px;
    }

    span {
        color: rgb(237, 30, 121);
    }

    @media screen and (max-width: 575px) {
        margin-left: 0;
        margin-right: 0;
    }
`;

const BigFeatureImgWrapper = styled.div`
    width: 100%;
    height: auto;
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
    background: #fff;
    border-radius: 12px;

    img {
        height: 100%;
        width: auto;
    }
`;

interface BeforeAfterItemProps {
    item: TeamLandingProps['keyFeatures']['0'];
}

function BeforeAfterItem({ item }: BeforeAfterItemProps) {
    return (
        <Feature>
            <BigFeatureImgWrapper>
                <img alt="BeforeAfterImage" src={item?.imageUrl?.downloadURL} />
            </BigFeatureImgWrapper>
            <h2>{item?.text1}</h2>
            <p>{item?.text2}</p>
        </Feature>
    );
}

interface BeforeAfterProps {
    teamLandingData: TeamLandingProps;
}

function BeforeAfter({ teamLandingData }: BeforeAfterProps): ReactElement {
    return (
        <div>
            <ScrollAnimation animateOnce={true} animateIn="animate__fadeInUp" duration={0.8}>
                <VisionSectionWrapper>
                    <Container>
                        <Grid container>
                            <Grid item md={6} xs={12}>
                                <TitleGroup>
                                    <h4>{teamLandingData?.visionSection5?.text1}</h4>
                                    <h2>{teamLandingData?.visionSection5?.text2}</h2>
                                    <p>{teamLandingData?.visionSection5?.text3}</p>
                                    <CustomButton
                                        onClick={() => {
                                            window.location.href = teamLandingData?.visionSection5?.button1?.redirectUrl;
                                        }}
                                    >
                                        {teamLandingData?.visionSection5?.button1?.text}
                                    </CustomButton>
                                </TitleGroup>
                            </Grid>
                        </Grid>
                    </Container>
                </VisionSectionWrapper>
            </ScrollAnimation>
            <ScrollAnimation animateOnce={true} animateIn="animate__fadeInUp" duration={0.8}>
                <ThreeKeyFeaturesWrapper>
                    <ListWrapper>
                        <ul>
                            {map(teamLandingData?.beforeAfter, (item: TeamLandingProps['beforeAfter']['0'], index) => (
                                <li key={index}>
                                    <BeforeAfterItem item={item} />
                                </li>
                            ))}
                        </ul>
                    </ListWrapper>
                </ThreeKeyFeaturesWrapper>
            </ScrollAnimation>
        </div>
    );
}

export default BeforeAfter;
