import * as React from 'react';
import './App.css';
// components
import ProgressBar from "./components/progressBar";
import Form from "./components/form";


interface IAppState {
    progress: number,
    fullName: string,
    phone: number,
    email: string,
    salary: number
}

class App extends React.Component<any, IAppState> {
    constructor(props:any) {
        super(props);

        this.state = {
            progress: 50,
            fullName: "",
            phone: -1,
            email: "",
            salary: -1
        }
    }

    private renderPersonalFrom(): any {

    }

    private renderContantForm(): any {

    }

    private renderSalaryForm(): any {

    }

    public render() {
        return (
            <div className="App">
                <ProgressBar progress={this.state.progress} />
            </div>
        );
    }
}

export default App;
