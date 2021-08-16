import { Card } from 'antd';

const { Meta } = Card;

function Cards() {
    return (
        <Card
            hoverable
            style={{ width: 240 }}
            cover={<img alt="example" src="https://upload.wikimedia.org/wikipedia/commons/0/08/Anil_Kapoor_1.jpeg" />}
        >
            <Meta title="Anil Kapoor" description="www.instagram.com" />
        </Card>
    )
}
export default Cards;
