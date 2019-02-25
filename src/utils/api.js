import axios from 'axios';

export function getDepartamentos() {
    return axios.get('https://www.datos.gov.co/resource/xdk5-pm3f.json?$select=departamento,COUNT(municipio)&$group=departamento&$order=departamento%20ASC');
}

export function getMunicipios(){
  return axios.get('https://www.datos.gov.co/resource/xdk5-pm3f.json?$order=municipio%20ASC');
}
