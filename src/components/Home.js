import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid'
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
    }
});

class Home extends React.Component {
    state = {
        checked: false
    }

    render() {
        const { classes } = this.props;

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
                                    <Grid container justify="flex-start">
                                        <Grid item xs={12} lg={6} className={classes.gridItem}>
                                            <Typography
                                                className={classes.sectionHeader}
                                                variant="h3"
                                                gutterBottom
                                                align="left"
                                                >
                                                XAI4CV
                                            </Typography>
                                            <Typography
                                                className={classes.SectionHeader}
                                                variant="body2"
                                                gutterBottom
                                                align="left"
                                            >
                                                Facebook AI Research (FAIR)
                                            </Typography>
                                        </Grid>
                                    </Grid>
                                    <Grid item xs={12} className={classes.gridItem}>
                                        <Typography
                                            className={classes.sectionHeader}
                                            variant="h5"
                                            align="left"
                                            >
                                            Contact
                                        </Typography>
                                    </Grid>
                                    <Grid container justify="flex-start">
                                        <Grid item xs={12} lg={9} className={classes.gridItem}>
                                            <Typography className={classes.SectionHeader} variant="body2" align="left">
                                                Email: <Link href="mailto:abhishekkadiyan@gmail.com">abhishekkadiyan@gmail.com</Link>
                                            </Typography>
                                        </Grid>
                                    </Grid>
                                    <Grid item xs={12} md={12} lg={12} className={classes.gridItem}>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>

                </Grid>
            </div>
        );
    }
}

Home.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Home);