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
    padding-left: 50px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 100%;

    @media screen and (max-width: 1279px) {
        padding-right: 15px;
    }

    @media screen and (max-width: 960px) {
        padding-left: 15px;
        margin-bottom: 30px;
    }

    h2 {
        font-family: 'Montserrat';
        font-style: normal;
        font-weight: 700;
        font-size: 33px;
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
        font-size: 19px;
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

const CustomButton = styled.button`
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
`;

const CustomImg = styled.img`
    width: 100%;
    height: auto;
`;

const TextGrid = styled(Grid)`
    @media screen and (max-width: 960px) {
        order: 2;
    }
`;

const ImageGrid = styled(Grid)``;

interface ImageLeftProps {
    teamLandingData: TeamLandingProps;
}

function ImageLeft({ teamLandingData }: ImageLeftProps): ReactElement {
    return (
        <VisionSectionWrapper>
            <Container>
                <Grid container spacing={0}>
                    <ImageGrid item md={7} xs={12}>
                        <CustomImg src={teamLandingData?.imageLeft?.imageUrl?.downloadURL} alt="rightimage" />
                    </ImageGrid>
                    <TextGrid item md={5} xs={12}>
                        <TitleGroup>
                            <h2>{teamLandingData?.imageLeft?.text1}</h2>
                            <p>{teamLandingData?.imageLeft?.text2}</p>
                            <CustomButton
                                onClick={() => {
                                    window.location.href = teamLandingData?.imageLeft?.button1?.redirectUrl;
                                }}
                            >
                                {teamLandingData?.imageLeft?.button1?.text}
                            </CustomButton>
                        </TitleGroup>
                    </TextGrid>
                </Grid>
            </Container>
        </VisionSectionWrapper>
    );
}

export default ImageLeft;
