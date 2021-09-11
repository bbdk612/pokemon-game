import s from './style.module.css';

const Layout = ({title, urlBg=null, colorBg=null, children}) => {

    return (
        <section className={s.root}>
        <div 
            className={s.wrapper}
            style={{
                backgroundColor: `${colorBg} `,
                backgroundImage: `url(${urlBg})`
            }} 
        >
            <article>
                <div className={s.title}>
                    <h3>{title}</h3>
                    <span className={s.separator}></span>
                </div>
                <div className={`${s.desc} ${s.full}`}>{children}</div>
            </article>
        </div>
        </section>
    )
};

export default Layout;