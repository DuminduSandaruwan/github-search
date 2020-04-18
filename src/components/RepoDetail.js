import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import VisibilityIcon from '@material-ui/icons/Visibility';
import RestaurantIcon from '@material-ui/icons/Restaurant';
import BugReportIcon from '@material-ui/icons/BugReport';
import StarIcon from '@material-ui/icons/Star';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles({
    root: {
        minWidth: 275,
    },
    bullet: {
        display: 'inline-block',
        margin: '0 2px',
        transform: 'scale(0.8)',
    },
    description: {
        fontSize: 14,
    },
    pos: {
        marginTop: 12,
        marginBottom: 12,
    },
    card: {
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
    },
    cardContent: {
        flexGrow: 1,
    },
    iconCounts: {
        insetInline: "auto"
    }
});

export const RepoDetail = props => {
    const { repo } = props;
    const classes = useStyles();
    return <Grid item xs={12} sm={6} md={4}>
            <Card className={classes.card}>
                <CardContent className={classes.cardContent}>
                    <a target='_blank' rel='noopener noreferrer' href={repo.html_url}>
                        <Typography variant="h5" component="h2">
                            {repo.full_name}
                        </Typography>
                    </a>
                    <Typography className={classes.description} color="textSecondary" gutterBottom>
                        {repo.description}
                    </Typography>
                    <Typography className={classes.pos} variant="body2" component="p">
                        {repo.language}
                    </Typography>
                    <Typography component="p">
                        <VisibilityIcon/>
                        {repo.watchers}
                    </Typography>
                    <Typography component="p">
                        <RestaurantIcon/>
                        {repo.forks_count}
                    </Typography>
                    <Typography component="p">
                        <BugReportIcon/>
                        {repo.open_issues_count}
                    </Typography>
                    <Typography component="p">
                        <StarIcon/>
                        {repo.stargazers_count}
                    </Typography>
                </CardContent>
            </Card>
        </Grid>
}
