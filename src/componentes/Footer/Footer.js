import './Footer.css'

const Footer = () => {

    //No tengo la imagen del backgrop pero dejo el style para ver como se pondria
    return <footer className='footerEnd' style={{ backgroundImage: "url(/img/footer.png)" }}>
        <div>
            <a href='url de la red social'>
                <img src='/img/facebook.png' alt='facebook' />
            </a>
            <a href=''>
                <img src='/img/twitter.png' alt='twitter' />
            </a>
            <a href=''>
                <img src='/img/instagram.png' alt='instagram' />
            </a>
        </div>
        <img src='/img/logo.png' alt='logo' />
        <strong>Desarrollado por Alura</strong>

    </footer>

}


export default Footer;