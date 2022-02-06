import React from 'react';

export default function TableRow(props) {
  return <>
    {props.movies ? props.movies.map((movie) =>
        <tr>
            <td>{movie.titulo}</td>
            <td>{movie.duracion}</td>
            <td>{movie.rating}</td>
            <td>
                <ul>
                    {movie.generos.map(genero => 
                        <li>{genero}</li>
                    )}
                </ul>
            </td>
            <td>{movie.premios}</td>
        </tr>
    ) : <h3>No hay películas</h3>} 
  </>;
}
