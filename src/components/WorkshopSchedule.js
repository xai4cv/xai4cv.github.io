import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Speakers from './Speakers';
import Link from '@material-ui/core/Link';
import PDFIcon from '@material-ui/icons/PictureAsPdf';


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

class WorkshopSchedule extends React.Component {
    state = {
        checked: false
    }

    render() {
        const { classes } = this.props;
        document.title='WorkshopSchedule';

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
                                            variant="h5"
                                            align="left"
                                            >
                                            Detailed Schedule
                                        </Typography>
                                    </Grid>

                                    <Grid item xs={12} className={classes.gridItem}>
                                        <Typography
                                            className={classes.sectionHeader}
                                            variant="subtitle1"
                                            align="left"
                                        >
                                            <b>Date:</b> Monday, June 20, 2022 <br />
                                            <b>Venue:</b> New Orleans, Louisiana <br />
                                        </Typography>
                                    </Grid>


                                    <div className={classes.container}/>

                                    <Grid container justify="flex-start">
                                        <Grid item xs={12} lg={12} className={classes.gridItem}>
                                            <Typography className={classes.SectionHeader} variant="body1" align="left">
                                                <b>09:00 AM - 09:10 AM: </b> Opening Remarks
                                            </Typography>
                                        </Grid>
                                    </Grid>

                                    <Grid container justify="flex-start">
                                        <Grid item xs={12} lg={12} className={classes.gridItem}>
                                            <Typography className={classes.SectionHeader} variant="body1" align="left">
                                                <b>09:10 AM - 09:50 AM: </b> Spotlight Session 1 (<i>8 min + 2 min QA</i>)
                                            </Typography>
                                            <Typography className={classes.SectionHeader} variant="body2" align="left">
                                                <ul>
                                                    <li>ID 06: <b>HIVE: Evaluating the Human Interpretability of Visual Explanations.</b> Sunnie S. Y. Kim, Nicole Meister, Vikram V. Ramaswamy, Ruth C Fong, Olga Russakovsky.</li>
                                                    <li>ID 11: <b>Explaining Deep Convolutional Neural Networks via Latent Visual-Semantic Filter Attention.</b> Yu Yang, Seungbae Kim, Jungseock Joo.</li>
                                                    <li>ID 17: <b>Causality for Inherently Explainable Transformers: CAT-XPLAIN.</b> Subash Khanal, Benjamin Brodie, Xin Xing, Ai-Ling Lin, Nathan Jacobs.</li>
                                                    <li>ID 20: <b>Do learned representations respect causal relationships?</b> Lan Wang, Vishnu Boddeti.</li>
                                                </ul>
                                            </Typography>
                                        </Grid>
                                    </Grid>

                                    <Grid container justify="flex-start">
                                        <Grid item xs={12} lg={12} className={classes.gridItem}>
                                            <Typography className={classes.SectionHeader} variant="body1" align="left">
                                                <b>09:50 AM - 10:30 AM: </b> Coffee Break + Poster Session 1
                                            </Typography>
                                            <Typography className={classes.SectionHeader} variant="body2" align="left">
                                                <ul>
                                                    <li><Link target="_blank" rel="noopener" href="./assets/posters/p2.pdf"><b><PDFIcon fontSize="inherit"/> P 02</b></Link>: <b>Finding and Fixing Spurious Patterns with Explanations.</b> Gregory Plump, Marco Tulio Ribeiro, Ameet Talwalkar.</li>
                                                    <li><Link target="_blank" rel="noopener" href="./assets/posters/p3.pdf"><b><PDFIcon fontSize="inherit"/> P 03</b></Link>: <b>Sanity Simulations for Saliency Methods.</b> Joon Sik Kim, Gregory Plumb, Ameet Talwalkar.</li>
                                                    <li><Link target="_blank" rel="noopener" href="./assets/posters/p4.pdf"><b><PDFIcon fontSize="inherit"/> P 04</b></Link>: <b>Xplique: A Deep Learning Explainability Toolbox.</b> Thomas FEL, Lucas Hervier, David Vigouroux, Antonin Poche, Justin Plakoo, Remi Cadene, Mathieu Chalvidal, Julien Colin, Thibaut Boissin, Louis Béthune, Agustin Picard, Claire NICODEME, Laurent Gardes, Grégory Flandin, Thomas Serre.</li>
                                                    <li><Link target="_blank" rel="noopener" href="./assets/posters/p6.pdf"><b><PDFIcon fontSize="inherit"/> P 06</b></Link>: <b>HIVE: Evaluating the Human Interpretability of Visual Explanations.</b> Sunnie S. Y. Kim, Nicole Meister, Vikram V. Ramaswamy, Ruth C Fong, Olga Russakovsky.</li>
                                                    <li><Link target="_blank" rel="noopener" href="./assets/posters/p10.pdf"><b><PDFIcon fontSize="inherit"/> P 10</b></Link>: <b>Give Users What They Want: Labeled Arrows.</b> Severine Soltani, Michael Pazzani.</li>
                                                    <li><Link target="_blank" rel="noopener" href="./assets/posters/p11.pdf"><b><PDFIcon fontSize="inherit"/> P 11</b></Link>: <b>Explaining Deep Convolutional Neural Networks via Latent Visual-Semantic Filter Attention.</b> Yu Yang, Seungbae Kim, Jungseock Joo.</li>
                                                    <li><Link target="_blank" rel="noopener" href="./assets/posters/p12.pdf"><b><PDFIcon fontSize="inherit"/> P 12</b></Link>: <b>HINT: Hierarchical Neuron Concept Explainer.</b> Andong Wang, W.N. Lee, Xiaojuan Qi</li>
                                                    <li><Link target="_blank" rel="noopener" href="./assets/posters/p17.pdf"><b><PDFIcon fontSize="inherit"/> P 17</b></Link>: <b>Causality for Inherently Explainable Transformers: CAT-XPLAIN.</b> Subash Khanal, Benjamin Brodie, Xin Xing, Ai-Ling Lin, Nathan Jacobs.</li>
                                                    <li><Link target="_blank" rel="noopener" href="./assets/posters/p18.pdf"><b><PDFIcon fontSize="inherit"/> P 18</b></Link>: <b>Ensembles for Improved Explanation of Image Classification.</b> Aadil Ahamed, Kamran Alipour, Michael Pazzani, Sateesh Kumar.</li>
                                                    <li><Link target="_blank" rel="noopener" href="./assets/posters/p20.pdf"><b><PDFIcon fontSize="inherit"/> P 20</b></Link>: <b>Do learned representations respect causal relationships?</b>	Lan Wang, Vishnu Boddeti.</li>
                                                    <li><Link target="_blank" rel="noopener" href="./assets/posters/p21.pdf"><b><PDFIcon fontSize="inherit"/> P 21</b></Link>: <b>ELUDE: Generating Interpretable Explanations via a Decomposition into Labelled and Unlabelled features.</b> Vikram V. Ramaswamy, Sunnie S. Y. Kim, Nicole Meister, Ruth C Fong, Olga Russakovsky.</li>
                                                    <li><Link target="_blank" rel="noopener" href="./assets/posters/p22.pdf"><b><PDFIcon fontSize="inherit"/> P 22</b></Link>: <b>Explaining Local Discrepancies between Image Classification Models.</b> Thibault Laugel, Xavier Renard, Marcin Detyniecki.</li>
                                                    <li><Link target="_blank" rel="noopener" href="./assets/posters/p23.pdf"><b><PDFIcon fontSize="inherit"/> P 23</b></Link>: <b>CLEVR-X: A Visual Reasoning Dataset for Natural Language Explanations.</b> Leonard Salewski, A. Sophia Koepke, Hendrik P. A. Lensch, Zeynep Akata.</li>
                                                    <li><Link target="_blank" rel="noopener" href="./assets/posters/p24.pdf"><b><PDFIcon fontSize="inherit"/> P 24</b></Link>: <b>Cycle-Consistent Counterfactuals by Latent Transformations.</b> Saeed Khorram, Li Fuxin.</li>
                                                    <li><Link target="_blank" rel="noopener" href="./assets/posters/p26.pdf"><b><PDFIcon fontSize="inherit"/> P 26</b></Link>: <b>Subspace Based Visualization for Embedding Network.</b> Xiaotong Liu, Abby Stylianou, Zeyu Zhang, Robert Pless.</li>
                                                </ul>
                                            </Typography>
                                        </Grid>
                                    </Grid>

                                    <Grid container justify="flex-start">
                                        <Grid item xs={12} lg={12} className={classes.gridItem}>
                                            <Typography className={classes.SectionHeader} variant="body1" align="left">
                                                <b>10:30 AM - 11:00 AM: </b> Invited Talk - <b>Antonio Torralba</b>
                                            </Typography>
                                        </Grid>
                                    </Grid>

                                    <Grid container justify="flex-start">
                                        <Grid item xs={12} lg={12} className={classes.gridItem}>
                                            <Typography className={classes.SectionHeader} variant="body1" align="left">
                                                <b>11:00 AM - 11:30 AM: </b> Invited Talk - <b>Yixin Wang</b>
                                            </Typography>
                                        </Grid>
                                    </Grid>

                                    <Grid container justify="flex-start">
                                        <Grid item xs={12} lg={12} className={classes.gridItem}>
                                            <Typography className={classes.SectionHeader} variant="body1" align="left">
                                                <b>11:30 AM - 12:00 AM: </b> Invited Talk - <b>Rich Caruana</b>
                                            </Typography>
                                        </Grid>
                                    </Grid>

                                    <Grid container justify="flex-start">
                                        <Grid item xs={12} lg={12} className={classes.gridItem}>
                                            <Typography className={classes.SectionHeader} variant="body1" align="left">
                                                <b>12:00 AM - 12:50 PM: </b> Lunch Break
                                            </Typography>
                                        </Grid>
                                    </Grid>

                                    <Grid container justify="flex-start">
                                        <Grid item xs={12} lg={12} className={classes.gridItem}>
                                            <Typography className={classes.SectionHeader} variant="body1" align="left">
                                                <b>12:50 PM - 01:30 PM: </b> Spotlight Session 2 (<i>8 min + 2 min QA</i>)
                                            </Typography>
                                            <Typography className={classes.SectionHeader} variant="body2" align="left">
                                                <ul>
                                                    <li>ID 27: <b>A Deeper Dive Into What Deep Spatiotemporal Networks Encode: Quantifying Static vs. Dynamic Information.</b> Matthew Kowal, Mennatullah Siam, Md Amirul Islam, Neil Bruce, Rick Wildes, Konstantinos G Derpanis.</li>
                                                    <li>ID 31: <b>Consistent Explanations by Contrastive Learning.</b> Vipin Pillai, Soroush Abbasi Koohpayegani, Ashley Ouligian, Dennis Fong, Hamed Pirsiavash.</li>
                                                    <li>ID 35: <b>OccAM's Laser: Occlusion-based Attribution Maps for 3D Object Detectors on LiDAR Data.</b> David Schinagl, Georg Krispel, Horst Possegger, Peter M. Roth, Horst Bischof.</li>
                                                    <li>ID 54: <b>B-cos Networks: Alignment is All We Need for Interpretability.</b> Moritz Böhle, Mario Fritz, Bernt Schiele.</li>
                                                </ul>
                                            </Typography>
                                        </Grid>
                                    </Grid>

                                    <Grid container justify="flex-start">
                                        <Grid item xs={12} lg={12} className={classes.gridItem}>
                                            <Typography className={classes.SectionHeader} variant="body1" align="left">
                                                <b>01:30 PM - 02:00 PM: </b> Invited Talk - <b>Been Kim</b>
                                            </Typography>
                                        </Grid>
                                    </Grid>

                                    <Grid container justify="flex-start">
                                        <Grid item xs={12} lg={12} className={classes.gridItem}>
                                            <Typography className={classes.SectionHeader} variant="body1" align="left">
                                                <b>02:00 PM - 02:30 PM: </b> Invited Talk - <b>Trevor Darrell</b>
                                            </Typography>
                                        </Grid>
                                    </Grid>

                                    <Grid container justify="flex-start">
                                        <Grid item xs={12} lg={12} className={classes.gridItem}>
                                            <Typography className={classes.SectionHeader} variant="body1" align="left">
                                                <b>02:30 PM - 03:10 PM: </b> Coffee Break + Poster Session 2
                                            </Typography>
                                            <Typography className={classes.SectionHeader} variant="body2" align="left">
                                                <ul>
                                                    <li><Link target="_blank" rel="noopener" href="./assets/posters/p27.pdf"><b><PDFIcon fontSize="inherit"/> P 27</b></Link>: <b>A Deeper Dive Into What Deep Spatiotemporal Networks Encode: Quantifying Static vs. Dynamic Information.</b> Matthew Kowal, Mennatullah Siam, Md Amirul Islam, Neil Bruce, Rick Wildes, Konstantinos G Derpanis.</li>
                                                    <li><Link target="_blank" rel="noopener" href="./assets/posters/p31.pdf"><b><PDFIcon fontSize="inherit"/> P 31</b></Link>: <b>Consistent Explanations by Contrastive Learning.</b> Vipin Pillai, Soroush Abbasi Koohpayegani, Ashley Ouligian, Dennis Fong, Hamed Pirsiavash.</li>
                                                    <li><Link target="_blank" rel="noopener" href="./assets/posters/p32.pdf"><b><PDFIcon fontSize="inherit"/> P 32</b></Link>: <b>Testing Explanation Algorithms on Transformers.</b> Mingqi Jiang, Saeed Khorram, Li Fuxin.</li>
                                                    <li><Link target="_blank" rel="noopener" href="./assets/posters/p33.pdf"><b><PDFIcon fontSize="inherit"/> P 33</b></Link>: <b>FD-CAM: Improving Faithfulness and Discriminability of Visual Explanation for CNNs.</b> Hui Li, Zihao Li, Rui Ma, Tieru Wu.</li>
                                                    <li><Link target="_blank" rel="noopener" href="./assets/posters/p34.pdf"><b><PDFIcon fontSize="inherit"/> P 34</b></Link>: <b>Exploring Concept Contribution Spatially: Hidden Layer Interpretation with Spatial Activation Concept Vector.</b>	Andong Wang, W.N. Lee.</li>
                                                    <li><Link target="_blank" rel="noopener" href="./assets/posters/p35.pdf"><b><PDFIcon fontSize="inherit"/> P 35</b></Link>: <b>OccAM's Laser: Occlusion-based Attribution Maps for 3D Object Detectors on LiDAR Data.</b> David Schinagl, Georg Krispel, Horst Possegger, Peter M. Roth, Horst Bischof.</li>
                                                    <li><Link target="_blank" rel="noopener" href="./assets/posters/p36.pdf"><b><PDFIcon fontSize="inherit"/> P 36</b></Link>: <b>Pose Tutor: An Explainable System for Correction in the Wild.</b>	Bhat Dittakavi, Bharathi Callepalli, Sai Vikas Desai, Divyagna Bavikadi, Soumi Chakraborty, Nishant S Reddy, Ayon Sharma, Vineeth N Balasubramanian.</li>
                                                    <li><Link target="_blank" rel="noopener" href="./assets/posters/p39.pdf"><b><PDFIcon fontSize="inherit"/> P 39</b></Link>: <b>CheXplaining in Style: Counterfactual Explanations for Chest X-rays.</b> Matan Atad, Vitalii Dmytrenko, Yitong Li, Xinyue Zhang, Matthias Keicher, Jan S. Kirschke, Bene Wiestler, Ashkan Khakzar, Nassir Navab.</li>
                                                    <li><Link target="_blank" rel="noopener" href="./assets/posters/p42.pdf"><b><PDFIcon fontSize="inherit"/> P 42</b></Link>: <b>Auditing Privacy Protection in Split Computing via Data-Free Model Inversion.</b>	Xin Dong, Hongxu Yin, Jose M. Alvarez, Jan Kautz, Pavlo Molchanov.</li>
                                                    <li><Link target="_blank" rel="noopener" href="./assets/posters/p44.pdf"><b><PDFIcon fontSize="inherit"/> P 44</b></Link>: <b>Towards ML Methods for Biodiversity: A Novel Wild Bee Dataset and Evaluations of XAI Methods for ML-Assisted Rare Species Annotations.</b> Teodor Chiaburu, Felix Bießmann, Frank Haußer.</li>
                                                    <li><Link target="_blank" rel="noopener" href="./assets/posters/p46.pdf"><b><PDFIcon fontSize="inherit"/> P 46</b></Link>: <b>Spatial-temporal Concept based Explanation of 3D ConvNets.</b> Ying Ji, Yu Wang, Kensaku Mori, Jien Kato.</li>
                                                    <li><Link target="_blank" rel="noopener" href="./assets/posters/p49.pdf"><b><PDFIcon fontSize="inherit"/> P 49</b></Link>: <b>Visual correspondence-based explanations improve human-AI team accuracy.</b> Anh Nguyen, GIANG NGUYEN, Mohammad Reza Taesiri.</li>
                                                    <li><Link target="_blank" rel="noopener" href="./assets/posters/p50.pdf"><b><PDFIcon fontSize="inherit"/> P 50</b></Link>: <b>Improving Visual Grounding by Encouraging Consistent Gradient-based Explanations.</b>	Ziyan Yang, Kushal Kafle, Franck Dernoncourt, Vicente Ordonez.</li>
                                                    <li><Link target="_blank" rel="noopener" href="./assets/posters/p52.pdf"><b><PDFIcon fontSize="inherit"/> P 52</b></Link>: <b>Gradient-weighted Class Activation Mapping for spatio temporal graph convolutional network.</b> PRATYUSHA DAS, ANTONIO ORTEGA.</li>
                                                    <li><Link target="_blank" rel="noopener" href="./assets/posters/p54.pdf"><b><PDFIcon fontSize="inherit"/> P 54</b></Link>: <b>B-cos Networks: Alignment is All We Need for Interpretability.</b> Moritz Böhle, Mario Fritz, Bernt Schiele.</li>
                                                </ul>
                                            </Typography>
                                        </Grid>
                                    </Grid>
                                    
                                    <Grid container justify="flex-start">
                                        <Grid item xs={12} lg={12} className={classes.gridItem}>
                                            <Typography className={classes.SectionHeader} variant="body1" align="left">
                                                <b>03:10 PM - 03:40 PM: </b> Invited Talk - <b>Pradeep Ravikumar</b>
                                            </Typography>
                                        </Grid>
                                    </Grid>

                                    <Grid container justify="flex-start">
                                        <Grid item xs={12} lg={12} className={classes.gridItem}>
                                            <Typography className={classes.SectionHeader} variant="body1" align="left">
                                                <b>03:40 PM - 04:10 PM: </b> Invited Talk - <b>Serena Yeung</b>
                                            </Typography>
                                        </Grid>
                                    </Grid>

                                    <Grid container justify="flex-start">
                                        <Grid item xs={12} lg={12} className={classes.gridItem}>
                                            <Typography className={classes.SectionHeader} variant="body1" align="left">
                                                <b>04:10 PM - 04:40 PM: </b> Invited Talk - <b>Hima Lakkaraju</b>
                                            </Typography>
                                        </Grid>
                                    </Grid>

                                    <Grid container justify="flex-start">
                                        <Grid item xs={12} lg={12} className={classes.gridItem}>
                                            <Typography className={classes.SectionHeader} variant="body1" align="left">
                                                <b>04:40 PM - 04:50 PM: </b> Break
                                            </Typography>
                                        </Grid>
                                    </Grid>

                                    <Grid container justify="flex-start">
                                        <Grid item xs={12} lg={12} className={classes.gridItem}>
                                            <Typography className={classes.SectionHeader} variant="body1" align="left">
                                                <b>04:50 PM - 05:50 PM: </b> Panel Discussion
                                            </Typography>
                                        </Grid>
                                    </Grid>
                                    
                                    <Grid container justify="flex-start">
                                        <Grid item xs={12} lg={12} className={classes.gridItem}>
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
                                            Invited Speakers
                                        </Typography>
                                    </Grid>

                                    <Speakers/>

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

WorkshopSchedule.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(WorkshopSchedule);
