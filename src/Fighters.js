//includes top 10 pfp 
//all heavy weight champs >= 1997
const assignImage = (name) => {
    let lowerCaseName = name.toLowerCase();
    

    let formattedName = lowerCaseName.replace(/\s+/g, '-');
    
    return formattedName;
}

const fighters = [
    {name:"Alex Pereira", country:"Brazil", continent:"South America", weightClass:"Light Heavyweight", ufcDebut:"UFC 268", ufcDebutYear:2021 },
    {name:"Alexander Volkanovski", country:"Australia", continent:"Australasia", weightClass:"Featherweight", ufcDebut:"UFC Fight Night 101", ufcDebutYear:2016},
    {name:"Alexandre Pantoja", country:"Brazil", continent:"South America", weightClass:"Flyweight", ufcDebut:"UFC on Fox: Shevchenko vs. Peña", ufcDebutYear:2017},
    {name:"Anderson Silva", country:"Brazil", continent:"South America", weightClass:"Middleweight", ufcDebut:"Ultimate Fight Night 5", ufcDebutYear:2006},
    {name:"Andrei Arlovski", country:"Belarus", continent:"Europe", weightClass:"Heavyweight", ufcDebut:"UFC 28", ufcDebutYear:2000},
    {name:"Antonio Rodrigo Nogueira", country:"Brazil", continent:"South America", weightClass:"Heavyweight", ufcDebut:"UFC 73", ufcDebutYear:2007},
    {name:"Bas Rutten", country:"Netherlands", continent:"Europe", weightClass:"Heavyweight", ufcDebut:"UFC 18", ufcDebutYear:1999},
    {name:"BJ Penn", country:"USA", continent:"North America", weightClass:"Welterweight", ufcDebut:"UFC 31", ufcDebutYear:2001},
    {name:"Brock Lesnar", country:"USA", continent:"North America", weightClass:"Heavyweight", ufcDebut:"UFC 81", ufcDebutYear:2008},
    {name:"Cain Velasquez", country:"USA", continent:"North America", weightClass:"Heavyweight", ufcDebut:"UFC 83", ufcDebutYear:2008},
    {name:"Carlos Condit", country:"USA", continent:"North America", weightClass:"Welterweight", ufcDebut:"UFC Fight Night 18", ufcDebutYear:2009},
    {name:"Carlos Newton", country:"Canada", continent:"North America", weightClass:"Welterweight", ufcDebut:"UFC 17", ufcDebutYear:1998},
    {name:"Charles Oliveira", country:"Brazil", continent:"South America", weightClass:"Lightweight", ufcDebut:"UFC Live: Jones vs. Matyushenko", ufcDebutYear:2010},
    {name:"Chris Weidman", country:"USA", continent:"North America", weightClass:"Middleweight", ufcDebut:"UFC Live: Sanchez vs. Kampmann", ufcDebutYear:2011},
    {name:"Chuck Liddell", country:"USA", continent:"North America", weightClass:"Light Heavyweight", ufcDebut:"UFC 17", ufcDebutYear:1998},
    {name:"Ciryl Gane", country:"France", continent:"Europe", weightClass:"Heavyweight", ufcDebut:"UFC Fight Night: Shevchenko vs. Carmouche 2", ufcDebutYear:2019},
    {name:"Colby Covington", country:"USA", continent:"North America", weightClass:"Welterweight", ufcDebut:"UFC Fight Night 48", ufcDebutYear:2014},
    {name:"Daniel Cormier", country:"USA", continent:"North America", weightClass:"Heavyweight", ufcDebut:"UFC on Fox 7", ufcDebutYear:2013},
    {name:"Dave Menne", country:"USA", continent:"North America", weightClass:"Middleweight", ufcDebut:"UFC 24", ufcDebutYear:2000},
    {name:"Dricus Du Plessis", country:"South Africa", continent:"Africa", weightClass:"Middleweight", ufcDebut:"UFC Fight Night 179", ufcDebutYear:2020},
    {name:"Evan Tanner", country:"USA", continent:"North America", weightClass:"Middleweight", ufcDebut:"UFC 18", ufcDebutYear:1999},
    {name:"Fabricio Werdum", country:"Brazil", continent:"South America", weightClass:"Heavyweight", ufcDebut:"UFC 70: Nations Collide", ufcDebutYear:2007},
    {name:"Forrest Griffin", country:"USA", continent:"North America", weightClass:"Light Heavyweight", ufcDebut:"UFC 59", ufcDebutYear:2006},
    {name:"Francis Ngannou", country:"Cameroon", continent:"Africa", weightClass:"Heavyweight", ufcDebut:"UFC on Fox 17", ufcDebutYear:2015},
    {name:"Frank Mir", country:"USA", continent:"North America", weightClass:"Heavyweight", ufcDebut:"UFC 34: High Voltage", ufcDebutYear:2001},
    {name:"Frank Shamrock", country:"USA", continent:"North America", weightClass:"Light Heavyweight", ufcDebut:"UFC Japan", ufcDebutYear:1997},
    {name:"George St-Pierre", country:"Canada", continent:"North America", weightClass:"Middleweight", ufcDebut:"UFC 46", ufcDebutYear:2004},
    {name:"Glover Teixeira", country:"Brazil", continent:"South America", weightClass:"Light Heavyweight", ufcDebut:"UFC 146", ufcDebutYear:2012},
    {name:"Ilia Topuria", country:"Spain", continent:"Europe", weightClass:"Featherweight", ufcDebut:"UFC Fight Night: Moraes vs. Sandhagen", ufcDebutYear:2020},
    {name:"Islam Makhachev", country:"Russia", continent:"Asia", weightClass:"Lightweight", ufcDebut:"UFC 187", ufcDebutYear:2015},
    {name:"Israel Adesanya", country:"Nigeria", continent:"Africa", weightClass:"Middleweight", ufcDebut:"UFC 221", ufcDebutYear:2018},
    {name:"Jamahal Hill", country:"USA", continent:"North America", weightClass:"Light Heavyweight", ufcDebut:"UFC Fight Night 166", ufcDebutYear:2020},
    {name:"Jan Blachowicz", country:"Poland", continent:"Europe", weightClass:"Light Heavyweight", ufcDebut:"UFC Fight Night 53", ufcDebutYear:2014},
    {name:"Jiri Prochazka", country:"Czech Republic", continent:"Europe", weightClass:"Light Heavyweight", ufcDebut:"UFC 251", ufcDebutYear:2020},
    {name:"Johny Hendricks", country:"USA", continent:"North America", weightClass:"Welterweight", ufcDebut:"UFC 101", ufcDebutYear:2009},
    {name:"Jon Jones", country:"USA", continent:"North America", weightClass:"Heavyweight", ufcDebut:"UFC 87", ufcDebutYear:2008},
    {name:"Josh Barnett", country:"USA", continent:"North America", weightClass:"Heavyweight", ufcDebut:"UFC 28", ufcDebutYear:2000},
    {name:"Junior Dos Santos", country:"Brazil", continent:"South America", weightClass:"Heavyweight", ufcDebut:"UFC 90", ufcDebutYear:2008},
    {name:"Kevin Randleman", country:"USA", continent:"North America", weightClass:"Heavyweight", ufcDebut:"UFC 19", ufcDebutYear:1999},
    {name:"Kumaru Usman", country:"Nigeria", continent:"Africa", weightClass:"Welterweight", ufcDebut:"UFC on Fox 17", ufcDebutYear:2015},
    {name:"Leon Edwards", country:"England", continent:"Europe", weightClass:"Welterweight", ufcDebut:"UFC Fight Night: Shogun vs. Saint Preux", ufcDebutYear:2014},
    {name:"Luke Rockhold", country:"USA", continent:"North America", weightClass:"Middleweight", ufcDebut:"UFC Fight Night 35", ufcDebutYear:2014},
    {name:"Lyoto Machida", country:"Brazil", continent:"South America", weightClass:"Light Heavyweight", ufcDebut:"UFC 67", ufcDebutYear:2007},
    {name:"Mark Coleman", country:"USA", continent:"North America", weightClass:"Heavyweight", ufcDebut:"UFC 10", ufcDebutYear:1996},
    {name:"Matt Hughes", country:"USA", continent:"North America", weightClass:"Welterweight", ufcDebut:"UFC 22", ufcDebutYear:1999},
    {name:"Matt Serra", country:"USA", continent:"North America", weightClass:"Welterweight", ufcDebut:"UFC 31", ufcDebutYear:2001},
    {name:"Maurice Smith", country:"USA", continent:"North America", weightClass:"Heavyweight", ufcDebut:"UFC 14", ufcDebutYear:1997},
    {name:"Mauricio Rua", country:"Brazil", continent:"South America", weightClass:"Light Heavyweight", ufcDebut:"UFC 76", ufcDebutYear:2007},
    {name:"Michael Bisping", country:"England", continent:"Europe", weightClass:"Middleweight", ufcDebut:"UFC 66", ufcDebutYear:2006},
    {name:"Murilo Bustamante", country:"Brazil", continent:"South America", weightClass:"Middleweight", ufcDebut:"UFC 25", ufcDebutYear:2000},
    {name:"Pat Miletich", country:"USA", continent:"North America", weightClass:"Welterweight", ufcDebut:"UFC 16", ufcDebutYear:1998},
    {name:"Quinton Jackson", country:"USA", continent:"North America", weightClass:"Light Heavyweight", ufcDebut:"UFC 67", ufcDebutYear:2007},
    {name:"Randy Couture", country:"USA", continent:"North America", weightClass:"Heavyweight", ufcDebut:"UFC 13", ufcDebutYear:1997},
    {name:"Rashad Evans", country:"USA", continent:"North America", weightClass:"Light Heavyweight", ufcDebut:"UFC Ultimate Fight Night 4", ufcDebutYear:2006},
    {name:"Ricco Rodriguez", country:"USA", continent:"North America", weightClass:"Heavyweight", ufcDebut:"UFC 32", ufcDebutYear:2001},
    {name:"Rich Franklin", country:"USA", continent:"North America", weightClass:"Middleweight", ufcDebut:"UFC 42", ufcDebutYear:2003},   
    {name:"Robbie Lawler", country:"USA", continent:"North America", weightClass:"Welterweight", ufcDebut:"UFC 37", ufcDebutYear:2002},
    {name:"Robert Whittaker", country:"Australia", continent:"Australasia", weightClass:"Middleweight", ufcDebut:"UFC on FX 6", ufcDebutYear:2012},
    {name:"Sean O'Malley", country:"USA", continent:"North America", weightClass:"Bantamweight", ufcDebut:"UFC 222", ufcDebutYear:2018},
    {name:"Sean Strickland", country:"USA", continent:"North America", weightClass:"Middleweight", ufcDebut:"UFC 171", ufcDebutYear:2014},
    {name:"Shane Carwin", country:"USA", continent:"North America", weightClass:"Heavyweight", ufcDebut:"UFC 84", ufcDebutYear:2008},
    {name:"Stipe Miocic", country:"USA", continent:"North America", weightClass:"Heavyweight", ufcDebut:"UFC 136", ufcDebutYear:2011},
    {name:"Tim Sylvia", country:"USA", continent:"North America", weightClass:"Heavyweight", ufcDebut:"UFC 39", ufcDebutYear:2002},
    {name:"Tito Ortiz", country:"USA", continent:"North America", weightClass:"Light Heavyweight", ufcDebut:"UFC 13", ufcDebutYear:1997},
    {name:"Tom Aspinall", country:"England", continent:"Europe", weightClass:"Heavyweight", ufcDebut:"UFC on ESPN 14", ufcDebutYear:2020},
    {name:"Tyron Woodley", country:"USA", continent:"North America", weightClass:"Welterweight", ufcDebut:"UFC 156", ufcDebutYear:2013},
    {name:"Vitor Belfort", country:"Brazil", continent:"South America", weightClass:"Light Heavyweight", ufcDebut:"UFC 12", ufcDebutYear:1997},

    //{name:"", country:"", continent:"", weightClass:"Welterweight", ufcDebut:"", ufcDebutYear:},
    
];
export default fighters