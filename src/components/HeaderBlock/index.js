import s from './style.module.css'

const HeaderBlock = ({title, hideBackground = false}) => {
    const styleRoot = hideBackground ? {backgroundImage: 'none'} : {}

    return (
        <div>
            <div>
                <h1 className={s.header}>{ title }</h1>
                <p>Simple Triple Triad Card Game</p>
            </div>
        </div>
    );
};

export default HeaderBlock;