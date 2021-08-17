import React, { Component } from 'react';
import UserService from '../services/UserService';

class LoginComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            users: [] ,            
            username: '',
            password: ''                                 
        }
        this.changeUsernameHandler = this.changeUsernameHandler.bind(this);
        this.changePasswordHandler = this.changePasswordHandler.bind(this);
        this.login=this.login.bind(this)
        
    }
        
    componentDidMount(){
        UserService.getUser().then((res) => {
            this.setState({ users: res.data});
        });

    }

    login(){
        let length=this.state.users.filter((user => user.username === this.state.username)).length
      
        if(length==1){
            let sorgu=this.state.users.filter((user => user.username === this.state.username)&&
            (user => user.password === this.state.password)).length
            
            if (sorgu==2){
                this.props.history.push('/employees')
            }
            else{
                alert ("Şifre Yanlış")
                
        }
                             
    }
    else{          

        alert("Kullanıcı Bulunamadı")               
    }     
}

changeUsernameHandler= (event) => {
    this.setState({username: event.target.value});
}
changePasswordHandler= (event) => {
    this.setState({password: event.target.value});
}

cancel(){
    this.props.history.push('/');
}
    render() {
        return (
            
            <div>
                    <div className="container">
                        <div className="row">
                            <div className="card col-md-6 offset-md-3 offset-md-3">
                                <h3 className="text-center">Giriş</h3>
                                <div className = "card-body">
                                    <form>
                                        <div className = "form-group">
                                            <label> Kullanıcı Adı: </label>
                                            <input placeholder="Kullanıcı Adınız" name="username" className="form-control" 
                                            value={this.state.username} onChange={this.changeUsernameHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> Şifre: </label>
                                            <input placeholder="Şifreniz" name="password" className="form-control" 
                                            value={this.state.password} onChange={this.changePasswordHandler}/>
                                        </div>
                                        <button className="btn btn-success" onClick={this.login} >Giriş</button>
                                        <button className="btn btn-danger" onClick={this.cancel.bind(this)}>İptal</button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>                   
            </div>
        )
    }
}

export default LoginComponent;