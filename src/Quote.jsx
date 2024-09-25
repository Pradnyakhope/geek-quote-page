/* eslint-disable react/prop-types */

const Quote = (props) =>{
    return (
             
        <div className="Quote">
            <div className="Quote-list">
                 <p className="Quote-data">{props.data}</p>
                 <h1 className="Quote-title">{props.title}</h1> 
            </div>
 
        </div>

    )
};

export default Quote;