import React, { Component } from 'react';

class StartComponent extends Component{
    constructor(props){
        super(props)
        this.state = {
            
    }
    this.login = this.login.bind(this);
    this.register = this.register.bind(this);     
    }

    login(){
        this.props.history.push('/login')
    }
    register(){
        this.props.history.push('/register')
    }

    render() {
        return (
            <div>
                <h2 className="text-center">Hoşgeldiniz</h2>
                <div className = "row">
                    <button  className="btn btn-primary" onClick={this.login}>Giriş Yap</button>
                    <button style={{marginTop: "10px"}} className="btn btn-primary" onClick={this.register}>Kaydol</button>
                </div>
                
                <div className = "row"></div>
                          
            </div>
        )
    }
}

export default StartComponent;