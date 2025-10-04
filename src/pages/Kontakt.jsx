const styles = {
    container: {
        padding: "20px",
        fontFamily: "Arial, sans-serif",
        lineHeight: "1.6",
        backgroundColor: "#f9f9f9",
        borderRadius: "8px",
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
        maxWidth: "600px",
        margin: "40px auto",
    },
    heading: {
        color: "#2c3e50",
        textAlign: "center",
        marginBottom: "20px",
    },
    paragraph: {
        margin: "10px 0",
        color: "#34495e",
    },
    highlight: {
        fontWeight: "bold",
        color: "#27ae60",
    },
};

function Kontakt() {
    return (
        <div style={styles.container}>
            <h1 style={styles.heading}>Skontaktuj się z nami!</h1>
            <p style={styles.paragraph}>
                Jesteśmy dumni, że możemy dostarczać Państwu najświeższe i najwyższej jakości warzywa.
                Jeśli mają Państwo jakiekolwiek pytania, sugestie lub chcą nawiązać współpracę, prosimy o kontakt.
            </p>
            <p style={styles.paragraph}>
                <span style={styles.highlight}>📍 Adres:</span> Zielona 12, 00-000 Warszawa
            </p>
            <p style={styles.paragraph}>
                <span style={styles.highlight}>📞 Telefon:</span> 123 456 789
            </p>
            <p style={styles.paragraph}>
                <span style={styles.highlight}>📧 Email:</span> kontakt@warzywniak.pl
            </p>
            <p style={styles.paragraph}>
                <span style={styles.highlight}>👤 Osoba kontaktowa:</span> Patryk Kryger, Król Zielonej Gorczycy
            </p>
            <p style={styles.paragraph}>
                Dziękujemy za zaufanie i zapraszamy do kontaktu. Razem możemy stworzyć coś wyjątkowego!
            </p>
        </div>
    );
}

export default Kontakt;