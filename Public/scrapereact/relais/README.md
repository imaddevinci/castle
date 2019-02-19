# Relais Chateaux and Michelin
![Relais Chateaux and Michelin](http://www.les2mas.com/admin/modules/module_actualite/images/big/hotel-restaurant-perpignan-1-35.png)
![Relais Chateaux and Michelin](https://media.relaischateaux.com/public/hash/800a06d9a483b8f32b4cfe08ba5c32c0611e2ed0)



**Table of Contents**

- [Introduction](#introduction)
- [Methodology](#Methodology)



## Installation
<li>
To clone and run this application you'll have to do this from your command line

```sh
Clone this repository
$git clone https://github.com/imaddevinci/castle.git

Go into the repository
$cd /path/to/workspace/castle/Public/scrapereact/relais/src

run the react part
$npm start

```
</li>


## Methodology

<li>
Michelin Restaurant
</li>
I scraped the Michelin web site and took the name of starred restaurants, to do so I went to all 
starred restaurants (directly by using filter on the web site) then I recovered the name of each restaurants on
the page, I iterated this for all pages.
I put their name into an array that I exports to the main project.
<li>
Relais&Chateau
</li>
Then I scrapped the Relais&Chateau web site to take names of French hotel with restaurants. 
Once I recovery all hotels with there restaurant, I checked if they were starred, to do so I compared their names (there is sometimes two restaurants in one hotel) 
to the name of starts restaurants from Michelin.
Once I did this I created a function to recuperate all weekend available from the json that I recuperated with a fetch request
directly from the web site. 
I ordered them with their price with a sort by selection algorithm.




  