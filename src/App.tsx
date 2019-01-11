import * as React from 'react';
import './App.css';
// components
import ProgressBar from "./components/progressBar";
import Form from "./components/form";


interface IAppState {
    progress: number,
    fullName: string,
    phone: string,
    email: string,
    salary: string
}

class App extends React.Component<any, IAppState> {
    constructor(props: any) {
        super(props);

        this.state = {
            progress: 0,
            fullName: "",
            phone: "",
            email: "",
            salary: ""
        }

        this.renderPersonalForm = this.renderPersonalForm.bind(this);
        this.renderContantForm = this.renderContantForm.bind(this);
        this.renderSalaryForm = this.renderSalaryForm.bind(this);
        this.renderSummeryForm = this.renderSummeryForm.bind(this);
        this.setProgress = this.setProgress.bind(this);
        this.onInputChange = this.onInputChange.bind(this);
        this.setFormProgress = this.setFormProgress.bind(this);
    }

    private onInputChange(e: any): void {
        let newState = { ...this.state };
        //set the new value
        newState[e.target.name] = e.target.value;
        //update state
        this.setState(newState);
    }

    private setProgress(progress: number) {
        this.setState({
            ...this.state,
            progress: progress
        });
    }

    private setFormProgress(condition: boolean, progress: number): void {
        if (condition)
            this.setProgress(progress);
    }

    private renderPersonalForm(): any {
        return <React.Fragment>
            <label>Full Name</label>
            <input
                required
                type="text"
                value={this.state.fullName}
                name="fullName"
                onChange={this.onInputChange}
            />
        </React.Fragment>
    }

    private renderContantForm(): any {
        return <React.Fragment>
            <label>Phone Number</label>
            <input
                required
                type="tel"
                value={this.state.phone}
                name="phone"
                onChange={this.onInputChange}
            />
            <label>Email</label>
            <input
                required
                type="email"
                value={this.state.email}
                name="email"
                onChange={this.onInputChange}
            />
        </React.Fragment>
    }

    private validateEmail(email: string): boolean {
        let pattern = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return pattern.test(String(email).toLowerCase());
    }

    private renderSalaryForm(): any {
        return <React.Fragment>
            <h4>Salary</h4>
            <label>0-1000</label>
            <input
                onChange={this.onInputChange}
                value={"0-1000"}
                type="radio"
                name="salary"
            />
            <label>1000-2000</label>
            <input
                onChange={this.onInputChange}
                value={"1000-2000"}
                type="radio"
                name="salary"
            />
            <label>2000-3000</label>
            <input
                onChange={this.onInputChange}
                value={"´2000-3000"}
                type="radio"
                name="salary"
            />
            <label>3000-4000</label>
            <input
                onChange={this.onInputChange}
                value={"3000-4000"}
                type="radio"
                name="salary"
            />
            <label>4000-more</label>
            <input
                onChange={this.onInputChange}
                value={"4000-more"}
                type="radio"
                name="salary"
            />
        </React.Fragment>
    }

    private renderSummeryForm(): any {
        let stateCopy = { ...this.state },
            keys;
        //remove progress
        delete stateCopy.progress;
        //get all state keys
        keys = (Object as any).keys(stateCopy);

        return <React.Fragment>
            <h4>Summery</h4>
            {
                keys.map(key => {
                    return <div>{stateCopy[key]}</div>
                })
            }

        </React.Fragment>
    }

    public render() {
        return (
            <div className="App">
                <ProgressBar progress={this.state.progress} />

                <Form
                    in={this.state.progress === 0}
                    setProgress={() => this.setFormProgress(this.state.fullName !== "", 30)}
                >
                    {
                        this.renderPersonalForm()
                    }
                </Form>

                <Form
                    in={this.state.progress === 30}
                    setProgress={() => this.setFormProgress(this.state.phone.length === 10 && this.validateEmail(this.state.email), 60)}
                >
                    {
                        this.renderContantForm()
                    }
                </Form>

                <Form
                    in={this.state.progress === 60}
                    setProgress={() => this.setFormProgress(this.state.salary !== "", 90)}
                >
                    {
                        this.renderSalaryForm()
                    }
                </Form>

                <Form
                    in={this.state.progress === 90}
                    setProgress={() => this.setFormProgress(true, 100)}
                >
                    {
                        this.renderSummeryForm()
                    }
                </Form>

            </div>
        );
    }
}

export default App;
