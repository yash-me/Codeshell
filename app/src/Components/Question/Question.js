import React, { Component } from "react";
import { outputChange, submitting } from "../../store/Actions/codeActions";
import { connect } from "react-redux";
import axios from "axios";
import classes from "./Question.module.css";
import "codemirror/lib/codemirror.css";
import "codemirror/theme/material.css";
import "codemirror/theme/dracula.css";
import "codemirror/theme/cobalt.css";
import "codemirror/theme/mbo.css";
import Fab from "@material-ui/core/Fab";
import TouchAppIcon from '@material-ui/icons/TouchApp';
import DehazeIcon from '@material-ui/icons/Dehaze';
require("codemirror/mode/clike/clike");
require("codemirror/mode/python/python");

class Question extends Component {
    state = {
        lang: "cpp17",
        mode: "clike",
        value: `#include <iostream>
using namespace std;

int main() {

    cout<<"Welcome! to CodeScratcher"<<endl;
    return 0;
}
        `,
    };
    submitHandler = () => {
        this.props.submitting();
        const x = {
            code: this.state.value,
            input: this.props.input,
            lang: this.state.lang,
        };
        axios
            .post("/", x)
            .then((response) => {
                console.log(response.data.output);
                this.props.outputChange(response.data.output);
            })
            .catch((error) => {
                console.log(error);
            });
    };
    modeToggleHandler = (mode) => {
        if (mode === "cpp17") {
            this.setState({ mode: "clike", lang: "cpp17" });
        } else if (mode === "java") {
            this.setState({ mode: "clike", lang: "java" });
        } else if (mode === "python") {
            this.setState({ mode: "python", lang: "python3" });
        }
    };
    render() {
        return (
            <>
                <div className={classes.run}>
                    
                    
                    <div className={classes.toogle}>
                        <DehazeIcon style={{ color: 'white' }}></DehazeIcon>
                        <div className={classes.heading}>CodeScratcher</div>    
                    </div>
                </div>
                {/* <div className={classes.down}>GO DOWN!!!</div> */}

                <div className={classes.leftPannelContainer}>
                    <div className={classes.problemStatement}>
                        <div className={classes.problemName}>Code : Min Cost Path</div>
                    </div>

                    <h4 className={classes.question}>An integer matrix of size (M x N) has been given. Find out the minimum cost to reach from the cell (0, 0) to (M - 1, N - 1).</h4>
                    <h4 className={classes.question}>From a cell (i, j), you can move in three directions:</h4>

                    <pre>
                        <code>
                        1. ((i + 1),  j) which is, "down"<br></br>
                        2. (i, (j + 1)) which is, "to the right"<br></br>
                        3. ((i+1), (j+1)) which is, "to the diagonal"
                        
                        </code>
                    </pre>

                    <h4 className={classes.question}>An integer matrix of size (M x N) has been given. Find out the minimum cost to reach from the cell (0, 0) to (M - 1, N - 1).</h4>
                    <h4 className={classes.question}>From a cell (i, j), you can move in three directions:</h4>

                    <pre>
                        <code>
                        1. ((i + 1),  j) which is, "down"
                        2. (i, (j + 1)) which is, "to the right"
                        3. ((i+1), (j+1)) which is, "to the diagonal"
                        
                        </code>
                    </pre>
                    <h4 className={classes.question}>An integer matrix of size (M x N) has been given. Find out the minimum cost to reach from the cell (0, 0) to (M - 1, N - 1).</h4>
                    <h4 className={classes.question}>From a cell (i, j), you can move in three directions:</h4>

                    <pre>
                        <code>
                        1. ((i + 1),  j) which is, "down"
                        2. (i, (j + 1)) which is, "to the right"
                        3. ((i+1), (j+1)) which is, "to the diagonal"
                        
                        </code>
                    </pre>
                    <h4 className={classes.question}>An integer matrix of size (M x N) has been given. Find out the minimum cost to reach from the cell (0, 0) to (M - 1, N - 1).</h4>
                    <h4 className={classes.question}>From a cell (i, j), you can move in three directions:</h4>

                    <pre>
                        <code>
                        1. ((i + 1),  j) which is, "down"
                        2. (i, (j + 1)) which is, "to the right"
                        3. ((i+1), (j+1)) which is, "to the diagonal"
                        
                        </code>
                    </pre>
                    <h4 className={classes.question}>An integer matrix of size (M x N) has been given. Find out the minimum cost to reach from the cell (0, 0) to (M - 1, N - 1).</h4>
                    <h4 className={classes.question}>From a cell (i, j), you can move in three directions:</h4>

                    <pre>
                        <code>
                        1. ((i + 1),  j) which is, "down"
                        2. (i, (j + 1)) which is, "to the right"
                        3. ((i+1), (j+1)) which is, "to the diagonal"
                        
                        </code>
                    </pre>
                </div>

                <div className={classes.doubt}>
      
                    <Fab variant="extended" color="secondary" style={{background: 'linear-gradient(90deg,#5f5679, #694acf)'}}>
                        <TouchAppIcon className={classes.extendedIcon}/>
                        Ask Doubt
                    </Fab>
                
                </div>
                
            </>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        input: state.code.input,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        outputChange: (output) => dispatch(outputChange(output)),
        submitting: () => dispatch(submitting()),
    };
};
export default connect(mapStateToProps, mapDispatchToProps)(Question);