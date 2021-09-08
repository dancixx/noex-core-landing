import { ReactElement } from 'react';
import Slider from 'react-slick';
import Grid from '@material-ui/core/Grid';
import styled from 'styled-components';
import Container from '@material-ui/core/Container';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import SliderElement from './SliderElement';
import { TeamLandingProps } from '../../../utils/interfaces';
import { map } from 'lodash';

const SliderWrapper = styled.div`
    padding-top: 50px;
    padding-bottom: 140px;
    overflow: hidden;

    .slick-dots {
        padding-top: 30px;
        bottom: -50px;

        button {
            &:before {
                font-size: 20px;
            }
        }

        li.slick-active button:before {
            opacity: 1;
            color: rgb(237, 30, 121);
        }

        li {
            width: 35px;
        }
    }
`;

const TitleWrapper = styled.div`
    text-align: center;
    margin-bottom: 84px;

    h2 {
        text-align: center;
        font-family: 'Montserrat';
        font-style: normal;
        font-weight: bold;
        font-size: 53px;
        line-height: 55px;
        text-transform: uppercase;
        color: #131424;
        margin-bottom: 32px;

        @media screen and (max-width: 575px) {
            font-size: 35px;
            line-height: 45px;
            margin-bottom: 30px;
        }
    }

    p {
        text-align: center;
        margin: 0;
        font-family: 'Inter';
    }
`;

interface ProgramSliderProps {
    teamLandingData: TeamLandingProps;
}

function ProgramSlider({ teamLandingData }: ProgramSliderProps): ReactElement {
    const settings = {
        dots: true,
        infinite: false,
        arrows: false,
        slidesToShow: 4,
        slidesToScroll: 1,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1199,
                settings: {
                    slidesToShow: 3,
                },
            },
            {
                breakpoint: 991,
                settings: {
                    slidesToShow: 2,
                    infinite: true,
                },
            },
            {
                breakpoint: 575,
                settings: {
                    slidesToShow: 1,
                    infinite: true,
                },
            },
        ],
    };

    return (
        <SliderWrapper>
            <Container>
                <Grid
                    container
                    style={{
                        justifyContent: 'center',
                    }}
                >
                    <Grid item xs={12} lg={5}>
                        <TitleWrapper>
                            <h2>{teamLandingData?.programSection?.title}</h2>
                            <div
                                dangerouslySetInnerHTML={{
                                    __html: teamLandingData?.programSection?.subTitle,
                                }}
                            />
                        </TitleWrapper>
                    </Grid>
                </Grid>
            </Container>
            <Slider {...settings}>
                {map(teamLandingData?.programSection?.programs, (item, index) => (
                    <SliderElement key={index} item={item} />
                ))}
            </Slider>
        </SliderWrapper>
    );
}

export default ProgramSlider;
