import './styles.css';

type Props = {
  title?: string;
  description?: string;
  url?: string;
  html_url?: string;
  followers?: string;
  location?: string;
  name?: string;
};

const ResultCard = ({
  title,
  description,
  url,
  html_url,
  followers,
  location,
  name,
}: Props) => {
  return (
    <div className="result-container">
      <div className="img-container">
        <img src={url} alt={title} />{' '}
      </div>
      <div>
        <h3 className="result-title">{title}</h3>
        <p className="result-description">{description}</p>
      </div>
      <div>
        <h2 className="titulo1">Informações</h2>
        <h3 className="titulo2">Perfil:</h3>
        <p>{html_url}</p>
        <h3 className="titulo2">Seguidores:</h3>
        <p>{followers}</p>
        <h3 className="titulo2">Localidade:</h3>
        <p>{location}</p>
        <h3 className="titulo2">Nome:</h3>
        <p>{name}</p>
      </div>
    </div>
  );
};

export default ResultCard;
