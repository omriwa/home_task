import * as React from "react";
//animation
import { Transition } from "react-transition-group";

interface IFormProps {
    in: boolean,
    setProgress: () => void
}

export default class Form extends React.Component<IFormProps> {
    render() {
        //animation state

        return <Transition
            in={this.props.in}
            timeout={500}
        >

            {
                state => (
                    <div className="form">
                        {
                            this.props.children
                        }
                        <button onClick={this.props.setProgress}>next</button>
                    </div>
                )
            }
        </Transition>

    }
}