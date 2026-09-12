
export default function ImageList(props){
    return (<div>
        {props.imgs.map((img) => (
            <img src = {"../resources/images/" + img} key = {img}/>
        ))}
    </div>);
};