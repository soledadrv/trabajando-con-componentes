import React from 'react';
import ContentRowMovies from './ContentRowMovies';
import LastMovieInDB from './LastMovieInDB';
import GenresInDB from './GenresInDB';

export default function ContentRowTop() {

	const data = [{
		titulo: "Movies in Data Base",
		color: "primary",
		cifra: 21,
		icono: "fa-film"
	},
	{
		titulo: "Total awards",
		color: "success",
		cifra: 79,
		icono: "fa-award"
	},
	{
		titulo: "Actors quantity",
		color: "warning",
		cifra: 49,
		icono: "fa-user"
	}];

	const genres = ['Acción', 'Animación', 'Aventura', 'Ciencia Ficción', 'Comedia', 'Documental', 'Drama', 'Fantasia', 'Infantiles', 'Musical']

	return <>

		<div className="container-fluid">
			<div className="d-sm-flex align-items-center justify-content-between mb-4">
				<h1 className="h3 mb-0 text-gray-800">App Dashboard</h1>
			</div>
		
			<ContentRowMovies data={data} />
			
			<div className="row">
				<LastMovieInDB />
				<GenresInDB genres={genres} />
			</div>
		</div>
		
	</>;
}
