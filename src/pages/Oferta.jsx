import React, { useState } from "react";

const styles = {
    table: {
        width: "100%",
        borderCollapse: "collapse",
        margin: "20px 0",
        fontFamily: "Arial, sans-serif",
    },
    th: {
        backgroundColor: "rgba(39,46,174,0.38)",
        color: "white",
        padding: "10px",
        border: "1px solid #ddd",
    },
    td: {
        padding: "10px",
        border: "1px solid #ddd",
        textAlign: "center",
    },
    search: {
        marginBottom: "20px",
        padding: "10px",
        width: "100%",
        border: "1px solid #ddd",
        borderRadius: "4px",
    },
};

const warzywa = [
    { nazwa: "Ogórek", opis: "Świeży, chrupiący ogórek.", witaminy: "A, C, K", cena: "3.50 zł/kg", dostepnosc: "Dostępny" },
    { nazwa: "Pomidor", opis: "Soczysty pomidor malinowy.", witaminy: "C, K, B6", cena: "4.00 zł/kg", dostepnosc: "Dostępny" },
    { nazwa: "Ziemniak", opis: "Mączysty ziemniak idealny na puree.", witaminy: "C, B6", cena: "2.50 zł/kg", dostepnosc: "Dostępny" },
    { nazwa: "Sałata", opis: "Delikatna sałata masłowa.", witaminy: "A, C, K", cena: "3.00 zł/szt.", dostepnosc: "Dostępny" },
    { nazwa: "Marchew", opis: "Słodka marchewka prosto z pola.", witaminy: "A, C, K", cena: "2.00 zł/kg", dostepnosc: "Dostępny" },
    { nazwa: "Cebula", opis: "Aromatyczna cebula żółta.", witaminy: "C, B6", cena: "1.50 zł/kg", dostepnosc: "Dostępny" },
    { nazwa: "Papryka", opis: "Czerwona papryka bogata w witaminę C.", witaminy: "A, C, E", cena: "5.00 zł/kg", dostepnosc: "Dostępny" },
    { nazwa: "Brokuł", opis: "Zielony brokuł pełen witamin.", witaminy: "C, K, B9", cena: "4.50 zł/szt.", dostepnosc: "Dostępny" },
    { nazwa: "Kalafior", opis: "Delikatny kalafior.", witaminy: "C, K, B6", cena: "4.00 zł/szt.", dostepnosc: "Dostępny" },
    { nazwa: "Por", opis: "Aromatyczny por.", witaminy: "A, C, K", cena: "3.00 zł/szt.", dostepnosc: "Dostępny" },
    { nazwa: "Rzodkiewka", opis: "Chrupiąca rzodkiewka.", witaminy: "C, K", cena: "2.50 zł/pęczek", dostepnosc: "Dostępny" },
    { nazwa: "Szpinak", opis: "Świeży szpinak.", witaminy: "A, C, K", cena: "3.50 zł/pęczek", dostepnosc: "Dostępny" },
    { nazwa: "Cukinia", opis: "Delikatna cukinia.", witaminy: "A, C, K", cena: "4.00 zł/kg", dostepnosc: "Dostępny" },
    { nazwa: "Burak", opis: "Słodki burak ćwikłowy.", witaminy: "A, C, K", cena: "2.50 zł/kg", dostepnosc: "Dostępny" },
    { nazwa: "Kapusta", opis: "Biała kapusta.", witaminy: "C, K, B6", cena: "3.00 zł/szt.", dostepnosc: "Dostępny" },
    { nazwa: "Fasola", opis: "Świeża fasola szparagowa.", witaminy: "A, C, K", cena: "6.00 zł/kg", dostepnosc: "Dostępny" },
    { nazwa: "Dynia", opis: "Słodka dynia hokkaido.", witaminy: "A, C, E", cena: "5.00 zł/kg", dostepnosc: "Dostępny" },
    { nazwa: "Kalarepa", opis: "Chrupiąca kalarepa.", witaminy: "C, K, B6", cena: "3.50 zł/szt.", dostepnosc: "Dostępny" },
    { nazwa: "Brukselka", opis: "Mała brukselka.", witaminy: "C, K, B9", cena: "4.50 zł/kg", dostepnosc: "Dostępny" },
];

function Oferta() {
    const [search, setSearch] = useState("");

    const filteredWarzywa = warzywa.filter((warzywo) =>
        warzywo.nazwa.toLowerCase().includes(search.toLowerCase())
    );

    return (
        <div>
            <h1>Nasza Oferta</h1>
            <input
                type="text"
                placeholder="Wyszukaj warzywo..."
                style={styles.search}
                value={search}
                onChange={(e) => setSearch(e.target.value)}
            />
            <table style={styles.table}>
                <thead>
                <tr>
                    <th style={styles.th}>Nazwa</th>
                    <th style={styles.th}>Opis</th>
                    <th style={styles.th}>Witaminy</th>
                    <th style={styles.th}>Cena</th>
                    <th style={styles.th}>Dostępność</th>
                </tr>
                </thead>
                <tbody>
                {filteredWarzywa.map((warzywo, index) => (
                    <tr key={index}>
                        <td style={styles.td}>{warzywo.nazwa}</td>
                        <td style={styles.td}>{warzywo.opis}</td>
                        <td style={styles.td}>{warzywo.witaminy}</td>
                        <td style={styles.td}>{warzywo.cena}</td>
                        <td style={styles.td}>{warzywo.dostepnosc}</td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    );
}

export default Oferta;