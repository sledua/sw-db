import Link from "next/link";
import Head from "next/head";
import {useState} from "react";
export function MainLayout({children, title = 'Test'}) {
    const [open, setOpen] = useState(false);


    return (
        <>
            <Head>
                <meta charSet="UTF-8" />
                <link rel="icon" href="/favicon-touch.ico"/>
                <meta http-equiv="x-ua-compatible" content="ie=edge"/>
                <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no"/>
                <meta name="robots" content="index, follow"/>
                <meta name="google" content="notranslate"/>
                <meta name="format-detection" content="telephone=no"/>
                <meta name="description" content=""/>
                <title>{title}</title>
            </Head>
            <header className="header">
                <div className="header__left">
                    <div className="nav__list">
                        <div className="logo"><a href="/" className="nav__link has--logo">Artem Blog`s</a></div>

                    </div>
                </div>
                <div className="header__center">
                    <from action="/" method="post" className="search">
                        <span className="input-search"><i className="fa fa-search" aria-hidden="true"></i></span>
                        <input type="text" placeholder="Search" className="search__input"/>
                    </from>
                </div>
                <div className="header__right">
                    <nav className="nav">
                        <ul className="nav__list">
                            <li><Link href={'/'}><a className="nav__link">Главная</a></Link></li>
                            <li><Link href={'/about'}><a className="nav__link">Информ</a></Link></li>
                            <li><Link href={'/works'}><a className="nav__link">Работы</a></Link></li>
                        </ul>
                        <ul className="nav__list-social">
                            <li>
                                <Link href={'/'}>
                                    <a className="nav__link-social">
                                        <i className="fa fa-instagram" aria-hidden="true"></i>
                                    </a>
                                </Link>
                            </li>
                            <li>
                                <Link href={'https://www.linkedin.com/in/artem-guida-27660917a/'}>
                                    <a className="nav__link-social">
                                        <i className="fa fa-linkedin" aria-hidden="true"></i>
                                    </a>
                                </Link>
                            </li>
                            <li>
                                <a href="https://github.com/sledua" className="nav__link-social">
                                    <i className="fa fa-github" aria-hidden="true"/>
                                </a>
                            </li>
                        </ul>
                    </nav>
                    <div className="mobile-menu">
                        <i className="fa fa-bars " aria-hidden="true" onClick={() => {
                            let burgerActive = document.querySelector('.fa-bars').classList.contains('active');
                            if(!burgerActive) {
                                document.querySelector('.fa-bars').classList.toggle('active')
                                document.querySelector('.fa-times').classList.remove('sha')
                            } else {
                                document.querySelector('.fa-times').classList.add('sha')
                                document.querySelector('.fa-bars').classList.remove('active')

                            }
                            console.log(burgerActive);

                        }}/>
                        <i className="fa fa-times sha" aria-hidden="true"/>
                    </div>
                </div>
            </header>
            <main className='main'>
                {children}
            </main>
            <footer className="footer">
                <div className="footer__left">
                    <div className="nav__list nav__footer">
                        <div className="logo"><a href="/" className="nav__link has--logo">Artem Blog`s</a></div>
                        <p>2020 copyright all rights reserved</p>
                    </div>
                </div>
                <div className="footer__right ">
                    <nav className="nav">
                        <ul className="nav__list nav__footer">
                            <li><a href="" className="nav__link"><i className="fa fa-instagram" aria-hidden="true"></i></a>
                            </li>
                            <li>
                                <a href="https://www.linkedin.com/in/artem-guida-27660917a/" className="nav__link">
                                    <i className="fa fa-linkedin" aria-hidden="true"></i>
                                </a>
                            </li>
                            <li>
                                <a href="https://github.com/sledua" className="nav__link">
                                    <i className="fa fa-github" aria-hidden="true"></i>
                                </a>
                            </li>
                        </ul>
                    </nav>
                </div>
            </footer>
        </>
    )
}
