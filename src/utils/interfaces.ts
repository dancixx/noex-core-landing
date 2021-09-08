export interface AssetProps {
    downloadURL: string;
    fileData: {
        bucket: string;
        contentDisposition: string;
        contentEncoding: string;
        contentType: 'video/mp4' | 'image/jpeg';
        fullPath: string;
        generation: string;
        md5Hash: string;
        metageneration: string;
        name: string;
        size: number;
        creationDate: string;
        type: string;
        updated: string;
    };
    key: string;
}

export interface TeamLandingProps {
    teamUid: string;
    uid: string;
    hotjar: {
        hjid: number;
        hjsv: number;
    };
    fbPixelId: string;
    fbPixelValidationContent: string;
    header: {
        teamName: string;
        button1: {
            text: string;
            redirectUrl: string;
        };
        button2: {
            text: string;
            redirectUrl: string;
        };
    };
    sideBar: {
        button1: {
            text: string;
            redirectUrl: string;
        };
        button2: {
            text: string;
            redirectUrl: string;
        };
    };
    hero: {
        headerImageUrl: AssetProps;
        text1: string;
        text2: string;
        button1: {
            text: string;
            redirectUrl: string;
        };
        text3: string;
    };
    visionSection: {
        text1: string;
        text2: string;
        text3: string;
        button1: {
            text: string;
            redirectUrl: string;
        };
    };
    logos: {
        [key: string]: {
            imageUrl: AssetProps;
            redirectUrl: string;
        };
    };
    keyFeatures: {
        [key: string]: {
            imageUrl: AssetProps;
            text1: string;
            text2: string;
        };
    };
    videoMarkupSection: {
        text1: string;
        text2: string;
        text3: string;
        button1: {
            text: string;
            redirectUrl: string;
        };
        text4: string;
        text4SubLines: {
            [key: string]: {
                icon: string;
                imageUrl: AssetProps;
                text: string;
            };
        };
        videoUrl: AssetProps;
    };
    visionSection2: {
        text1: string;
        text2: string;
        text3: string;
        button1: {
            text: string;
            redirectUrl: string;
        };
        text4: string;
        text4SubLines: {
            [key: string]: {
                icon: string;
                imageUrl: AssetProps;
                text: string;
            };
        };
    };
    gridSection: {
        imageUrl1: AssetProps;
        imageUrl2: AssetProps;
        imageUrl3: AssetProps;
        imageUrl4: AssetProps;
        imageUrl5: AssetProps;
    };
    programSection: {
        title: string;
        subTitle: string;
        programs: {
            [key: string]: {
                imageUrl: AssetProps;
                text: string;
                openText: string;
                closeText: string;
            };
        };
    };
    visionSection3: {
        text1: string;
        text2: string;
        keyFeatures: {
            [key: string]: {
                icon: string;
                imageUrl: AssetProps;
                text1: string;
                text2: string;
            };
        };
    };
    planSection: {
        [key: string]: {
            text1: string;
            text2: string;
            text3: string;
            button1: {
                text: string;
                redirectUrl: string;
            };
            text4: string;
            text4SubLines: [
                {
                    icon: string;
                    imageUrl: AssetProps;
                    text: string;
                },
            ];
        };
    };
    visionSection4: {
        text1: string;
        text2: string;
        keyFeatures: {
            [key: string]: {
                icon: string;
                imageUrl: AssetProps;
                text1: string;
                text2: string;
            };
        };
    };
    imageRight2: {
        text1: string;
        text2: string;
        imageUrl: AssetProps;
    };
    imageRight: {
        text1: string;
        text2: string;
        button1: {
            text: string;
            redirectUrl: string;
        };
        imageUrl: AssetProps;
    };
    imageLeft: {
        text1: string;
        text2: string;
        button1: {
            text: string;
            redirectUrl: string;
        };
        imageUrl: AssetProps;
    };
    imageLeft2: {
        text1: string;
        text2: string;
        imageUrl: AssetProps;
    };
    visionSection5: {
        text1: string;
        text2: string;
        text3: string;
        button1: {
            text: string;
            redirectUrl: string;
        };
    };
    beforeAfter: {
        [key: string]: {
            imageUrl: AssetProps;
            text1: string;
            text2: string;
        };
    };
    bigVideo: { videoUrl: AssetProps };
    footer: {
        logoUrl: AssetProps;
        logoRedirectLink: string;
        text1: string;
        text2: string;
        text3: {
            text: string;
            redirectUrl: string;
        };
        text4: {
            text: string;
            redirectUrl: string;
        };
        text5: {
            text: string;
            redirectUrl: string;
        };
        text6: {
            text: string;
            redirectUrl: string;
        };
        appleLogoUrl: AssetProps;
        appleLogoRedirectUrl: string;
        googleLogoUrl: AssetProps;
        googleLogoRedirectUrl: string;
    };
}

export interface LandingEditorLocationStateProps {
    team: TeamProps;
}

export interface TeamProps {
    creationDate: {
        nanoseconds: number;
        seconds: number;
    };
    id: string;
    instagramTitle: string;
    isDev: boolean;
    memberUids: string[];
    name: string;
    subTrainerUids: string[];
    teamCover: string;
    teamWorkoutsHeader: string;
    trainer: string;
    trainerPostCount: number;
    trainerUid: string;
    uid: string;
}
