import { ReactElement } from 'react';
import styled from 'styled-components';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import { TeamLandingProps } from '../../../utils/interfaces';
import { map } from 'lodash';

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

const LogoWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-around;
    height: 100%;

    @media screen and (max-width: 960px) {
        margin-top: 40px;
    }

    @media screen and (max-width: 575px) {
        flex-direction: column;
        margin-bottom: 50px;
    }

    img {
        max-height: 96px;
        max-width: 200px;
        height: auto;

        @media screen and (max-width: 575px) {
            margin-bottom: 30px;
        }
    }
`;

interface VisionSectionProps {
    teamLandingData: TeamLandingProps;
}

function VisionSection({ teamLandingData }: VisionSectionProps): ReactElement {
    return (
        <VisionSectionWrapper>
            <Container>
                <Grid container>
                    <Grid item md={6} xs={12}>
                        <TitleGroup>
                            <h4>{teamLandingData?.visionSection?.text1}</h4>
                            <h2>{teamLandingData?.visionSection?.text2}</h2>
                            <p>{teamLandingData?.visionSection?.text3}</p>
                            <CustomButton
                                onClick={() => {
                                    window.location.href = teamLandingData?.visionSection?.button1?.redirectUrl;
                                }}
                            >
                                {teamLandingData?.visionSection?.button1?.text}
                            </CustomButton>
                        </TitleGroup>
                    </Grid>
                    <Grid item md={6} xs={12}>
                        <LogoWrapper>
                            {map(teamLandingData?.logos, (item, index) => (
                                <a key={index} target="_blank" href={item?.redirectUrl}>
                                    <img src={item?.imageUrl.downloadURL} alt="logo_1" />
                                </a>
                            ))}
                        </LogoWrapper>
                    </Grid>
                </Grid>
            </Container>
        </VisionSectionWrapper>
    );
}

export default VisionSection;
