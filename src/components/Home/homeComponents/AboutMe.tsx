import { ReactElement } from 'react';
import styled from 'styled-components';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import { TeamLandingProps } from '../../../utils/interfaces';

const VisionSectionWrapper = styled.div`
    padding: 200px 0 30px 0;

    @media screen and (max-width: 575px) {
        padding: 40px 0 40px 0;
    }
`;

const TitleGroup = styled.div`
    background: #ffffff;
    box-shadow: 0px 4px 37px 9px rgba(0, 0, 0, 0.07);
    border-radius: 8px;
    padding: 55px 50px 65px 50px;
    transform: translateX(130px);
    position: relative;
    z-index: 10;

    @media screen and (max-width: 575px) {
        padding: 20px;
    }

    &:after {
        content: '';
        position: absolute;
        height: 60px;
        width: 300px;
        bottom: -60px;
        right: 130px;
        background-color: #f3f3f3;
        z-index: -10;

        @media screen and (max-width: 1199px) {
            display: none;
        }
    }

    @media screen and (max-width: 1279px) {
        padding-right: 15px;
    }

    @media screen and (max-width: 960px) {
        transform: none;
    }

    h2 {
        font-family: 'Montserrat';
        font-style: normal;
        font-weight: 700;
        font-style: normal;
        text-transform: uppercase;
        font-size: 53px;
        line-height: 55px;
        color: #131424;
        margin-top: 0;
        margin-bottom: 30px;

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
        font-size: 17px;
        line-height: 25px;
        color: #131424;
        margin: 0;
    }

    p {
        line-height: 25px;
        margin-bottom: 20px;
        font-family: 'Inter';
        font-style: normal;
        font-weight: 400;
        font-size: 17px;
        line-height: 30px;
        color: #000000;

        &:last-child {
            margin: 0;
        }
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
        margin-bottom: 0;
        min-width: 172px;
        height: 46px;
        width: 172px;
        background-color: white;
        box-shadow: none;
        border-radius: 1px;
        font-family: 'Inter';
        font-style: normal;
        font-weight: 500;
        font-size: 20px;
        line-height: 40px;
        color: black;
        cursor: pointer;
        border: 1px solid black;
        transition: all 0.2s ease-out;
        padding: 0 30px;

        &:hover,
        &:focus,
        &:active {
            background-color: white;
            border-color: rgb(237, 30, 121);
            outline: none;
            color: rgb(237, 30, 121);
        }

        @media screen and (max-width: 575px) {
            margin-left: auto;
            margin-right: auto;
            width: 270px;
        }
    }
`;

const CustomImgBg = styled.div`
    width: 100%;
    padding-top: 150%;
    background-position: center center;
    background-repeat: no-repeat;
    background-size: cover;
`;

const TextGrid = styled(Grid)`
    display: flex;
    flex-direction: column;
    justify-content: center;
    position: relative;

    @media screen and (max-width: 960px) {
        order: 2;
    }
`;

const ImageGrid = styled(Grid)``;

interface ImageLeftProps {
    teamLandingData: TeamLandingProps;
}

function AboutMe({ teamLandingData }: ImageLeftProps): ReactElement {
    return (
        <VisionSectionWrapper>
            <Container>
                <Grid
                    style={{
                        justifyContent: 'center',
                    }}
                    container
                    spacing={0}
                >
                    <TextGrid item md={6} xs={12}>
                        <TitleGroup>
                            <h2>{teamLandingData?.imageRight2?.text1}</h2>
                            <div
                                dangerouslySetInnerHTML={{
                                    __html: teamLandingData?.imageRight2?.text2,
                                }}
                            />
                        </TitleGroup>
                    </TextGrid>
                    <ImageGrid item md={6} xs={12}>
                        <CustomImgBg
                            style={{
                                backgroundImage: `url('${teamLandingData?.imageRight2?.imageUrl?.downloadURL}')`,
                            }}
                        ></CustomImgBg>
                    </ImageGrid>
                </Grid>
            </Container>
        </VisionSectionWrapper>
    );
}

export default AboutMe;
