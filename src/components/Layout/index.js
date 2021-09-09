import s from './style.module.css';

const Layout = ({title, desc, urlBg=null, colorBg=null}) => {

    return (
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
                <div className={`${s.desc} ${s.full}`}>{desc}</div>
            </article>
        </div>
    )
};

export default Layout;