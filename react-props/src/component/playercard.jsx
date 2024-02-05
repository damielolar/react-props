
import Card from 'react-bootstrap/Card';
// import Player from './player'; 

function BasicExample ({name, team, jerseyNumber, age, nationality, imageUrl}) {
    return (
        <Card style={{ width: '200px', marginBottom:'5%', gap:'200px' }}>
            
        <Card.Img style={{width:'200px'}} variant='top' src={imageUrl}   />
        <Card.Body>
            <Card.Title>{name}</Card.Title>
            <Card.Text>
            <p>{team}</p>
            <p>{jerseyNumber}</p>
            <p>{age}</p>
            <p>{nationality}</p>
            </Card.Text>
        </Card.Body>
        </Card>
    );
}

export default BasicExample;