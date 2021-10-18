import {useParams} from "react-router-dom";

function ClassNotFoundPage(){
    const {nonexistentClass} = useParams();

    return (
        <div className="ClassNotFound">
            <h2>Woops!</h2>
            <p>We don't have the {nonexistentClass} class in our database.</p>
        </div>
    );

}

export default ClassNotFoundPage;