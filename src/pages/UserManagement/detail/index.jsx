import { useParams } from "react-router-dom";

export default function Detail() {
   const { slug } = useParams();

    return (
       <div>
        {slug}
       </div>
    );
    }