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
                                            variant="h5"
                                            gutterBottom
                                            align="center"
                                            >
                                            Wokshop on Explainable Artificial Intelligence for Computer Vision (XAI4CV) at CVPR 2022
                                        </Typography>
                                    </Grid>

                                    <Grid item xs={12} className={classes.gridItem}>
                                        <Typography
                                            className={classes.sectionHeader}
                                            variant="subtitle1"
                                            align="left"
                                        >
                                            <b>Date:</b> Monday, June 20, 2022 <br></br>
                                            <b>Venue:</b> New Orleans, Louisiana<br></br><br></br>
                                            <b>Motivation:</b> Provide a common forum for both computer vision practitioners in the industry and academia to initiate discussions and propose best ways to build explainable models that can benefit the global community. 
                                        </Typography>
                                    </Grid>

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
                                            <br></br><br></br>
                                            With socio-political implications of AI in mind, this workshop aims to motivate proactive adaptation of explainability in computer vision systems. 
                                            Specifically, our aim is to spark healthy conversations that address building top-performing explainable computer vision systems that not only identify "what" and "where" different visual entities occur in an image, but also provide a human-like reasoning of "why" the model made those predictions. 
                                            Furthermore, such systems should allow a user to provide feedback and thereby correct potentially harmful mispredictions with minimal effort.
                                        </Typography>
                                    </Grid>

                                    <Grid item xs={12} className={classes.gridItem}>
                                        <Typography
                                            className={classes.sectionHeader}
                                            variant="h5"
                                            align="left"
                                            >
                                            Timeline
                                        </Typography>
                                    </Grid>

                                    <Grid container justify="flex-start">
                                        <Grid item xs={12} lg={9} className={classes.gridItem}>
                                            <Typography className={classes.SectionHeader} variant="subtitle1" align="left">
                                                <b>Event name</b>
                                            </Typography>
                                            <Typography className={classes.SectionHeader} variant="body2" gutterBottom align="left">
                                                Event description.
                                            </Typography>
                                        </Grid>
                                    </Grid>

                                    <Grid container justify="flex-start">
                                        <Grid item xs={12} lg={9} className={classes.gridItem}>
                                            <Typography className={classes.SectionHeader} variant="subtitle1" align="left">
                                                <b>Event name</b>
                                            </Typography>
                                            <Typography className={classes.SectionHeader} variant="body2" gutterBottom align="left">
                                                Event description.
                                            </Typography>
                                        </Grid>
                                    </Grid>

                                    <Grid container justify="flex-start">
                                        <Grid item xs={12} lg={9} className={classes.gridItem}>
                                            <Typography className={classes.SectionHeader} variant="subtitle1" align="left">
                                                <b>Event name</b>
                                            </Typography>
                                            <Typography className={classes.SectionHeader} variant="body2" gutterBottom align="left">
                                                Event description.
                                            </Typography>
                                        </Grid>
                                    </Grid>

                                    <Grid container justify="flex-start">
                                        <Grid item xs={12} lg={9} className={classes.gridItem}>
                                            <Typography className={classes.SectionHeader} variant="subtitle1" align="left">
                                                <b>Event name</b>
                                            </Typography>
                                            <Typography className={classes.SectionHeader} variant="body2" gutterBottom align="left">
                                                Event description.
                                            </Typography>
                                        </Grid>
                                    </Grid>

                                    <Grid item xs={12} className={classes.gridItem}>
                                        <Typography
                                            className={classes.sectionHeader}
                                            variant="h5"
                                            align="left"
                                            >
                                            Speakers
                                        </Typography>
                                    </Grid>

                                    <Grid container justify="flex-start">
                                        <Grid item xs={10} md={8} lg={3} className={classes.gridItem}>
                                            <img srcSet="assets/images/abhishek_kadian.jpg" alt="Habitat" width="100%" />
                                        </Grid>
                                        <Grid item xs={12} lg={9} className={classes.gridItem}>
                                            <Typography className={classes.SectionHeader} variant="subtitle1" align="left">
                                                <b>Speaker name</b>
                                            </Typography>
                                            <Typography className={classes.SectionHeader} variant="body2" gutterBottom align="left">
                                                Speaker description.
                                            </Typography>
                                        </Grid>
                                    </Grid>

                                    <Grid container justify="flex-start">
                                        <Grid item xs={10} md={8} lg={3} className={classes.gridItem}>
                                            <img srcSet="assets/images/abhishek_kadian.jpg" alt="Habitat" width="100%" />
                                        </Grid>
                                        <Grid item xs={12} lg={9} className={classes.gridItem}>
                                            <Typography className={classes.SectionHeader} variant="subtitle1" align="left">
                                                <b>Speaker name</b>
                                            </Typography>
                                            <Typography className={classes.SectionHeader} variant="body2" gutterBottom align="left">
                                                Speaker description.
                                            </Typography>
                                        </Grid>
                                    </Grid>

                                    <Grid container justify="flex-start">
                                        <Grid item xs={10} md={8} lg={3} className={classes.gridItem}>
                                            <img srcSet="assets/images/abhishek_kadian.jpg" alt="Habitat" width="100%" />
                                        </Grid>
                                        <Grid item xs={12} lg={9} className={classes.gridItem}>
                                            <Typography className={classes.SectionHeader} variant="subtitle1" align="left">
                                                <b>Speaker name</b>
                                            </Typography>
                                            <Typography className={classes.SectionHeader} variant="body2" gutterBottom align="left">
                                                Speaker description.
                                            </Typography>
                                        </Grid>
                                    </Grid>

                                    <Grid container justify="flex-start">
                                        <Grid item xs={10} md={8} lg={3} className={classes.gridItem}>
                                            <img srcSet="assets/images/abhishek_kadian.jpg" alt="Habitat" width="100%" />
                                        </Grid>
                                        <Grid item xs={12} lg={9} className={classes.gridItem}>
                                            <Typography className={classes.SectionHeader} variant="subtitle1" align="left">
                                                <b>Speaker name</b>
                                            </Typography>
                                            <Typography className={classes.SectionHeader} variant="body2" gutterBottom align="left">
                                                Speaker description.
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
