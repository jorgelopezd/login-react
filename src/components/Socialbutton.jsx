function Socialbutton({title, img, description}) {

return (
    <>
        <section className="socials">
            <h1>{title}</h1>
            <div>{img}</div>
            <p>{description}</p>
        </section>
    </>
    )
}

export default Socialbutton