import { slide as Menu, Styles } from 'react-burger-menu';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { TeamLandingProps } from '../../../utils/interfaces';

const MobileMenuWrapper = styled.div`
    display: none;
    z-index: 100000;

    @media screen and (max-width: 991px) {
        display: block;
    }
`;

const StyledLinkItem = styled(Link)`
    color: black;
    text-decoration: none;
    margin-right: 26px;
    font-family: 'Inter';
    font-style: normal;
    font-weight: 900;
    font-size: 20px;
    line-height: 40px;
    transition: all 0.3s ease-out;
    margin-bottom: 30px;

    &:focus {
        color: black;
        border: none;
        box-shadow: none;
        outline: none;
    }
`;

const StyledLinkItemButton = styled(Link)`
    width: 171px;
    height: 54px;
    background-color: white;
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
    display: flex !important;
    color: black;
    border: 2px solid black;

    &:hover {
        background-color: black;
        border-color: black;
    }
`;

interface SideBarProps {
    teamLandingData: TeamLandingProps;
}

function SideBar({ teamLandingData }: SideBarProps) {
    var styles: Styles = {
        bmBurgerButton: {
            position: 'fixed',
            width: '36px',
            height: '30px',
            right: '15px',
            top: '18px',
        },
        bmBurgerBars: {
            background: 'black',
        },
        // @ts-ignore
        bmBurgerBarsHover: {
            background: 'black',
        },
        bmCrossButton: {
            height: '30px',
            width: '30px',

            right: '20px',
        },

        bmCross: {
            background: 'black',
            height: '30px',
        },
        bmMenuWrap: {
            position: 'fixed',
            height: '100%',
        },
        bmMenu: {
            background: 'white',
            padding: '50px 1.5em 0',
            fontSize: '1.15em',
        },
        bmMorphShape: {
            fill: '#373a47',
        },
        bmItemList: {
            color: '#b8b7ad',
            padding: '0.8em',
        },
        bmItem: {},
        bmOverlay: {
            background: 'rgba(0, 0, 0, 0.3)',
        },
    };

    return (
        <MobileMenuWrapper>
            <Menu styles={styles} right>
                <StyledLinkItem to={{ pathname: teamLandingData?.sideBar?.button1?.redirectUrl }} target="_parent">
                    {teamLandingData?.sideBar?.button1?.text}
                </StyledLinkItem>
                <StyledLinkItemButton to={{ pathname: teamLandingData?.sideBar?.button2?.redirectUrl }} target="_parent">
                    {teamLandingData?.sideBar?.button2?.text}
                </StyledLinkItemButton>
            </Menu>
        </MobileMenuWrapper>
    );
}

export default SideBar;
