import React, { Component } from 'react'
import ImobService from '../services/ImobService'

class ViewImovelComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            id: this.props.match.params.id,
            imovel: {}
        }
    }

    componentDidMount(){
        ImobService.getImovelById(this.state.id).then( res => {
            this.setState({imovel: res.data});
            console.log('imovel => ' + JSON.stringify(res.data));
        })
    }

    render() {
        return (
            <div>
                <br></br>
                <div className = "card col-md-6 offset-md-3">
                    <h3 className = "text-center"> Imóvel Detalhes</h3>
                    <div className = "card-body">
                        <div className = "row">
                            <label> Imóvel Descrição:  </label>
                            <div> { this.state.imovel.descricao }</div>
                        </div>
                        <div className = "row">
                            <label> Imóvel Endereço:  </label>
                            <div> { this.state.imovel.endereco }</div>
                        </div>
                        <div className = "row">
                            <label> Imóvel Imagem:  </label>
                            <div> { this.state.imovel.imageuri }</div>
                        </div>
                    </div>

                </div>
            </div>
        )
    }
}

export default ViewImovelComponent
