import React from 'react';
import PropTypes from 'prop-types';

//Material components
import Grid from '@material-ui/core/Grid';

//Styles
import makeStyles from '@material-ui/core/styles/makeStyles';

const useStyle = makeStyles(theme => ({
	root: {
		minHeight: 300,
		width: 350,
		backgroundColor: '#ebebeb',
		boxShadow: '0px 0px 5px #c7c7c7',
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
		position: 'relative',
		marginTop: 50,
		paddingBottom: 20,
		[theme.breakpoints.down('md')]: {
			minHeight: 280,
			width: 330,
		},
		[theme.breakpoints.down('sm')]: {
			minHeight: 260,
			width: 310,
		},
		[theme.breakpoints.down('xs')]: {
			minHeight: 240,
			width: 290,
		}
	},
	avatarContainer: {
		height: 100,
		width: 100,
		position: 'absolute',
		top: -50,
		zIndex: 1,
		borderRadius: '100%',
		backgroundColor: 'white',
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		[theme.breakpoints.down('md')]: {
			height: 90,
			width: 90,
			top: -45,
		},
		[theme.breakpoints.down('md')]: {
			height: 80,
			width: 80,
			top: -40,
		},
		[theme.breakpoints.down('xs')]: {
			height: 70,
			width: 70,
			top: -35,
		}
	},
	avatar: {
		width: '85%',
		height: '85%',
		backgroundColor: '#06232a',
		borderRadius: '100%',
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		textAlign: 'center',
		'& > p': {
			margin: 0,
			fontFamily: 'Helvetica, Arial, sans-serif',
			fontSize: '3.5rem',
			fontWeight: 700,
			color: '#fda12e',
			[theme.breakpoints.down('md')]: {
				fontSize: '3rem',
			},
			[theme.breakpoints.down('sm')]: {
				fontSize: '2.5rem'
			},
			[theme.breakpoints.down('xs')]: {
				fontSize: '2rem'
			}
		}
	},
	body: {
		marginTop: 80,
		flex: 1,
		fontFamily: 'Helvetica, Arial, sans-serif',
		textAlign: 'center',
		'& > p': {
			'&:before': {
				content: `"\\201C"`,
				fontSize: '2rem',
				color: '#fda12e'
			},
			'&:after': {
				content: `"\\201D"`,
				color: '#fda12e',
				fontSize: '2rem',
				position: 'absolute',
			},
			margin: 0,
			lineHeight: '20px',
			[theme.breakpoints.down('sm')]: {
				lineHeight: '18px'
			},
		},
		[theme.breakpoints.down('md')]: {
			marginTop: 55,
			fontSize: '0.98rem',
		},
		[theme.breakpoints.down('xs')]: {
			marginTop: 45,
			fontSize: '0.94rem'
		}
	},
	author: {
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
		textAlign: 'center',
		margin: "15px 0px 10px 0px",
		'& h3': {
			margin: 0,
			color: '#fda12e',
			fontFamily: 'Helvetica, Arial, sans-serif',
			fontSize: '1.3rem',
			[theme.breakpoints.down('md')]: {
				fontSize: '1.2rem'
			},
			[theme.breakpoints.down('sm')]: {
				fontSize: '1.1rem',
			},
			[theme.breakpoints.down('xs')]: {
				fontSize: '1rem',
			}
		},
		'& p': {
			margin: 0,
			fontFamily: 'serif',
			fontStyle: 'italic',
			fontSize: '0.9rem',
			[theme.breakpoints.down('md')]: {
				fontSize: '0.89rem',
			},
			[theme.breakpoints.down('sm')]: {
				fontSize: '0.88rem',
			},
			[theme.breakpoints.down('xs')]: {
				fontSize: '0.87rem'
			}
		}
	}
}));

const TestimonialCard = (props) => {
	const classes = useStyle();
	return (
		<Grid item className={[classes.root, props.className]}>
			<Grid item className={[classes.avatarContainer, 'testimonial-avatar-container'].join(' ')}>
				{props.image
					?<img className={[classes.avatar, 'testimonial-avatar'].join(' ')} src={props.image} alt="Avatar" />	
					:<div className={[classes.avatar, 'testimonial-avatar'].join(' ')}>
						<p> {props.name[0]} </p>
					</div>
				}
			</Grid>
			<Grid item xs={11} className={[classes.body, 'testimonial-body'].join(' ')}>
				<p>
					{props.content}
				</p>
			</Grid>
			<Grid item className={[classes.author, 'testimonial-author'].join(' ')}>
				<Grid item>
					<h3> {props.name} </h3>
				</Grid>
				<Grid item>
					<p> {props.project} </p>
				</Grid>
			</Grid>
		</Grid>
	);
}

TestimonialCard.propTypes = {
	name: PropTypes.string.isRequired,
	image: PropTypes.string,
	content: PropTypes.string.isRequired,
	project: PropTypes.string.isRequired,
	className: PropTypes.string
}

export default TestimonialCard;