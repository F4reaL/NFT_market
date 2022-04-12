const footerStyle = {
    backgroundImage:`url("src/assets/img/Footer.png")`,
    backgroundSize:'contain',
    backgroundRepeat:'no-repeat',
    minWidth:'100vw',
    height:'70vh',
    marginBottom:'0',
    
}
const TheFooter = ()=>{
    return (
        <div className="footer" style={footerStyle}></div>
    )
}

export default TheFooter