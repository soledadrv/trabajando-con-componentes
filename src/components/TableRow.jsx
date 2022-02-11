import React from 'react';

export default function TableRow(props) {
  return <>
    {props.movies ? props.movies.map((movie, i) =>
        <tr key={movie.titulo + i}>
            <td>{movie.titulo}</td>
            <td>{movie.duracion}</td>
            <td>{movie.rating}</td>
            <td>
                <ul>
                    {movie.generos.map((genero, i) => 
                        <li key={genero+i}>{genero}</li>
                    )}
                </ul>
            </td>
            <td>{movie.premios}</td>
        </tr>
    ) : <h3>No hay películas</h3>} 
  </>;
}
