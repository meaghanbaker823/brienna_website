import PropTypes from "prop-types";

export default function PageHeader({title}){
    return (
        <div className="page_title">
            <h1>{title}</h1>
        </div>
    );
}
PageHeader.propTypes = {
    title: PropTypes.string.isRequired
}