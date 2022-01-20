import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import People from './People';
import Button from '@material-ui/core/Button';
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
                                            variant="h3"
                                            gutterBottom
                                            align="center"
                                            >
                                            Wokshop on Explainable Artificial Intelligence for Computer Vision (XAI4CV) at CVPR 2022
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
                                            <b>Venue:</b> New Orleans, Louisiana<br /><br />
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
                                            >
                                            Invited Speakers
                                        </Typography>
                                    </Grid>

                                    <Grid container justify="flex-start">
                                        <Grid item xs={6} md={4} lg={2} className={classes.gridItem}>
                                            <img srcSet="assets/images/antonio_torralba.jpeg" alt="Antonio Torralba" width="100%" />
                                        </Grid>
                                        <Grid item xs={12} lg={9} className={classes.gridItem}>
                                            <Link target="_blank" rel="noopener" href="http://web.mit.edu/torralba/www">
                                                <Typography className={classes.SectionHeader} variant="subtitle1" align="left">
                                                    <b>Antonio Torralba</b>
                                                </Typography>
                                            </Link>
                                            <Typography className={classes.SectionHeader} variant="body2" gutterBottom align="left">
                                                Professor
                                            </Typography>
                                            <Typography className={classes.SectionHeader} variant="body2" gutterBottom align="left">
                                                Massachusetts Institute of Technology (MIT)
                                            </Typography>
                                        </Grid>
                                    </Grid>

                                    <Grid container justify="flex-start">
                                        <Grid item xs={6} md={4} lg={2} className={classes.gridItem}>
                                            <img srcSet="assets/images/been_kim.jpeg" alt="Been Kim" width="100%" />
                                        </Grid>
                                        <Grid item xs={12} lg={9} className={classes.gridItem}>
                                            <Link target="_blank" rel="noopener" href="https://beenkim.github.io">
                                                <Typography className={classes.SectionHeader} variant="subtitle1" align="left">
                                                    <b>Been Kim</b>
                                                </Typography>
                                            </Link>
                                            <Typography className={classes.SectionHeader} variant="body2" gutterBottom align="left">
                                                Staff Research Scientist
                                            </Typography>
                                            <Typography className={classes.SectionHeader} variant="body2" gutterBottom align="left">
                                                Google Brain
                                            </Typography>
                                        </Grid>
                                    </Grid>

                                    <Grid container justify="flex-start">
                                        <Grid item xs={6} md={4} lg={2} className={classes.gridItem}>
                                            <img srcSet="assets/images/rich_caruana.jpeg" alt="Rich Caruana" width="100%" />
                                        </Grid>
                                        <Grid item xs={12} lg={9} className={classes.gridItem}>
                                            <Link target="_blank" rel="noopener" href="https://www.microsoft.com/en-us/research/people/rcaruana">
                                                <Typography className={classes.SectionHeader} variant="subtitle1" align="left">
                                                    <b>Rich Caruana</b>
                                                </Typography>
                                            </Link>
                                            <Typography className={classes.SectionHeader} variant="body2" gutterBottom align="left">
                                                Senior Principal Researcher
                                            </Typography>
                                            <Typography className={classes.SectionHeader} variant="body2" gutterBottom align="left">
                                                Microsoft Research
                                            </Typography>
                                        </Grid>
                                    </Grid>

                                    <Grid container justify="flex-start">
                                        <Grid item xs={6} md={4} lg={2} className={classes.gridItem}>
                                            <img srcSet="assets/images/cynthia_rudin.jpeg" alt="Cynthia Rudin" width="100%" />
                                        </Grid>
                                        <Grid item xs={12} lg={9} className={classes.gridItem}>
                                            <Link target="_blank" rel="noopener" href="https://users.cs.duke.edu/~cynthia">
                                                <Typography className={classes.SectionHeader} variant="subtitle1" align="left">
                                                    <b>Cynthia Rudin</b>
                                                </Typography>
                                            </Link>
                                            <Typography className={classes.SectionHeader} variant="body2" gutterBottom align="left">
                                                Professor
                                            </Typography>
                                            <Typography className={classes.SectionHeader} variant="body2" gutterBottom align="left">
                                                Duke University
                                            </Typography>
                                        </Grid>
                                    </Grid>

                                    <Grid container justify="flex-start">
                                        <Grid item xs={6} md={4} lg={2} className={classes.gridItem}>
                                            <img srcSet="assets/images/trevor_darrell.jpeg" alt="Trevor Darrell" width="100%" />
                                        </Grid>
                                        <Grid item xs={12} lg={9} className={classes.gridItem}>
                                            <Link target="_blank" rel="noopener" href="https://people.eecs.berkeley.edu/~trevor">
                                                <Typography className={classes.SectionHeader} variant="subtitle1" align="left">
                                                    <b>Trevor Darrell</b>
                                                </Typography>
                                            </Link>
                                            <Typography className={classes.SectionHeader} variant="body2" gutterBottom align="left">
                                                Professor
                                            </Typography>
                                            <Typography className={classes.SectionHeader} variant="body2" gutterBottom align="left">
                                                University of California, Berkeley
                                            </Typography>
                                        </Grid>
                                    </Grid>

                                    <Grid container justify="flex-start">
                                        <Grid item xs={6} md={4} lg={2} className={classes.gridItem}>
                                            <img srcSet="assets/images/hima_lakkaraju.jpeg" alt="Hima Lakkaraju" width="100%" />
                                        </Grid>
                                        <Grid item xs={12} lg={9} className={classes.gridItem}>
                                            <Link target="_blank" rel="noopener" href="https://himalakkaraju.github.io">
                                                <Typography className={classes.SectionHeader} variant="subtitle1" align="left">
                                                    <b>Hima Lakkaraju</b>
                                                </Typography>
                                            </Link>
                                            <Typography className={classes.SectionHeader} variant="body2" gutterBottom align="left">
                                                Assistant Professor
                                            </Typography>
                                            <Typography className={classes.SectionHeader} variant="body2" gutterBottom align="left">
                                                Harvard University
                                            </Typography>
                                        </Grid>
                                    </Grid>

                                    <Grid container justify="flex-start">
                                        <Grid item xs={6} md={4} lg={2} className={classes.gridItem}>
                                            <img srcSet="assets/images/serena_yeung.jpeg" alt="Serena Yeung" width="100%" />
                                        </Grid>
                                        <Grid item xs={12} lg={9} className={classes.gridItem}>
                                            <Link target="_blank" rel="noopener" href="https://ai.stanford.edu/~syyeung">
                                                <Typography className={classes.SectionHeader} variant="subtitle1" align="left">
                                                    <b>Serena Yeung</b>
                                                </Typography>
                                            </Link>
                                            <Typography className={classes.SectionHeader} variant="body2" gutterBottom align="left">
                                                Assistant Professor
                                            </Typography>
                                            <Typography className={classes.SectionHeader} variant="body2" gutterBottom align="left">
                                                Stanford University
                                            </Typography>
                                        </Grid>
                                    </Grid>

                                    <Grid container justify="flex-start">
                                        <Grid item xs={6} md={4} lg={2} className={classes.gridItem}>
                                            <img srcSet="assets/images/yixin_wang.jpeg" alt="Yixin Wang" width="100%" />
                                        </Grid>
                                        <Grid item xs={12} lg={9} className={classes.gridItem}>
                                            <Link target="_blank" rel="noopener" href="https://yixinwang.github.io">
                                                <Typography className={classes.SectionHeader} variant="subtitle1" align="left">
                                                    <b>Yixin Wang</b>
                                                </Typography>
                                            </Link>
                                            <Typography className={classes.SectionHeader} variant="body2" gutterBottom align="left">
                                                Assistant Professor
                                            </Typography>
                                            <Typography className={classes.SectionHeader} variant="body2" gutterBottom align="left">
                                                University of Michigan
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
                                            Schedule
                                        </Typography>
                                    </Grid>

                                    <Grid container justify="flex-start">
                                        <Grid item xs={12} lg={9} className={classes.gridItem}>
                                            <Typography className={classes.SectionHeader} variant="body1" align="left">
                                                <b>09:00 AM - 09:20 AM: </b> Opening Remarks
                                            </Typography>
                                        </Grid>
                                    </Grid>

                                    <Grid container justify="flex-start">
                                        <Grid item xs={12} lg={9} className={classes.gridItem}>
                                            <Typography className={classes.SectionHeader} variant="body1" align="left">
                                                <b>09:20 AM - 10:00 AM: </b> Spotlight Session 1
                                            </Typography>
                                        </Grid>
                                    </Grid>

                                    <Grid container justify="flex-start">
                                        <Grid item xs={12} lg={9} className={classes.gridItem}>
                                            <Typography className={classes.SectionHeader} variant="body1" align="left">
                                                <b>10:00 AM - 10:50 AM: </b> Coffee Break + Poster Session 1
                                            </Typography>
                                        </Grid>
                                    </Grid>

                                    <Grid container justify="flex-start">
                                        <Grid item xs={12} lg={9} className={classes.gridItem}>
                                            <Typography className={classes.SectionHeader} variant="body1" align="left">
                                                <b>10:50 AM - 11:10 AM: </b> Invited Talk - Antonio Torralba
                                            </Typography>
                                        </Grid>
                                    </Grid>

                                    <Grid container justify="flex-start">
                                        <Grid item xs={12} lg={9} className={classes.gridItem}>
                                            <Typography className={classes.SectionHeader} variant="body1" align="left">
                                                <b>11:10 AM - 11:30 AM: </b> Invited Talk - Been Kim
                                            </Typography>
                                        </Grid>
                                    </Grid>

                                    <Grid container justify="flex-start">
                                        <Grid item xs={12} lg={9} className={classes.gridItem}>
                                            <Typography className={classes.SectionHeader} variant="body1" align="left">
                                                <b>11:30 AM - 11:50 AM: </b> Invited Talk - Rich Caruana
                                            </Typography>
                                        </Grid>
                                    </Grid>

                                    <Grid container justify="flex-start">
                                        <Grid item xs={12} lg={9} className={classes.gridItem}>
                                            <Typography className={classes.SectionHeader} variant="body1" align="left">
                                                <b>11:50 AM - 01:00 PM: </b> Lunch Break
                                            </Typography>
                                        </Grid>
                                    </Grid>

                                    <Grid container justify="flex-start">
                                        <Grid item xs={12} lg={9} className={classes.gridItem}>
                                            <Typography className={classes.SectionHeader} variant="body1" align="left">
                                                <b>01:00 PM - 01:40 PM: </b> Spotlight Session 2
                                            </Typography>
                                        </Grid>
                                    </Grid>

                                    <Grid container justify="flex-start">
                                        <Grid item xs={12} lg={9} className={classes.gridItem}>
                                            <Typography className={classes.SectionHeader} variant="body1" align="left">
                                                <b>01:40 PM - 02:00 PM: </b> Invited Talk - Cynthia Rudin
                                            </Typography>
                                        </Grid>
                                    </Grid>

                                    <Grid container justify="flex-start">
                                        <Grid item xs={12} lg={9} className={classes.gridItem}>
                                            <Typography className={classes.SectionHeader} variant="body1" align="left">
                                                <b>02:00 PM - 02:20 PM: </b> Invited Talk - Trevor Darrell
                                            </Typography>
                                        </Grid>
                                    </Grid>

                                    <Grid container justify="flex-start">
                                        <Grid item xs={12} lg={9} className={classes.gridItem}>
                                            <Typography className={classes.SectionHeader} variant="body1" align="left">
                                                <b>02:20 PM - 03:10 PM: </b> Coffee Break + Poster Session 2
                                            </Typography>
                                        </Grid>
                                    </Grid>
                                    
                                    <Grid container justify="flex-start">
                                        <Grid item xs={12} lg={9} className={classes.gridItem}>
                                            <Typography className={classes.SectionHeader} variant="body1" align="left">
                                                <b>03:10 PM - 03:30 PM: </b> Invited Talk - Hima Lakkaraju
                                            </Typography>
                                        </Grid>
                                    </Grid>

                                    <Grid container justify="flex-start">
                                        <Grid item xs={12} lg={9} className={classes.gridItem}>
                                            <Typography className={classes.SectionHeader} variant="body1" align="left">
                                                <b>03:30 PM - 03:50 PM: </b> Invited Talk - Serena Yeung
                                            </Typography>
                                        </Grid>
                                    </Grid>

                                    <Grid container justify="flex-start">
                                        <Grid item xs={12} lg={9} className={classes.gridItem}>
                                            <Typography className={classes.SectionHeader} variant="body1" align="left">
                                                <b>03:50 PM - 04:10 PM: </b> Invited Talk - Yixin Wang
                                            </Typography>
                                        </Grid>
                                    </Grid>

                                    <Grid container justify="flex-start">
                                        <Grid item xs={12} lg={9} className={classes.gridItem}>
                                            <Typography className={classes.SectionHeader} variant="body1" align="left">
                                                <b>04:10 PM - 04:50 PM: </b> Breakout Session per Topic
                                            </Typography>
                                        </Grid>
                                    </Grid>

                                    <Grid container justify="flex-start">
                                        <Grid item xs={12} lg={9} className={classes.gridItem}>
                                            <Typography className={classes.SectionHeader} variant="body1" align="left">
                                                <b>04:50 PM - 05:50 PM: </b> Panel Discussion
                                            </Typography>
                                        </Grid>
                                    </Grid>
                                    
                                    <Grid container justify="flex-start">
                                        <Grid item xs={12} lg={9} className={classes.gridItem}>
                                            <Typography className={classes.SectionHeader} variant="body1" align="left">
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
