import { ReactElement } from 'react';
import styled from 'styled-components';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import { Button } from '@material-ui/core';
import { map } from 'lodash';
import { TeamLandingProps } from '../../../utils/interfaces';
import ScrollAnimation from 'react-animate-on-scroll';
import 'animate.css/animate.min.css';

const PlanSectionWrapper = styled.div`
    padding-top: 100px;
    padding-bottom: 100px;
    background-color: #2b2b2b;
`;

const CardInfoWrapper = styled.div`
    position: relative;
`;

const PlanWrapper = styled.div`
    background: black;
    text-align: center;
    padding: 30px;
    border-radius: 8px;
    height: calc(100% - 60px);

    @media screen and (max-width: 991px) {
        margin-bottom: 0;
    }

    h2 {
        font-family: 'Montserrat';
        font-style: normal;
        font-weight: 900;
        font-size: 32px;
        line-height: 32px;
        color: white;
        margin-bottom: 20px;
        margin-top: 5px;
        text-align: left;

        @media screen and (max-width: 575px) {
            font-size: 35px;
            line-height: 40px;
        }

        span {
            font-size: 16px;
            line-height: 20px;
        }
    }

    h3 {
        font-family: 'Montserrat';
        font-style: normal;
        font-weight: 600;
        font-size: 21px;
        line-height: 32px;
        text-align: center;
        color: white;
        margin: 0;
        text-align: left;

        @media screen and (max-width: 575px) {
            font-size: 20px;
            line-height: 20px;
        }
    }

    h4 {
        font-family: 'Montserrat';
        font-style: normal;
        font-weight: 900;
        font-size: 16px;
        line-height: 20px;
        text-transform: uppercase;
        margin-bottom: 14px;
    }

    button {
        width: 100%;
        background-color: rgb(237, 30, 121);
        border-radius: 4px;
        font-family: 'Montserrat', sans-serif;
        color: #fff;
        font-style: normal;
        font-weight: 700;
        font-size: 18px;
        line-height: 29px;
        padding-top: 13px;
        padding-bottom: 13px;
        cursor: pointer;
        border: 2px solid rgb(237, 30, 121);
        transition: all 0.2s ease-out;
        margin-bottom: 30px;

        &:hover {
            background-color: black;
            color: white;
            border-color: white;
        }

        &.whiteBg {
            background-color: black;
            color: white;
            border-color: white;

            &:hover {
                border: 2px solid rgb(237, 30, 121);
                color: rgb(237, 30, 121);
            }
        }
    }

    h6 {
        font-family: 'Montserrat';
        font-style: normal;
        font-weight: 600;
        font-size: 16px;
        line-height: 20px;
        margin-top: 30px;
        margin-bottom: 10px;
        text-align: left;
        color: white;
    }

    p {
        font-family: 'Inter';
        font-style: normal;
        font-weight: 500;
        font-size: 14px;
        line-height: 20px;
        margin-bottom: 5px;
        text-align: left;
        color: white;

        svg {
            margin-right: 10px;
            margin-bottom: -5px;
            color: white;
        }
    }
`;

const CustomButton = styled(Button)`
    width: 100%;
    background-color: rgb(237, 30, 121);
    border-radius: 4px;
    font-family: 'Montserrat', sans-serif;
    color: #fff;
    font-style: normal;
    font-weight: 700;
    font-size: 18px;
    line-height: 29px;
    padding-top: 13px;
    padding-bottom: 13px;
    cursor: pointer;
    border: 2px solid rgb(237, 30, 121);
    transition: all 0.2s ease-out;
    margin-bottom: 30px;

    &:hover {
        background-color: black;
        color: white;
        border-color: white;
    }

    &.whiteBg {
        background-color: black;
        color: white;
        border-color: white;

        &:hover {
            border: 2px solid rgb(237, 30, 121);
            color: rgb(237, 30, 121);
        }
    }
`;

interface PlanSectionProps {
    teamLandingData: TeamLandingProps;
}

function PlanSection({ teamLandingData }: PlanSectionProps): ReactElement {
    return (
        <PlanSectionWrapper>
            <Container>
                <Grid
                    container
                    spacing={6}
                    style={{
                        justifyContent: 'center',
                    }}
                >
                    {map(teamLandingData?.planSection, (item, index) => {
                        return (
                            <Grid item xs={12} md={4} key={index}>
                                <ScrollAnimation animateOnce={true} animateIn="animate__fadeInUp" duration={0.8}>
                                    <PlanWrapper>
                                        <CardInfoWrapper>
                                            <h3>{item?.text1}</h3>
                                            <h2>
                                                {item?.text2}
                                                <span style={{ marginLeft: 15 }}>{item?.text3}</span>
                                            </h2>
                                        </CardInfoWrapper>
                                        <CustomButton
                                            fullWidth
                                            variant="contained"
                                            color="primary"
                                            className="whiteBg"
                                            onClick={() => {
                                                window.location.href = item?.button1?.redirectUrl;
                                            }}
                                        >
                                            {item?.button1?.text}
                                        </CustomButton>

                                        <div
                                            style={{
                                                borderBottom: '1px solid white',
                                            }}
                                        ></div>
                                        <div style={{ display: 'flex' }}>
                                            <h6>{item?.text4}</h6>
                                        </div>
                                        {map(item?.text4SubLines, (item, index: string) => (
                                            <p key={index}>
                                                <CheckCircleIcon />
                                                {item?.text}
                                            </p>
                                        ))}
                                    </PlanWrapper>
                                </ScrollAnimation>
                            </Grid>
                        );
                    })}
                </Grid>
            </Container>
        </PlanSectionWrapper>
    );
}

export default PlanSection;
