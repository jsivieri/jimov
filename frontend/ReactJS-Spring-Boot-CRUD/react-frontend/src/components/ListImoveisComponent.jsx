import React, { Component } from 'react'
import ImobService from '../services/ImobService'

class ListImoveis extends Component {
    constructor(props) {
        super(props)

        this.state = {
                imoveis: []
        }
        this.addImovel = this.addImovel.bind(this);
        this.editImovel = this.editImovel.bind(this);
       // this.deleteEmployee = this.deleteEmployee.bind(this);
    }

    /*deleteEmployee(id){
        ImobService.deleteEmployee(id).then( res => {
            this.setState({employees: this.state.employees.filter(employee => employee.id !== id)});
        });
    }*/
    viewImovel(id){
        this.props.history.push(`/view-imovel/${id}`);
    }
    editImovel(id){
        this.props.history.push(`/add-imovel/${id}`);
    }

    componentDidMount(){
        ImobService.getImoveis().then((res) => {
            this.setState({ imoveis: res.data});
        });
    }

    addImovel(){
        this.props.history.push('/add-imovel/_add');
    }

    render() {
        return (
            <div>
                 <h2 className="text-center">Lista de Imóveis</h2>
                 <div className = "row">
                    <button className="btn btn-primary" onClick={this.addImovel}> Adicionar Imóvel</button>
                 </div>
                 <br></br>
                 <div className = "row">
                        <table className = "table table-striped table-bordered">

                            <thead>
                                <tr>
                                    <th> Descrição</th>
                                    <th> Endereço</th>
                                    <th> Image</th>
                                    <th> Tipo</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    this.state.imoveis.map(
                                        imovel => 
                                        <tr key = {imovel.id}>
                                             <td> { imovel.descricao} </td>   
                                             <td> {imovel.endereco}</td>
                                             <td> {imovel.imageuri}</td>
                                             <td> {imovel.tipo}</td>
                                             <td>
                                                 <button onClick={ () => this.editImovel(imovel.id)} className="btn btn-info">Editar </button>                                             
                                                 <button style={{marginLeft: "10px"}} onClick={ () => this.viewImovel(imovel.id)} className="btn btn-info">Viualizar </button>
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

export default ListImoveis
