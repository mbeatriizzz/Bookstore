import './index.css'

const Rodape = (props) => {
    return (
        <footer className='rodape'>
            <div className='redes-sociais'>
            <a href="#"><img src='./imagens/fb.png'/></a>
            <a href="#"><img src='./imagens/tw.png'/></a>
            <a href="#"><img src='./imagens/ig.png'/></a>
            </div>

            <p>Desenvolvido por autor.</p>
        </footer>
    )
}

export default Rodape