import React, { Component } from 'react'
import ImobService from '../services/ImobService';

class UpdateImovelComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            id: this.props.match.params.id,
            descricao: '',
            endereco: '',
            imageuri: ''
        }
        this.changeDescricaoHandler = this.changeDescricaoHandler.bind(this);
        this.changeEnderecoHandler = this.changeEnderecoHandler.bind(this);
        this.updateImovel = this.updateImovel.bind(this);
    }

    componentDidMount(){
        ImobService.getEmployeeById(this.state.id).then( (res) =>{
            let imovel = res.data;
            this.setState({descricao: imovel.descricao,
                endereco: imovel.endereco,
                imageuri : imovel.imageuri
            });
        });
    }

    updateImovel = (e) => {
        e.preventDefault();
        let imovel = {descricao: this.state.descricao, lastName: this.state.lastName, emailId: this.state.emailId};
        //console.log('employee => ' + JSON.stringify(employee));
        //console.log('id => ' + JSON.stringify(this.state.id));
        ImobService.updateImovel(imovel, this.state.id).then( res => {
            this.props.history.push('/imoveis');
        });
    }
    
    changeDescricaoHandler= (event) => {
        this.setState({descricao: event.target.value});
    }

    changeEnderecoHandler= (event) => {
        this.setState({endereco: event.target.value});
    }

    changeImageHandler= (event) => {
        this.setState({imageuri: event.target.value});
    }

    cancel(){
        this.props.history.push('/employees');
    }

    render() {
        return (
            <div>
                <br></br>
                   <div className = "container">
                        <div className = "row">
                            <div className = "card col-md-6 offset-md-3 offset-md-3">
                                <h3 className="text-center">Update Employee</h3>
                                <div className = "card-body">
                                    <form>
                                        <div className = "form-group">
                                            <label> Descrição: </label>
                                            <input placeholder="Descrição Name" name="descricao" className="form-control" 
                                                value={this.state.descricao} onChange={this.changeDescricaoHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> Last Name: </label>
                                            <input placeholder="Endereço" name="endereco" className="form-control" 
                                                value={this.state.endereco} onChange={this.changeEnderecoHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> Imagem Id: </label>
                                            <input placeholder="Imagem" name="imageuri" className="form-control" 
                                                value={this.state.imageuri} onChange={this.changeImageHandler}/>
                                        </div>

                                        <button className="btn btn-success" onClick={this.updateImovel}>Salvar</button>
                                        <button className="btn btn-danger" onClick={this.cancel.bind(this)} style={{marginLeft: "10px"}}>Cancelar</button>
                                    </form>
                                </div>
                            </div>
                        </div>

                   </div>
            </div>
        )
    }
}

export default UpdateImovelComponent
