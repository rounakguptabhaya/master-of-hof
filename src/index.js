import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';


class Display extends React.Component{

  constructor(){
    
    super();
    this.state = {
        userData: [
            { id: '1', name: 'Joe', user_type: 'Developer', age:31, years:11 },
            { id: '2', name: 'Hill', user_type: 'Designer', age:26, years:4 },
            { id: '3', name: 'John', user_type: 'Teacher', age:24,years: 2},
            { id: '4', name: 'Sam', user_type: 'Entreprenuer', age:58,years:25},
            { id: '5', name: 'Jack', user_type: 'Designer', age:43, years: 18}

        ]
    }
}




render(){
          let arr2 =this.state.userData.filter(function(val){ return (val.user_type==='Designer') });
          let arr3 =this.state.userData.filter(val=>{return(val.name.startsWith('J'))});
          let arr4 =this.state.userData.filter(val=>{ return(val.age>28 && val.age<=50)});

  return <>
   <center>
    <h1>Display Items</h1>
    <div className="disp1">
    {
        this.state.userData.map(val=>{return(
          <div className="details">
          <span>Id:{val.id}&emsp;&emsp;&emsp;</span>
          <span>Name:{val.name}&emsp;&emsp;&emsp;</span>
          <span>Designation:{val.user_type}</span>
          </div>)
        })

    }
</div>
      <h1>Display based on user type</h1>
      <div className='disp2'>
        { arr2.map(function(val){
          return(
            <div className="details">
            <span>Id:{val.id}&emsp;&emsp;&emsp;</span>
            <span>Name:{val.name}&emsp;&emsp;&emsp;</span>
            <span>Designation:{val.user_type}</span>
            </div>
          )
        })
      }
</div>
        <h1>Filter all data starting with J</h1>
        <div className='disp3'>
          {   arr3.map( val=>{
            return(
              <div className="details">
              <span>Id:{val.id}&emsp;&emsp;&emsp;</span>
              <span>Name:{val.name}&emsp;&emsp;&emsp;</span>
              <span>Designation:{val.user_type}</span>
              </div>
            )
          })

          }
</div>
          <h1>Filter all data based on age greater than 28 and age less than or equal to 50</h1>
          <div className='disp4'>
            { arr4.map( val=>{
               return(
                <div className="details">
              <span>Id:{val.id}&emsp;&emsp;&emsp;</span>
              <span>Name:{val.name}&emsp;&emsp;&emsp;</span>
              <span>Designation:{val.user_type}</span>
              </div>

               )
            })

            }
</div>
            <h1>Find the total years of the designers</h1>
            <div className='disp5'>
              { 
                  arr2.reduce(function (num1, num2){
                     
                      return(num1.years+num2.years)
                  })
              }

            </div>
      </center>
    </>

}
}




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
 <Display/>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

