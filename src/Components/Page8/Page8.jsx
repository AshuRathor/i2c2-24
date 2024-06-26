import styles from '../../styles/Home.module.css';
import { Box, Button, Typography, Tabs, Tab, useMediaQuery } from "@mui/material";
import { styled, useTheme } from '@mui/material/styles';
import devfolio from '../../assets/Devfolio_Logo-Black.png';
import polygon from '../../assets/Polygon_Logo-Dark.png';
import solana from '../../assets/Solana-Colored.png';
import replit from '../../assets/Replit-light-background.png';
import filecoin from '../../assets/Filecoin Coloured White Text.png';
import streamyard from '../../assets/StreamYard_2021.png';
import echo3d from '../../assets/echo3D.png';
import Image from 'next/image';
import taskade from '../../assets/logo_taskade_black.png';
import { useState } from 'react';
import cybrancee from '../../assets/logo_cybrancee.png';
import codingMinutes from '../../assets/coding_minutes_logo.png';
import sosTech from '../../assets/sos_tech.png';
import chatraShala from '../../assets/chatra_shala.jpeg';
import coderEvoke from '../../assets/coders_evoke.png';
import skillShip from '../../assets/skillship_logo.png';
import mindsDb from '../../assets/mindsDB_logo.png';
import threeWay from '../../assets/threeway_logo.jpeg';
import tezos from '../../assets/tezos.jpeg';
import fire from '../../assets/5ire.png';
import balsamiq from '../../assets/balsamiq.png';
import algocs from '../../assets/algocs.jpeg';
import trikon from '../../assets/trikon.jpeg';
import Github from '../../assets/GitHub_Logo.png';
import huddle from '../../assets/huddle_logo.png';
import strive from '../../assets/strive.png';
// import { useRouter } from 'next/router';
// import { useRouter } from 'next/router';
import devBoard from '../../assets/DevBoard_landscape_logo_no_bg.png';
import newtons from '../../assets/newton_school.jpeg';
import mentorle from '../../assets/mentorle.jpeg';
import quillbot from '../../assets/quillbot.jpeg';
// import bgMesh from '../../assets/light_mesh.jpg';

function a11yProps(index) {
    return {
        id: `sponsor-partner-${index}`,
        'aria-controls': `sponsor-partner-tabpanel-${index}`,
    };
}

function TabPanel(props) {
    const { children, value, index, ...other }=props;

    return (
        <div
            role="tabpanel"
            hidden={value!==index}
            id={`sponsor-partner-${index}`}
            aria-labelledby={`sponsor-partner-tabpanel-${index}`}
            {...other}
        >
            {value===index&&children}
        </div>
    );
}


