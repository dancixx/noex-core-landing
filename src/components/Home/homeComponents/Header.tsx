import { useState, useEffect, ReactElement } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { TeamLandingProps } from '../../../utils/interfaces';

const HeaderLInkWrapper = styled.div`
    display: flex;
    align-items: center;

    @media screen and (max-width: 991px) {
        display: none;
    }
`;

const HeaderWrapper = styled.div`
    background-color: transparent;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 100;
    transition: all 0.3s ease-out;

    &.HeaderScrolled {
        background-color: white;

        .white-on-scroll {
            color: black;
        }
    }

    @media screen and (max-width: 599px) {
        background-color: white;
    }
`;

const CustomHeader = styled.div`
    display: flex;
    align-items: center;
    height: 100;
    padding: 18px 22px 18px 50px;

    @media screen and (max-width: 599px) {
        padding-left: 30px;
    }
`;

const LogoLink = styled(Link)`
    margin-right: auto;
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 500;
    font-size: 30px;
    line-height: 35px;
    letter-spacing: 8.82px;
    color: #131424;
    text-decoration: none;

    @media screen and (max-width: 768px) {
        font-size: 18px;
        line-height: 25px;
    }
`;

const CustomLink = styled(Link)`
    text-decoration: none;
    margin-right: 26px;
    font-family: Inter;
    color: #fff;
    font-style: normal;
    font-weight: 700;
    font-size: 24;
    line-height: 40px;
    transition: all 0.3s ease-out;
`;

const ButtonLink = styled(Link)`
    width: 171px;
    height: 54px;
    background-color: black;
    font-family: Inter;
    color: #fff;
    font-style: normal;
    font-weight: 700;
    font-size: 24;
    cursor: pointer;
    border: black;
    text-decoration: none;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: all 0.2s ease-out;

    &:hover {
        background-color: #ed1e79;
        border-color: #ed1e79;
    }
`;

interface HeaderProps {
    teamLandingData: TeamLandingProps;
}

function Header({ teamLandingData }: HeaderProps): ReactElement {
    const [hasScrolled, setHasScrolled] = useState(false);

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
    }, []);

    function handleScroll() {
        const scrollTop = window.pageYOffset;
        if (scrollTop > 50) {
            setHasScrolled(true);
        } else {
            setHasScrolled(false);
        }
    }
    return (
        <HeaderWrapper className={hasScrolled ? 'Header HeaderScrolled' : 'Header'}>
            <CustomHeader>
                <LogoLink to="/">{teamLandingData?.header?.teamName}</LogoLink>
                <HeaderLInkWrapper>
                    <div>
                        <CustomLink
                            className="white-on-scroll"
                            to="/"
                            onClick={() => {
                                window.location.href = teamLandingData?.header?.button1?.redirectUrl;
                            }}
                        >
                            {teamLandingData?.header?.button1?.text}
                        </CustomLink>
                    </div>
                    <div>
                        <ButtonLink
                            to="/"
                            onClick={() => {
                                window.location.href = teamLandingData?.header?.button2?.redirectUrl;
                            }}
                        >
                            {teamLandingData?.header?.button2?.text}
                        </ButtonLink>
                    </div>
                </HeaderLInkWrapper>
            </CustomHeader>
        </HeaderWrapper>
    );
}

export default Header;
