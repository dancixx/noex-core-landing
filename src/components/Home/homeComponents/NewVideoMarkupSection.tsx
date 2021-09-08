import { ReactElement } from 'react';
import styled from 'styled-components';
import ReactPlayer from 'react-player';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import { map } from 'lodash';
import pipe from '../../../images/pipe.svg';
import { TeamLandingProps } from '../../../utils/interfaces';

const NewVideoBackgroundWrapper = styled.div`
    background-color: black;
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
        color: #fff;
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
        color: #fff;
        margin-top: 0;
        margin-bottom: 10px;
    }

    h4 {
        font-weight: 700;
        font-family: 'Montserrat';
        font-style: normal;
        font-size: 16px;
        line-height: 25px;
        color: #fff;
        margin: 0;
    }

    p {
        font-weight: 400;
        font-family: 'Inter';
        font-style: normal;
        font-size: 16px;
        line-height: 25px;
        color: #fff;
        margin: 0;
    }

    ul {
        list-style: none;
        padding: 0;

        li {
            font-family: 'Inter';
            margin-bottom: 15px;
            font-size: 15px;
            position: relative;
            font-weight: 400;
            padding-left: 30px;
            color: #fff;

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
        background-color: rgb(237, 30, 121);
        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
        border-radius: 38px;
        font-family: 'Inter';
        font-style: normal;
        font-weight: 500;
        font-size: 20px;
        line-height: 40px;
        color: #fff;
        padding: 0 30px;
        cursor: pointer;
        border: 2px solid rgb(237, 30, 121);
        transition: all 0.2s ease-out;

        &:hover &:active,
        &:focus {
            background-color: rgb(237, 30, 121);
            border-color: rgb(237, 30, 121);
            border: 2px solid rgb(237, 30, 121);
            box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
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
    background-color: rgb(237, 30, 121);
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 38px;
    font-family: 'Inter';
    font-style: normal;
    font-weight: 500;
    font-size: 20px;
    line-height: 40px;
    color: #fff;
    padding: 0 30px;
    cursor: pointer;
    border: 2px solid rgb(237, 30, 121);
    transition: all 0.2s ease-out;

    &:hover &:active,
    &:focus {
        background-color: rgb(237, 30, 121);
        border-color: rgb(237, 30, 121);
        border: 2px solid rgb(237, 30, 121);
        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
        outline: none;
    }

    @media screen and (max-width: 575px) {
        margin-left: auto;
        margin-right: auto;
        width: 270px;
    }
`;

const ReactPlayerWrapper = styled.div`
    padding-left: 40px;

    &:hover {
        .VideoButtonWrapper {
            opacity: 1;
        }
    }

    @media screen and (max-width: 1279px) {
        padding-right: 15px;
        padding-left: 15px;
    }
`;

interface NewVideoMarkupSectionProps {
    teamLandingData: TeamLandingProps;
}

function NewVideoMarkupSection({ teamLandingData }: NewVideoMarkupSectionProps): ReactElement {
    return (
        <NewVideoBackgroundWrapper>
            <Container>
                <Grid container>
                    <Grid item lg={6} xs={12}>
                        <TitleGroup>
                            <h4>{teamLandingData?.videoMarkupSection?.text1}</h4>

                            <h2>{teamLandingData?.videoMarkupSection?.text2}</h2>

                            <p>{teamLandingData?.videoMarkupSection?.text3}</p>

                            <CustomButton
                                onClick={() => {
                                    window.location.href = teamLandingData?.videoMarkupSection?.button1?.redirectUrl;
                                }}
                            >
                                {teamLandingData?.videoMarkupSection?.button1?.text}
                            </CustomButton>

                            <h3>{teamLandingData?.videoMarkupSection?.text4}</h3>

                            <ul>
                                {map(teamLandingData?.videoMarkupSection?.text4SubLines, (item, key) => (
                                    <li key={key}>
                                        <img alt="" src={pipe} />
                                        {item?.text}
                                    </li>
                                ))}
                            </ul>
                        </TitleGroup>
                    </Grid>
                    <Grid item lg={6} xs={12}>
                        <ReactPlayerWrapper>
                            <div
                                style={{
                                    position: 'relative',
                                }}
                            >
                                <ReactPlayer
                                    url={teamLandingData?.videoMarkupSection?.videoUrl?.downloadURL}
                                    muted={true}
                                    height="100%"
                                    width="100%"
                                    loop={true}
                                    playsinline={true}
                                    playing={true}
                                />
                            </div>
                        </ReactPlayerWrapper>
                    </Grid>
                </Grid>
            </Container>
        </NewVideoBackgroundWrapper>
    );
}

export default NewVideoMarkupSection;
