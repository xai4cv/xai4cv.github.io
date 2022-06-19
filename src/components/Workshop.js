import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import People from './People';
import Speakers from './Speakers';
import Link from '@material-ui/core/Link';


const styles = theme => ({
    content: {
        margin: '0 auto',
        marginTop: '1.5em'
    },
    root: {
    },
    gridItem: {
        padding: theme.spacing(1.5),
    },
    sectionHeader: {
        marginTop: '0.15em',
    },
    container: {
        padding: theme.spacing(2),
    },
    footer: {
        marginTop: '0.15em',
        fontSize: 14,
    },
    people: {
        margin: '0 auto',
        marginTop: '1.5em'
    }
});

class Workshop extends React.Component {
    state = {
        checked: false
    }

    render() {
        const { classes } = this.props;
        document.title='Workshop';

        return (
            <div className={classes.root}>
                <Grid 
                    container 
                    justify="center" 
                    alignContent="center"
                >
                    <Grid 
                        item 
                        xs={10} 
                        md={9} 
                        lg={9}
                        className={classes.content}
                    >
                        <Grid container justify="center" alignContent="center">
                            <Grid item xs={12} lg={12}>
                                <Grid container justify="flex-start">
                                    <Grid item xs={12} md={12} lg={12} className={classes.gridItem}>
                                        <Typography
                                            className={classes.sectionHeader}
                                            variant="h4"
                                            gutterBottom
                                            align="center"
                                            >
                                            XAI4CV: Explainable Artificial Intelligence for Computer Vision
                                        </Typography>
                                    </Grid>

                                    <Grid item xs={12} md={12} lg={12} className={classes.gridItem}>
                                        <Typography
                                            className={classes.sectionHeader}
                                            variant="h5"
                                            gutterBottom
                                            align="center"
                                            >
                                            Workshop at CVPR 2022
                                        </Typography>
                                    </Grid>

                                    <div className={classes.container}/>
                                    <div className={classes.container}/>

                                    <Grid item xs={12} className={classes.gridItem}>
                                        <Typography
                                            className={classes.sectionHeader}
                                            variant="subtitle1"
                                            align="left"
                                        >
                                            <b>Date:</b> Monday, June 20, 2022 <br />
                                            <b>Venue:</b> New Orleans Ernest N. Morial Convention Center, New Orleans, Louisiana <br />
                                            <b>Location:</b> 208-210 <br /><br />
                                            <b>Motivation:</b> Provide a common forum for both computer vision practitioners in the industry and academia to initiate discussions and propose best ways to build explainable models that can benefit the global community. 
                                        </Typography>
                                    </Grid>


                                    <div className={classes.container}/>


                                    <Grid item xs={12} className={classes.gridItem}>
                                        <Typography
                                            className={classes.sectionHeader}
                                            variant="h5"
                                            align="left"
                                            >
                                            Abstract
                                        </Typography>
                                    </Grid>

                                    <Grid item xs={12} className={classes.gridItem}>
                                        <Typography
                                            className={classes.sectionHeader}
                                            variant="body2"
                                            align="left"
                                        >
                                            Computer vision (CV) models are often used to improve applications and products and are very successful. 
                                            However, these models are usually black-box in nature and do not provide explanations for their predictions, which sometimes leads to confusing behaviour. 
                                            The current lack of transparency in CV models is one of the biggest barriers in building trust among consumers, often resulting in severe backlash when models make embarrassing mistakes.
                                            Trust in the models can be improved by making them fair, easily understandable for everyone, and correctable if necessary. 
                                            The need for trustworthiness has prompted recent clauses in GDPR regulations that require models to also explain their results in a way a naive consumer can understand. 
                                            <br /><br />
                                            With socio-political implications of AI in mind, this workshop aims to motivate proactive adaptation of explainability in computer vision systems. 
                                            Specifically, our aim is to spark healthy conversations that address building top-performing explainable computer vision systems that not only identify "what" and "where" different visual entities occur in an image, but also provide a human-like reasoning of "why" the model made those predictions. 
                                            Furthermore, such systems should allow a user to provide feedback and thereby correct potentially harmful mispredictions with minimal effort.
                                        </Typography>
                                    </Grid>


                                    <div className={classes.container}/>


                                    <Grid item xs={12} className={classes.gridItem}>
                                        <Typography
                                            className={classes.sectionHeader}
                                            variant="h5"
                                            align="left"
                                            id="call_for_papers"
                                            >
                                            Call for Papers
                                        </Typography>
                                    </Grid>


                                    <Grid item xs={12} className={classes.gridItem}>
                                        <Typography
                                            className={classes.sectionHeader}
                                            variant="body2"
                                            align="left"
                                        >
                                        We welcome 2 page (including references) extended abstract submissions that showcase successful application of XAI methods on popular computer vision tasks, 
                                        helping users better understand the results of a model.
                                        Moreover, we also welcome the submission of novel XAI for CV techniques, visualizations, and practical libraries. 
                                        <br /> <br />
                                        Finally, we encourage submitting papers accepted in the CVPR 2022 main program, or in a relevant 2022 conference, in which case authors do not need to prepare extended abstract, 
                                        but simply submit the camera-ready version of the accepted paper.
                                        <br /> <br />
                                        Note that, accepted extended abstracts will not be published in conjunction with the CVPR 2022 proceedings.
                                        </Typography>
                                    </Grid>


                                    <Grid item xs={12} className={classes.gridItem}>
                                        <Typography
                                            className={classes.sectionHeader}
                                            variant="subtitle1"
                                            align="left"
                                            >
                                            <b>Timeline</b>
                                        </Typography>
                                        <br/>
                                        <Typography
                                            className={classes.sectionHeader}
                                            variant="body2"
                                            align="left"
                                        >
                                        CMT portal opens on <b>Feb 2, 2022</b>. <br/>
                                        Submissions until <b>May 18, 2022</b>. <br/>
                                        Rolling acceptances from <b>May 1, 2022</b> until <b>May 20, 2022</b>. <br/>
                                        Spotlight / Poster decisions on <b>May 23, 2022</b>.
                                        </Typography>
                                    </Grid>


                                    <Grid item xs={12} className={classes.gridItem}>
                                        <Typography
                                            className={classes.sectionHeader}
                                            variant="subtitle1"
                                            align="left"
                                            >
                                            <b>Submission instructions</b>
                                        </Typography>
                                        <br/>
                                        <Typography
                                            className={classes.sectionHeader}
                                            variant="body2"
                                            align="left"
                                        >
                                        <b>Extended Abstracts: </b> All submissions should be in the anonymized CVPR 2022 format, and submissions will be subjected to the double-blind review process. 
                                        Submitted extended abstracts will be reviewed by 1-2 reviewers, with the organizing team serving as a program committee.
                                        <br /><br />
                                        <b>Papers accepted in a relevant 2022 conference: </b> Authors of papers accepted in the CVPR 2022 main program, or in a relevant 2022 conference, are encouraged to submit the camera-ready version and present their work at our workshop.
                                        Organizing team will review the relevance of submitted papers to the XAI4CV workshop.
                                        <br /><br />
                                        <b>Submissions</b> can be done at <Link target="_blank" rel="noopener" href="https://cmt3.research.microsoft.com/XAI4CV2022"><b>https://cmt3.research.microsoft.com/XAI4CV2022</b></Link>.
                                        </Typography>
                                    </Grid>


                                    <Grid item xs={12} className={classes.gridItem}>
                                        <Typography
                                            className={classes.sectionHeader}
                                            variant="subtitle1"
                                            align="left"
                                            >
                                            <b>Attendance</b>
                                        </Typography>
                                        <br/>
                                        <Typography
                                            className={classes.sectionHeader}
                                            variant="body2"
                                            align="left"
                                        >
                                        <b>Posters: </b> All accepted submissions will be invited to participate in an <b>in-person</b> poster session at our workshop.
                                        Additionally, the authors will be asked to upload their posters which will be hosted on our webpage.
                                        <br /><br />
                                        <b>Spotlights: </b> We will pick the best 6 papers from among the submissions / main conference to be presented as spotlights.
                                        Presentations can either be <b>in-person</b> or <b>pre-recorded</b>.
                                        <br /><br />
                                        Abiding by the <Link target="_blank" rel="noopener" href="https://cvpr2022.thecvf.com/registration"><b>CVPR guidelines</b></Link>, all accepted papers <b>must be presented by one of the authors</b>.
                                        </Typography>
                                    </Grid>

                                    <Grid item xs={12} className={classes.gridItem}>
                                        <Typography
                                            className={classes.sectionHeader}
                                            variant="subtitle1"
                                            align="left"
                                            >
                                            <b>Topics</b>
                                        </Typography>
                                        <Typography
                                            className={classes.sectionHeader}
                                            variant="body2"
                                            align="left"
                                        >
                                        <ul>
                                            <li> Building inherently interpretable CV models,</li>
                                            <li> Black-box CV model explanations visualized on test images and / or presented in a human interpretable language,</li>
                                            <li> Object classification / detection / segmentation model explanations,</li>
                                            <li> Action detection model explanations,</li>
                                            <li> VQA model explanations,</li>
                                            <li> Medical imaging model explanations,</li>
                                            <li> Human intervention and correctability in computer vision,</li>
                                            <li> Machine teaching via explanations,</li>
                                            <li> Constructing datasets for benchmarking explainability,</li>
                                            <li> Offline and online evaluation methods for explanations,</li>
                                            <li> Building practical libraries for explainable computer vision, and their integration with popular CV libraries.</li>
                                        </ul>
                                        </Typography>
                                    </Grid>


                                    <div className={classes.container}/>


                                    <Grid item xs={12} className={classes.gridItem}>
                                        <Typography
                                            className={classes.sectionHeader}
                                            variant="h5"
                                            align="left"
                                            >
                                            Invited Speakers
                                        </Typography>
                                    </Grid>

                                    <Speakers/>


                                    <div className={classes.container}/>


                                    <Grid item xs={12} className={classes.gridItem}>
                                        <Typography
                                            className={classes.sectionHeader}
                                            variant="h5"
                                            align="left"
                                            >
                                            Schedule
                                        </Typography>
                                    </Grid>

                                    <Grid item xs={12} className={classes.gridItem}>
                                        <Typography
                                            className={classes.sectionHeader}
                                            variant="body1"
                                            align="left"
                                            >
                                            Detailed schedule available at <Link target="_blank" rel="noopener" href="https://xai4cv.github.io/workshop-schedule"><b>xai4cv.github.io/workshop-schedule</b></Link>.
                                        </Typography>
                                    </Grid>

                                    <Grid container justify="flex-start">
                                        <Grid item xs={12} lg={12} className={classes.gridItem}>
                                            <Typography className={classes.SectionHeader} variant="body2" align="left">
                                                <b>09:00 AM - 09:10 AM: </b> Opening Remarks
                                            </Typography>
                                        </Grid>
                                    </Grid>

                                    <Grid container justify="flex-start">
                                        <Grid item xs={12} lg={12} className={classes.gridItem}>
                                            <Typography className={classes.SectionHeader} variant="body2" align="left">
                                                <b>09:10 AM - 09:50 AM: </b> Spotlight Session 1
                                            </Typography>
                                        </Grid>
                                    </Grid>

                                    <Grid container justify="flex-start">
                                        <Grid item xs={12} lg={12} className={classes.gridItem}>
                                            <Typography className={classes.SectionHeader} variant="body2" align="left">
                                                <b>09:50 AM - 10:30 AM: </b> Coffee Break + Poster Session 1
                                            </Typography>
                                        </Grid>
                                    </Grid>

                                    <Grid container justify="flex-start">
                                        <Grid item xs={12} lg={12} className={classes.gridItem}>
                                            <Typography className={classes.SectionHeader} variant="body2" align="left">
                                                <b>10:30 AM - 11:00 AM: </b> Invited Talk - Antonio Torralba
                                            </Typography>
                                        </Grid>
                                    </Grid>

                                    <Grid container justify="flex-start">
                                        <Grid item xs={12} lg={12} className={classes.gridItem}>
                                            <Typography className={classes.SectionHeader} variant="body2" align="left">
                                                <b>11:00 AM - 11:30 AM: </b> Invited Talk - Yixin Wang
                                            </Typography>
                                        </Grid>
                                    </Grid>

                                    <Grid container justify="flex-start">
                                        <Grid item xs={12} lg={12} className={classes.gridItem}>
                                            <Typography className={classes.SectionHeader} variant="body2" align="left">
                                                <b>11:30 AM - 12:00 PM: </b> Invited Talk - Rich Caruana
                                            </Typography>
                                        </Grid>
                                    </Grid>

                                    <Grid container justify="flex-start">
                                        <Grid item xs={12} lg={12} className={classes.gridItem}>
                                            <Typography className={classes.SectionHeader} variant="body2" align="left">
                                                <b>12:00 PM - 12:50 PM: </b> Lunch Break
                                            </Typography>
                                        </Grid>
                                    </Grid>

                                    <Grid container justify="flex-start">
                                        <Grid item xs={12} lg={12} className={classes.gridItem}>
                                            <Typography className={classes.SectionHeader} variant="body2" align="left">
                                                <b>12:50 PM - 01:30 PM: </b> Spotlight Session 2
                                            </Typography>
                                        </Grid>
                                    </Grid>

                                    <Grid container justify="flex-start">
                                        <Grid item xs={12} lg={12} className={classes.gridItem}>
                                            <Typography className={classes.SectionHeader} variant="body2" align="left">
                                                <b>01:30 PM - 02:00 PM: </b> Invited Talk - Been Kim
                                            </Typography>
                                        </Grid>
                                    </Grid>

                                    <Grid container justify="flex-start">
                                        <Grid item xs={12} lg={12} className={classes.gridItem}>
                                            <Typography className={classes.SectionHeader} variant="body2" align="left">
                                                <b>02:00 PM - 02:30 PM: </b> Invited Talk - Trevor Darrell
                                            </Typography>
                                        </Grid>
                                    </Grid>

                                    <Grid container justify="flex-start">
                                        <Grid item xs={12} lg={12} className={classes.gridItem}>
                                            <Typography className={classes.SectionHeader} variant="body2" align="left">
                                                <b>02:30 PM - 03:10 PM: </b> Coffee Break + Poster Session 2
                                            </Typography>
                                        </Grid>
                                    </Grid>
                                    
                                    <Grid container justify="flex-start">
                                        <Grid item xs={12} lg={12} className={classes.gridItem}>
                                            <Typography className={classes.SectionHeader} variant="body2" align="left">
                                                <b>03:10 PM - 03:40 PM: </b> Invited Talk - Pradeep Ravikumar
                                            </Typography>
                                        </Grid>
                                    </Grid>

                                    <Grid container justify="flex-start">
                                        <Grid item xs={12} lg={12} className={classes.gridItem}>
                                            <Typography className={classes.SectionHeader} variant="body2" align="left">
                                                <b>03:40 PM - 04:10 PM: </b> Invited Talk - Serena Yeung
                                            </Typography>
                                        </Grid>
                                    </Grid>

                                    <Grid container justify="flex-start">
                                        <Grid item xs={12} lg={12} className={classes.gridItem}>
                                            <Typography className={classes.SectionHeader} variant="body2" align="left">
                                                <b>04:10 PM - 04:40 PM: </b> Invited Talk - Hima Lakkaraju
                                            </Typography>
                                        </Grid>
                                    </Grid>

                                    <Grid container justify="flex-start">
                                        <Grid item xs={12} lg={12} className={classes.gridItem}>
                                            <Typography className={classes.SectionHeader} variant="body2" align="left">
                                                <b>04:40 PM - 04:50 PM: </b> Break
                                            </Typography>
                                        </Grid>
                                    </Grid>

                                    <Grid container justify="flex-start">
                                        <Grid item xs={12} lg={12} className={classes.gridItem}>
                                            <Typography className={classes.SectionHeader} variant="body2" align="left">
                                                <b>04:50 PM - 05:50 PM: </b> Panel Discussion
                                            </Typography>
                                        </Grid>
                                    </Grid>
                                    
                                    <Grid container justify="flex-start">
                                        <Grid item xs={12} lg={12} className={classes.gridItem}>
                                            <Typography className={classes.SectionHeader} variant="body2" align="left">
                                                <b>05:50 PM - 06:00 PM: </b> Closing Remarks
                                            </Typography>
                                        </Grid>
                                    </Grid>


                                    <div className={classes.container}/>


                                    <Grid item xs={12} className={classes.gridItem}>
                                        <Typography
                                            className={classes.sectionHeader}
                                            variant="h5"
                                            align="left"
                                            >
                                            Organizers
                                        </Typography>
                                    </Grid>

                                    <People/>


                                    <div className={classes.container}/>


                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </div>
        );
    }
}

Workshop.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Workshop);
