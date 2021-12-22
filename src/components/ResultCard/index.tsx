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
        <img src={url} alt={title} />
      </div>

      <div className="info-container">
        <h2 className="titulo1">Informações</h2>
        <h3 className="titulo2">
          Perfil: <a href={html_url}>{html_url}</a>
        </h3>

        <h3 className="titulo2">
          Seguidores: <span className="titulo2-fonte-regular">{followers}</span>
        </h3>

        <h3 className="titulo2">
          Localidade: <span className="titulo2-fonte-regular">{location}</span>{' '}
        </h3>
        <h3 className="titulo2">
          Nome: <span className="titulo2-fonte-regular">{name}</span>{' '}
        </h3>
      </div>
    </div>
  );
};

export default ResultCard;
