import React from 'react';
import PropTypes from 'prop-types';

export default function ContentRowMovies(props) {
  return <>

    <div className="row">

      {props.data.map((datos, i) => 

        <div key={datos.titulo + i} className="col-md-4 mb-4">
          <div className={`card border-left-${datos.color} shadow h-100 py-2`}>
            <div className="card-body">
              <div className="row no-gutters align-items-center">
                <div className="col mr-2">
                  <div className={`text-xs font-weight-bold text-${datos.color} text-uppercase mb-1`}>{datos.titulo}</div>
                  <div className="h5 mb-0 font-weight-bold text-gray-800">{datos.cifra}</div>
                </div>
                <div className="col-auto">
                  <i className={`fas ${datos.icono} fa-2x text-gray-300`}></i>
                </div>
              </div>
            </div>
          </div>
        </div>
      
      )}

    </div>

  </>;
}

ContentRowMovies.propTypes = {
  data: PropTypes.array,
  customProp: function(data) {
    for(let i=0; i < data.data.length; i++) {

      if(!data.data[i].titulo || typeof data.data[i].titulo != 'string') {
        return new Error ('Invalid prop: "titulo" is obligatory and must be a string.')
      }

      if(!data.data[i].color || data.data[i].color != 'primary' && data.data[i].color != 'success' && data.data[i].color != 'warning') {
        return new Error (`Invalid prop: "color" is obligatory and its value must be "success", "primary" or "warning".`)
      }

      if(!data.data[i].cifra || typeof data.data[i].cifra != 'string' && typeof data.data[i].cifra != 'number') {
        return new Error ('Invalid prop: "cifra" is obligatory and must be a string or a number.')
      }

      if(!data.data[i].icono || typeof data.data[i].icono != 'string') {
        return new Error ('Invalid prop: "icono" is obligatory en must be a string.')
      }

    }
  }
}

ContentRowMovies.defaultProps = {
  data: [],
}
