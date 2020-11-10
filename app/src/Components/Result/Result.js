import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { inputChange } from "../../store/Actions/codeActions";
import classes from "./Result.module.css";
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import ListItemText from '@material-ui/core/ListItemText';
import ListItem from '@material-ui/core/ListItem';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import CloseIcon from '@material-ui/icons/Close';
import Slide from '@material-ui/core/Slide';
import PlayCircleOutlineIcon from '@material-ui/icons/PlayCircleOutline';
import QierPlayer from 'qier-player';
import ll from './ll.mkv';


const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
  });

const Result = () => {
    const dispatch = useDispatch();
    const { input, output } = useSelector((state) => state.code);
    const handleChange = (event) => {
        dispatch(inputChange(event.target.value));
    };

    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <>
            <div className={classes.show}>
                
                <Button
                    variant="contained"
                    color="secondary"
                    style={{marginLeft:20,marginTop:5}}
                    onClick={handleClickOpen}
                    className={classes.button}
                    startIcon={<PlayCircleOutlineIcon />}
                >
                    Video Lesson
                </Button>
                <Dialog fullScreen open={open} onClose={handleClose} TransitionComponent={Transition}>
                    <AppBar  style={{backgroundColor:"#5A4591"}}>
                    <Toolbar>
                        <IconButton edge="start" color="inherit" onClick={handleClose} aria-label="close">
                        <CloseIcon />
                        </IconButton>
                        <Typography variant="h6" className={classes.title}>
                            Linked List
                        </Typography>
                    
                    </Toolbar>
                    </AppBar>
                    <List>
                    <ListItem button>
                        <ListItemText primary="Phone ringtone" secondary="Titania" />
                    </ListItem>
                    <Divider />
                    <ListItem button>
                        
                        <QierPlayer 
                        width="100%"
                        height={620}
                        srcOrigin={ll} />
                    </ListItem>
                    </List>
                </Dialog>
            </div>

            <div className={classes.item}>
                <div className={classes.label}>
                Custom Test Case
                    {/* <p style={{ fontSize: "0.8rem", margin: 0, color: "#888fb5" }}>
                        Go ahead test your code here!
                    </p> */}
                </div>
                <p style={{ fontSize: "0.8rem", margin: 0, color: "#888fb5" }}>
                        Input
                    </p>
                <textarea
                    className={classes.input}
                    onChange={handleChange}
                    value={input}
                    placeholder="Input...."
                    spellCheck="false"
                ></textarea>
            </div>
            <div className={classes.item}>
                <div className={classes.label}>
                    Result
                    {/* <p style={{ fontSize: "0.8rem", margin: 0, color: "#888fb5" }}>
                        Output of your code
                    </p> */}
                </div>
                <p style={{ fontSize: "0.8rem", margin: 0, color: "#888fb5" }}>
                Your Output
                    </p>
                <textarea
                    style={{ resize: "both" }}
                    className={classes.input}
                    value={output}
                    placeholder="Your Output"
                    spellCheck="false"
                ></textarea>
                <p style={{ fontSize: "0.8rem", margin: 0, color: "#888fb5" }}>
                Expected Output
                    </p>
                <textarea
                    style={{ resize: "both" }}
                    className={classes.input}
                    value={output}
                    placeholder="Expected Output"
                    spellCheck="false"
                ></textarea>
            </div>
            
            
        </>
    );
};
export default Result;
