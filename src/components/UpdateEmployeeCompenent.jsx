import React, { Component } from 'react';
import EmployeeService from '../services/EmployeeService';

class UpdateEmployeeCompenent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            id: this.props.match.params.id,
            ad: '',
            soyad: '',
            emailId: '',
            unvan:'',
            telNo:'',
            sicilNo:''
        }
        this.changeAdHandler = this.changeAdHandler.bind(this);
        this.changeSoyadHandler = this.changeSoyadHandler.bind(this);       
        this.UpdateEmployee=this.UpdateEmployee.bind(this);
    }
    componentDidMount(){
        EmployeeService.getEmployeeById(this.state.id).then((res) =>{
            let employee = res.data;
            this.setState({ad: employee.ad,
                soyad: employee.soyad,
                emailId: employee.emailId,
                unvan: employee.unvan,
                telNo: employee.telNo,
                sicilNo:employee.sicilNo
            })
        })
    }

    UpdateEmployee=(e) => {
        e.preventDefault();
        let employee = {ad: this.state.ad, soyad: this.state.soyad, emailId: this.state.emailId,
             unvan: this.state.unvan, telNo: this.state.telNo, sicilNo: this.state.sicilNo};
        console.log('employee => ' + JSON.stringify(employee));
        EmployeeService.updatEmployee(employee, this.state.id).then(res =>{
            this.props.history.push('/employees');
        });
        
    }
    

changeAdHandler= (event) => {
    this.setState({ad: event.target.value});
}
changeSoyadHandler= (event) => {
    this.setState({soyad: event.target.value});
}
changeEmailHandler= (event) => {
    this.setState({emailId: event.target.value});
}
changeunvanHandler= (event) => {
    this.setState({unvan: event.target.value});
}
changeTelNoHandler= (event) => {
    this.setState({telNo: event.target.value});
}
changeSicilNoHandler= (event) => {
    this.setState({sicilNo: event.target.value});
}
cancel(){
    this.props.history.push('/employees');
}
    render() {
        return (
            <div>
                    <div className="container">
                        <div className="row">
                            <div className="card col-md-6 offset-md-3 offset-md-3">
                                <h3 className="text-center">Güncelleme</h3>
                                <div className = "card-body">
                                    <form>
                                        <div className = "form-group">
                                            <label> Ad: </label>
                                            <input placeholder="Adınız" name="firstname" className="form-control" 
                                            value={this.state.ad} onChange={this.changeAdHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> Soyad: </label>
                                            <input placeholder="Soyadınız" name="lastname" className="form-control" 
                                            value={this.state.soyad} onChange={this.changeSoyadHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> E-Mail: </label>
                                            <input placeholder="Mailiniz" name="emailId" className="form-control" 
                                            value={this.state.emailId} onChange={this.changeEmailHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> Ünvan: </label>
                                            <input placeholder="Ünvanınız" name="unvan" className="form-control" 
                                            value={this.state.unvan} onChange={this.changeunvanHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> Telefon Numarası: </label>
                                            <input placeholder="Telefon Numaranız" name="telNo" className="form-control" 
                                            value={this.state.telNo} onChange={this.changeTelNoHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> Sicil Numarası: </label>
                                            <input placeholder="Sicil Numaranız" name="sicilNo" className="form-control" 
                                            value={this.state.sicilNo} onChange={this.changeSicilNoHandler}/>
                                        </div>
                                        <button className="btn btn-success" onClick={this.UpdateEmployee}>Güncelle</button>
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

export default UpdateEmployeeCompenent;