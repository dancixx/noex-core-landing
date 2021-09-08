import { ReactElement } from 'react';
import styled from 'styled-components';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import { TeamLandingProps } from '../../../utils/interfaces';

const HeroWrapper = styled.div`
    position: relative;
    overflow: hidden;

    @media screen and (max-width: 599px) {
        margin-top: 61px;
    }
`;

const TitleGroup = styled.div`
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;

    h1 {
        font-family: 'Montserrat';
        font-style: normal;
        font-weight: bold;
        font-size: 63px;
        line-height: 75px;
        margin-bottom: 36px;

        @media screen and (max-width: 599px) {
            color: white;
        }
    }

    p {
        font-family: 'Inter';
        font-style: normal;
        font-weight: 400;
        font-size: 18px;
        margin-top: 0;
        line-height: 27px;
        margin-bottom: 30px;

        @media screen and (max-width: 599px) {
            color: white !important;
            font-size: 15px;
            line-height: 20px;
            margin-bottom: 20px;

            span,
            strong,
            a {
                color: white !important;
                font-size: 15px;
                line-height: 20px;
            }
        }
    }

    button {
        background-color: black;
        min-width: 200px;
        width: 200px;
        color: white;
        padding-left: 20px;
        padding-right: 20px;
        height: 46px;
        background: #000000;
        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
        border-radius: 4px;
        border: 1px solid black;
        margin-bottom: 30px;
        font-family: 'Inter';
        font-style: normal;
        font-weight: 500;
        font-size: 20px;
        line-height: 40px;
        cursor: pointer;
        transition: all 0.2s ease-out;

        &:hover {
            background-color: #ed1e79;
            border-color: #ed1e79;
        }

        @media screen and (max-width: 599px) {
            margin-bottom: 20px;
            background-color: #ed1e79;
            border-color: #ed1e79;

            &:hover {
                background-color: #000000;
                border-color: #000000;
            }
        }
    }

    @media screen and (max-width: 1199px) {
        h1 {
            font-size: 33px;
            line-height: 40px;
            margin-bottom: 25px;
        }
    }

    @media screen and (max-width: 599px) {
        height: auto;
        padding: 15px;
        position: relative;
        z-index: 1;
        min-height: 600px;
        justify-content: flex-end;
        padding-top: 40px;
    }
`;

const CustomButton = styled.button`
    background-color: black;
    min-width: 200px;
    width: 200px;
    color: white;
    padding-left: 20px;
    padding-right: 20px;
    height: 46px;
    background: #000000;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 4px;
    border: 1px solid black;
    margin-bottom: 30px;
    font-family: 'Inter';
    font-style: normal;
    font-weight: 500;
    font-size: 20px;
    line-height: 40px;
    cursor: pointer;
    transition: all 0.2s ease-out;

    &:hover {
        background-color: #ed1e79;
        border-color: #ed1e79;
    }
`;

const CustomP = styled.p`
    font-family: 'Montserrat' !important;
    font-style: normal !important;
    font-weight: 600 !important;
    font-size: 14px !important;
    line-height: 21px !important;
    color: #000000 !important;
    opacity: 0.5 !important;
    margin: 0 !important;

    @media screen and (max-width: 599px) {
        color: white !important;
        opacity: 1 !important;
    }
`;

const HeaderPicture = styled.div`
    position: absolute;
    left: 50%;
    top: 0;
    bottom: 0;
    right: 0;
    background-position: top center;
    background-repeat: no-repeat;
    background-size: cover;

    @media screen and (max-width: 599px) {
        left: 0;
    }
`;

const LayerWrapper = styled.div`
    background: linear-gradient(270deg, rgba(255, 255, 255, 0) 3.03%, #ffffff 97.17%);
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 45%;

    @media screen and (max-width: 599px) {
        background: linear-gradient(0deg, #000000 0%, rgba(0, 0, 0, 0) 100%);
        opacity: 0.89;
        right: 0;
        top: 117px;
    }
`;

interface HeroProps {
    teamLandingData: TeamLandingProps;
}

function Hero({ teamLandingData }: HeroProps): ReactElement {
    return (
        <HeroWrapper>
            <HeaderPicture
                style={{
                    backgroundImage: `url("${teamLandingData?.hero?.headerImageUrl?.downloadURL}")`,
                }}
            >
                <LayerWrapper></LayerWrapper>
            </HeaderPicture>
            <Container>
                <Grid container>
                    <Grid item sm={5} xs={12}>
                        <TitleGroup>
                            <div
                                dangerouslySetInnerHTML={{
                                    __html: teamLandingData?.hero?.text1,
                                }}
                            ></div>
                            <div
                                dangerouslySetInnerHTML={{
                                    __html: teamLandingData?.hero?.text2,
                                }}
                            ></div>
                            <CustomButton
                                type="button"
                                onClick={() => {
                                    window.location.href = teamLandingData?.hero?.button1?.redirectUrl;
                                }}
                            >
                                {teamLandingData?.hero?.button1?.text}
                            </CustomButton>
                            <CustomP>{teamLandingData?.hero?.text3}</CustomP>
                        </TitleGroup>
                    </Grid>
                </Grid>
            </Container>
        </HeroWrapper>
    );
}

export default Hero;
