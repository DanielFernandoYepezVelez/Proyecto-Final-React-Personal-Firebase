import './Home.css';

export function Home() {
    let boxNames = [
        {
            boxNameOne: "box__one",
            boxNameTwo: "box__two",
        },
        {
            boxNameOne: "box__three",
            boxNameTwo: "box__four",
        },
        {
            boxNameOne: "box__five",
            boxNameTwo: "box__six",
        },
        {
            boxNameOne: "box__seven",
            boxNameTwo: "box__eight",
        },
        {
            boxNameOne: "box__nine",
            boxNameTwo: "box__ten",
        },
        {
            boxNameOne: "box__eleven",
            boxNameTwo: "box__twelve",
        },
        {
            boxNameOne: "box__13",
            boxNameTwo: "box__14",
        },
        {
            boxNameOne: "box__15",
            boxNameTwo: "box__16",
        },
        {
            boxNameOne: "box__17",
            boxNameTwo: "box__18",
        }
    ];

    let mainBoxNames = [
        {
            mainBoxName: "box__container--areaMain",
            mainBoxNameOne: "box__one2N--main",
            mainBoxNameTwo: "box__two2N--main",
        },
        {
            mainBoxName: "box__container--areaMain",
            mainBoxNameOne: "box__one3N--main",
            mainBoxNameTwo: "box__two3N--main",
        },
        {
            mainBoxName: "box__container--areaMain",
            mainBoxNameOne: "box__one4N--main",
            mainBoxNameTwo: "box__two4N--main",
        }
    ];

    return (
        <>
            <main className="main__container container">
                <section className="section__container--one">
                    <figure className="box__container--areaMain">
                        <div className="box__one--main"></div>
                        <div className="box__two--main"></div>
                        {/* <!-- <img src="" alt="mainImage"> --> */}
                    </figure>
                    <p className='borderTextHome'>
                        El grupo comenzó en 2010 en "The X Factor" después de que Niall Horan, Zayn Malik, Liam Payne, Harry Styles y Louis Tomlinson se presentaran en las audiciones de este programa. Individualmente, no lograron pasar a la siguiente ronda, pero formaron una banda, que ahora es una de las más exitosas de la historia.
                    </p>
                </section>

                <section className="section__container--two">
                    {
                        boxNames.map(function(boxName, index) {
                            return (
                                <div key={index}>
                                    <figure className="box__container--area">
                                        <div className={boxName['boxNameOne']}></div>
                                        <div className={boxName['boxNameTwo']}></div>
                                    </figure>
                                </div>
                            )
                        })
                    }
                </section>
            </main>
            
            <hr />

            <article>
                <h1>NOTICIAS</h1>
                <section className="main__container container">
                    <div className="section__container--news">
                        {
                            mainBoxNames.map(function(mainBoxName, index) {
                                return (
                                    <div key={index}>
                                        <figure className={mainBoxName["mainBoxName"]}>
                                            <div className={mainBoxName["mainBoxNameOne"]}></div>
                                            <div className={mainBoxName["mainBoxNameTwo"]}></div>
                                        </figure>
                                    </div>
                                )
                            })
                        }
                    </div>
                </section>
            </article>
            {/* <Footer /> */}
        </>
    )
}