export default function Sponsors() {
    const [value, setValue]=useState(0);

    const handleChange=(event, newValue) => {
        setValue(newValue);
    };

    const theme=useTheme();
    const smallScreen=useMediaQuery(`(max-width: 800px)`);

    const sponsors={
        premium: [
            {
                title: "DevFolio",
                imgUrl: devfolio,
                link: "https://devfolio.co/"
            },
            {
                title: "Polygon",
                imgUrl: polygon,
                link: "https://polygon.technology"
            },
            {
                title: "Coding Minutes",
                imgUrl: codingMinutes,
                link: "https://codingminutes.com"
            },
            {
                title: "Minds DB",
                imgUrl: mindsDb,
                link: "https://mindsdb.com"
            },
            {
                title: "Tezos",
                imgUrl: tezos,
                link: 'https://tezos.com'
            },
            {
                title: '5ire chain',
                imgUrl: fire,
                link: 'https://www.5ire.org'
            },
            {
                title: "Trikon",
                imgUrl: trikon,
                link: 'https://trikon.io'
            },
            {
                title: 'Github',
                imgUrl: Github,
                link: 'https://github.com'
            }
        ],
        economy: [
            {
                title: "Solana",
                imgUrl: solana,
                link: "https://solana.com"
            },
            {
                title: "ThreeWay Studio",
                imgUrl: threeWay,
                link: "https://www.threeway.studio"
            },
            {
                title: "Filecoin",
                imgUrl: filecoin,
                link: "https://filecoin.io"
            },
            {
                title: 'replit',
                imgUrl: replit,
                link: 'https://replit.com'
            },
        ],
        standard: [

        ],
        others: [
            {
                title: "streamyard",
                imgUrl: streamyard,
                link: 'https://streamyard.com'
            },
            {
                title: "echo3d",
                imgUrl: echo3d,
                link: "https://www.echo3d.com"
            },
            {
                title: "taskade",
                imgUrl: taskade,
                link: "https://taskade.com"
            },
            {
                title: 'cybrancee',
                imgUrl: cybrancee,
                link: 'https://cybrancee.com'
            },
            {
                title: 'balsamiq',
                imgUrl: balsamiq,
                link: 'https://balsamiq.com'
            },
            {
                title: 'Huddle01',
                imgUrl: huddle,
                link: 'https://www.huddle01.com'
            },
            {
                title: 'Strive',
                imgUrl: strive,
                link: 'https://linktr.ee/strvnetwork'
            },
            {
                title: 'Quillbot',
                imgUrl: quillbot,
                link: 'https://quillbot.com'
            }
        ]
    };

    const communityPartners=[
        {
            title: "DevBoard",
            imgUrl: devBoard,
            link: "https://devboard.bio.link"
        },
        {
            title: 'newtons',
            imgUrl: newtons,
            link: 'https://newtonschool.co',
        },
        {
            title: "Mentorle",
            imgUrl: mentorle,
            link: 'https://discord.gg/Fkm6sDbk'
        },
        {
            title: "Sos Tech Inc.",
            imgUrl: sosTech,
            link: "https://www.linkedin.com/company/sos-tech-inc/"
        },
        {
            title: "Skillship",
            imgUrl: skillShip,
            link: "https://www.linkedin.com/company/skillship-foundation/"
        },
        {
            title: "Coders Evoke",
            imgUrl: coderEvoke,
            link: "https://www.linkedin.com/company/codersevoke/"
        }
    ];

    const StyledTabs=styled((props) => (
        <Tabs
            {...props}
            TabIndicatorProps={{ children: <span className="MuiTabs-indicatorSpan" /> }}
        />
    ))({
        '& .MuiTabs-indicator': {
            display: 'flex',
            justifyContent: 'center',
            backgroundColor: 'transparent',
        },
        '& .MuiTabs-indicatorSpan': {
            maxWidth: 40,
            width: '100%',
            backgroundColor: '#635ee7',
        },
    });

    const StyledTab=styled((props) => (
        <Tab disableRipple {...props} />
    ))(({ theme }) => ({
        textTransform: 'none',
        borderRadius: '1.5rem',
        background: theme.palette.background.secondary,
        fontWeight: smallScreen? theme.typography.fontWeightRegular:theme.typography.fontWeightBold,
        fontSize: theme.typography.pxToRem(18),
        marginRight: theme.spacing(1),
        color: 'rgba(255, 255, 255, 0.7)',
        '&.Mui-selected': {
            color: '#fff',
        },
        '&.Mui-focusVisible': {
            backgroundColor: 'rgba(100, 95, 228, 0.32)',
        },
    }));

    return (
        <Box
            id="sponsors"
            sx={{
                display: 'flex',
                alignItems: "center",
                flexDirection: 'column',
                backgroundColor: "#222B48"

            }}
        >
            <Typography
                textAlign={"center"}
                variant={smallScreen? "h2":"h1"}
                fontWeight={"bold"}
                sx={{
                    mt: "5rem",
                    mb: "1rem",
                    color: theme.palette.text.light
                }}
            >
                Sponsors &amp; Community Partners
            </Typography>

            <Box
                sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                }}
            >
                <StyledTabs
                    value={value}
                    onChange={handleChange}
                    aria-label="sponsors and partners"
                >
                    <StyledTab label="Sponsors" {...a11yProps(0)} />
                    <StyledTab label="Partners" {...a11yProps(1)} />
                </StyledTabs>

            </Box>

            <TabPanel value={value} index={0}>
                <Box
                    sx={{
                        mt: '2rem',
                        p: '1rem 2rem',
                        display: 'flex',
                        flexDirection: smallScreen? 'column':'row',
                        justifyContent: 'center',
                        alignItems: 'center'
                    }}
                >
                    <Typography textAlign={smallScreen? 'center':'left'} color="#ddd" sx={{ m: 1, fontSize: theme.typography.pxToRem(25) }}>
                        Interested in Sponsoring
                    </Typography>
                    <Button
                        variant='contained'
                        onClick={() => window.open("https://forms.gle/zSuY8BYqTrPdRGXK8", '_blank', 'noopener,noreferrer')}
                        sx={{
                            textTransform: 'none',
                            borderRadius: '1.5rem',
                            background: theme.palette.background.secondary,
                            fontWeight: smallScreen? theme.typography.fontWeightRegular:theme.typography.fontWeightBold,
                            fontSize: theme.typography.pxToRem(16),
                            marginRight: theme.spacing(1),
                            color: 'rgba(255, 255, 255, 0.7)',
                            '&.Mui-selected': {
                                color: '#fff',
                            },
                            '&.Mui-focusVisible': {
                                backgroundColor: 'rgba(100, 95, 228, 0.32)',
                            },
                        }}
                    >
                        Sponsor Us
                    </Button>
                </Box>
                <SponsorGroup title={"Premium Sponsors"} sponsors={sponsors.premium} />
                <SponsorGroup title={"Economy Sponsors"} sponsors={sponsors.economy} />
                <SponsorGroup title={"Standard Sponsors"} sponsors={sponsors.standard} />
                <SponsorGroup title={"Digital Sponsors"} sponsors={sponsors.others} />
            </TabPanel>


            <TabPanel value={value} index={1} >
                <Box
                    sx={{
                        mt: '2rem',
                        p: '1rem 1rem',
                        display: 'flex',
                        flexDirection: smallScreen? 'column':'row',
                        justifyContent: 'center',
                        alignItems: 'center'
                    }}
                >
                    <Typography textAlign={smallScreen? 'center':'left'} color="#ddd" sx={{ m: 1, fontSize: theme.typography.pxToRem(25) }}>
                        Become a partner
                    </Typography>
                    <Button
                        variant='contained'
                        onClick={() => window.open("https://forms.gle/KYp3rPxN1cyCYmBU8", '_blank', 'noopener,noreferrer')}
                        sx={{
                            textTransform: 'none',
                            borderRadius: '1.5rem',
                            background: theme.palette.background.secondary,
                            fontWeight: smallScreen? theme.typography.fontWeightRegular:theme.typography.fontWeightBold,
                            fontSize: theme.typography.pxToRem(16),
                            marginRight: theme.spacing(1),
                            color: 'rgba(255, 255, 255, 0.7)',
                            '&.Mui-selected': {
                                color: '#fff',
                            },
                            '&.Mui-focusVisible': {
                                backgroundColor: 'rgba(100, 95, 228, 0.32)',
                            },
                        }}
                    >
                        Let&apos;s Partner
                    </Button>
                </Box>
                <SponsorGroup title={""} sponsors={communityPartners} button={true} />
            </TabPanel>
        </Box>
    );
}


