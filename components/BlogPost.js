import React, {useState} from "react";
import ImageList from "./ImageList";


export default function BlogPost(props){
    const show_button_id = "hidden-" + props.name + "-b";
    const hidden_class_id = "hidden-" + props.name + "-c";
    const hide_button_id = "hidden-" + props.name + "-a";

    // state hooks
    const [hidden, setHidden] = useState("hidden");
    if (hidden == "show")
    {    
        return(<div class="entire_stage_post">
            <div class = "stage_post">
                <div class="stage_text">
                    <h1>{props.name}</h1>
                    <h4>Played: {props.role}</h4>
                </div>
                <img src={"../resources/images/" + props.title-img}/>
            </div>
            <div class = "hidden" id = {hidden_class_id}>
                <p class = "hidden-text">{props.hidden-text}</p>
                <ImageList imgs = {props.imgs} class = "hidden-imgs"/>
                <a href = {"#" + show_button_id} id = {hide_button_id} onClick = {setHidden("hide")}>View less</a>
            </div>
        </div>);
    } else{
        return(<div class="entire_stage_post">
            <div class = "stage_post">
                <div class="stage_text">
                    <h1>{props.name}</h1>
                    <h4>Played: {props.role}</h4>
                    <button id = {show_button_id} onClick = {setHidden("show")}>View more</button>
                </div>
                <img src={"../resources/images/" + props.title-img}/>
            </div>
        </div>);
    }
}
