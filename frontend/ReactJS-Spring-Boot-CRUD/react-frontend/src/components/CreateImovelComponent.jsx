import React, { Component } from 'react'
import ImobService from '../services/ImobService';

class CreateImovelComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            // step 2
            id: this.props.match.params.id,
            descricao: '',
            endereco: '',
            imageuri: ''
        }
        this.changeDescricaoHandler = this.changeDescricaoHandler.bind(this);
        this.changeEnderecoHandler = this.changeEnderecoHandler.bind(this);
        this.saveOrUpdateImovel = this.saveOrUpdateImovel.bind(this);
    }

    // step 3
    componentDidMount(){

        // step 4
        if(this.state.id === '_add'){
            return
        }else{
            ImobService.getImovelById(this.state.id).then( (res) =>{
                let imovel = res.data;
                this.setState({descricao: imovel.descricao,
                    endereco: imovel.endereco,
                    imageuri : imovel.imageuri
                });
            });
        }        
    }
    saveOrUpdateImovel = (e) => {
        e.preventDefault();
        let imovel = {descricao: this.state.descricao, endereco: this.state.endereco, imageuri: this.state.imageuri};
        console.log('imovel => ' + JSON.stringify(imovel));

        // step 5
        if(this.state.id === '_add'){
            ImobService.createImovel(imovel).then(res =>{
                this.props.history.push('/imoveis');
            });
        }else{
            ImobService.updateImovel(imovel, this.state.id).then( res => {
                this.props.history.push('/imoveis');
            });
        }
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
        this.props.history.push('/imoveis');
    }

    getTitle(){
        if(this.state.id === '_add'){
            return <h3 className="text-center">Adicionar Imóvel</h3>
        }else{
            return <h3 className="text-center">Editar Imovel</h3>
        }
    }
    render() {
        return (
            <div>
                <br></br>
                   <div className = "container">
                        <div className = "row">
                            <div className = "card col-md-6 offset-md-3 offset-md-3">
                                {
                                    this.getTitle()
                                }
                                <div className = "card-body">
                                    <form>
                                        <div className = "form-group">
                                            <label> Descrição: </label>
                                            <input placeholder="Descrição" name="descricao" className="form-control" 
                                                value={this.state.descricao} onChange={this.changeDescricaoHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> Endereço: </label>
                                            <input placeholder="Endereço" name="endereco" className="form-control" 
                                                value={this.state.endereco} onChange={this.changeEnderecoHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> Imagem: </label>
                                            <input placeholder="Imagem" name="imageuri" className="form-control" 
                                                value={this.state.imageuri} onChange={this.changeImageHandler}/>
                                        </div>

                                        <button className="btn btn-success" onClick={this.saveOrUpdateImovel}>Salvar</button>
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

export default CreateImovelComponent
