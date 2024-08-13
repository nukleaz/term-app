import './TermCard.css';

export const TermCard = ({ title, description, onDelete, id }) => {
	const handleDeleteClick = () => {
		onDelete(id);
	};

	return (
		<div className='term-card'>
			<div className='text-wrap'>
				<h2 className='term-card__title '>{title}</h2>
				{description && <p className='term-card__description'>{description}</p>}
			</div>
			<button
				type='button'
				className='term-card__delete'
				onClick={handleDeleteClick}
			>
				Удалить
			</button>
		</div>
	);
};
