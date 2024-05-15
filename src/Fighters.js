//includes top 10 pfp 
//all heavy weight champs >= 1997

const fighters = [
    {name:"Alex Pereira", country:"Brazil", continent:"South America", weightClass:"Light Heavyweight", ufcDebut:"UFC 268", ufcDebutYear:2021},
    {name:"Alexander Volkanovski", country:"Australia", continent:"Australasia", weightClass:"Featherweight", ufcDebut:"UFC Fight Night 101", ufcDebutYear:2016},
    {name:"Alexandre Pantoja", country:"Brazil", continent:"South America", weightClass:"Flyweight", ufcDebut:"UFC on Fox: Shevchenko vs. Peña", ufcDebutYear:2017},
    {name:"Andrei Arlovski", country:"Belarus", continent:"Europe", weightClass:"Heavyweight", ufcDebut:"UFC 28", ufcDebutYear:2000},
    {name:"Antonio Rodrigo Nogueira", country:"Brazil", continent:"South America", weightClass:"Heavyweight", ufcDebut:"UFC 73", ufcDebutYear:2007},
    {name:"Bas Rutten", country:"Netherlands", continent:"Europe", weightClass:"Heavyweight", ufcDebut:"UFC 18", ufcDebutYear:1999},
    {name:"Brock Lesnar", country:"USA", continent:"North America", weightClass:"Heavyweight", ufcDebut:"UFC 81", ufcDebutYear:2008},
    {name:"Cain Velasquez", country:"USA", continent:"North America", weightClass:"Heavyweight", ufcDebut:"UFC 83", ufcDebutYear:2008},
    {name:"Charles Oliveira", country:"Brazil", continent:"South America", weightClass:"Lightweight", ufcDebut:"UFC Live: Jones vs. Matyushenko", ufcDebutYear:2010},
    {name:"Ciryl Gane", country:"France", continent:"Europe", weightClass:"Heavyweight", ufcDebut:"UFC Fight Night: Shevchenko vs. Carmouche 2", ufcDebutYear:2019},
    {name:"Daniel Cormier", country:"USA", continent:"North America", weightClass:"Heavyweight", ufcDebut:"UFC on Fox 7", ufcDebutYear:2013},
    {name:"Dricus Du Plessis", country:"South Africa", continent:"Africa", weightClass:"Middleweight", ufcDebut:"UFC Fight Night 179", ufcDebutYear:2020},
    {name:"Fabricio Werdum", country:"Brazil", continent:"South America", weightClass:"Heavyweight", ufcDebut:"UFC 70: Nations Collide", ufcDebutYear:2007},
    {name:"Francis Ngannou", country:"Cameroon", continent:"Africa", weightClass:"Heavyweight", ufcDebut:"UFC on Fox 17", ufcDebutYear:2015},
    {name:"Frank Mir", country:"USA", continent:"North America", weightClass:"Heavyweight", ufcDebut:"UFC 34: High Voltage", ufcDebutYear:2001},
    {name:"Glover Teixeira", country:"Brazil", continent:"South America", weightClass:"Light Heavyweight", ufcDebut:"UFC 146", ufcDebutYear:2012},
    {name:"Ilia Topuria", country:"Spain", continent:"Europe", weightClass:"Featherweight", ufcDebut:"UFC Fight Night: Moraes vs. Sandhagen", ufcDebutYear:2020},
    {name:"Islam Makhachev", country:"Russia", continent:"Asia", weightClass:"Lightweight", ufcDebut:"UFC 187", ufcDebutYear:2015},
    {name:"Jamahal Hill", country:"USA", continent:"North America", weightClass:"Light Heavyweight", ufcDebut:"UFC Fight Night 166", ufcDebutYear:2020},
    {name:"Jan Blachowicz", country:"Poland", continent:"Europe", weightClass:"Light Heavyweight", ufcDebut:"UFC Fight Night 53", ufcDebutYear:2014},
    {name:"Jiri Prochazka", country:"Czech Republic", continent:"Europe", weightClass:"Light Heavyweight", ufcDebut:"UFC 251", ufcDebutYear:2020},
    {name:"Jon Jones", country:"USA", continent:"North America", weightClass:"Heavyweight", ufcDebut:"UFC 87", ufcDebutYear:2008},
    {name:"Josh Barnett", country:"USA", continent:"North America", weightClass:"Heavyweight", ufcDebut:"UFC 28", ufcDebutYear:2000},
    {name:"Junior Dos Santos", country:"Brazil", continent:"South America", weightClass:"Heavyweight", ufcDebut:"UFC 90", ufcDebutYear:2008},
    {name:"Kevin Randleman", country:"USA", continent:"North America", weightClass:"Heavyweight", ufcDebut:"UFC 19", ufcDebutYear:1999},
    {name:"Leon Edwards", country:"England", continent:"Europe", weightClass:"Welterweight", ufcDebut:"UFC Fight Night: Shogun vs. Saint Preux", ufcDebutYear:2014},
    {name:"Mark Coleman", country:"USA", continent:"North America", weightClass:"Heavyweight", ufcDebut:"UFC 10", ufcDebutYear:1996},
    {name:"Maurice Smith", country:"USA", continent:"North America", weightClass:"Heavyweight", ufcDebut:"UFC 14", ufcDebutYear:1997},
    {name:"Randy Couture", country:"USA", continent:"North America", weightClass:"Heavyweight", ufcDebut:"UFC 13", ufcDebutYear:1997},
    {name:"Ricco Rodriguez", country:"USA", continent:"North America", weightClass:"Heavyweight", ufcDebut:"UFC 32", ufcDebutYear:2001},
    {name:"Sean O'Malley", country:"USA", continent:"North America", weightClass:"Bantamweight", ufcDebut:"UFC 222", ufcDebutYear:2018},
    {name:"Shane Carwin", country:"USA", continent:"North America", weightClass:"Heavyweight", ufcDebut:"UFC 84", ufcDebutYear:2008},
    {name:"Stipe Miocic", country:"USA", continent:"North America", weightClass:"Heavyweight", ufcDebut:"UFC 136", ufcDebutYear:2011},
    {name:"Tim Sylvia", country:"USA", continent:"North America", weightClass:"Heavyweight", ufcDebut:"UFC 39", ufcDebutYear:2002},
    {name:"Tom Aspinall", country:"England", continent:"Europe", weightClass:"Heavyweight", ufcDebut:"UFC on ESPN 14", ufcDebutYear:2020},
  
    //{name:"", country:"", continent:"", weightClass:"Light Heavyweight", ufcDebut:"", ufcDebutYear:},
    
];
export default fighters