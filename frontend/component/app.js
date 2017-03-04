import React, {Component} from 'react';
import './app.scss';

export default class App extends Component {
    render() {
        return(
            <div>
                <nav className='nav'>
                    <ul>
                        <li className='nav-item'>Первый</li>
                        <li className='nav-item'>Второй</li>
                    </ul>
                </nav>
                <header className='header'/>
                <div>Привет Мир!!!</div>
            </div>
        );
    }
}

