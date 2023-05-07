import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import People from './People_CVPR23';
import Speakers from './Speakers_CVPR23';
import Link from '@material-ui/core/Link';
import PDFIcon from '@material-ui/icons/PictureAsPdf';
import VideoIcon from '@material-ui/icons/VideoLibrary';


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
                                            The 2nd Explainable AI for Computer Vision (XAI4CV) Workshop at CVPR 2023
                                        </Typography>
                                    </Grid>

                                    <div className={classes.container}/>

                                    <Grid item xs={12} className={classes.gridItem}>
                                        <Typography className={classes.sectionHeader} variant="subtitle1" align="left">
                                            <b>Date:</b> Monday, June 19, 2023 <br />
                                            <b>Venue:</b> Vancouver Convention Center, Vancouver, BC, Canada <br />
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
                                            Computer vision (CV) systems are ubiquitous: from unlocking our phones with face identification, to monitoring traffic in busy roads, to assisting radiologists with automated medical image analysis. These systems are typically black boxes and do not provide explanations of their outputs. However, explainability of these systems is critical for people to effectively use, interact, and achieve best outcomes with them. Recognizing this need, the recent European GDPR regulations even identify a new "right to explanation" for individuals whose legal status is affected by a solely-automated decision, and require explainability and transparency of automated systems.
                                            <br /><br />
                                            In line with the growing recognition of the importance of explainability, hundreds of explainable AI (XAI) methods have been proposed in recent years. Yet, XAI research for computer vision systems is currently in a nascent stage where most of the work is in developing post-hoc explanation methods that indicate input features (e.g., pixels) that led to a certain output.  These methods are typically used by developers for debugging and improving their systems, however, the utility of explanations provided by these methods have been called into question in recent works. Furthermore, little is understood about whether existing XAI explanations are understandable and useful to end-users of these systems who often have little to no background in AI or CV.
                                            <br /><br />
                                            In this workshop, we seek to provide a forum for researchers and practitioners to discuss the unique challenges and opportunities in XAI for CV, and push the frontiers of the field.
                                        </Typography>
                                    </Grid>


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
                                            <b>Proceedings track:</b> We welcome <b>max 4-page</b> submissions of papers and demos. Submissions accepted to this track <b>will be published</b> in the CVPR 2023 workshop proceedings.
                                          </li>
                                          <li>
                                            <b>Non-proceedings track:</b> We welcome <b>max 2-page</b> submissions (commonly referred to as "extended abstracts") of papers and demos. For the non-proceedings track, we encourage submissions of published or accepted work (e.g., papers and demos accepted to the CVPR 2023 main program). Submissions accepted to this track <b>will <i>not</i> be published</b> in the CVPR 2023 workshop proceedings.
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
                                        Submissions due <b><strike>March 14, 2023 (5pm PT)</strike> March 17, 2023 (5pm PT)</b>. <br/>
                                        Decisions on <b><strike>April 1, 2023</strike> April 4, 2023</b>. <br/>
                                        Camera-ready due on <b><strike>April 8, 2023 (5pm PT)</strike> April 13, 2023 (5pm PT)</b>.
                                        <br/>
                                        <br/>
                                        <b>Non-proceedings track</b> <br/>
                                        Submissions due <b>May 19, 2023 (5pm PT)</b>. <br/>
                                        Rolling decisions from <b>May 1, 2023</b> to <b>May 25, 2023</b>. <br/>
                                        Camera-ready due on <b>June 8, 2023 (5pm PT)</b>.
                                        </Typography>
                                    </Grid>


                                    <Grid item xs={12} className={classes.gridItem}>
                                        <Typography className={classes.sectionHeader} variant="subtitle1" align="left">
                                            <b>Submission instructions</b>
                                        </Typography>
                                        <br/>
                                        <Typography className={classes.sectionHeader} variant="body2" align="left">
                                        All submissions should be in the <b>anonymized</b> CVPR 2023 format available at <a target="_blank" rel="noopener" href="https://cvpr.thecvf.com/Conferences/2023/AuthorGuidelines"><b>https://cvpr.thecvf.com/Conferences/2023/AuthorGuidelines</b></a>.
                                        <br/>
                                        The page limits <b>do not</b> include references.
                                        <br/>
                                        Submissions can be done at <a target="_blank" rel="noopener" href="https://cmt3.research.microsoft.com/XAI4CV2023"><b>https://cmt3.research.microsoft.com/XAI4CV2023</b></a>.
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
                                        Abiding by the <a target="_blank" rel="noopener" href="https://cvpr2023.thecvf.com/Conferences/2023/Pricing2"><b>CVPR guidelines</b></a>, all accepted papers <b>must be presented by one of the authors</b>.
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
                                            Invited Speakers
                                        </Typography>
                                    </Grid>

                                    <Speakers/>

                                    <div className={classes.container}/>

                                    <Grid item xs={12} className={classes.gridItem}>
                                        <Typography className={classes.sectionHeader} variant="h5" align="left">
                                            Tentative Schedule
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
                                            <Typography className={classes.SectionHeader} variant="body2" align="left">
                                                <b>09:15 AM - 09:30 AM: </b> Opening Remarks
                                            </Typography>
                                        </Grid>
                                    </Grid>

                                    <Grid container justify="flex-start">
                                        <Grid item xs={12} lg={12} className={classes.gridItem}>
                                            <Typography className={classes.SectionHeader} variant="body2" align="left">
                                                <b>09:30 AM - 10:00 AM: </b> Invited Talk 1: <a target="_blank" rel="noopener" href="https://www.atb-potsdam.de/en/about-us/team/staff-members/person/marina-hohne">Marina M.-C. Höhne (née Vidovic)</a>
                                            </Typography>
                                        </Grid>
                                    </Grid>

                                    <Grid container justify="flex-start">
                                        <Grid item xs={12} lg={12} className={classes.gridItem}>
                                            <Typography className={classes.SectionHeader} variant="body2" align="left">
                                                <b>10:00 AM - 10:30 AM: </b> Invited Talk 2: <a target="_blank" rel="noopener" href="https://arvindsatya.com/">Arvind Satyanarayan</a>
                                            </Typography>
                                        </Grid>
                                    </Grid>

                                    <Grid container justify="flex-start">
                                        <Grid item xs={12} lg={12} className={classes.gridItem}>
                                            <Typography className={classes.SectionHeader} variant="body2" align="left">
                                                <b>10:30 AM - 11:00 AM: </b> Spotlight Session 1
                                            </Typography>
                                        </Grid>
                                    </Grid>

                                    <Grid container justify="flex-start">
                                        <Grid item xs={12} lg={12} className={classes.gridItem}>
                                            <Typography className={classes.SectionHeader} variant="body2" align="left">
                                                <b>11:00 AM - 12:00 PM: </b> Poster Session 1
                                            </Typography>
                                        </Grid>
                                    </Grid>

                                    <Grid container justify="flex-start">
                                        <Grid item xs={12} lg={12} className={classes.gridItem}>
                                            <Typography className={classes.SectionHeader} variant="body2" align="left">
                                                <b>12:00 AM - 01:30 PM: </b> Lunch Social
                                            </Typography>
                                        </Grid>
                                    </Grid>

                                    <Grid container justify="flex-start">
                                        <Grid item xs={12} lg={12} className={classes.gridItem}>
                                            <Typography className={classes.SectionHeader} variant="body2" align="left">
                                                <b>01:30 PM - 02:00 PM: </b> Invited Talk 3: <a target="_blank" rel="noopener" href="http://qveraliao.com/">Q. Vera Liao</a>
                                            </Typography>
                                        </Grid>
                                    </Grid>

                                    <Grid container justify="flex-start">
                                        <Grid item xs={12} lg={12} className={classes.gridItem}>
                                            <Typography className={classes.SectionHeader} variant="body2" align="left">
                                                <b>02:00 PM - 02:30 PM: </b> Invited Talk 4: <a target="_blank" rel="noopener" href="https://ai.sony/people/Alice-Xiang/">Alice Xiang</a>
                                            </Typography>
                                        </Grid>
                                    </Grid>

                                    <Grid container justify="flex-start">
                                        <Grid item xs={12} lg={12} className={classes.gridItem}>
                                            <Typography className={classes.SectionHeader} variant="body2" align="left">
                                                <b>02:30 PM - 03:00 PM: </b> Spotlight Session 2
                                            </Typography>
                                        </Grid>
                                    </Grid>

                                    <Grid container justify="flex-start">
                                        <Grid item xs={12} lg={12} className={classes.gridItem}>
                                            <Typography className={classes.SectionHeader} variant="body2" align="left">
                                                <b>03:00 PM - 04:00 PM: </b> Poster Session 2
                                            </Typography>
                                        </Grid>
                                    </Grid>

                                    <Grid container justify="flex-start">
                                        <Grid item xs={12} lg={12} className={classes.gridItem}>
                                            <Typography className={classes.SectionHeader} variant="body2" align="left">
                                                <b>04:00 PM - 04:30 PM: </b> Invited Talk 5: <a target="_blank" rel="noopener" href="https://baulab.info/">David Bau</a>
                                            </Typography>
                                        </Grid>
                                    </Grid>

                                    <Grid container justify="flex-start">
                                        <Grid item xs={12} lg={12} className={classes.gridItem}>
                                            <Typography className={classes.SectionHeader} variant="body2" align="left">
                                                <b>04:30 PM - 05:00 PM: </b> Invited Talk 6: <a target="_blank" rel="noopener" href="https://www.cs.unc.edu/~mbansal/">Mohit Bansal</a>
                                            </Typography>
                                        </Grid>
                                    </Grid>

                                    <Grid container justify="flex-start">
                                        <Grid item xs={12} lg={12} className={classes.gridItem}>
                                            <Typography className={classes.SectionHeader} variant="body2" align="left">
                                                <b>05:00 PM - 05:15 PM: </b> Closing Remarks
                                            </Typography>
                                        </Grid>
                                    </Grid>

                                    <div className={classes.container}/>

                                    <Grid item xs={12} className={classes.gridItem}>
                                        <Typography className={classes.sectionHeader} variant="h5" align="left">
                                            Accepted Papers
                                        </Typography>
                                    </Grid>

                                    <Grid item xs={12} className={classes.gridItem}>
                                        <Typography className={classes.sectionHeader} variant="subtitle1" align="left">
                                            <b>Proceedings Track</b>
                                        </Typography>
                                        <Typography className={classes.sectionHeader} variant="body2" align="left">
                                        <ul>
                                          <li><Link target="_blank" rel="noopener" href="./assets/papers2023/P01_ODSmoothGrad.pdf"><b><PDFIcon fontSize="inherit"/> P01</b></Link> <b>ODSmoothGrad: Generating Saliency Maps for Object Detectors.</b> Chul Gwon, Steven C. Howell.</li>
                                          <li><Link target="_blank" rel="noopener" href="./assets/papers2023/P02_SanityChecks.pdf"><b><PDFIcon fontSize="inherit"/> P02</b></Link> <b>Sanity Checks for Patch Visualisation in Prototype-based Image Classification.</b> Romain Xu-Darme, Georges Quénot, Zakaria Chihani, Marie-Christine Rousset.</li>
                                          <li><Link target="_blank" rel="noopener" href="./assets/papers2023/P03_ManifoldHypothesis.pdf"><b><PDFIcon fontSize="inherit"/> P03</b></Link> <b>The Manifold Hypothesis for Gradient-Based Explanations.</b> Sebastian Bordt, Uddeshya Upadhyay, Zeynep Akata, Ulrike von Luxburg.</li>
                                          <li><Link target="_blank" rel="noopener" href="./assets/papers2023/P04_HierarchicalExplanations.pdf"><b><PDFIcon fontSize="inherit"/> P04</b></Link> <b>Hierarchical Explanations for Video Action Recognition.</b> Sadaf Gulshad, Teng Long, Nanne van Noord.</li>
                                          <li><Link target="_blank" rel="noopener" href="./assets/papers2023/P05_ConfusionMatrix.pdf"><b><PDFIcon fontSize="inherit"/> P05</b></Link> <b>A Confusion Matrix for Evaluating Feature Attribution Methods.</b> Anna Arias-Duart, Ettore Mariotti, Dario Garcia-Gasulla, Jose Maria Alonso-Moral.</li>
                                          <li><Link target="_blank" rel="noopener" href="./assets/papers2023/P06_Robustness.pdf"><b><PDFIcon fontSize="inherit"/> P06</b></Link> <b>Robustness of Visual Explanations to Common Data Augmentation Methods.</b> Lenka Tětková, Lars Kai Hansen.</li>
                                          <li><Link target="_blank" rel="noopener" href="./assets/papers2023/P07_ShortcutRemoval.pdf"><b><PDFIcon fontSize="inherit"/> P07</b></Link> <b>Localized Shortcut Removal.</b> Nicolas M. Müller*, Jochen Jacobs*, Jennifer Williams, Konstantin Böttinger.</li>
                                          <li><Link target="_blank" rel="noopener" href="./assets/papers2023/P08_MedicalImaging.pdf"><b><PDFIcon fontSize="inherit"/> P08</b></Link> <b>Towards Evaluating Explanations of Vision Transformers for Medical Imaging.</b> Piotr Komorowski, Hubert Baniecki, Przemyslaw Biecek.</li>
                                          <li><Link target="_blank" rel="noopener" href="./assets/papers2023/P09_SegXResCAM.pdf"><b><PDFIcon fontSize="inherit"/> P09</b></Link> <b>Seg-XRes-CAM: Explaining Spatially Local Regions in Image Segmentation.</b> Syed Nouman Hasany, Caroline Petitjean, Fabrice Mériaudeau.</li>
                                          <li><Link target="_blank" rel="noopener" href="./assets/papers2023/P10_MonocularCriteria.pdf"><b><PDFIcon fontSize="inherit"/> P10</b></Link> <b>Analyzing Results of Depth Estimation Models with Monocular Criteria.</b> Jonas Theiner, Nils Nommensen, Jim Rhotert, Matthias Springstein, Eric Müller-Budack, Ralph Ewerth.</li>
                                          <li><Link target="_blank" rel="noopener" href="./assets/papers2023/P11_Text2Concept.pdf"><b><PDFIcon fontSize="inherit"/> P11</b></Link> <b>Text2Concept: Concept Activation Vectors Directly From Text.</b> Mazda Moayeri, Keivan Rezaei, Maziar Sanjabi, Soheil Feizi.</li>
                                          <li><Link target="_blank" rel="noopener" href="./assets/papers2023/P12_CAVLI.pdf"><b><PDFIcon fontSize="inherit"/> P12</b></Link> <b>CAVLI - Using Image Associations to Produce Local Concept-based Explanations.</b> Pushkar Shukla, Sushil Bharati, Matthew Turk.</li>
                                          <li><Link target="_blank" rel="noopener" href="./assets/papers2023/P13_VisionDiffMask.pdf"><b><PDFIcon fontSize="inherit"/> P13</b></Link> <b>Vision DiffMask: Faithful Interpretation of Vision Transformers with Differentiable Patch Masking.</b> Angelos Nalmpantis*, Apostolos Panagiotopoulos*, John Gkountouras*, Konstantinos Papakostas, Wilker Aziz.</li>
                                          <li><Link target="_blank" rel="noopener" href="./assets/papers2023/P14_TaskAgnostic.pdf"><b><PDFIcon fontSize="inherit"/> P14</b></Link> <b>Ante-Hoc Generation of Task-Agnostic Interpretation Maps.</b> Akash Guna R T, Raul Benitez, Sikha O K.</li>
                                          <li><Link target="_blank" rel="noopener" href="./assets/papers2023/P15_Disentangling.pdf"><b><PDFIcon fontSize="inherit"/> P15</b></Link> <b>Disentangling Neuron Representations with Concept Vectors.</b> Laura O'Mahony, Vincent Andrearczyk, Henning Müller, Mara Graziani.</li>
                                          <li><Link target="_blank" rel="noopener" href="./assets/papers2023/P16_SharedInterestSometimes.pdf"><b><PDFIcon fontSize="inherit"/> P16</b></Link> <b>Shared Interest...Sometimes: Understanding the Alignment between Human Perception, Vision Architectures, and Saliency Map Techniques.</b> Katelyn Morrison, Ankita Mehra, Adam Perer.</li>
                                          <li><Link target="_blank" rel="noopener" href="./assets/papers2023/P17_ZEBRA.pdf"><b><PDFIcon fontSize="inherit"/> P17</b></Link> <b>ZEBRA: Explaining Rare Cases through Outlying Interpretable Concepts.</b> Pedro Madeira, André Carreiro, Alex Gaudio, Luís Rosado, Filipe Soares, Asim Smailagic.</li>
                                        </ul>
                                        </Typography>
                                    </Grid>

                                    <Grid item xs={12} className={classes.gridItem}>
                                        <Typography className={classes.sectionHeader} variant="subtitle1" align="left">
                                            <b>Non-proceedings Track</b>
                                        </Typography>
                                        <Typography className={classes.sectionHeader} variant="body2" align="left">
                                        <ul>
                                          <li>We are receiving submissions until <b>May 19, 2023 (5pm PT)</b>!</li>
                                        </ul>
                                        </Typography>
                                    </Grid>

                                    <div className={classes.container}/>

                                    <Grid item xs={12} className={classes.gridItem}>
                                        <Typography className={classes.sectionHeader} variant="h5" align="left">
                                            Organizers
                                        </Typography>
                                    </Grid>

                                    <People/>

                                    <div className={classes.container}/>

                                    <Grid item xs={12} className={classes.gridItem}>
                                        <Typography className={classes.sectionHeader} variant="h5" align="left">
                                            Program Committee
                                        </Typography>
                                    </Grid>
                                    <Grid container justify="flex-start">
                                        <Grid item xs={12} lg={9} className={classes.gridItem}>
                                            <Typography className={classes.SectionHeader} variant="body2" align="left">
                                            <b>We thank our wonderful program committee members who are making this workshop possible!</b>
                                            <br/><br/>
                                            Abhimanyu Dubey, Andrew Elliott, Angelina Wang, Anirban Sarkar, Anmol Kalia, Arijit Ray,
                                            Chenyang Zhao, Chhavi Yadav, Chirag Agarwal, David Schinagl, Deepti Ghadiyaram, Devon Ulrich,
                                            Donald Honeycutt, Eunji Kim, Filip Radenovic, Giang Nguyen, Haofan Wang, Hubert Baniecki,
                                            Indu Panigrahi, Itana Bulatovic, Jae Myung Kim, Jihoon Chung, Jonathan Donnelly,
                                            Joseph Paul Cohen, Julien Colin, Kira Vinogradova, Lan Wang, Matthew Kowal, Mehdi Nourelahi,
                                            Mert Yuksekgonul, Moritz Böhle, Peter Hase, Qi Li, Rama Kovvuri, Ruth Fong, Satyapriya Krishna,
                                            Sunnie S. Y. Kim, Thomas Fel, Vikram V. Ramaswamy, Vipin Pillai, William Wang, Xinran Liang
                                            </Typography>
                                        </Grid>
                                    </Grid>

                                    <div className={classes.container}/>

                                    <Grid item xs={12} className={classes.gridItem}>
                                        <Typography className={classes.sectionHeader} variant="h5" align="left">
                                            Contact
                                        </Typography>
                                    </Grid>
                                    <Grid container justify="flex-start">
                                        <Grid item xs={12} lg={9} className={classes.gridItem}>
                                            <Typography className={classes.SectionHeader} variant="body2" align="left">
                                                Email: <Link href="mailto:xai4cv2023@googlegroups.com">xai4cv2023@googlegroups.com</Link>
                                            </Typography>
                                        </Grid>
                                    </Grid>

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
