import { useEffect, useState } from "react";
import axios from "axios";
import Header from "../header/header";
import Item from "../item/item";
import "./main.css"
const Main = ()=> {
    const [oldSchool, setOldSchool] = useState([]);
    const [bestSeller, setBestSeller] = useState([]);
    useEffect(()=> {
        axios.get('http://localhost:1337/api/old-schools?populate=*').then((oldSchool)=> {
            setOldSchool(oldSchool.data.data)
        }).catch(()=> {

        }).finally(()=> {

        });
        axios.get('http://localhost:1337/api/best-sellers?populate=*').then((bestSeller)=> {
            setBestSeller(bestSeller.data.data)
        }).catch(()=> {

        }).finally(()=> {

        });
    }, [])
    return (
        <>
            <Header/>
            <section className="content">
                <article className="game1">Best Sellers</article>
                {bestSeller.map((item, key)=> {
                    return <Item item={item.attributes} />
                })}
                <article className="game2">Old School</article>
                {oldSchool.map((item, key)=> {
                    return <Item item={item.attributes}/>
                })}
            </section>
        </>
    )
}
export default Main