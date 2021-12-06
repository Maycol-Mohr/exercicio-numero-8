import './styles.css';


type Props = {
 title?: string;
 description?: string;
 url?: string;
}
const ResultCard = ( { title, description, url} : Props) => {

    return (
        <div className="result-container">
        <img src={url} />
        <h3 className="result-title">{title}</h3>
        <p className="result-description">{description}</p>
        </div>
    )};
        
export default ResultCard;