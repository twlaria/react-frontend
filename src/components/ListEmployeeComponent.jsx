import React, { Component } from 'react';
import EmployeeService from '../services/EmployeeService';


class ListEmployeeComponent extends Component{
    constructor(props){
        super(props)

        this.state = {
                employees: []
        }
        this.addEmployee = this.addEmployee.bind(this);
        this.editEmployee = this.editEmployee.bind(this);
        this.deleteEmployee=this.deleteEmployee.bind(this);
        this.exit=this.exit.bind(this)
    }
    editEmployee(id){
        this.props.history.push(`/update-employee/${id}`)
    }

    componentDidMount(){
        EmployeeService.getEmployees().then((res) => {
            this.setState({ employees: res.data});
        });
    }

    addEmployee(){          
        this.props.history.push('/add-employee')
    }
    deleteEmployee(id){
        EmployeeService.deleteEmployee(id).then(res => {
            this.setState({employees: this.state.employees.filter(employee => employee.id !== id)});
        });
    }
    exit(){
        this.props.history.push('/')
        alert("Çıkış Yapıldı. Yönlendiriliyorsunuz...")
    }

    render() {
        return (
            <div>
                
                <button style={{marginLeft:"1068.5px"}} className="btn btn-danger" onClick={this.exit}>Çıkış</button>
                <h2 className="text-center">Personel Listesi</h2>
                <div className = "row">
                    <button style={{width:"135px"}} className="btn btn-primary" onClick={this.addEmployee}>Yeni Kayıt</button>
                    
                </div>
                
                <div className = "row">
                        <table className = "table table-striped table-bordered">
                           
                           <thead>

                                 <tr>
                                     <th> Ad</th>
                                     <th> Soyad</th>
                                     <th> E-Mail</th>
                                     <th> Ünvan</th>
                                     <th> Telefon Numarası</th>
                                     <th> Sicil Numarası</th>
                                     
                                     <th> Seçenekler</th>
                                                                        
                                     </tr>   

                           </thead>

                            <tbody>
                                {
                                    this.state.employees.map(
                                        employee =>
                                        <tr key = {employee.id}>
                                            
                                            <td>{employee.ad}</td>
                                            <td>{employee.soyad}</td>
                                            <td>{employee.emailId}</td>
                                            <td>{employee.unvan}</td>
                                            <td>{employee.telNo}</td>
                                            <td>{employee.sicilNo}</td>
                                            <td>
                                                <button onClick={() => this.editEmployee(employee.id)} className="btn btn-info">Güncelle</button>
                                                <button style={{marginLeft: "10px"}} onClick={() => this.deleteEmployee(employee.id)} className="btn btn-danger">Sil</button>                       
                                            </td>
                                        </tr>
                                    )
                                }
                            </tbody>

                        </table> 
                </div>  

            </div>
        )
    }
}

export default ListEmployeeComponent;