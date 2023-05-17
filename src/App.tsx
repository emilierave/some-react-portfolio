import React, { useCallback } from "react";
import Particles from "react-particles";
import type { Engine } from "tsparticles-engine";
import { loadFull } from "tsparticles";
import logo from "./logo.svg";
import './App.css';
import particlesOptions from "./particles.json";
import { ISourceOptions } from "tsparticles-engine";
import Button from '@mui/material/Button';
import ResponsiveAppBar from './ResponsiveAppBar';

function App() {
    const particlesInit = useCallback(async (engine: Engine) => {
        await loadFull(engine);
    }, []);

    return (
        <div className="App">
            <Particles options={particlesOptions as ISourceOptions} init={particlesInit}/>
            <ResponsiveAppBar/>
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo"/>
                <p>
        
                    Edit <code>src/App.tsx</code> and save to reload.
                </p>
                <p>
                    Edit <code>src/particles.json</code> to customize Particles, then save to reload.
                </p>
                <a
                    className="App-link"
                    href="https://reactjs.org"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Learn React
                </a>
                <a
                    className="App-link"
                    href="https://particles.js.org"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    See Particles samples
                </a>
                <div>
      <Button variant="contained">Hello World</Button>
    </div>
            </header>
        </div>
    );
}

export default App;
