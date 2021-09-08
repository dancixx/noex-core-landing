import { ReactElement, useEffect, useState } from 'react';
import styled from 'styled-components';
import { map } from 'lodash';
// @ts-ignore
import reactImageSize from 'react-image-size';

import { TeamLandingProps } from '../../../utils/interfaces';

const ThreeKeyFeaturesWrapper = styled.div`
    position: relative;
    margin-top: 40px;
    padding-bottom: 70px;

    @media screen and (max-width: 959px) {
        margin-top: 60px;
        padding-bottom: 10px;
    }

    @media screen and (max-width: 599px) {
        margin-top: 0;
    }
`;

const ListWrapper = styled.div`
    overflow: hidden;
    overflow-x: scroll;
    padding: 0 calc((100vw - 1315px) / 2) 0;

    ul {
        position: relative;
        white-space: nowrap;
        margin: 30px 0;

        li {
            width: 275px;
            padding-left: 15px;
            padding-right: 15px;
            width: 285px;
            scroll-snap-align: start;
            display: inline-block;
            vertical-align: top;
            min-height: 350px;

            &:first-child {
                padding-left: 0;
            }

            &:last-child {
                padding-right: 30px;
            }
        }
    }
`;

const Feature = styled.div`
    min-height: 280px;
    white-space: normal;
    padding: 24px 20px 41px;
    background: #fff;
    box-shadow: 0 4px 25px rgba(0, 0, 0, 0.15);
    border-radius: 4px;

    @media screen and (max-width: 959px) {
        margin-top: 0;
    }

    h2 {
        font-family: Montserrat;
        font-style: normal;
        font-weight: bold;
        font-size: 21px;
        margin-top: 20px;
        margin-bottom: 20px;
        font-weight: 700;
        line-height: 25px;
    }

    p {
        margin-top: 0;
        margin-bottom: 0;
        color: black;
        font-family: 'Inter';
        font-style: normal;
        font-weight: 400;
        font-size: 15px;
    }

    span {
        color: rgb(237, 30, 121);
    }

    @media screen and (max-width: 575px) {
        margin-left: 0;
        margin-right: 0;
    }
`;

interface BigFeatureImgWrapperPorps {
    readonly width: number;
    readonly height: number;
}

const BigFeatureImgWrapper = styled.div<BigFeatureImgWrapperPorps>`
    width: ${({ width }) => width}px;
    height: ${({ height }) => height}px;
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
    background: #fff;
    box-shadow: 0 3px 9px rgba(0, 0, 0, 0.15);
    border-radius: 12px;

    img {
        height: 100%;
        width: auto;
    }
`;

interface NewThreeKeyFeatureItemProps {
    item: TeamLandingProps['keyFeatures']['0'];
}

function NewThreeKeyFeatureItem({ item }: NewThreeKeyFeatureItemProps) {
    const [w, setW] = useState(120);
    const [h, setH] = useState(120);

    useEffect(() => {
        reactImageSize(item.imageUrl?.downloadURL)
            .then(({ width, height }: any) => {
                setW(width / 3);
                setH(height / 3);
            })
            .catch((error: any) => console.log(error));
    }, [item]);

    return (
        <Feature>
            <BigFeatureImgWrapper width={w} height={h}>
                <img alt="BigFeatureImgWrapper" src={item?.imageUrl?.downloadURL} />
            </BigFeatureImgWrapper>
            <h2>{item?.text1}</h2>
            <p>{item?.text2}</p>
        </Feature>
    );
}

interface NewThreeKeyFeaturesProps {
    teamLandingData: TeamLandingProps;
}

function NewThreeKeyFeatures({ teamLandingData }: NewThreeKeyFeaturesProps): ReactElement {
    return (
        <ThreeKeyFeaturesWrapper>
            <ListWrapper>
                <ul>
                    {map(teamLandingData?.keyFeatures, (item: TeamLandingProps['keyFeatures']['0'], index) => (
                        <li key={index}>
                            <NewThreeKeyFeatureItem item={item} />
                        </li>
                    ))}
                </ul>
            </ListWrapper>
        </ThreeKeyFeaturesWrapper>
    );
}

export default NewThreeKeyFeatures;
