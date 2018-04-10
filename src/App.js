import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';


const API = 'https://api.github.com/users/juanmagua/repos';
const USERNAME = 'juanmagua';

class App extends Component {
    constructor() {
        super();
        this.state = {
            repos: [],
            isLoading: false,
        };
    }

    componentDidMount() {
        this.setState({isLoading: true});

        fetch(API)
                .then(response => response.json())
                .then(
                        data => {
                            this.setState(
                                    {repos: data, isLoading: false}
                            );
                        }
                );
    }

    render() {

        const {repos, isLoading} = this.state;

        console.log(isLoading);
        console.log(repos);


        if (isLoading) {
            return <p>Loading ...</p>;
        }

        return (
                <div className="App">
                    <header className="App-header">
                        <img src={logo} className="App-logo" alt="logo" />
                        <h1 className="App-title">{USERNAME}</h1>
                    </header>
                
                    <div>
                        {repos.map(repo =>
                                        <div key={repo.id}>
                                            <a target="_blank" href={repo.svn_url}>
                                                {repo.name}
                                            </a>
                                        </div>
                                    )}
                    </div>
                
                </div>
                );
    }
}

export default App;
