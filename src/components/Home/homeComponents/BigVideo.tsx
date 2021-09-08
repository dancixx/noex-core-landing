import { ReactElement } from 'react';
import styled from 'styled-components';
import ReactPlayer from 'react-player';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import { TeamLandingProps } from '../../../utils/interfaces';

const ReactPlayerWrapper = styled.div`
    margin-top: 70px;
    position: relative;
    padding-top: 56.25%;

    &:hover {
        .VideoButtonWrapper {
            opacity: 1;
        }
    }
`;

interface BigVideoProps {
    teamLandingData: TeamLandingProps;
}

function BigVideo({ teamLandingData }: BigVideoProps): ReactElement {
    return (
        <Container>
            <Grid container>
                <Grid item xs={12}>
                    <ReactPlayerWrapper>
                        <ReactPlayer
                            url={teamLandingData?.bigVideo?.videoUrl?.downloadURL}
                            muted={true}
                            loop={true}
                            width="100%"
                            height="100%"
                            playsinline={true}
                            playing={true}
                            style={{
                                position: 'absolute',
                                top: 0,
                                left: 0,
                            }}
                        />
                    </ReactPlayerWrapper>
                </Grid>
            </Grid>
        </Container>
    );
}

export default BigVideo;
