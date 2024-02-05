// src/players.js
import Messi from '../assets/messi.jpg'
import Rodo from "../assets/christiano.jpg"
import Mahammed from "../assets/download.jpeg"
import neymar from "../assets/neymar.jpg"


const Players = [
{
name: "Lionel Messi",
team: "Paris Saint-Germain",
nationality: "Argentina",
jerseyNumber: 30,
age: 34,
imageUrl: Messi
},
{
name: "Cristiano Ronaldo",
team: "Manchester United",
nationality: "Portugal",
jerseyNumber: 7,
age: 37,
imageUrl: Rodo,
},
{
name: "Neymar Jr.",
team: "Paris Saint-Germain",
nationality: "Brazil",
jerseyNumber: 10,
age: 30,
imageUrl: neymar
},
{
name: "Mohamed Salah",
team: "Liverpool",
nationality: "Egypt",
jerseyNumber: 11,
age: 29,
imageUrl: Mahammed,
},
];
 //default props
    Players.defaultProps ={
        name: "Adunni Dami",
        team:'falcons',
        nationality:'Nigeria',
        jerseyNumber: 10,
        age: 30,

    }
export default Players;
