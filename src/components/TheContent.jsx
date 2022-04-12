import Card from "./UIComponents/Card"
import Title from './UIComponents/Title'

const list ={
    display:'flex',
    justifyContent:'space-around',
    alignItems:'center',
    flexWrap:'wrap'
}
const TheContent = function () {
   

    const cards =[
        {
            cardID:1,
            cardImage: 'a',
            timer:'1:30:30',
            cardPrice: 4.89,
            cardStatus: 'Current Bid',
            author:{
                authorAvatar:'a',
                authorName:'Nguyen Khanh Hoa',
                authorTagName:'F4reaL'
            },
            checked: true
        },
        {
            cardID:2,
            cardImage: 'a',
            timer:'1:30:30',
            cardPrice: 4.89,
            cardStatus: 'Current Bid',
            author:{
                authorAvatar:'../assets/img/avatar3.png',
                authorName:'Nguyen Khanh Hoa',
                authorTagName:'F4reaL'
            },
            checked: false
        },
        {
            cardID:3,
            cardImage: 'a',
            timer:'1:30:30',
            cardPrice: 4.89,
            cardStatus: 'Current Bid',
            author:{
                authorAvatar:'../assets/img/avatar2.png',
                authorName:'Nguyen Thanh Trung',
                authorTagName:'Naisha'
            },
            checked: false
        },
        {
            cardID:4,
            cardImage: 'a',
            timer:'1:30:30',
            cardPrice: 4.89,
            cardStatus: 'Current Bid',
            author:{
                authorAvatar:'a',
                authorName:'Pham Thi Thuong',
                authorTagName:'Ladame'
            },
            checked: false
        },
        {
            cardID:5,
            cardImage: 'a',
            timer:'1:30:30',
            cardPrice: 4.89,
            cardStatus: 'Current Bid',
            author:{
                authorAvatar:'a',
                authorName:'Nguyen Khanh Hoa',
                authorTagName:'F4reaL'
            },
            checked: false
        },
        {
            cardID:6,
            cardImage: 'a',
            timer:'1:30:30',
            cardPrice: 4.89,
            cardStatus: 'Current Bid',
            author:{
                authorAvatar:'a',
                authorName:'Nguyen Khanh Hoa',
                authorTagName:'F4reaL'
            },
            checked: false
        }
    ]

    let cardChecked = 0;
    cards.filter((c)=>{
        if(c.cardID){
            cardChecked +=1;
        }
    });
    console.log("Hellooooooo " + cardChecked)

    const handleClick = ()=>{
        setCard()
    }
    return (
        <div>
            <Title></Title>
            {
                cardChecked > 0 ? <div>Số sản phẩm bạn đã chọn là : {cards.length} Cards <span><button style={{width:'200px'}}>Bạn muốn xóa ?</button></span></div> : null
            }
            <div className="list" style={list}>
                {cards.map((card)=>{
                    return <Card card={card} key={card.cardID} />
                })}
            </div>
        </div>
        
    )
}

export default TheContent