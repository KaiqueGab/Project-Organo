import './Footer.css'

const Footer = () => {
    return (<footer className="footer">
        <section>
            <ul>
                <li>
                    <a href="www.facebook.com" target="_blank" rel="noopener">
                        <img src="/images/fb.png" alt="" />
                    </a>
                </li>
                <li>
                    <a href="www.instagram.com" target="_blank" rel="noopener">
                        <img src='/images/ig.png' alt="" />
                    </a>
                </li>
                <li>
                    <a href="www.twitter.com" target="_blank" rel="noopener">
                        <img src='/images/tw.png' alt="" />
                    </a>
                </li>
            </ul>
        </section>
        <section>
            <img src="/images/logo.png" alt="" />
        </section>
        <section>
            <p>
                Desenvolvido por Alura.
            </p>
        </section>
    </footer>
    )
}

export default Footer