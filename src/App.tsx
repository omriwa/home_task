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
        this.renderForm = this.renderForm.bind(this);
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
        return <Form
            in={this.state.progress === 0}
            setProgress={() => this.setFormProgress(this.state.fullName !== "", 30)}
        >
            <label>Full Name</label>
            <input
                required
                type="text"
                value={this.state.fullName}
                name="fullName"
                onChange={this.onInputChange}
            />
        </Form>
    }

    private renderContantForm(): any {
        return <Form
            in={this.state.progress === 30}
            setProgress={() => this.setFormProgress(this.state.phone.length === 10 && this.validateEmail(this.state.email), 60)}
        >
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
        </Form>
    }

    private validateEmail(email: string): boolean {
        let pattern = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return pattern.test(String(email).toLowerCase());
    }

    private renderSalaryForm(): any {
        return <Form
            in={this.state.progress === 60}
            setProgress={() => this.setFormProgress(this.state.salary !== "", 90)}
        >
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
        </Form>
    }

    private renderSummeryForm(): any {
        let stateCopy = { ...this.state },
            keys;
        //remove progress
        delete stateCopy.progress;
        //get all state keys
        keys = (Object as any).keys(stateCopy);

        return <Form
            in={this.state.progress === 90}
            setProgress={() => this.setFormProgress(true, 100)}
        >
            <h4>Summery</h4>
            {
                keys.map(key => {
                    return <div>{stateCopy[key]}</div>
                })
            }
            
        </Form>
    }

    private renderForm(): any {
        switch (this.state.progress) {
            case 0:
                return this.renderPersonalForm();
            case 30:
                return this.renderContantForm();
            case 60:
                return this.renderSalaryForm();
            case 90:
                return this.renderSummeryForm();
            case 100:
                return <div>finish</div>
        }
    }

    public render() {
        return (
            <div className="App">
                <ProgressBar progress={this.state.progress} />
                {
                    this.renderForm()
                }
            </div>
        );
    }
}

export default App;
