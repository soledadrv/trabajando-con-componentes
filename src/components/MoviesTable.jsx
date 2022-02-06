import React from 'react';
import TableRow from './TableRow';
import './MoviesTable.css';

export default function MoviesTable() {

    const movies = [{
        titulo: "Billy Elliot",
        duracion: 123,
        rating: 5,
        generos: ["Drama", "Comedia"],
        premios: 2
    },{
        titulo: "Alicia en el pais de las maravillas",
        duracion: 142,
        rating: 4.8,
        generos: ["Drama", "Acción", "Comedia"],
        premios: 3
    }]

    return <>
    <div class="movies-table table-responsive">
        <table className="table table-bordered" >
            <thead>
                <tr>
                    <th>Título</th>
                    <th>Duración</th>
                    <th>Rating</th>
                    <th>Género</th>
                    <th>Premios</th>
                </tr>
            </thead>
            <tbody>
                <TableRow movies={movies} />
            </tbody>
            <tfoot>
                <tr>
                    <th>Título</th>
                    <th>Duración</th>
                    <th>Rating</th>
                    <th>Género</th>
                    <th>Premios</th>
                </tr>
            </tfoot>
        </table>
    </div>
    </>;
}
