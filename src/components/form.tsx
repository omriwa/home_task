import * as React from "react";
//animation
import { Transition } from "react-transition-group";

interface IFormProps {
    in: boolean,
    setProgress: () => void
}

export default class Form extends React.Component<IFormProps> {
    componentDidMount() {
        this.forceUpdate();
    }

    render() {
        //animation state

        const anim = {
            entering: "entering",
            entered: "entered",
            exiting: "exiting",
            exited: "exited"
        }

        return <Transition
            in={this.props.in}
            timeout={500}
            unmountOnExit
        >

            {
                state => (
                    <div className={"form " + anim[state]}>
                        {
                            this.props.children
                        }
                        <div>
                            <button onClick={this.props.setProgress}>next</button>
                        </div>
                    </div>
                )
            }
        </Transition>

    }
}