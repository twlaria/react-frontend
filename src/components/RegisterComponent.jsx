import React, { Component } from 'react';
import UserService from '../services/UserService';

class RegisterComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            username: '',
            password: '',
            ad: '',
            soyad:''
           
        }
        this.changeUsernameHandler = this.changeUsernameHandler.bind(this);
        this.changePasswordHandler = this.changePasswordHandler.bind(this);
        this.changeAdHandler=this.changeAdHandler.bind(this);
        this.changeSoyadHandler=this.changeSoyadHandler.bind(this);
             
        this.saveUser=this.saveUser.bind(this);
    }

    saveUser=(e) => {
        e.preventDefault();
        let user = {username: this.state.username, password: this.state.password, ad: this.state.ad, soyad:this.state.soyad };
        console.log('user => ' + JSON.stringify(user));

        UserService.createUser(user).then(res =>{
            this.props.history.push('/');
        });
    }

changeUsernameHandler= (event) => {
    this.setState({username: event.target.value});
}
changePasswordHandler= (event) => {
    this.setState({password: event.target.value});
}
changeAdHandler=(event) => {
    this.setState({ad: event.target.value})
}
changeSoyadHandler=(event) =>{
    this.setState({soyad: event.target.value})
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
                                <h3 className="text-center">Yeni Kayıt</h3>
                                <div className = "card-body">
                                    <form>
                                    <div className = "form-group">
                                            <label> Ad: </label>
                                            <input placeholder="Adınız" name="ad" className="form-control" 
                                            value={this.state.ad} onChange={this.changeAdHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> Soyad: </label>
                                            <input placeholder="Soyadınız" name="soyad" className="form-control" 
                                            value={this.state.soyad} onChange={this.changeSoyadHandler}/>
                                        </div>
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
                                                                                                                                                      
                                        <button className="btn btn-success" onClick={this.saveUser}>Kayıt Ol</button>
                                        <button className="btn btn-danger" onClick={this.cancel.bind(this)} style={{marginLeft: "10px"}}>İptal</button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
            </div>
        )
    }
}

export default RegisterComponent