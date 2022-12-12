import './Members.css';

let membersBiography = [
    {
        id: 1,
        image: "https://firebasestorage.googleapis.com/v0/b/reactpersonalspotifyapp.appspot.com/o/OneHarryImage.webp?alt=media&token=6ca35267-2fba-4930-8854-4c33015fba85",
        biography: "Harry Edward Styles (n. 1 de febrero de 1994, Cheshire, Reino Unido), es hijo de Des Styles y Anne Cox, y hermano menor de Gemma Styles. Sus padres se divorciaron cuando él tenía solo siete años y su madre ha comentado que siempre lo ha apoyado en todo.",
        mainBoxName: "box__container--areaMain",
        mainBoxNameOne: "box__one1I--main",
        mainBoxNameTwo: "box__two1I--main",
        sectionMemberImparImage: "section__container--members",
        sectionMemberImparText: "section__container--bothMembers section__container--membersChild"
    },
    {
        id: 2,
        image: "https://firebasestorage.googleapis.com/v0/b/reactpersonalspotifyapp.appspot.com/o/NiallHoranFourImage.jpg?alt=media&token=489828df-0dae-4202-915e-e587a675e20e",
        biography: "Niall James Horan (n. 13 de septiembre de 1993, Mullingar, Irlanda) es hijo de Bobby Horan y Maura Gallagher, y hermano Greg Horan. Al sus padres divorciarse, Niall y su hermano debieron vivir con ambos durante un tiempo. Luego, decidieron mudarse definitivamente con su padre. En su infancia, estudió en la escuela primaria St Kenny National School, y en su adolescencia en la escuela católica Coláiste Mhuire.",
        mainBoxName: "box__container--areaMain",
        mainBoxNameOne: "box__one2I--main",
        mainBoxNameTwo: "box__two2I--main",
        sectionMemberParImage: "section__container--members2",
        sectionMemberParText: "section__container--bothMembers section__container--membersChild2"
    },
    {
        id: 3,
        image: "https://firebasestorage.googleapis.com/v0/b/reactpersonalspotifyapp.appspot.com/o/ZaynWikiFiveImage.jpg?alt=media&token=fecc9f2b-7c30-460f-a0b3-e24aea32401e",
        biography: "Zain Javadd «Zayn» Malik (n. 12 de enero de 1993, Bradford, Reino Unido) es hijo de Yaser Malik y Tricia Brannan, y tiene dos hermanas menores, Waliyha Malik y Safaa Malik, además de una hermana mayor llamada Doniya Malik. Creció en el área de East Bowling, al sur de Bradford, y estudió en laFields Primary School y la Tong High School.",
        mainBoxName: "box__container--areaMain",
        mainBoxNameOne: "box__one3I--main",
        mainBoxNameTwo: "box__two3I--main",
        sectionMemberImparImage: "section__container--members",
        sectionMemberImparText: "section__container--bothMembers section__container--membersChild"
    },
    {
        id: 4,
        image: "https://firebasestorage.googleapis.com/v0/b/reactpersonalspotifyapp.appspot.com/o/LiamPayneSixImage.png?alt=media&token=9f6591cf-f163-40c8-af29-aade494e3967",
        biography: "Liam James Payne (n. 29 de agosto de 1993, Wolverhampton, Reino Unido) es hijo de Geoff Payne y Karen Payne, y hermano menor de Ruth Payne y Nicola Payne.Cuando nació, presentó muchos problemas de salud que los doctores no pudieron averiguar hasta tres semanas después de su nacimiento. Los doctores descubrieron que la causa del mal funcionamiento de su organismo es que solo uno de sus riñones funcionaba correctamente y para mantenerlo con vida debían colocarle treinta y dos inyecciones en el brazo durante el día y la noche.",
        mainBoxName: "box__container--areaMain",
        mainBoxNameOne: "box__one4I--main",
        mainBoxNameTwo: "box__two4I--main",
        sectionMemberParImage: "section__container--members2",
        sectionMemberParText: "section__container--bothMembers section__container--membersChild2"
    },
    {
        id: 5,
        image: "https://firebasestorage.googleapis.com/v0/b/reactpersonalspotifyapp.appspot.com/o/LouisTomlinsonThreeImage.webp?alt=media&token=85e80db9-805c-45ca-9d72-f7a6e7a55a15",
        biography: "Louis William Tomlinson (n. como Louis Troy Austin el 24 de diciembre de 1991, Doncaster, Reino Unido) es hijo de Troy Austin y Johannah Poulston, y hermano mayor de Lottie, Felicite, Phoebe y Daisy. En una entrevista con Daily Record, su madre explicó que se separó de Troy Austin cuando Louis era joven, así que sus cinco hijos adoptaron el apellido de su padrastro Mark Tomlinson.",
        mainBoxName: "box__container--areaMain",
        mainBoxNameOne: "box__one5I--main",
        mainBoxNameTwo: "box__two5I--main",
        sectionMemberImparImage: "section__container--members",
        sectionMemberImparText: "section__container--bothMembers section__container--membersChild"
    }
];

export function Members() {
    return (
        <>
            <main className='container'>
                <h1 className='text-center m-5'>Integrantes De La Banda</h1>
                {
                    membersBiography.map(function(member) {
                        return(
                            <>
                                {
                                    (member.id % 2 !== 0) ?
                                        <section className={member.sectionMemberImparImage}>
                                            <figure className={member.mainBoxName}>
                                                <div className={member.mainBoxNameOne}></div>
                                                <div className={member.mainBoxNameTwo}></div>
                                            </figure>
                                            <p className={member.sectionMemberImparText}>
                                                {member.biography}
                                            </p>
                                        </section>
                                    :
                                        <section className={member.sectionMemberParImage}>
                                            <p className={member.sectionMemberParText}>
                                                {member.biography}
                                            </p>
                                            <figure className={member.mainBoxName}>
                                                <div className={member.mainBoxNameOne}></div>
                                                <div className={member.mainBoxNameTwo}></div>
                                            </figure>
                                        </section>
                                }                   
                            </>
                        )
                    })
                }
            </main>
        </>
    );
}