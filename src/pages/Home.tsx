/** Copie fidèle de la page `/login` de la référence utilisateur — aucune modification de contenu ou de style visible. */
import { FormEvent, useState } from "react";
import { Eye, EyeOff, GraduationCap, KeyRound, LockKeyhole, Mail, MapPin, MonitorDown, School, UserRound } from "lucide-react";

const A = "/assets/";

const workshops = [
  { name: "Atelier de maçonnerie", file: "maconnerie.jpg", position: "workshop workshop--one" },
  { name: "Atelier d'électricité", file: "electricite.jpg", position: "workshop workshop--two" },
  { name: "Atelier de menuiserie", file: "menuiserie.jpg", position: "workshop workshop--three" },
  { name: "Atelier de couture", file: "couture.jpg", position: "workshop workshop--four" },
  { name: "Salle informatique", file: "informatique.jpg", position: "workshop workshop--five" },
  { name: "Préparation culinaire", file: "cuisine.jpg", position: "workshop workshop--six" },
  { name: "Mécanique automobile", file: "mecanique.jpg", position: "workshop workshop--seven" },
];

export default function Home() {
  const [showPassword, setShowPassword] = useState(false);
  const [identifier, setIdentifier] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const submit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setMessage("La connexion sera reliée au serveur de gestion lors de l’hébergement.");
  };

  return (
    <main className="login-page">
      <div className="login-page__grain" aria-hidden="true" />
      <section className="login-layout" aria-label="Plateforme numérique de gestion">
        <div className="intro-panel">
          <div className="school-lockup">
            <img className="school-lockup__logo" src={`${A}logo.svg`} alt="Blason du Lycée Technique de Tibati" />
            <div>
              <h1>Lycée Technique de Tibati</h1>
              <p>PLATEFORME NUMÉRIQUE DE GESTION</p>
            </div>
          </div>

          <div className="intro-panel__copy">
            <p className="intro-panel__title">Excellence académique &amp;<br />technique au cœur du Cameroun</p>
            <p className="intro-panel__description">Une plateforme unique pour l’administration, les enseignants, les élèves et les parents — suivi pédagogique, emplois du temps, bulletins et communication, réunis en un seul espace sécurisé.</p>
          </div>

          <div className="audiences" aria-label="Publics concernés">
            <p><span className="audience-icon"><GraduationCap size={13} /></span>Espace Élèves — bulletins, emploi du temps</p>
            <p><span className="audience-icon"><School size={12} /></span>Espace Parents — suivi de la scolarité</p>
            <p><span className="audience-icon"><KeyRound size={12} /></span>Espace Enseignants — saisie des notes</p>
          </div>
        </div>

        <div className="form-panel">
          <div className="form-panel__inner">
            <div className="form-heading">
              <h2>Connexion</h2>
              <p>Accédez à votre espace personnel.</p>
            </div>
            <form onSubmit={submit}>
              <label htmlFor="identifier">Identifiant</label>
              <div className="field-wrap">
                <UserRound size={16} aria-hidden="true" />
                <input id="identifier" name="identifier" type="text" value={identifier} onChange={(event) => setIdentifier(event.target.value)} autoComplete="username" required />
              </div>

              <label htmlFor="password">Mot de passe</label>
              <div className="field-wrap">
                <LockKeyhole size={16} aria-hidden="true" />
                <input id="password" name="password" type={showPassword ? "text" : "password"} value={password} onChange={(event) => setPassword(event.target.value)} autoComplete="current-password" required />
                <button className="password-toggle" type="button" onClick={() => setShowPassword((visible) => !visible)} aria-label={showPassword ? "Masquer le mot de passe" : "Afficher le mot de passe"}>
                  {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
                </button>
              </div>

              <div className="form-options">
                <a href="mailto:lttibati@gmail.com?subject=Mot%20de%20passe%20oublié">Mot de passe oublié ?</a>
              </div>
              <button className="login-button" type="submit"><LockKeyhole size={14} /> Se connecter</button>
              <button className="install-button" type="button" onClick={() => setMessage("L’installation de l’application sera disponible sur votre appareil.")}><MonitorDown size={14} /> Installer l’application</button>
              {message && <p className="form-message" role="status">{message}</p>}
            </form>
          </div>
        </div>
      </section>

      <div className="workshop-orbit" aria-label="Ateliers et formations">
        <div className="orbit-ring orbit-ring--one" aria-hidden="true" />
        <div className="orbit-ring orbit-ring--two" aria-hidden="true" />
        <img className="central-logo" src={`${A}logo.png`} alt="Blason du Lycée Technique de Tibati" />
        {workshops.map((workshop) => <img key={workshop.file} className={workshop.position} src={`${A}${workshop.file}`} alt={workshop.name} />)}
      </div>

      <footer className="site-footer">
        <span><MapPin size={11} /> BP 105, Tibati, Adamaoua — Cameroun</span>
        <span><KeyRound size={11} /> Matricule : 2CE1TEFD110320092</span>
        <a href="mailto:lttibati@gmail.com"><Mail size={11} /> lttibati@gmail.com</a>
      </footer>
      <p className="copyright">© 2026 Lycée Technique de Tibati — Plateforme numérique de gestion</p>
      <div className="made-with"><span>✥</span> Made with Manus</div>
    </main>
  );
}
