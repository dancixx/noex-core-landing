// core imports
import { ReactElement } from "react";
import styled from "styled-components";

// component imports
import { TeamLandingProps } from "../../../utils/interfaces";
import szeu from "../../../images/szechenyi-eu.png";
import hiventures from "../../../images/hiventures-logo.png";

const FooterWrapper = styled.div`
    background-color: black;
    margin-bottom: -4px;
`;

const AppLinkWrapper = styled.div`
    width: 33%;
    display: flex;
    align-items: center;
    padding-right: 75px;

    @media screen and (max-width: 1219px) {
        padding-right: 30px;
    }

    @media screen and (max-width: 991px) {
        padding-right: 0;
        width: 100%;
        justify-content: center;
    }

    img {
        width: 169px;
        height: auto;
        margin: 0 15px;
        cursor: pointer;

        @media screen and (max-width: 1219px) {
            width: 130px;
        }
    }
`;

const TopFooterSection = styled.div`
    display: flex;
    align-items: center;
    padding-top: 30px;

    @media screen and (max-width: 991px) {
        flex-direction: column;
        margin-bottom: 20px;
    }
`;

const BottomFooterSection = styled.div`
    padding-bottom: 10px;
    padding-top: 10px;
    text-align: center;
    width: 100%;

    p {
        text-align: center;
        font-family: Montserrat;
        font-style: normal;
        font-weight: 300;
        font-size: 15px;
        line-height: 18px;
        color: #ffffff;
        margin: 0;
    }
`;

const LogoWrapper = styled.div`
    width: 33%;
    display: flex;
    align-items: center;
    padding-left: 75px;

    img {
        width: 132px;
    }

    @media screen and (max-width: 1219px) {
        padding-left: 30px;
    }

    @media screen and (max-width: 991px) {
        padding-left: 0;
        justify-content: center;
        margin-bottom: 30px;
        width: 100%;
    }
`;

const RealWrapper = styled.div`
    margin-left: 53px;
    position: relative;

    &:before {
        content: "";
        height: 56px;
        width: 1px;
        background-color: white;
        left: -24px;
        top: 50%;
        transform: translateY(-50%);
        position: absolute;
    }

    p {
        color: white;
        font-family: "Montserrat";
        font-style: normal;
        font-weight: 500;
        font-size: 19px;
        line-height: 23px;
        margin: 0;

        @media screen and (max-width: 1219px) {
            font-size: 13px;
        }
    }
`;

const SupportWrapper = styled.div`
    width: 33%;
    padding-left: 50px;

    @media screen and (max-width: 991px) {
        padding-left: 0;
        text-align: center;
        margin-bottom: 30px;
    }

    h5 {
        color: white;
        font-family: Montserrat;
        font-style: normal;
        font-weight: bold;
        font-size: 16px;
        line-height: 20px;
        margin-bottom: 17px;
        margin-top: 0;
    }

    p,
    a {
        margin-bottom: 5px;
        font-family: Montserrat;
        font-style: normal;
        font-weight: 500;
        font-size: 16px;
        line-height: 20px;
        color: #ffffff;
        opacity: 0.7;
        cursor: pointer;
        transition: all 0.2s ease-out;
        margin-top: 0;
        text-decoration: none;

        &:hover {
            opacity: 1;
            text-decoration: none;
        }

        &:last-child {
            margin-bottom: 0;
        }
    }
`;

const SupportLogoWrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    @media screen and (max-width: 991px) {
        display: flex;
        flex-direction: column;

        a {
            align-self: flex-end;
        }
    }
`;

interface FooterProps {
    teamLandingData: TeamLandingProps;
}

function Footer({ teamLandingData }: FooterProps): ReactElement {
    return (
        <FooterWrapper>
            <TopFooterSection>
                <LogoWrapper>
                    <img src={teamLandingData?.footer?.logoUrl?.downloadURL} alt="logo" />
                    <RealWrapper>
                        <p>{teamLandingData?.footer?.text1}</p>
                        <p>{teamLandingData?.footer?.text2}</p>
                    </RealWrapper>
                </LogoWrapper>

                <SupportWrapper>
                    <h5>{teamLandingData?.footer?.text3?.text}</h5>
                    <p
                        onClick={() => {
                            window.location.href =
                                "http://support.noextraining.com/en/articles/5133917-terms-conditions";
                        }}
                    >
                        Terms of Service
                    </p>
                    <p
                        onClick={() => {
                            window.location.href = "http://support.noextraining.com/en/articles/5133928-privacy-policy";
                        }}
                    >
                        Privacy Policy
                    </p>
                    <a href={`mailto:${teamLandingData?.footer?.text5?.redirectUrl}`}>
                        {teamLandingData?.footer?.text5?.text}
                    </a>
                </SupportWrapper>

                <AppLinkWrapper>
                    <div
                        onClick={() => {
                            window.location.href = teamLandingData?.footer?.appleLogoRedirectUrl;
                        }}
                    >
                        <img alt="SliderPicture" src={teamLandingData?.footer?.appleLogoUrl?.downloadURL} />
                    </div>
                    <div
                        onClick={() => {
                            window.location.href = teamLandingData?.footer?.googleLogoRedirectUrl;
                        }}
                    >
                        <img alt="SliderPicture" src={teamLandingData?.footer?.googleLogoUrl?.downloadURL} />
                    </div>
                </AppLinkWrapper>
            </TopFooterSection>

            <BottomFooterSection>
                <p>{teamLandingData?.footer?.text6?.text}</p>
            </BottomFooterSection>
            <SupportLogoWrapper>
                <img src={hiventures} style={{ height: 283 * 0.4, width: 900 * 0.4 }} />
                <a
                    target="_blank"
                    href="http://support.noextraining.com/en/articles/6277927-szechenyi-2020-tajekoztatasi-kotelezettseg"
                >
                    <img src={szeu} style={{ height: 152, width: 349 * (152 / 241) }} />
                </a>
            </SupportLogoWrapper>
        </FooterWrapper>
    );
}

export default Footer;
