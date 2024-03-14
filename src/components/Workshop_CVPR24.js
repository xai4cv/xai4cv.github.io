import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import People from './People_CVPR24';
import Speakers from './Speakers_CVPR24';
import Link from '@material-ui/core/Link';
import PDFIcon from '@material-ui/icons/PictureAsPdf';
import VideoIcon from '@material-ui/icons/VideoLibrary';
import PhotoSizeSelectActualIcon from '@material-ui/icons/PhotoSizeSelectActual';
import MovieIcon from '@material-ui/icons/Movie';


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
                                        <Typography className={classes.sectionHeader} variant="h4" gutterBottom align="center">
                                            The 3rd Explainable AI for Computer Vision (XAI4CV) Workshop at CVPR 2024
                                        </Typography>
                                    </Grid>

                                    <Grid item xs={12} className={classes.gridItem}>
                                        <Typography className={classes.sectionHeader} variant="subtitle1" align="left">
                                            <b>Date:</b> Tuesday, June 18, 2024 <br />
                                            <b>Location:</b> Seattle Convention Center, Seattle, WA, USA <br />
                                        </Typography>
                                    </Grid>


                                    <div className={classes.container}/>


                                    <Grid item xs={12} className={classes.gridItem}>
                                        <Typography className={classes.sectionHeader} variant="h5" align="left">
                                            Motivation
                                        </Typography>
                                    </Grid>

                                    <Grid item xs={12} className={classes.gridItem}>
                                        <Typography className={classes.sectionHeader} variant="body2" align="left">
                                            Explainability of computer vision systems is critical for people to effectively use and interact with them.
                                            This workshop seeks to contribute to the development of more explainable CV systems by:
                                            (1) initiating discussions across researchers and practitioners in academia and industry to identify successes, failures, and priorities in current XAI work;
                                            (2) examining the strengths, weaknesses, and underlying assumptions of proposed XAI methods and establish best practices in evaluation of these methods;
                                            and (3) discussing the various nuances of explainability and brainstorm ways to build explainable CV systems that benefit all involved stakeholders.
                                        </Typography>
                                    </Grid>

                                    <div className={classes.container}/>

                                    <div className={classes.container}/>

                                    <Grid item xs={12} className={classes.gridItem}>
                                        <Typography className={classes.sectionHeader} variant="h5" align="left">
                                            Call for Papers & Demos
                                        </Typography>
                                    </Grid>


                                    <Grid item xs={12} className={classes.gridItem}>
                                        <Typography className={classes.sectionHeader} variant="body2" align="left">
                                        We welcome paper and demo submissions.
                                        <ul>
                                          <li>
                                            <b>Papers</b> should describe high-quality, original research. Contributions can include novel XAI methods; applications of existing methods on new domains, models, and tasks; evaluation or analysis of existing methods; and practical toolboxes.
                                          </li>
                                          <li>
                                            <b>Demos</b> should consist of static or interactive presentations of XAI for CV models and tasks, accompanied by a description. Contributions can include visualizations, explanations, and explorations of novel XAI systems; novel visualizations, explanations, and explorations of existing XAI systems; studies of how different  visualizations, explanations, and explorations of XAI systems are perceived by people; among others.
                                          </li>
                                        </ul>

                                        We have two tracks of submissions.
                                        <ul>
                                          <li>
                                            <b>Proceedings track:</b> We welcome <b>max 4-page</b> submissions of papers and demos. Submissions accepted to this track <b>will be published</b> in the CVPR workshop proceedings.
                                          </li>
                                          <li>
                                            <b>Non-proceedings track:</b> We welcome <b>max 2-page</b> submissions (commonly referred to as "extended abstracts") of papers and demos. For the non-proceedings track, we encourage submissions of published or accepted work (e.g., papers and demos accepted to the CVPR main program). Submissions accepted to this track <b>will <i>not</i> be published</b> in the CVPR workshop proceedings.
                                          </li>
                                        </ul>

                                        </Typography>
                                    </Grid>


                                    <Grid item xs={12} className={classes.gridItem}>
                                        <Typography className={classes.sectionHeader} variant="subtitle1" align="left">
                                            <b>Timeline</b>
                                        </Typography>
                                        <br/>
                                        <Typography className={classes.sectionHeader} variant="body2" align="left">
                                        <b>Proceedings track</b> <br/>
                                        Submission deadline: <b>March 17, 2024 (5pm PT)</b> <br/>
                                        Notification to authors (accept as spotlight, accept as poster, or reject): <b>April 1, 2024</b> <br/>
                                        Camera-ready deadline: <b>April 8, 2024 (5pm PT)</b>
                                        <br/>
                                        <br/>
                                        <b>Non-proceedings track</b> <br/>
                                        Submissions deadline (to be considered for spotlights): <b>March 17, 2024 (5pm PT)</b> <br/>
                                        Notification to authors (accept as spotlight, accept as poster, or reject): <b>April 1, 2024</b> <br/>
                                        Rolling submissions and notifications (accept as poster or reject): <b>Until April 22, 2024</b> <br/>
                                        Camera-ready deadline: <b>May 8, 2024 (5pm PT)</b>.
                                        </Typography>
                                    </Grid>


                                    <Grid item xs={12} className={classes.gridItem}>
                                        <Typography className={classes.sectionHeader} variant="subtitle1" align="left">
                                            <b>Submission instructions</b>
                                        </Typography>
                                        <br/>
                                        <Typography className={classes.sectionHeader} variant="body2" align="left">
                                        All submissions should be in the <b>anonymized</b> CVPR 2024 format available at <a target="_blank" rel="noopener" href="https://cvpr.thecvf.com/Conferences/2024/AuthorGuidelines"><b>https://cvpr.thecvf.com/Conferences/2024/AuthorGuidelines</b></a>.
                                        <br/>
                                        The page limits <b>do not</b> include references.
                                        <br/>
                                        You may optionally upload supplementary material. Reviewers will be encouraged to look at it, but are not obligated to do so.
                                        <br/>
                                        Submissions can be done at <a target="_blank" rel="noopener" href="https://cmt3.research.microsoft.com/XAI4CV2024"><b>https://cmt3.research.microsoft.com/XAI4CV2024</b></a>.
                                        </Typography>
                                    </Grid>


                                    <Grid item xs={12} className={classes.gridItem}>
                                        <Typography className={classes.sectionHeader} variant="subtitle1" align="left">
                                            <b>Attendance & Presentation</b>
                                        </Typography>
                                        <br/>
                                        <Typography className={classes.sectionHeader} variant="body2" align="left">
                                        <b>Posters: </b> All accepted submissions will be invited to participate in an <b>in-person</b> poster session at our workshop.
                                        Additionally, the authors will be asked to upload their posters which will be hosted on our webpage.
                                        <br /><br />
                                        <b>Spotlights: </b> We will pick 6-8 works among the submissions to be presented as spotlights.
                                        Presentations can either be <b>in-person</b> or <b>pre-recorded</b>.
                                        <br /><br />
                                        Abiding by the <a target="_blank" rel="noopener" href="https://cvpr.thecvf.com/Conferences/2024/Pricing2"><b>CVPR guidelines</b></a>, all accepted papers <b>must be presented by one of the authors</b>.
                                        </Typography>
                                    </Grid>

                                    <Grid item xs={12} className={classes.gridItem}>
                                        <Typography className={classes.sectionHeader} variant="subtitle1" align="left">
                                            <b>Topics</b>
                                        </Typography>
                                        <Typography className={classes.sectionHeader} variant="body2" align="left">
                                        <ul>
                                          <li>Interpretable-by-design CV models</li>
                                          <li>Post-hoc explanations of CV models</li>
                                          <li>Evaluation and analysis of XAI for CV</li>
                                          <li>Applications of XAI for CV</li>
                                          <li>Methods for new interactions with CV models (e.g., debugging, editing)</li>
                                          <li>Multimodal XAI, including both multimodal explanations of CV models and (unimodal) explanations of multimodal models</li>
                                          <li>Datasets for developing and evaluating XAI for CV</li>
                                          <li>Visualizations and toolboxes for XAI for CV</li>
                                          <li>Human-centered XAI for CV (e.g., human evaluations, qualitative studies)</li>
                                          <li>Studies of XAI for CV and related topics (e.g., fairness, transparency, interpretability, trust)</li>
                                        </ul>
                                        </Typography>
                                    </Grid>


                                    <Grid item xs={12} className={classes.gridItem}>
                                        <Typography className={classes.sectionHeader} variant="h5" align="left">
                                            Schedule
                                        </Typography>
                                    </Grid>

                                    <Grid container justify="flex-start">
                                        <Grid item xs={12} lg={12} className={classes.gridItem}>
                                            <Typography className={classes.SectionHeader} variant="body2" align="left">
                                                The schedule is in local time (PDT).
                                            </Typography>
                                        </Grid>
                                    </Grid>

                                    <Grid container justify="flex-start">
                                        <Grid item xs={12} lg={12} className={classes.gridItem}>
                                            <Typography className={classes.SectionHeader} variant="subtitle1" align="left">
                                                <b>09:15 AM - 09:30 AM: </b> Opening Remarks
                                            </Typography>
                                        </Grid>
                                    </Grid>

                                    <Grid container justify="flex-start">
                                        <Grid item xs={12} lg={12} className={classes.gridItem}>
                                            <Typography className={classes.SectionHeader} variant="subtitle1" align="left">
                                                <b>09:30 AM - 10:00 AM: </b> Invited Talk 1
                                            </Typography>
                                        </Grid>
                                    </Grid>

                                    <Grid container justify="flex-start">
                                        <Grid item xs={12} lg={12} className={classes.gridItem}>
                                            <Typography className={classes.SectionHeader} variant="subtitle1" align="left">
                                                <b>10:00 AM - 10:30 AM: </b> Invited Talk 2
                                            </Typography>
                                        </Grid>
                                    </Grid>

                                    <Grid container justify="flex-start">
                                        <Grid item xs={12} lg={12} className={classes.gridItem}>
                                            <Typography className={classes.SectionHeader} variant="subtitle1" align="left">
                                                <b>10:30 AM - 11:00 AM: </b> Spotlight Session 1
                                            </Typography>
                                        </Grid>
                                    </Grid>

                                    <Grid container justify="flex-start">
                                        <Grid item xs={12} lg={12} className={classes.gridItem}>
                                            <Typography className={classes.SectionHeader} variant="subtitle1" align="left">
                                                <b>11:00 AM - 12:00 PM: </b> Poster Session 1
                                            </Typography>
                                        </Grid>
                                    </Grid>

                                    <Grid container justify="flex-start">
                                        <Grid item xs={12} lg={12} className={classes.gridItem}>
                                            <Typography className={classes.SectionHeader} variant="subtitle1" align="left">
                                                <b>12:00 PM - 01:30 PM: </b> Lunch Social
                                            </Typography>
                                        </Grid>
                                    </Grid>

                                    <Grid container justify="flex-start">
                                        <Grid item xs={12} lg={12} className={classes.gridItem}>
                                            <Typography className={classes.SectionHeader} variant="subtitle1" align="left">
                                                <b>01:30 PM - 02:00 PM: </b> Invited Talk 3
                                            </Typography>
                                        </Grid>
                                    </Grid>

                                    <Grid container justify="flex-start">
                                        <Grid item xs={12} lg={12} className={classes.gridItem}>
                                            <Typography className={classes.SectionHeader} variant="subtitle1" align="left">
                                                <b>02:00 PM - 02:30 PM: </b> Invited Talk 4
                                            </Typography>
                                        </Grid>
                                    </Grid>

                                    <Grid container justify="flex-start">
                                        <Grid item xs={12} lg={12} className={classes.gridItem}>
                                            <Typography className={classes.SectionHeader} variant="subtitle1" align="left">
                                                <b>02:30 PM - 03:00 PM: </b> Spotlight Session 2
                                            </Typography>
                                        </Grid>
                                    </Grid>

                                    <Grid container justify="flex-start">
                                        <Grid item xs={12} lg={12} className={classes.gridItem}>
                                            <Typography className={classes.SectionHeader} variant="subtitle1" align="left">
                                                <b>03:00 PM - 04:00 PM: </b> Poster Session 2
                                            </Typography>
                                        </Grid>
                                    </Grid>

                                    <Grid container justify="flex-start">
                                        <Grid item xs={12} lg={12} className={classes.gridItem}>
                                            <Typography className={classes.SectionHeader} variant="subtitle1" align="left">
                                                <b>04:00 PM - 04:30 PM: </b> Invited Talk 5
                                            </Typography>
                                        </Grid>
                                    </Grid>

                                    <Grid container justify="flex-start">
                                        <Grid item xs={12} lg={12} className={classes.gridItem}>
                                            <Typography className={classes.SectionHeader} variant="subtitle1" align="left">
                                                <b>04:30 PM - 05:00 PM: </b> Invited Talk 6
                                            </Typography>
                                        </Grid>
                                    </Grid>

                                    <Grid container justify="flex-start">
                                        <Grid item xs={12} lg={12} className={classes.gridItem}>
                                            <Typography className={classes.SectionHeader} variant="subtitle1" align="left">
                                                <b>05:00 PM - 05:15 PM: </b> Closing Remarks
                                            </Typography>
                                        </Grid>
                                    </Grid>

                                    <div className={classes.container}/>

                                    <Grid item xs={12} className={classes.gridItem}>
                                        <Typography className={classes.sectionHeader} variant="h5" align="left">
                                            Invited Speakers
                                        </Typography>
                                    </Grid>

                                    <Speakers/>

                                    <div className={classes.container}/>

                                    <Grid item xs={12} className={classes.gridItem}>
                                        <Typography className={classes.sectionHeader} variant="h5" align="left">
                                            Organizers
                                        </Typography>
                                    </Grid>

                                    <People/>

                                    <div className={classes.container}/>

                                    <div className={classes.container}/>

                                    <Grid item xs={12} className={classes.gridItem}>
                                        <Typography className={classes.sectionHeader} variant="h5" align="left">
                                            Contact
                                        </Typography>
                                    </Grid>
                                    <Grid container justify="flex-start">
                                        <Grid item xs={12} lg={9} className={classes.gridItem}>
                                            <Typography className={classes.SectionHeader} variant="body2" align="left">
                                                Email: <Link href="mailto:xai4cv2024@googlegroups.com">xai4cv2024@googlegroups.com</Link>
                                            </Typography>
                                        </Grid>
                                    </Grid>

                                    <div className={classes.container}/>


                                    <div className={classes.container}/>
                                    <div className={classes.container}/>
                                    <div className={classes.container}/>
                                    <div className={classes.container}/>
                                    <div className={classes.container}/>
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