function SponsorGroup({ title, sponsors, button=false }) {
    const smallScreen=useMediaQuery(`(max-width: 800px)`);
    const theme=useTheme();
    // const router=useRouter();

    const loadMoreButton=(
        <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <Button
                variant='contained'
                // onClick={() => router.push('communities')}
                sx={{
                    textTransform: 'none',
                    borderRadius: '1.5rem',
                    background: theme.palette.background.secondary,
                    fontWeight: smallScreen? theme.typography.fontWeightRegular:theme.typography.fontWeightBold,
                    fontSize: theme.typography.pxToRem(16),
                    marginRight: theme.spacing(1),
                    color: 'rgba(255, 255, 255, 0.7)',
                    '&.Mui-selected': {
                        color: '#fff',
                    },
                    '&.Mui-focusVisible': {
                        backgroundColor: 'rgba(100, 95, 228, 0.32)',
                    },
                }}
            >
                Load More
            </Button>
        </Box>
    )

    if (sponsors.length<1) {
        return;
    }
    return (
        <Box
            sx={{
                m: '2rem 1rem',
                p: '1rem 1rem',
                borderRadius: '1rem',
                background: '#999',
                boxShadow: "0px 14px 80px rgba(34, 35, 58, 0.2)",
                "&:hover": {
                    transform: "translateY(-3px)",
                    boxShadow: "0 4px 20px 0 rgba(0,0,0,0.12)"
                },
                width: 'inherit'
            }}
        >
            <Typography
                textAlign={"center"}
                variant={smallScreen? "h4":"h2"}
                fontWeight={"bold"}
                sx={{
                    mb: "1rem",
                    color: theme.palette.text.primary
                }}
            >
                {title}
            </Typography>
            <Box className={styles.cardsList}>
                {
                    sponsors.map((data, key) => (
                        <Box
                            key={key}
                            sx={{
                                m: '5px',
                                transition: "0.3s",
                                borderRadius: '1rem',
                                padding: '5px',
                                display: 'flex',
                                alignItems: 'center',
                                // boxShadow: "0px 14px 80px rgba(34, 35, 58, 0.2)",
                                "&:hover": {
                                    transform: "scale(1.2)",
                                    // transform: "translateY(-3px)",
                                    boxShadow: "0 4px 20px 0 rgba(0,0,0,0.12)"
                                },
                            }}
                        >
                            <a href={data.link} target="_blank" rel="noreferrer">
                                <Image src={data.imgUrl} alt={data.title} width={smallScreen? 200:312} />
                            </a>
                        </Box>
                    ))
                }
            </Box>
            {
                button&&loadMoreButton
            }
        </Box>
    );
}