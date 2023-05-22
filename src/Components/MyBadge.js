import {Badge} from "react-bootstrap"

function MyBadge({ text, color }) {
    return (
        <Badge bg={color}>{text}</Badge>
    );
}

export default MyBadge;