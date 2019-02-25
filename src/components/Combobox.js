import React, {Component} from 'react';

import { getDepartamentos, getMunicipios } from '../utils/api';

let data = [];

class LocateSelector extends Component {
    
    constructor(){
        super();
        this.state = {
            departamentos: [],
            municipios: []
        }
    }

    handleInput(e) {
        
    }

    componentDidMount(){

        getDepartamentos()
            .then( res => {
                this.setState ({
                    departamentos: res.data
                });
            })
        .catch((err) => console.log(err))

        getMunicipios()
            .then( res => {
                this.setState ({
                    municipios: res.data
                });
            })
        .catch((err) => console.log(err))
    }

    render() {
        const { departamentos, municipios} = this.state;
        return (
            <div className="form-group col-md-12">
                <div>
                    <select 
                        name="departamento"
                        className="form-control"
                        onChange={this.handleInput}>
                        {departamentos.map(depto => (
                            <option key={depto.departamento}>{depto.departamento}</option>
                        ))}
                    </select>
                </div>              
                <div className="mt-4">
                    <select 
                        name="municipio"
                        className="form-control">
                        {
                            municipios.map(muni => (
                            <option>{muni.municipio}</option>
                        ))}
                    </select>
                </div>
            </div>
        )
    }
}

export default LocateSelector;