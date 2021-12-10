import React from "react";


function Tutorials(props){


    return (
        <React.Fragment>
           <div>
                {props.video.map((element) => <img src = {element.snippet.thumbnails.default.url} width='120' height='90'/>)}
            </div>
        </React.Fragment>
    )
}
 
export default Tutorials;