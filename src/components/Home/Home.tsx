import { Dispatch, lazy, ReactElement, SetStateAction, Suspense, useEffect, useState } from 'react';
import { useCookies } from 'react-cookie';
import ScrollAnimation from 'react-animate-on-scroll';
import styled from 'styled-components';
import 'animate.css/animate.min.css';
import Header from './homeComponents/Header';
import Hero from './homeComponents/Hero';
import { TeamLandingProps } from '../../utils/interfaces';
import _, { isEmpty } from 'lodash';
import SideBar from './homeComponents/SideBar';

const VisionSection = lazy(() => import('./homeComponents/VisionSection'));
const NewThreeKeyFeatures = lazy(() => import('./homeComponents/NewThreeKeyFeatures'));
const NewVideoMarkupSection = lazy(() => import('./homeComponents/NewVideoMarkupSection'));
const NewVisionSection = lazy(() => import('./homeComponents/NewVisionSection'));
const GridLayout = lazy(() => import('./homeComponents/GridLayout'));
const Noex = lazy(() => import('./homeComponents/Noex'));
const PlanSection = lazy(() => import('./homeComponents/PlanSection'));
const NoexSecond = lazy(() => import('./homeComponents/NoexSecond'));
const ImageRight = lazy(() => import('./homeComponents/ImageRight'));
const ImageLeft = lazy(() => import('./homeComponents/ImageLeft'));
const BeforeAfter = lazy(() => import('./homeComponents/BeforeAfter'));
const BigVideo = lazy(() => import('./homeComponents/BigVideo'));
const Footer = lazy(() => import('./homeComponents/Footer'));
const BeforeAfterMe = lazy(() => import('./homeComponents/BeforeAfterMe'));
const AboutMe = lazy(() => import('./homeComponents/AboutMe'));
const ProgramSlider = lazy(() => import('./homeComponents/ProgramSlider'));

const CookieBar = styled.div`
    position: fixed;
    bottom: 0;
    padding: 15px 30px;
    left: 0;
    right: 0;
    background-color: rgba(0, 0, 0, 0.8);
    z-index: 100;
    display: flex;
    align-items: center;

    @media screen and (max-width: 575px) {
        align-items: center;
        flex-direction: column;
    }

    p {
        color: white;
        font-family: 'Inter';
        margin-right: 20px;

        @media screen and (max-width: 575px) {
            text-align: center;
            margin-right: 0;
        }

        a {
            color: white;
            text-decoration: underline;
        }
    }

    button {
        margin-left: auto;
        min-width: 145px;
        height: 35px;
        width: 145px;
        background-color: rgb(237, 30, 121);
        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
        border-radius: 38px;
        font-family: 'Inter';
        font-style: normal;
        font-weight: 500;
        font-size: 12px;
        line-height: 29px;
        color: #fff;
        padding: 0 20px;
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
            margin: auto;
        }
    }
`;

interface HomeProps {
    data: TeamLandingProps;
}

function Home({ data }: HomeProps): ReactElement {
    const [cookies, setCookie] = useCookies(['name']);
    const [isCookiesVisible, setIsCookiesVisible]: [boolean, Dispatch<SetStateAction<boolean>>] = useState<boolean>(false);

    useEffect(() => {
        if (
            cookies.hasOwnProperty('_gdpr') === false ||
            cookies.hasOwnProperty('_payment') === false ||
            cookies.hasOwnProperty('_tracking') === false
        ) {
            setIsCookiesVisible(true);
        }
    }, [cookies]);

    return (
        <div
            style={{
                overflow: 'hidden',
                backgroundColor: '#ffffff',
            }}
        >
            <SideBar teamLandingData={data} />
            <Header teamLandingData={data} />
            <Hero teamLandingData={data} />
            {isCookiesVisible === true ? (
                <CookieBar>
                    <p>
                        This website uses cookies to ensure you get the best experience on our website. <a href="/">Cookies Policy</a>
                    </p>
                    <button
                        onClick={() => {
                            setCookie('_gdpr', true, {
                                expires: new Date(new Date().setMonth(new Date().getMonth() + 1)),
                            });
                            setCookie('_payment', true, {
                                expires: new Date(new Date().setMonth(new Date().getMonth() + 1)),
                            });
                            setCookie('_tracking', true, {
                                expires: new Date(new Date().setMonth(new Date().getMonth() + 1)),
                            });
                            setIsCookiesVisible(false);
                        }}
                    >
                        SET COOKIES
                    </button>
                </CookieBar>
            ) : null}
            <Suspense fallback={<div></div>}>
                <ScrollAnimation animateOnce={true} animateIn="animate__fadeInUp" duration={0.8}>
                    <VisionSection teamLandingData={data} />
                </ScrollAnimation>
                <ScrollAnimation animateOnce={true} animateIn="animate__fadeInUp" duration={0.8}>
                    <NewThreeKeyFeatures teamLandingData={data} />
                </ScrollAnimation>
                <NewVideoMarkupSection teamLandingData={data} />
                <ScrollAnimation animateOnce={true} animateIn="animate__fadeInUp" duration={0.8}>
                    <NewVisionSection teamLandingData={data} />
                </ScrollAnimation>
                <GridLayout teamLandingData={data} />
                {typeof data?.programSection !== 'undefined' &&
                    typeof data.programSection?.programs !== 'undefined' &&
                    Object.keys(data.programSection?.programs)?.length > 0 && <ProgramSlider teamLandingData={data} />}
                <Noex teamLandingData={data} />
                <PlanSection teamLandingData={data} />
                <NoexSecond teamLandingData={data} />
                {typeof data?.imageRight2 !== 'undefined' && !_.isEmpty(data?.imageRight2?.imageUrl) && (
                    <ScrollAnimation animateOnce={true} animateIn="animate__fadeInUp" duration={0.8}>
                        <AboutMe teamLandingData={data} />
                    </ScrollAnimation>
                )}
                {typeof data?.imageLeft2 !== 'undefined' && !_.isEmpty(data?.imageLeft2?.imageUrl) && (
                    <ScrollAnimation animateOnce={true} animateIn="animate__fadeInUp" duration={0.8}>
                        <BeforeAfterMe teamLandingData={data} />
                    </ScrollAnimation>
                )}
                <ScrollAnimation animateOnce={true} animateIn="animate__fadeInUp" duration={0.8}>
                    <ImageRight teamLandingData={data} />
                </ScrollAnimation>
                <ScrollAnimation animateOnce={true} animateIn="animate__fadeInUp" duration={0.8}>
                    <ImageLeft teamLandingData={data} />
                </ScrollAnimation>
                {isEmpty(data?.beforeAfter) ? null : <BeforeAfter teamLandingData={data} />}
                {
                    // @ts-ignore
                    data?.bigVideo?.videoUrl === '' ? null : <BigVideo teamLandingData={data} />
                }
                <Footer teamLandingData={data} />
            </Suspense>
        </div>
    );
}

export default Home;
