import React, { Component } from 'react';
import './App.css';
import hotel from './hotel.json';
import tri from './tri.json';



class App extends Component {
	constructor(props) {
    super(props);
    this.state = { mois :'' , liked: false};
	}
	
	ChangementMois = e =>{
	this.setState({mois:e.target.value});
		}	
	
	Print = e =>{
	this.setState({ liked: true });
			}
  
  Ind(){
	  var price=[];
  if (this.state.liked) {
	  	
 price = tri.map((hotelDetail, index)=>{
	var mois = this.state.mois;
			   var i=1;
var prix1=[];


				   
			   
							for (i=1;i<32;i++)
							{
								
								
									var week_end = new Date( '2019-'+mois+'-'+i);
								
									
									if (week_end.getDay() == 6 )
									{
										
										 	if (hotelDetail.date[mois-2].mois!=0 && hotelDetail.date[mois-2].prix['saturday '+i]!=undefined)
										{
											
										if (hotelDetail.date[mois-2].mois==mois)
										{
											
											prix1.push(i +" : "+hotelDetail.date[mois-2].prix['saturday '+i]);
											
										}
										
										}
										 
										 
	
									}
								
							}
					
			return (<ul> 
		
<li> <b>{' Hotel : '} </b> {hotelDetail.name} <b>{' Restaurant 1 : '} </b>{hotelDetail.restaurant1} <b>{' Restaurant 2 : '} </b> {hotelDetail.restaurant2} </li>	
 <table>
			
			   <caption>Price</caption>

			 <tr>
       <th> Month {mois}</th>
   
			</tr>
		
		<tr>
		   <td><b>{prix1[0]}</b></td>
		 
	   </tr>
		<tr>
		   <td>{prix1[1]}</td>
	   </tr>
	   
	       <tr>
		   <td>{prix1[2]}</td>
			</tr>
	   
	   
	   <tr>
		<td>{prix1[3]}</td>

	      </tr>
		  
		   <tr>
		   <td>{prix1[4]}</td>

	      </tr>
		  
		  
		   <tr>
		   <td>{prix1[5]}</td>

	      </tr>
		  
   </table>
  		
			</ul> 
			
			);
			
})
 }
 return price;
  
  }
  

 render() {


  
	return (
      <div className="App" align="middle">
	  
	  

            <label for="choice">Which month do you want ?</label><br />
            <select onChange={this.ChangementMois}>
			  <option value=""></option>
              <option value="2">02-2019</option>
              <option value="3">03-2019</option>
              <option value="4">04-2019</option>
              <option value="5">05-2019</option>
              <option value="6">06-2019</option>
              <option value="7">07-2019</option>
              <option value="8">08-2019</option>
              <option value="9">09-2019</option>
              <option value="10">10-2019</option>
              <option value="11">11-2019</option>
              <option value="12">12-2019</option>
			  </select>{' '}
    
	
			  <button onClick={this.Print}> select </button>		
				
				{this.Ind()}
				<div> <h1> <b>Le tri sera realisé selon le prix des hotels étoilés dans l'ordre croissant selon le 02/03/2019 </b></h1></div>
	 <h2> <b>Choisissez un mois puis cliquez sur 'select'</b></h2>
      </div>
    );
	
	
  }
}


export default App;