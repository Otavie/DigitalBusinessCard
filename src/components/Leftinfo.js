import otas from '../images/otavieSmilesNoBack.png'

export default function Leftinfo(){
    return(
        <div className="leftInfo">
            <a href='https://www.otavie.com/'><img src={otas} className='otas' alt="Otavie's Photo" /></a>
            <div className='leftContent'>
                <h1 className='name alignText'>Otavie Okuoyo</h1>
                <h3 className='job alignText'>&lt;UI/UX + Frontend /&gt;</h3>
                <a href='https://www.otavie.com/'><h4 className='website alignText'>www.otavie.com</h4></a>
            </div>
        </div>
    )
}