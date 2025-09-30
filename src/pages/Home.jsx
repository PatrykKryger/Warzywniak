import React, { useState, useEffect } from "react";

const produkty = [
    { nazwa: "Ogórek", cena: "3.50 zł/kg", img: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=300&q=80" },
    { nazwa: "Pomidor", cena: "4.00 zł/kg", img: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=300&q=80" },
    { nazwa: "Ziemniak", cena: "2.50 zł/kg", img: "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=300&q=80" },
    { nazwa: "Sałata", cena: "3.00 zł/szt.", img: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=300&q=80" },
    { nazwa: "Marchew", cena: "2.00 zł/kg", img: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=300&q=80" },
    { nazwa: "Cebula", cena: "1.50 zł/kg", img: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=300&q=80" },
];

const ciekawostki = [
    "Banany są jagodami, a truskawki nie są.",
    "Jabłka unoszą się na wodzie, bo w 25% składają się z powietrza.",
    "Arbuz składa się w ponad 90% z wody.",
    "Marchewki były kiedyś fioletowe.",
    "Ananas rośnie na ziemi, nie na drzewie.",
];

export default function Home() {
    const [startIdx, setStartIdx] = useState(0);
    const [ciekawostkaIdx, setCiekawostkaIdx] = useState(0);

    const visibleItems = window.innerWidth > 1024 ? 3 : window.innerWidth > 768 ? 2 : 1;

    const next = () => setStartIdx((startIdx + visibleItems) % produkty.length);
    const prev = () => setStartIdx((startIdx - visibleItems + produkty.length) % produkty.length);

    useEffect(() => {
        const interval = setInterval(() => {
            setCiekawostkaIdx((idx) => (idx + 1) % ciekawostki.length);
        }, 10000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="home-root">
            <header className="header">
                <h1>Witaj w sklepie Warzywex</h1>
            </header>

            <section className="wyprzedaz">
                <h2 className="wyprzedaz-title">Wyprzedaż</h2>
                <div className="wyprzedaz-okienka">
                    {produkty.slice(startIdx, startIdx + visibleItems).map((produkt, index) => (
                        <div key={index} className="okienko">
                            <img src={produkt.img} alt={produkt.nazwa} className="okienko-img" />
                            <div className="okienko-info">
                                <h3>{produkt.nazwa}</h3>
                                <p>{produkt.cena}</p>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="wyprzedaz-nawigacja">
                    <button onClick={prev}>&#8592;</button>
                    <button onClick={next}>&#8594;</button>
                </div>
            </section>

            <section className="ciekawostki">
                <h2>Ciekawostki o owocach i warzywach</h2>
                <div className="ciekawostka fade-in-out">
                    <p>{ciekawostki[ciekawostkaIdx]}</p>
                </div>
            </section>

            <section className="mapa">
                <h2>Znajdź nas</h2>
                <iframe
                    title="Mapa"
                    src="https://www.google.com/maps/embed?pb=..."
                    width="100%"
                    height="300"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                ></iframe>
                <button
                    onClick={() => window.open("https://www.google.com/maps/dir/?api=1&destination=Federation+Square", "_blank")}
                    className="mapa-button"
                >
                    Pokaż trasę
                </button>
            </section>

            <style>{`
                @import url('https://fonts.googleapis.com/css2?family=Futura:wght@400;700&display=swap');

                .home-root {
                    font-family: 'Futura', sans-serif;
                    background: linear-gradient(180deg, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1920&q=80');
                    background-size: cover;
                    background-position: center;
                    color: #333;
                    padding: 0;
                    margin: 0;
                    min-height: 100vh;
                }

                .header {
                    text-align: center;
                    padding: 50px 20px;
                    background: rgba(23, 77, 60, 0.8);
                    color: #fff;
                }

                .header h1 {
                    font-size: 3rem;
                    margin: 0;
                }

                .wyprzedaz-title {
                    font-size: 2.5rem;
                    color: #333;
                    margin-bottom: 30px;
                }

                .wyprzedaz-okienka {
                    display: flex;
                    justify-content: center;
                    gap: 20px;
                    margin-bottom: 20px;
                }

                .okienko {
                    background: #fff;
                    border-radius: 15px;
                    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
                    overflow: hidden;
                    transition: transform 0.3s ease, box-shadow 0.3s ease;
                    width: 300px;
                }

                .okienko:hover {
                    transform: translateY(-10px);
                    box-shadow: 0 8px 30px rgba(0, 0, 0, 0.2);
                }

                .okienko-img {
                    width: 100%;
                    height: 200px;
                    object-fit: cover;
                }

                .okienko-info {
                    padding: 15px;
                }

                .okienko-info h3 {
                    font-size: 1.5rem;
                    color: #174d3c;
                    margin: 0;
                }

                .okienko-info p {
                    font-size: 1.2rem;
                    color: #555;
                    margin: 5px 0 0;
                }

                .wyprzedaz-nawigacja {
                    display: flex;
                    justify-content: center;
                    gap: 20px;
                    margin-top: 20px;
                }

                .wyprzedaz-nawigacja button {
                    background: #174d3c;
                    color: #fff;
                    border: none;
                    padding: 10px 20px;
                    font-size: 1.2rem;
                    border-radius: 5px;
                    cursor: pointer;
                    transition: background 0.3s ease;
                }

                .wyprzedaz-nawigacja button:hover {
                    background: #48b170;
                }

                .ciekawostki {
                    text-align: center;
                    padding: 50px 20px;
                    background: #fff;
                }

                .ciekawostki h2 {
                    font-size: 2rem;
                    color: #174d3c;
                    margin-bottom: 20px;
                }

                .ciekawostka {
                    font-size: 1.5rem;
                    color: #555;
                    background: #f8faf7;
                    padding: 20px;
                    border-radius: 10px;
                    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
                    display: inline-block;
                    animation: fadeInOut 10s infinite;
                }

                @keyframes fadeInOut {
                    0%, 90% {
                        opacity: 1;
                    }
                    95%, 100% {
                        opacity: 0;
                    }
                }

                .mapa {
                    text-align: center;
                    padding: 50px 20px;
                    background: #eaeaea;
                }

                .mapa h2 {
                    font-size: 2rem;
                    color: #174d3c;
                    margin-bottom: 20px;
                }

                .mapa-button {
                    margin-top: 20px;
                    background: #174d3c;
                    color: #fff;
                    border: none;
                    padding: 10px 20px;
                    font-size: 1rem;
                    border-radius: 5px;
                    cursor: pointer;
                    transition: background 0.3s ease;
                }

                .mapa-button:hover {
                    background: #48b170;
                }
            `}</style>
        </div>
    );
}