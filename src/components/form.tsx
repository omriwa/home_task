import * as React from "react";
//animation
import { Transition } from "react-transition-group";

interface IFormProps {
    in: boolean
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
                    </div>
                )
            }
        </Transition>

    }
}