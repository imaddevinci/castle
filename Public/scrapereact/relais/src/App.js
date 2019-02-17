import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';


import Data from './hotel.json';
import tri from './tri.json';

const e = React.createElement;

class App extends Component {
	constructor(props) {
    super(props);
    this.state = { liked: false };

  }
  render() {
	  
	  
	  if (this.state.liked) {
		  
		  
		  
		  
		  
		  return (
      <div className="App">
		
		<h1> <b> tri selon le 02/03/2019 </b></h1>
		
			 <div class="actor">
			 
		   {tri.map((hotelDetail, index)=>{
			   var i=1;

			   var prix1=[];
			   var prix2=[];
			   var prix3=[];
			   var prix4=[];
			   var prix5=[];
			   var prix6=[];
			   var prix7=[];
			   var prix8=[];
			   var prix9=[];
			   var prix10=[];
		  	   var prix11=[];
			   var prix12=[];
						 for(var mois=2;mois <13;mois++)
						 {
				   
			   
							for (i=1;i<32;i++)
							{
								
								
									var week_end = new Date( '2019-'+mois+'-'+i);
								//	console.log(week_end.getDay());
									
									if (week_end.getDay() == 6 )
									{
										 	if (hotelDetail.date[mois-2].mois!=0 && hotelDetail.date[mois-2].prix['saturday '+i]!=undefined)
										{
											
										if (hotelDetail.date[mois-2].mois==2)
										{prix1.push("    " +i+"/ "+ hotelDetail.date[mois-2].mois +" :  "+hotelDetail.date[mois-2].prix['saturday '+i]+"    ");
										}else if (hotelDetail.date[mois-2].mois==3)
										{prix2.push("    " +i+"/ "+ hotelDetail.date[mois-2].mois +" :  "+hotelDetail.date[mois-2].prix['saturday '+i]+"    ");
										}else if (hotelDetail.date[mois-2].mois==4)
										{prix3.push("    " +i+"/ "+ hotelDetail.date[mois-2].mois +" :  "+hotelDetail.date[mois-2].prix['saturday '+i]+"    ");
										}else if (hotelDetail.date[mois-2].mois==5)
										{prix4.push("    " +i+"/ "+ hotelDetail.date[mois-2].mois +" :  "+hotelDetail.date[mois-2].prix['saturday '+i]+"    ");
										}else if (hotelDetail.date[mois-2].mois==6)
										{prix5.push("    " +i+"/ "+ hotelDetail.date[mois-2].mois +" :  "+hotelDetail.date[mois-2].prix['saturday '+i]+"    ");
										}else if (hotelDetail.date[mois-2].mois==7)
										{prix6.push("    " +i+"/ "+ hotelDetail.date[mois-2].mois +" :  "+hotelDetail.date[mois-2].prix['saturday '+i]+"    ");
										}else if (hotelDetail.date[mois-2].mois==8)
										{prix7.push("    " +i+"/ "+ hotelDetail.date[mois-2].mois +" :  "+hotelDetail.date[mois-2].prix['saturday '+i]+"    ");
										}else if (hotelDetail.date[mois-2].mois==9)
										{prix8.push("    " +i+"/ "+ hotelDetail.date[mois-2].mois +" :  "+hotelDetail.date[mois-2].prix['saturday '+i]+"    ");
										}else if (hotelDetail.date[mois-2].mois==10)
										{prix9.push("    " +i+"/ "+ hotelDetail.date[mois-2].mois +" :  "+hotelDetail.date[mois-2].prix['saturday '+i]+"    ");
										}else if (hotelDetail.date[mois-2].mois==11)
										{prix10.push("    " +i+"/ "+ hotelDetail.date[mois-2].mois +" :  "+hotelDetail.date[mois-2].prix['saturday '+i]+"    ");
										}else if (hotelDetail.date[mois-2].mois==12)
										{prix11.push("    " +i+"/ "+ hotelDetail.date[mois-2].mois +" :  "+hotelDetail.date[mois-2].prix['saturday '+i]+"    ");
										}
										
									
									
									
									}
										 
										 
	
									}
							
									
									
							}
					}
							
      
			   
			return <ul> 			
			<li> <b>{' Hotel : '} </b> {hotelDetail.name} <b>{' Restaurant 1 : '} </b>{hotelDetail.restaurant1} <b>{' Restaurant 2 : '} </b> {hotelDetail.restaurant2}  </li>
			
			<table>
			
			   <caption>Price</caption>

			 <tr>
       <th>Month 2</th>
       <th>Month 3</th>
       <th>Month 4</th>
	   <th>Month 5</th>
       <th>Month 6</th>
	   <th>Month 7</th>
       <th>Month 8</th>
       <th>Month 9</th>
	   <th>Month 10</th>
       <th>Month 11</th>
       <th>Month 12</th>
			</tr>
		
	  <tr>
		   <td>{prix1[0]}</td>
		   <td><b>{prix2[0]}</b></td>
		   <td>{prix3[0]}</td>
		   <td>{prix4[0]}</td>
		   <td>{prix5[0]}</td>
		   <td>{prix6[0]}</td>
		   <td>{prix7[0]}</td>
		   <td>{prix8[0]}</td>
		   <td>{prix9[0]}</td>
		   <td>{prix10[0]}</td>
		   <td>{prix11[0]}</td>
		   <td>{prix12[0]}</td>
	   </tr>
    <tr>
		   <td>{prix1[1]}</td>
		   <td>{prix2[1]}</td>
		   <td>{prix3[1]}</td>
		   <td>{prix4[1]}</td>
		   <td>{prix5[1]}</td>
		   <td>{prix6[1]}</td>
		   <td>{prix7[1]}</td>
		   <td>{prix8[1]}</td>
		   <td>{prix9[1]}</td>
		   <td>{prix10[1]}</td>
		   <td>{prix11[1]}</td>
		   <td>{prix12[1]}</td>
	   </tr>
	   
	       <tr>
		   <td>{prix1[2]}</td>
		   <td>{prix2[2]}</td>
		   <td>{prix3[2]}</td>
		   <td>{prix4[2]}</td>
		   <td>{prix5[2]}</td>
		   <td>{prix6[2]}</td>
		   <td>{prix7[2]}</td>
		   <td>{prix8[2]}</td>
		   <td>{prix9[2]}</td>
		   <td>{prix10[2]}</td>
		   <td>{prix11[2]}</td>
		   <td>{prix12[2]}</td>
	   </tr>
	   
	   
	   <tr>
		<td>{prix1[3]}</td>
		   <td>{prix2[3]}</td>
		   <td>{prix3[3]}</td>
		   <td>{prix4[3]}</td>
		   <td>{prix5[3]}</td>
		   <td>{prix6[3]}</td>
		   <td>{prix7[3]}</td>
		   <td>{prix8[3]}</td>
		   <td>{prix9[3]}</td>
		   <td>{prix10[3]}</td>
		   <td>{prix11[3]}</td>
		   <td>{prix12[3]}</td>
	      </tr>
		  
		   <tr>
		   <td>{prix1[4]}</td>
		   <td>{prix2[4]}</td>
		   <td>{prix3[4]}</td>
		   <td>{prix4[4]}</td>
		   <td>{prix5[4]}</td>
		   <td>{prix6[4]}</td>
		   <td>{prix7[4]}</td>
		   <td>{prix8[4]}</td>
		   <td>{prix9[4]}</td>
		   <td>{prix10[4]}</td>
		   <td>{prix11[4]}</td>
		   <td>{prix12[4]}</td>
	      </tr>
		  
		  
		   <tr>
		   <td>{prix1[5]}</td>
		   <td>{prix2[5]}</td>
		   <td>{prix3[5]}</td>
		   <td>{prix4[5]}</td>
		   <td>{prix5[5]}</td>
		   <td>{prix6[5]}</td>
		   <td>{prix7[5]}</td>
		   <td>{prix8[5]}</td>
		   <td>{prix9[5]}</td>
		   <td>{prix10[5]}</td>
		   <td>{prix11[5]}</td>
		   <td>{prix12[5]}</td>
	      </tr>
		  
   </table>
			
			</ul> 
			})}
        </div>
		
		<div id="print">
        </div>
	  
        <header className="App-header">
          <p>	
			
          </p>
       
        </header>
      </div>
    );
		  
		  
		 }  
		  
		    return e(
      'button',
      { onClick: () => this.setState({ liked: true }) },
      'Lancer'
    );
		  
		  
		  
		  
	
	
	
	 }

	  
	
  }


export default App;



						











