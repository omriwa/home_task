import * as React from "react";
//components
import { Progress } from 'reactstrap';

interface IProgressBarProps {
    progress: number
}

export default class ProgressBar extends React.Component<IProgressBarProps>{
    render() {
        return <div>
            <Progress value={this.props.progress}/>
        </div>
    }
}