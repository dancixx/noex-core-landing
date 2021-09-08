import { Accordion, AccordionDetails, AccordionSummary } from '@material-ui/core';
import { ReactElement, useState } from 'react';
import styled from 'styled-components';
import { AssetProps } from '../../../utils/interfaces';

const SliderElementBg = styled.div`
    transition: all 0.3s ease-out;
    background-color: black;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
`;

const SliderElementDiv = styled.div`
    text-align: center;
    margin-left: 8px;
    margin-right: 8px;

    img {
        height: auto;
        width: 100%;
        margin: auto;
    }

    h3 {
        font-family: 'Inter', sans-serif;
        font-size: 18px;
        font-weight: 700;
        padding: 15px 10px 5px 10px;
        color: #131424;
        margin: 0;
        text-decoration: underline;
    }

    p {
        font-family: 'Montserrat', sans-serif;
        margin-top: 0;
        padding-bottom: 15px;
        font-weight: 300;
        font-size: 16px;
        color: #131424;
    }
`;

const CustomAccordion = styled(Accordion)`
    box-shadow: none !important;
`;

const CustomAccordionSummary = styled(AccordionSummary)`
    padding: 0 !important;
    margin: 0 !important;
    min-height: 30px !important;

    h3 {
        padding: 0 !important;
        margin: 15px auto;
    }

    .MuiAccordionSummary-content {
        margin: 0 !important;
    }
`;

const CustomAccordionDetails = styled(AccordionDetails)`
    text-align: left;
`;

interface SliderElementProps {
    item: {
        imageUrl: AssetProps;
        text: string;
        openText: string;
        closeText: string;
    };
}

function SliderElement({ item }: SliderElementProps): ReactElement {
    const [padding, setPadding] = useState<string>('133%');
    const [open, setOpen] = useState<boolean>(false);

    return (
        <div>
            <SliderElementDiv>
                <SliderElementBg
                    style={{
                        paddingTop: padding,
                        backgroundImage: `url('${item?.imageUrl.downloadURL}')`,
                    }}
                ></SliderElementBg>
                <CustomAccordion expanded={open}>
                    <CustomAccordionSummary aria-controls="panel1bh-content" id="panel1bh-header">
                        <h3
                            onClick={() => {
                                if (open) {
                                    setPadding('133%');
                                } else {
                                    setPadding('0%');
                                }
                                setOpen(!open);
                            }}
                        >
                            {open ? item?.closeText : item?.openText}
                        </h3>
                    </CustomAccordionSummary>
                    <CustomAccordionDetails>
                        <div
                            dangerouslySetInnerHTML={{
                                __html: item?.text,
                            }}
                        />
                    </CustomAccordionDetails>
                </CustomAccordion>
            </SliderElementDiv>
        </div>
    );
}

export default SliderElement;
